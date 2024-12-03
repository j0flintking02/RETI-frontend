import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store.ts";
import { ConfigProvider } from "antd";
import CustomAppLayout from "./components/seconday/CustomAppLayout.tsx";
import DashboardPage from "./layouts/DashboardPages/Dashboard.page.tsx";
import ForgotPasswordPage from "./layouts/Authentication/forgotPassword.page.tsx";
import ResetPasswordPage from "./layouts/Authentication/resetPassword.page.tsx";
import ResetPasswordLinkPage from "./layouts/Authentication/resetPasswordLink.page.tsx";
import RegisterPage from "./layouts/Authentication/register.page.tsx";
import MessagesPage from "./layouts/DashboardPages/Messaging/Messages.page.tsx";
import LoginPage from "./layouts/Authentication/Login.page.tsx";
import Onboarding from "./layouts/OnboardingPages/Onboarding.tsx";
import SuccessOnboardPage from "./layouts/OnboardingPages/OnboardSuccessPage.tsx";
import SettingsPage from "./layouts/DashboardPages/Settings/Settings.page.tsx";
import { ThemeProvider } from "./ThemeContext.jsx"; // Import your theme context
import ErrorPage from "./layouts/error.page.tsx";
import "./index.css";

// Loader functions for login checks
async function loginLoader() {
    const loginDetails = localStorage.getItem("loginDetails");
    if (loginDetails) {
        return redirect("/");
    }
    return null;
}

// Define the router
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <CustomAppLayout>
                <DashboardPage />
            </CustomAppLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/messages",
        element: (
            <CustomAppLayout>
                <MessagesPage />
            </CustomAppLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/settings",
        element: (
            <CustomAppLayout>
                <SettingsPage />
            </CustomAppLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/forgot-password",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ForgotPasswordPage />,
    },
    {
        path: "/reset-password",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ResetPasswordPage />,
    },
    {
        path: "/reset-password-link",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ResetPasswordLinkPage />,
    },
    {
        path: "/register",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <RegisterPage />,
    },
    {
        path: "/login",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <LoginPage />,
    },
    {
        path: "/onboarding",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <Onboarding />,
    },
    {
        path: "/onboard-success",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <SuccessOnboardPage />,
    },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#5b9bd5",
                        },
                        components: {
                            Layout: {
                                headerBg: "#5b9bd5",
                            },
                        },
                    }}
                >
                    <RouterProvider router={router} />
                </ConfigProvider>
            </ThemeProvider>  {/* End ThemeProvider */}
        </React.StrictMode>
    </Provider>
);
