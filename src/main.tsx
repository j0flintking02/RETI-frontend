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
import LoginPage from "./layouts/Authentication/Login.page.tsx";
import ErrorPage from "./layouts/error.page.tsx";
import { ConfigProvider } from "antd";
import CustomAppLayout from "./components/seconday/CustomAppLayout.tsx";
import DashboardPage from "./layouts/Dashboard.page.tsx";
import ForgotPasswordPage from "./layouts/Authentication/forgotPassword.page.tsx";
import './index.css'



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
        path: "/login",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <LoginPage />,
    },
    {
        path: "/forgot-password",
        loader: loginLoader,
        errorElement: <ErrorPage />,
        element: <ForgotPasswordPage/>,
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
