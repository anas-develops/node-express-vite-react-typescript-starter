import { Alert, AlertTitle, Slide } from "@mui/material";
import { useEffect } from "react";
import { useToastStore } from "../../store/toastStore";
import { useShallow } from "zustand/shallow";

const ToastAlert = () => {
    const { title, color, message, showToast, hideToast, reset } =
        useToastStore(useShallow((state) => ({ ...state })));

    const onClose = () => {
        hideToast();
        setTimeout(() => {
            reset();
        }, 1000);
    };

    useEffect(() => {
        if (showToast) {
            const timeId = setTimeout(() => {
                // After 3 seconds set the show value to false
                onClose();
            }, 3000);

            return () => {
                clearTimeout(timeId);
            };
        }
    }, [showToast]);

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <Slide direction="up" in={showToast} mountOnEnter unmountOnExit>
            <Alert
                sx={{ bgcolor: "background.paper" }}
                className="sticky bottom-10 mx-2 md:mx-24 max-w-max"
                variant="outlined"
                severity={color}
                onClose={onClose}
            >
                {!!title && <AlertTitle>{title}</AlertTitle>}
                {color === "error" && !message
                    ? "Something went wrong"
                    : message}
            </Alert>
        </Slide>
    );
};

export default ToastAlert;
