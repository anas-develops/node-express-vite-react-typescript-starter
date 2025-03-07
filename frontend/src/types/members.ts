export type Member = {
    id: string;
    UniqueCode: string;
    FirstName: string;
    LastName: string;
    Title: string;
    Company: string;
    DefaultCitySelection: string[];
};

export type GetMemberDetailsResponse = {
    id: string;
    createdTime: string;
    fields: Member;
};
