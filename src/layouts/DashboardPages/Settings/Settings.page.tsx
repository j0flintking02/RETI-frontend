import { Layout, Tabs } from "antd";
import CustomAppTitle from "../../../components/seconday/CustomAppTitle";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { TabsProps } from "../../../services/types";
import PersonalInformationSettings from "./PersonalInformationSettings";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";
import { globalStyles } from "../../../styles/globalStyles";

const SettingsPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span className={isDarkMode ? "text-white" : "text-gray-900"}>
          Personal Information
        </span>
      ),
      children: <PersonalInformationSettings />,
    },
    {
      key: "2",
      label: (
        <span className={isDarkMode ? "text-white" : "text-gray-900"}>
          Change Password
        </span>
      ),
      children: <ChangePasswordSettings />,
    },
    {
      key: "3",
      label: (
        <span className={isDarkMode ? "text-white" : "text-gray-900"}>
          Preferences
        </span>
      ),
      children: <PreferencesSettings />,
    },
    {
      key: "4",
      label: (
        <span className={isDarkMode ? "text-white" : "text-gray-900"}>
          My Data
        </span>
      ),
      children: <MyDataSettings />,
    },
  ];

  return (
    <div>
      <CustomAppTitle>Settings</CustomAppTitle>
      <Layout 
        className={`px-4 py-4 sm:rounded-[12px] ${
          isDarkMode ? globalStyles.background.gray.dark : 'bg-white'
        }`}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          className={`${globalStyles.text.primary.base} ${
            isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
          }`}
          tabBarStyle={{
            backgroundColor: 'transparent',
            borderBottom: 'none'
          }}
        />
      </Layout>
    </div>
  );
};

export default SettingsPage;
