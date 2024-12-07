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
        className={`${isDarkMode ? globalStyles.background.gray.dark : globalStyles.background.light}`}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          className={`${globalStyles.text.primary.base} ${
            isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
          }`}
          tabBarStyle={{
            color: isDarkMode ? '#fff' : '#000',
          }}
          styles={{
            inkBar: {
              backgroundColor: '#3B82F6',
            },
            tabBarItem: {
              '&.ant-tabs-tab-active': {
                color: '#3B82F6 !important',
              },
            },
          }}
        />
      </Layout>
    </div>
  );
};

export default SettingsPage;
