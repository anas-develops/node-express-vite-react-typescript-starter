export type EventRecord = {
    id: string;
    createdTime: string;
    fields: {
        "Name For Portal": string;
        "Calendar Slot": string;
        "Category For Portal": string;
        "Include in Portal": string[];
        "Reason (from No Reasons)": string[];
        "Location for Portal": string;
        "Detail Link For Portal": string;
        "Event Organizer Contact": string;
        "RSVP Tracker"?: {
            "Event ID": string;
            "RSVP Status": EventRsvpStatus;
            "RSVP Date": string;
            "Member Code": string;
            Created: string;
            "Event-Member-RecordID": string;
        };
        "Topic ('23)": string;
        "Manually Held": boolean;
        "Opt In Answer Choices Text": string;
        "Opt In Questions Text": string;
        "Opt In Question": OptInQuestion[];
    };
};

export type EligibleEventsForMemberResponse = {
    records: EventRecord[];
    offset: string | null;
};

export type EventFilter = {
    label: string;
    value: string;
};

export type GetEventFiltersResponse = {
    eventCategories: EventFilter[];
    eventLocations: EventFilter[];
    eventRsvpStatuses: EventFilter[];
};

export type Member = {
    id: string;
    createdTime: string;
    fields: {
        "First Name": string;
        "Last Name": string;
        Title: string;
        Company: string;
    };
};

export type GetEventAttendeesResponse = {
    records: Member[];
    offset: string | null;
};

export type GetEventOptInQuestionsResponse = {
    records: OptInQuestion[];
};

export enum EventRsvpStatus {
    YES = "YES",
    NO = "NO",
    // MAYBE = "MAYBE",
    WAITLISTED = "WAITLISTED",
    INVITE_REQUESTED = "INVITE REQUESTED",
}

export enum EventRsvpOptInQuestionType {
    MULTIPLE_OPTIONS = "Multi Select Question",
    SINGLE_OPTION = "Single Select Question",
    ANSWER_CHOICE = "Answer Choice",
}

export enum EventRsvpOptInQuestionPriorityType {
    OPTIONAL = "Optional Question",
    REQUIRED = "Required Question",
}

export enum IncludeInPortal {
    YES = "Yes",
    NO = "No",
    NO_ANSWER_YET = "No Answer Yet",
    TENTATIVE = "Tentative",
    WAITLIST = "Waitlist",
    DISABLE_CANCELLATION = "Disable Cancellation",
    SHOW_ATTENDEE_LIST = "Show Attendee List",
}

export type OptInQuestion = {
    questionText: string;
    questionType: EventRsvpOptInQuestionType;
    questionPriority: EventRsvpOptInQuestionPriorityType;
    required: boolean;
    possibleAnswers: string[];
};

export type OptInQuestionAnswers = {
    [questionText: string]: string | string[];
};
