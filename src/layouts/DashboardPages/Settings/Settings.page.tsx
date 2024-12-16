import { Layout, Tabs } from "antd";

import { TabsProps } from "../../../services/types";
import PersonalInformationSettings from "./PersonalInformationSettings";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";
import Header from "../../../components/seconday/Header";
import CustomDahboardLayout from "../../../components/seconday/CustomDashboardPagesLayout";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";
const SettingsPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className={`${
            isDarkMode
              ? activeTab === "1"
                ? "text-blue-500"
                : "text-white"
              : activeTab === "1"
              ? "text-blue-500"
              : "text-gray-900"
          }`}
        >
          Personal Information
        </span>
      ),
      children: <PersonalInformationSettings />,
    },
    {
      key: "2",
      label: (
        <span
          className={`${
            isDarkMode
              ? activeTab === "2"
                ? "text-blue-500"
                : "text-white"
              : activeTab === "2"
              ? "text-blue-500"
              : "text-gray-900"
          }`}
        >
          Change Password
        </span>
      ),
      children: <ChangePasswordSettings />,
    },
    {
      key: "3",
      label: (
        <span
          className={`${
            isDarkMode
              ? activeTab === "3"
                ? "text-blue-500"
                : "text-white"
              : activeTab === "3"
              ? "text-blue-500"
              : "text-gray-900"
          }`}
        >
          Preferences
        </span>
      ),
      children: <PreferencesSettings />,
    },
    {
      key: "4",
      label: (
        <span
          className={`${
            isDarkMode
              ? activeTab === "4"
                ? "text-blue-500"
                : "text-white"
              : activeTab === "4"
              ? "text-blue-500"
              : "text-gray-900"
          }`}
        >
          My Data
        </span>
      ),
      children: <MyDataSettings />,
    },
  ];

  return (
    <>
      <Header pageTitle="Settings" />

      <CustomDahboardLayout>
        <Layout
          className={`${
            isDarkMode
              ? globalStyles.background.gray.dark
              : ""
          }`}
        >
          <Tabs 
            defaultActiveKey="1" 
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key)}
            items={items} 
          />
        </Layout>
      </CustomDahboardLayout>
    </>
  );
};

export default SettingsPage;
