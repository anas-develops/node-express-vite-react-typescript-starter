import React, { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./components/Router/AppRoutes";
import ToastAlert from "./components/General/ToastAlert";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import("@tanstack/react-query-devtools/build/modern/production.js").then(
        (d) => ({
            default: d.ReactQueryDevtools,
        })
    )
);

function App() {
    const [showDevtools, setShowDevtools] = useState(false);

    React.useEffect(() => {
        // @ts-expect-error
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ToastAlert />
            <ReactQueryDevtools initialIsOpen={false} />
            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
        </QueryClientProvider>
    );
}

export default App;
