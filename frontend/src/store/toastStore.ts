import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { create } from "zustand";

interface IToastMessage {
    title: string;
    message: string;
    color: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
    showToast: boolean;
    toastMessage: ({
        title,
        message,
        color,
    }: {
        title?: string;
        message: string;
        color: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
    }) => void;
    hideToast: () => void;
    reset: () => void;
}

export const useToastStore = create<IToastMessage>((set) => ({
    title: "",
    color: "info",
    message: "",
    showToast: false,
    toastMessage: ({
        title,
        message,
        color,
    }: {
        title?: string;
        message: string;
        color: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
    }) => {
        if (message) {
            set({ title, message, color, showToast: true });
        }
    },
    hideToast: () => {
        set({
            showToast: false,
        });
    },
    reset: () =>
        set({ title: "", color: "info", message: "", showToast: false }),
}));
