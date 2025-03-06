import { randomBytes } from "crypto";
import { query } from "express";
import winston from "winston";

const { combine, timestamp, json, printf, label, colorize } = winston.format;
const timestampFormat = "MMM-DD-YYYY HH:mm:ss";

const appVersion = process.env.npm_package_version;
const generateLogId = (): string => randomBytes(16).toString("hex");

enum LogIndentation {
    SM = 2,
    MD = 4,
    LG = 6,
    XL = 8,
}

// Logger for API endpoints
export const httpLogger = winston.createLogger({
    format: combine(
        timestamp({ format: timestampFormat }),
        json(),
        label({ label: appVersion }),
        timestamp({ format: timestampFormat }),
        colorize({ all: true }),
        printf(
            ({
                timestamp,
                level,
                message,
                label,
                ...data
            }: {
                [key: string]: any;
            }) => {
                const response = {
                    level,
                    logId: generateLogId(),
                    timestamp,
                    appInfo: {
                        appVersion,
                        environment: process.env.NODE_ENV,
                        proccessId: process.pid,
                    },
                    message,
                    data: {
                        path: data.request?.url ?? "",
                        method: data.request?.method ?? "",
                        body: data.request?.body ?? "",
                        query: data.request?.query ?? "",
                        response: data.response?.body ?? "",
                        statusCode: data.response?.statusCode ?? "",
                    },
                };

                // return `[${timestamp}] ${data.request?.method ?? ""} ${level} (${label}): ${message}
                // \n body: ${JSON.stringify(data.request?.body, null, LogIndentation.MD)}
                // \n query: ${JSON.stringify(data.request?.query, null, LogIndentation.MD)}
                // \n response: ${JSON.stringify(JSON.parse(data.response?.body), null, LogIndentation.MD)}
                // \n`;

                // indenting logs for better readbility
                return JSON.stringify(response, null, LogIndentation.MD);
            }
        )
    ),
    transports: [new winston.transports.Console()],
});

export const logger = winston.createLogger({
    format: combine(
        label({ label: appVersion }),
        timestamp({ format: timestampFormat }),
        colorize({ all: true }),
        printf(
            ({ level, message, label, timestamp }) =>
                `[${timestamp}] ${level} (${label}): ${message}`
        )
    ),
    transports: [new winston.transports.Console()],
});
