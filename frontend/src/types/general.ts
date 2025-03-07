export type AirtableRecord<T> = {
    id: string;
    createdTime: string;
    fields: T;
};
