/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_BASE_URL: string;
    readonly VITE_APP_FRONTEND_BASE_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}