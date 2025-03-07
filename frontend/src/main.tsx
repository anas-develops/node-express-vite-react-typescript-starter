import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme } from "@mui/material";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import colors from "tailwindcss/colors";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiDialog: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiModal: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
    typography: {
        fontFamily: ["Roboto"].join(","),
    },
    palette: {
        primary: {
            main: colors.sky[600],
        },
    },
});

root.render(
    <StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </StrictMode>
);
