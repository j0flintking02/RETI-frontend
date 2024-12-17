import { Layout, Tabs } from "antd";

import { TabsProps } from "../../../services/types";
import PersonalInformationSettings from "./PersonalInformationSettings";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";
import Header from "../../../components/secondary/Header";
import CustomDahboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";

const SettingsPage = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Personal Information",
      children: <PersonalInformationSettings />,
    },
    {
      key: "2",
      label: "Change Password",
      children: <ChangePasswordSettings />,
    },
    {
      key: "3",
      label: "Preferences",
      children: <PreferencesSettings />,
    },
    {
      key: "4",
      label: "My Data",
      children: <MyDataSettings />,
    },
  ];

  return (
    <>
      <Header pageTitle="Settings" />

      <CustomDahboardLayout>
        <Layout>
          <Tabs defaultActiveKey="1" items={items} />
        </Layout>
      </CustomDahboardLayout>
    </>
  );
};

export default SettingsPage;
