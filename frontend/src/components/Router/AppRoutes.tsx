import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import ErrorBoundary from "../General/ErrorBoundary";
import MainScreen from "../../pages/Main/MainScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <MainScreen />,
            },
            // {
            //     path: "/my-events/:memberId",
            // },
            // {
            //     path: "*",
            //     element: <RedirectToWebsite />,
            // },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
