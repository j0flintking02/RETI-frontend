import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    LoaderFunctionArgs,
    redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store.ts";
import "./index.css";
import ErrorPage from "./layouts/error.page.tsx";
import { ConfigProvider } from "antd";
import CustomAppLayout from "./components/seconday/CustomAppLayout.tsx";
<<<<<<< HEAD
import DashboardPage from "./layouts/Dashboard.page.tsx";
import SignPage from "./layouts/Authentication/Sign.page.tsx";
=======
import DashboardPage from "./layouts/DashboardPages/Dashboard.page.tsx";
import ForgotPasswordPage from "./layouts/Authentication/forgotPassword.page.tsx";
import './index.css'
import ResetPasswordPage from "./layouts/Authentication/resetPassword.page.tsx";
import ResetPasswordLinkPage from "./layouts/Authentication/resetPasswordLink.page.tsx";
import RegisterPage from "./layouts/Authentication/register.page.tsx";
import MessagesPage from "./layouts/DashboardPages/Messages.page.tsx";
import LoginPage from "./layouts/Authentication/Login.page.tsx";
>>>>>>> 7fc904067191ec6e964820ba606833c9daed258f



function protectedLoader({ request }: LoaderFunctionArgs) {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
}

async function loginLoader() {
    const loginDetails = localStorage.getItem("loginDetails");
    if (loginDetails) {
        return redirect("/");
    }
    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        // loader: protectedLoader,
        element: (
            <CustomAppLayout>
                <DashboardPage />
            </CustomAppLayout>
        ),
        errorElement: <ErrorPage />,
        children: [],
    },
    {
        path: "/messages",
        // loader: protectedLoader,
        element: (
            <CustomAppLayout>
                <MessagesPage />
            </CustomAppLayout>
        ),
        errorElement: <ErrorPage />,
        // children: [],
    },
    {
        path: "/forgot-password",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ForgotPasswordPage/>,
    },
    {
        path: "/reset-password",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ResetPasswordPage/>,
    },
    {
        path: "/reset-password-link",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ResetPasswordLinkPage/>,
    },
    {
        path: "/register",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <RegisterPage/>,
    },
    {
        path: "/login",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <LoginPage />,
    },
    {
        path: "/sign",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <SignPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
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
        </React.StrictMode>
    </Provider>
);
