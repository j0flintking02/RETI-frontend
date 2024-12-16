
import Layout from "antd/es/layout/layout";
import CustomDahboardLayout from "../../components/seconday/CustomDashboardPagesLayout";
import Header from "../../components/seconday/Header";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";
import { useState, useContext } from "react";

const DashboardPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <>
            <Header  pageTitle="Dashboard" />
            <CustomDahboardLayout>

                <Layout className={`${
          isDarkMode ? globalStyles.background.gray.dark : ""
        }`}
                >
                   Dashboard
                </Layout>
            </CustomDahboardLayout>
        </>
    )
}

export default DashboardPage;
