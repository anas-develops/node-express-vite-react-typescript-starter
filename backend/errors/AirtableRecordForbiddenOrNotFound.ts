import { CustomError } from "./CustomError";

export default class AirtableRecordForbiddenOrNotFound extends CustomError {
    private static readonly _statusCode = 403;
    private readonly _code: number;
    private readonly _logging: boolean = true;
    private readonly _context: { [key: string]: any };

    constructor(params?: {
        code?: number;
        message?: string;
        logging?: boolean;
        context?: { [key: string]: any };
    }) {
        const { code, message, logging } = params || {};

        super(
            message ||
                "The requested model either cannot be accessed or does not exist."
        );
        this._code = code || AirtableRecordForbiddenOrNotFound._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Only because we are extending a built in class
        Object.setPrototypeOf(
            this,
            AirtableRecordForbiddenOrNotFound.prototype
        );
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}
