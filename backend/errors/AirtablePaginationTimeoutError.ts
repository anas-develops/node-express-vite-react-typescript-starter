import { CustomError } from "./CustomError";

export default class AirtablePaginationTimeoutError extends CustomError {
    private static readonly _statusCode = 400;
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
                "The iterator for this query has expired, please restart the query from the first page."
        );
        this._code = code || AirtablePaginationTimeoutError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, AirtablePaginationTimeoutError.prototype);
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
