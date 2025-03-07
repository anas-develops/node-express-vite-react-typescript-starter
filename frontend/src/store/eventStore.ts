import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
    EventRsvpStatus,
    GetEventFiltersResponse,
    OptInQuestion,
    OptInQuestionAnswers,
} from "../types/events";
import { RefetchOptions } from "@tanstack/react-query";
import { getEventFilters } from "../services/eventService";

interface IEventRsvpRejectionDialog {
    eventToRejectId: string | null;
    rsvpRejectionReasonDialogOpen: boolean;
    rsvpRejectReasons: string[];
    rsvpRejectReasonsSelected: string[];
    setEventToRejectId: (eventId: string) => void;
    setRsvpRejectionReasonDialogOpen: (open: boolean) => void;
    setRsvpRejectionReasons: (reasons: string[]) => void;
    setRsvpRejectionReasonsSelected: (reasons: string[]) => void;
}

export const useEventRsvpRejectionDialogStore =
    create<IEventRsvpRejectionDialog>((set) => ({
        eventToRejectId: null,
        rsvpRejectionReasonDialogOpen: false,
        rsvpRejectReasons: [],
        rsvpRejectReasonsSelected: [],
        setEventToRejectId: (eventId: string) => {
            set({ eventToRejectId: eventId });
        },
        setRsvpRejectionReasonDialogOpen: async (open: boolean) => {
            set({ rsvpRejectionReasonDialogOpen: open });
        },
        setRsvpRejectionReasons: (reasons: string[]) => {
            set({ rsvpRejectReasons: reasons });
        },
        setRsvpRejectionReasonsSelected: (reasons: string[]) => {
            set({ rsvpRejectReasonsSelected: reasons });
        },
    }));

interface IEventFilters {
    eventLocation: string[] | null;
    eventCategory: string[] | null;
    eventRsvpStatus: string[] | null;
    filterOptionsValues: GetEventFiltersResponse;
    setEventLocation: (eventLocation: any, override?: boolean) => void;
    setEventCategory: (eventCategory: any) => void;
    setEventRsvpStatus: (eventRsvpStatus: any) => void;
    fetchEventFilters: () => Promise<GetEventFiltersResponse>;
}

export const useEventFiltersStore = create<IEventFilters>()(
    devtools((set) => ({
        eventCategory: null,
        eventLocation: null,
        eventRsvpStatus: null,
        filterOptionsValues: [],
        setEventCategory: (eventCategory) => {
            set(
                (state) => {
                    const newState = eventCategory;
                    const oldState = state.eventCategory;
                    let updatedCategory = eventCategory;

                    if (
                        newState.includes("") && // 'All' is selected
                        !!oldState &&
                        oldState.length >= 1 && // but previously something else was also selected
                        !oldState.includes("") // and it did not include 'All'
                    ) {
                        updatedCategory =
                            state.filterOptionsValues?.eventCategories.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    } else if (
                        !!oldState &&
                        oldState.includes("") && // Only 'All'
                        oldState.length === 1 && // was selected
                        newState.length > 1 // and now something else is selected in addition to all
                    ) {
                        updatedCategory = newState || []; // remove 'All' and return the rest of the selected options
                    } else if (
                        (!oldState || oldState?.length === 0) && // Nothing was selected
                        newState.includes("") && // Now all was selected
                        newState.length === 1
                    ) {
                        updatedCategory =
                            state.filterOptionsValues?.eventCategories.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventCategories
                                ?.length && // If everything was selected
                        !newState.includes("") // and 'All' is now deselected
                    ) {
                        updatedCategory = [];
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventCategories
                                ?.length && // If everything was selected
                        newState.length < oldState.length
                    ) {
                        updatedCategory =
                            newState.filter(
                                (status: string) => status !== ""
                            ) || [];
                    } else if (
                        !newState.includes("") && // 'All' was not selected
                        newState.length ===
                            state.filterOptionsValues?.eventCategories?.length - // But everything else was selected except 'All'
                                1
                    ) {
                        updatedCategory =
                            state.filterOptionsValues?.eventCategories.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    }

                    // const hasVirtualCategory =
                    //     updatedCategory.includes("Virtual");

                    // const updatedLocation = hasVirtualCategory
                    //     ? [...new Set([...state.eventLocation, "Virtual"])]
                    //     : state.eventLocation.filter(
                    //           (loc) => loc !== "Virtual" && loc !== ""
                    //       );

                    return {
                        // eventLocation: updatedLocation,
                        eventCategory: updatedCategory,
                    };
                },
                false,
                "setEventCategory"
            );
        },
        setEventLocation: (eventLocation, override?) => {
            set(
                (state) => {
                    const newState = eventLocation;
                    const oldState = state.eventLocation;
                    let updatedLocation = eventLocation;

                    if (override) {
                        return {
                            eventLocation,
                        };
                    }

                    if (
                        newState.includes("All") && // 'All' is selected
                        !!oldState &&
                        oldState.length >= 1 && // but previously something else was also selected
                        !oldState.includes("All") // and it did not include 'All'
                    ) {
                        updatedLocation =
                            state.filterOptionsValues?.eventLocations.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    } else if (
                        !!oldState &&
                        oldState.includes("All") && // Only 'All'
                        oldState.length === 1 && // was selected
                        newState.length > 1 // and now something else is selected in addition to all
                    ) {
                        updatedLocation = newState || []; // remove 'All' and return the rest of the selected options
                    } else if (
                        (!oldState || //Nothing was selected
                            oldState?.length === 0) &&
                        newState.includes("All") && // Now All was selected
                        newState.length === 1
                    ) {
                        updatedLocation =
                            state.filterOptionsValues?.eventLocations.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventLocations?.length && // If everything was selected
                        !newState.includes("All") // and 'All' is now deselected
                    ) {
                        updatedLocation = [];
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventLocations?.length && // If everything was selected
                        newState.length < oldState.length
                    ) {
                        updatedLocation =
                            newState.filter(
                                (status: string) => status !== "All"
                            ) || [];
                    } else if (
                        !newState.includes("All") && // 'All' was not selected
                        newState.length ===
                            state.filterOptionsValues?.eventLocations?.length - // But everything else was selected except 'All'
                                1
                    ) {
                        updatedLocation =
                            state.filterOptionsValues?.eventLocations.map(
                                (status) => status.value
                            ) || []; // select every possible value
                    }

                    // const hasVirtualLocation =
                    //     updatedLocation.includes("Virtual");

                    // const updatedCategory = hasVirtualLocation
                    //     ? [...new Set([...state.eventCategory, "Virtual"])]
                    //     : state.eventCategory.filter(
                    //           (cat) => cat !== "Virtual" && cat !== ""
                    //       );

                    return {
                        eventLocation: updatedLocation,
                        // eventCategory: updatedCategory,
                    };
                },
                false,
                "setEventLocation"
            );
        },
        setEventRsvpStatus: (eventRsvpStatus) => {
            set(
                (state) => {
                    let newState = eventRsvpStatus;
                    const oldState = state.eventRsvpStatus;

                    if (
                        !!oldState &&
                        newState.includes("") && // 'All' is selected
                        oldState.length >= 1 && // but previously something else was also selected
                        !oldState.includes("") // and it did not include 'All'
                    ) {
                        return {
                            eventRsvpStatus:
                                state.filterOptionsValues?.eventRsvpStatuses.map(
                                    (status) => status.value
                                ) || [], // select every possible value
                        };
                    } else if (
                        !!oldState &&
                        oldState.includes("") && // Only 'All'
                        oldState.length === 1 && // was selected
                        newState.length > 1 // and now something else is selected in addition to all
                    ) {
                        return {
                            eventRsvpStatus: newState || [], // remove 'All' and return the rest of the selected options
                        };
                    } else if (
                        (!oldState || oldState?.length === 0) && // Nothing was selected
                        newState.includes("") && // Now 'All' was selected
                        newState.length === 1
                    ) {
                        return {
                            eventRsvpStatus:
                                state.filterOptionsValues?.eventRsvpStatuses.map(
                                    (status) => status.value
                                ) || [], // select every possible value
                        };
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventRsvpStatuses
                                ?.length && // If everything was selected
                        !newState.includes("") // and 'All' is now deselected
                    ) {
                        return {
                            eventRsvpStatus: [],
                        };
                    } else if (
                        !!oldState &&
                        oldState.length ===
                            state.filterOptionsValues?.eventRsvpStatuses
                                ?.length && // If everything was selected
                        newState.length < oldState.length
                    ) {
                        return {
                            eventRsvpStatus:
                                newState.filter(
                                    (status: string) => status !== ""
                                ) || [],
                        };
                    } else if (
                        !newState.includes("") && // 'All' was not selected
                        newState.length ===
                            state.filterOptionsValues?.eventRsvpStatuses // But everything else was selected except 'All'
                                ?.length -
                                1
                    ) {
                        return {
                            eventRsvpStatus:
                                state.filterOptionsValues?.eventRsvpStatuses.map(
                                    (status) => status.value
                                ) || [], // select every possible value
                        };
                    }

                    return { eventRsvpStatus };
                },
                false,
                "setEventRsvpStatus"
            );
        },
        fetchEventFilters: async () => {
            const filtersData = await getEventFilters();
            set(
                (state) => {
                    return { ...state, filterOptionsValues: filtersData };
                },
                false,
                "fetchEventFilters"
            );

            return filtersData;
        },
    }))
);

interface IEventAttendees {
    eventToViewId: string | null;
    eventAttendees: string | null;
    showEventAttendeesWindowOpen: boolean;
    setShowEventAttendeesWindowOpen: (open: boolean) => void;
    setEventAttendees: (eventAttendees: any) => void;
    setEventToViewId: (eventToViewId: string | null) => void;
}

export const useEventAttendeesStore = create<IEventAttendees>((set) => ({
    eventAttendees: null,
    eventToViewId: null,
    showEventAttendeesWindowOpen: false,
    setShowEventAttendeesWindowOpen: (open: boolean) => {
        set({ showEventAttendeesWindowOpen: open });
    },
    setEventAttendees: (eventAttendees: any) => {
        set({ eventAttendees });
    },
    setEventToViewId(eventToViewId: string | null) {
        set({ eventToViewId });
    },
}));

interface IEventCardStatusChange {
    eventRsvpStatus: {
        [eventId: string]: {
            status: EventRsvpStatus | null;
            pending: boolean;
        };
    };
    setEventRsvpStatus: ({
        eventId,
        status,
    }: {
        eventId: string;
        status: {
            status: EventRsvpStatus | null;
            pending: boolean;
        };
    }) => void;
    clearEventStatus: () => void;
    refetchEvents: (options: RefetchOptions) => void;
    setRefetchEventsFunction: (
        refetchEvents: (options: RefetchOptions) => void
    ) => void;
}

export const useEventCardRsvpStatusChangeStore =
    create<IEventCardStatusChange>()(
        devtools((set) => ({
            eventRsvpStatus: {},
            setEventRsvpStatus: ({
                eventId,
                status,
            }: {
                eventId: string;
                status: {
                    status: EventRsvpStatus | null;
                    pending: boolean;
                };
            }) => {
                set(
                    (state) => ({
                        eventRsvpStatus: {
                            ...state.eventRsvpStatus,
                            [eventId]: status,
                        },
                    }),
                    false,
                    "setEventRsvpTempStatus"
                );
            },
            clearEventStatus: () => {
                set(() => ({ eventRsvpStatus: {} }), false, "clearEventStatus");
            },
            setRefetchEventsFunction(
                refetchEvents: (options: RefetchOptions) => void
            ) {
                set({ refetchEvents });
            },
        }))
    );

interface IEventRsvpOptInQuestionsDialog {
    eventToAcceptId: string | null;
    rsvpOptInQuestionDialogOpen: boolean;
    rsvpOptInQuestions: OptInQuestion[] | null;
    rsvpOptInQuestionAnswers: OptInQuestionAnswers | null;
    yesOptionType: EventRsvpStatus | null;
    setEventToAcceptId: (eventId: string) => void;
    setRsvpOptInQuestionDialogOpen: (open: boolean) => void;
    setRsvpOptInQuestions: (optInQuestions: OptInQuestion[] | null) => void;
    setRsvpOptInQuestionAnswers: (
        optInQuestionAnswers: OptInQuestionAnswers | null
    ) => void;
    updateRsvpOptInQuestionAnswer: (answer: {
        [question: string]: string | string[];
    }) => void;
    setYesOptionType: (yesOptionType: EventRsvpStatus | null) => void;
}

export const useEventRsvpOptInQuestionsDialogStore =
    create<IEventRsvpOptInQuestionsDialog>()(
        devtools((set) => ({
            eventToAcceptId: null,
            rsvpOptInQuestionDialogOpen: false,
            rsvpOptInQuestions: [],
            rsvpOptInQuestionAnswers: {},
            yesOptionType: null,
            setEventToAcceptId: (eventId: string) => {
                set({ eventToAcceptId: eventId });
            },
            setRsvpOptInQuestionDialogOpen: async (open: boolean) => {
                set({ rsvpOptInQuestionDialogOpen: open });
            },
            setRsvpOptInQuestions: (optInQuestions: OptInQuestion[] | null) => {
                set({ rsvpOptInQuestions: optInQuestions });
            },
            setRsvpOptInQuestionAnswers: (
                optInQuestionAnswers: OptInQuestionAnswers | null
            ) => {
                set({ rsvpOptInQuestionAnswers: optInQuestionAnswers });
            },
            updateRsvpOptInQuestionAnswer: (answer) => {
                set(
                    (state) => ({
                        rsvpOptInQuestionAnswers: {
                            ...state.rsvpOptInQuestionAnswers,
                            ...answer,
                        },
                    }),
                    false,
                    "setEventRsvpOptInQuestionAnswers"
                );
            },
            setYesOptionType: (yesOptionType: EventRsvpStatus) => {
                set({ yesOptionType });
            },
        }))
    );