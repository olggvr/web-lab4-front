import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";
import HomePage from "./index/page.tsx";
import Dashboard from "./dashboard/page.tsx";
import Login from "./login/page.tsx";
import Signup from "./signup/page.tsx";
import store from "./store";
import { Provider } from "react-redux";
import Profile from "./profile/page.tsx";
import CollectionPage from "./collections/page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/collections",
                element: <CollectionPage />,
            }
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
