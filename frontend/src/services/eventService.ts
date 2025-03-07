import appConfig from "../config/appConfig";
import {
    EligibleEventsForMemberResponse,
    EventRsvpStatus,
    GetEventAttendeesResponse,
    GetEventFiltersResponse,
    GetEventOptInQuestionsResponse,
    OptInQuestion,
    OptInQuestionAnswers,
} from "../types/events";

export const getEligibleEventsForMember = async ({
    memberId,
    offset,
    rsvpStatus,
    location,
    category,
    signal,
}: {
    memberId: string;
    offset?: string | false;
    rsvpStatus?: string[];
    location: string[];
    category: string[];
    signal: AbortSignal;
}): Promise<EligibleEventsForMemberResponse> => {
    let url = `${appConfig.app.apiBaseUrl}/api/events/events-with-rsvps?userId=${memberId}`;

    if (offset) {
        url += `&offset=${offset}`;
    }

    if (rsvpStatus) {
        rsvpStatus.forEach((status) => (url += `&rsvpStatus[]=${status}`));
    }

    if (location) {
        url += `&location=${location}`;
    }

    if (category) {
        url += `&category=${category}`;
    }

    const data = await fetch(url, {
        signal,
    });

    return data.json();
};

export const getEventFilters = async (): Promise<GetEventFiltersResponse> => {
    let url = `${appConfig.app.apiBaseUrl}/api/events/member-filters`;
    const data = await fetch(url);
    return data.json();
};

export const getEventAttendees = async ({
    eventId,
    offset,
}: {
    eventId: string;
    offset?: string;
}): Promise<GetEventAttendeesResponse> => {
    let url = `${appConfig.app.apiBaseUrl}/api/events/attendees/${eventId}`;

    let urlParams = [];

    if (offset) {
        urlParams.push(`offset=${offset}`);
    }

    url += `?${urlParams.join("&")}`;

    const data = await fetch(url);
    return data.json();
};

export const markRsvp = async ({
    eventId,
    memberId,
    rsvpStatus,
    noReasons,
    optInQuestionAnswers,
    rsvpOptInQuestions,
}: {
    eventId: string;
    memberId: string;
    rsvpStatus: EventRsvpStatus;
    noReasons?: string[];
    rsvpOptInQuestions?: OptInQuestion[] | null;
    optInQuestionAnswers?: OptInQuestionAnswers;
}): Promise<any> => {
    const url = `${appConfig.app.apiBaseUrl}/api/events/mark-rsvp/${eventId}`;

    try {
        const data = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                memberId,
                rsvpStatus,
                ...(rsvpStatus === EventRsvpStatus.NO &&
                    noReasons?.length && { noReasons }),
                ...([
                    EventRsvpStatus.YES,
                    EventRsvpStatus.WAITLISTED,
                    EventRsvpStatus.INVITE_REQUESTED,
                ].includes(rsvpStatus) && {
                    optInQuestionAnswers,
                    rsvpOptInQuestions,
                }),
            }),
        });
        return data.json();
    } catch (err) {
        throw err;
    }
};

export const getEventOptInQuestions = async ({
    eventId,
}: {
    eventId: string;
}): Promise<GetEventOptInQuestionsResponse> => {
    let url = `${appConfig.app.apiBaseUrl}/api/events/event-opt-in-questions/${eventId}`;

    const data = await fetch(url);
    return data.json();
};