type FieldDetails = {
    id: string;
    name: string;
};

type AppConfig = {
    airtable: {
        apiKey: string;
        baseId: string;
        tables: {
            CalendarSyncedToInvites: {
                tableName: string;
                tableId: string;
                viewId?: string;
                fields: {
                    EventRecordID: FieldDetails;
                    EventName: FieldDetails;
                    EligibleInviteesNoGeo: FieldDetails;
                    EligibleInviteesUniqueCode: FieldDetails;
                    AttendeeLists: FieldDetails;
                    CategoryForPortal: FieldDetails;
                    CalendarSlot: FieldDetails;
                    RsvpRejectionReasons: FieldDetails;
                    DetailLinkForPortal: FieldDetails;
                    Location: FieldDetails;
                    LocalEventCity: FieldDetails;
                    IncludeInPortal: FieldDetails;
                    EventOrganizerContact: FieldDetails;
                    Topic: FieldDetails;
                    ManuallyHeldMembers: FieldDetails;
                    ShowInPortal: FieldDetails;
                    AttendeeListNamesWithTitle: FieldDetails;
                    AttendeeListForPortal: FieldDetails;
                    OptInQuestion: FieldDetails;
                    OptInQuestionsText: FieldDetails;
                    OptInAnswerChoicesText: FieldDetails;
                    OptInQuestionsType: FieldDetails;
                    OptInQuestionsRequired: FieldDetails;
                };
            };
            RSVPTracker: {
                tableName: string;
                tableId: string;
                fields: {
                    EventID: FieldDetails;
                    EventRecord: FieldDetails;
                    MemberCode: FieldDetails;
                    MemberRecord: FieldDetails;
                    EventMemberRecordID: FieldDetails;
                    RSVPStatus: FieldDetails;
                    RSVPDate: FieldDetails;
                    Created: FieldDetails;
                    Source: FieldDetails;
                    NoReasons: FieldDetails;
                    OptInAnswers: FieldDetails;
                };
            };
            SplashRSVPTracker: {
                tableName: string;
                tableId: string;
                viewId: string;
                fields: {
                    EventRecordID: FieldDetails;
                    MemberRecord: FieldDetails;
                    MemberRecordID: FieldDetails;
                    EventMemberRecordID: FieldDetails;
                    RSVPStatus: FieldDetails;
                    RSVPDate: FieldDetails;
                    Updated: FieldDetails;
                    MemberName: FieldDetails;
                    MemberTitle: FieldDetails;
                    MemberCompany: FieldDetails;
                    MemberUniqueCode: FieldDetails;
                };
            };
            Members: {
                tableName: string;
                tableId: string;
                fields: {
                    UniqueCode: FieldDetails;
                    FirstName: FieldDetails;
                    LastName: FieldDetails;
                    Title: FieldDetails;
                    Company: FieldDetails;
                    UniqueCodeForPortal: FieldDetails;
                    DefaultCitySelection: FieldDetails;
                };
            };
            OptInQuestions: {
                tableName: string;
                tableId: string;
                viewId?: string;
                fields: {
                    Name: FieldDetails;
                    Type: FieldDetails;
                    AnswerChoices: FieldDetails;
                };
                customConstants: {
                    AnswerChoicesPerQuestionDelimiter: string;
                };
            };
        };
    };
    app: {
        port: number;
    };
};

export default {
    airtable: {
        apiKey: process.env.AIRTABLE_API_KEY || "",
        baseId: process.env.AIRTABLE_BASE_ID || "",
        tables: {
            CalendarSyncedToInvites: {
                tableName: (
                    process.env
                        .AIRTABLE_TABLE_CALENDAR_SYNCED_TO_INVITES_NAME || ""
                ).replace(/"/g, ""),
                tableId: (
                    process.env.AIRTABLE_TABLE_CALENDAR_SYNCED_TO_INVITES_ID ||
                    ""
                ).replace(/"/g, ""),
                viewId: (
                    process.env.AIRTABLE_VIEW_CALENDAR_SYNCED_TO_INVITES_ID ||
                    ""
                ).replace(/"/g, ""),
                fields: {
                    EventRecordID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_RECORD_ID_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_RECORD_ID_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EventName: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_NAME_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_NAME_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EligibleInviteesNoGeo: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ELIGIBLE_INVITEES_NO_GEO_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ELIGIBLE_INVITEES_NO_GEO_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EligibleInviteesUniqueCode: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ELIGIBLE_INVITEES_UNIQUE_CODE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ELIGIBLE_INVITEES_UNIQUE_CODE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    AttendeeLists: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LISTS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LISTS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    AttendeeListForPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LIST_FOR_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LIST_FOR_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    CategoryForPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_CATEGORY_FOR_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_CATEGORY_FOR_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    CalendarSlot: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_CALENDAR_SLOT_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_CALENDAR_SLOT_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    RsvpRejectionReasons: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_RSVP_REJECTION_REASONS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_RSVP_REJECTION_REASONS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    DetailLinkForPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_DETAIL_LINK_FOR_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_DETAIL_LINK_FOR_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    Location: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_LOCATION_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_LOCATION_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    LocalEventCity: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_LOCAL_EVENT_CITY_NAME_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_LOCAL_EVENT_CTTY_NAME_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    IncludeInPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_INCLUDE_IN_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_INCLUDE_IN_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EventOrganizerContact: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_ORGANIZER_CONTACT_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_EVENT_ORGANIZER_CONTACT_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    Topic: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_TOPIC_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_TOPIC_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    ManuallyHeldMembers: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_MANUALLY_HELD_MEMBERS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_MANUALLY_HELD_MEMBERS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    ShowInPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_SHOW_IN_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_SHOW_IN_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    AttendeeListNamesWithTitle: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LIST_NAMES_WITH_TITLE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_ATTENDEE_LIST_NAMES_WITH_TITLE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInQuestion: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTION_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTION_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInQuestionsText: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_TEXT_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_TEXT_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInAnswerChoicesText: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_ANSWER_CHOICES_TEXT_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_ANSWER_CHOICES_TEXT_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInQuestionsType: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_TYPE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_TYPE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInQuestionsRequired: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_REQUIRED_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_CALENDAR_SYNCED_TO_INVITES_OPT_IN_QUESTIONS_REQUIRED_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                },
            },
            RSVPTracker: {
                tableName: (
                    process.env.AIRTABLE_TABLE_RSVP_TRACKER_NAME || ""
                ).replace(/"/g, ""),
                tableId: (
                    process.env.AIRTABLE_TABLE_RSVP_TRACKER_ID || ""
                ).replace(/"/g, ""),
                fields: {
                    EventID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_ID_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_ID_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    EventRecord: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_RECORD_ID_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_RECORD_ID_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberCode: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_MEMBER_CODE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_MEMBER_CODE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberRecord: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_MEMBER_RECORD_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_MEMBER_RECORD_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EventMemberRecordID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_MEMBER_RECORD_ID_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_EVENT_MEMBER_RECORD_ID_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    RSVPStatus: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_RSVP_STATUS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_RSVP_STATUS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    RSVPDate: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_RSVP_DATE_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_RSVP_DATE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    Created: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_CREATED_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_CREATED_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    Source: {
                        id: (
                            process.env.AIRTABLE_FIELD_RSVP_TRACKER_SOURCE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_SOURCE_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    NoReasons: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_NO_REASONS_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_NO_REASONS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    OptInAnswers: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_OPT_IN_ANSWERS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_RSVP_TRACKER_OPT_IN_ANSWERS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                },
            },
            SplashRSVPTracker: {
                tableName: (
                    process.env.AIRTABLE_TABLE_SPLASH_RSVP_TRACKER_NAME || ""
                ).replace(/"/g, ""),
                tableId: (
                    process.env.AIRTABLE_TABLE_SPLASH_RSVP_TRACKER_ID || ""
                ).replace(/"/g, ""),
                viewId: (
                    process.env.AIRTABLE_VIEW_SPLASH_RSVP_TRACKER_ID || ""
                ).replace(/"/g, ""),
                fields: {
                    EventRecordID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_EVENT_RECORD_ID_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_EVENT_RECORD_ID_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberRecord: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_RECORD_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_RECORD_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberRecordID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_RECORD_ID_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_RECORD_ID_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    EventMemberRecordID: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_EVENT_MEMBER_RECORD_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_EVENT_MEMBER_RECORD_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    RSVPStatus: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_RSVP_STATUS_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_RSVP_STATUS_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    RSVPDate: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_RSVP_DATE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_RSVP_DATE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    Updated: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_UPDATED_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_UPDATED_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberName: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_NAME_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_NAME_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberTitle: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_TITLE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_TITLE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberCompany: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_COMPANY_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_COMPANY_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    MemberUniqueCode: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_UNIQUE_CODE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_SPLASH_RSVP_TRACKER_MEMBER_UNIQUE_CODE_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                },
            },
            Members: {
                tableName: (
                    process.env.AIRTABLE_TABLE_MEMBERS_NAME || ""
                ).replace(/"/g, ""),
                tableId: (process.env.AIRTABLE_TABLE_MEMBERS_ID || "").replace(
                    /"/g,
                    ""
                ),
                fields: {
                    UniqueCode: {
                        id: (
                            process.env.AIRTABLE_FIELD_MEMBERS_UNIQUE_CODE_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_UNIQUE_CODE_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    FirstName: {
                        id: (
                            process.env.AIRTABLE_FIELD_MEMBERS_FIRST_NAME_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_FIRST_NAME_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    LastName: {
                        id: (
                            process.env.AIRTABLE_FIELD_MEMBERS_LAST_NAME_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env.AIRTABLE_FIELD_MEMBERS_LAST_NAME_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    Title: {
                        id: (
                            process.env.AIRTABLE_FIELD_MEMBERS_TITLE_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env.AIRTABLE_FIELD_MEMBERS_TITLE_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    Company: {
                        id: (
                            process.env.AIRTABLE_FIELD_MEMBERS_COMPANY_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env.AIRTABLE_FIELD_MEMBERS_COMPANY_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    UniqueCodeForPortal: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_UNIQUE_CODE_FOR_PORTAL_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_UNIQUE_CODE_FOR_PORTAL_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                    DefaultCitySelection: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_DEFAULT_CITY_SELECTION_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_MEMBERS_DEFAULT_CITY_SELECTION_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                },
            },
            OptInQuestions: {
                tableName: (
                    process.env.AIRTABLE_TABLE_OPT_IN_QUESTIONS_NAME || ""
                ).replace(/"/g, ""),
                tableId: (
                    process.env.AIRTABLE_TABLE_OPT_IN_QUESTIONS_ID || ""
                ).replace(/"/g, ""),
                customConstants: {
                    AnswerChoicesPerQuestionDelimiter: "LAST_CHOICE",
                },
                fields: {
                    Name: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_NAME_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_NAME_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    Type: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_TYPE_ID || ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_TYPE_NAME || ""
                        ).replace(/"/g, ""),
                    },
                    AnswerChoices: {
                        id: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_ANSWER_CHOICES_ID ||
                            ""
                        ).replace(/"/g, ""),
                        name: (
                            process.env
                                .AIRTABLE_FIELD_OPT_IN_QUESTIONS_ANSWER_CHOICES_NAME ||
                            ""
                        ).replace(/"/g, ""),
                    },
                },
            },
        },
    },
    app: {
        port: process.env.PORT || 3000,
    },
} as AppConfig;
