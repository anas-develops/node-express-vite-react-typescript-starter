import Airtable, { FieldSet, Record, Records } from "airtable";
import appConfig from "../config/appConfig";
import AirtablePaginationTimeoutError from "../errors/AirtablePaginationTimeoutError";
import HttpError from "../errors/HttpError";
import AirtableRecordForbiddenOrNotFound from "../errors/AirtableRecordForbiddenOrNotFound";

export type AirtableRecord<T> = {
    id: string;
    createdTime: string;
    fields: T;
};

export type GetAirtableRecordsOptions = {
    pageSize?: number;
    view?: string;
    offset?: string;
    fields?: Array<string>;
    filterByFormula?: string;
    sort?: Array<{ field: string; direction: "asc" | "desc" }>;
};

export const getAirtableRecordById = async (
    tableName: string,
    recordId: string,
    options?: Omit<GetAirtableRecordsOptions, "offset">
): Promise<any> => {
    let url = `https://api.airtable.com/v0/${appConfig.airtable.baseId}/${tableName}/${recordId}`;

    const queryParams: string[] = [];

    if (options && options.fields && options.fields.length) {
        const { fields } = options;
        queryParams.push(fields.map((field) => `fields[]=${field}`).join("&"));
    }

    if (queryParams.length) {
        url += "?" + queryParams.join("&");
    }

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${appConfig.airtable.apiKey}`,
        },
    });

    if (!response.ok) {
        const data = await response.json();

        if (
            data.error &&
            data.error.type &&
            data.error.type === "INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND"
        ) {
            throw new AirtableRecordForbiddenOrNotFound({
                context: {
                    tableName,
                    recordId,
                    options,
                },
                logging: true,
            });
        }

        throw new HttpError({
            code: response.status,
            message: data.error.message,
            context: data,
        });
    }

    const data = await response.json();

    return data;
};

function createSortQuery(
    sortParams: Array<{ field: string; direction: "asc" | "desc" }>
) {
    return sortParams
        .map(
            (sort, index) =>
                `sort%5B${index}%5D%5Bfield%5D=${encodeURIComponent(sort.field)}&sort%5B${index}%5D%5Bdirection%5D=${encodeURIComponent(sort.direction)}`
        )
        .join("&");
}

/**
 * Makes a GET request to the airtable API.
 *
 * @param {string} baseId - The id of the airtable base.
 * @param {string} tableName - The name of the table.
 * @param {Object} options - Options for the request.
 * @param {number} [options.maxRecords=10] - The number of records to return.
 * @param {string} [options.view="Grid view"] - The view to return records from.
 * @returns {Promise<any[]>}
 */
export const getAirtableRecords = async (
    tableName: string,
    options: GetAirtableRecordsOptions = {}
) => {
    const {
        pageSize = 10,
        view,
        offset,
        fields = [],
        filterByFormula = "",
        sort,
    } = options;

    let url = `https://api.airtable.com/v0/${appConfig.airtable.baseId}/${tableName}?pageSize=${pageSize}`;

    const queryParams: string[] = [];

    if (offset) queryParams.push(`offset=${offset}`);
    if (view) queryParams.push(`view=${view}`);
    if (fields.length)
        queryParams.push(...fields.map((field) => `fields[]=${field}`));
    if (filterByFormula) queryParams.push(`filterByFormula=${filterByFormula}`);
    if (sort && sort.length > 0) queryParams.push(createSortQuery(sort));

    if (queryParams.length) {
        url += `&${queryParams.join("&")}`;
    }

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${appConfig.airtable.apiKey}`,
            },
        });

        const data = await response.json();

        if (
            data.error &&
            data.error.type &&
            data.error.type === "LIST_RECORDS_ITERATOR_NOT_AVAILABLE"
        ) {
            throw new AirtablePaginationTimeoutError();
        }

        return data;
    } catch (err) {
        throw err;
    }
};

const airtableService = new Airtable({
    endpointUrl: "https://api.airtable.com",
    apiKey: appConfig.airtable.apiKey,
}).base(appConfig.airtable.baseId);

type SelectParams = {
    fields?: string[];
    filterByFormula?: string;
    maxRecords?: number;
    pageSize?: number;
    sort?: Array<{ field: string; direction: "asc" | "desc" }>;
    view?: string;
    cellFormat?: string;
    timeZone?: string;
    userLocale?: string;
    returnFieldsByFieldId?: boolean;
    recordMetadata?: Array<string>;
};

export const fetchAirtableRows = (
    airtableService: any,
    tableName: string,
    selectParams: SelectParams
): Promise<Record<FieldSet>[]> => {
    const allRecords: Record<FieldSet>[] = [];

    return new Promise((resolve, reject) => {
        airtableService(tableName)
            .select(selectParams)
            .eachPage(
                (records: Records<FieldSet>, fetchNextPage: () => void) => {
                    records.forEach((record: Record<FieldSet>) => {
                        allRecords.push(record);
                    });
                    fetchNextPage();
                },
                (err: any) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }

                    console.log("done::");
                    resolve(allRecords);
                }
            );
    });
};

export const createAirtableRows = (
    tableIdOrName: string,
    data: Pick<Record<FieldSet>, "fields">[]
): Promise<readonly Record<FieldSet>[]> => {
    return new Promise((resolve, reject) => {
        airtableService(tableIdOrName).create(data, function (err, records) {
            if (err) {
                reject(err);
            } else if (records) {
                resolve(records);
            } else {
                return null;
            }
        });
    });
};

export const createOneAirtableRow = (
    tableIdOrName: string,
    data: Pick<Record<FieldSet>, "fields">
): Promise<Record<FieldSet>> => {
    return new Promise((resolve, reject) => {
        createAirtableRows(tableIdOrName, [data])
            .then((records) => (records.length ? resolve(records[0]) : null))
            .catch((err) => reject(err));
    });
};

export const findOneAirtableRecord = async <T>(
    tableName: string,
    options: Omit<GetAirtableRecordsOptions, "pageSize"> = {}
): Promise<AirtableRecord<T> | null> => {
    const records = await getAirtableRecords(tableName, {
        ...options,
        pageSize: 1,
    });

    return records.records ? (records.records[0] as AirtableRecord<T>) : null;
};

export default airtableService;
