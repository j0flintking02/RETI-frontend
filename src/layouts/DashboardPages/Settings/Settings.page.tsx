import { Layout, Tabs } from "antd";

import { TabsProps } from "../../../services/types";
import PersonalInformationSettings from "./PersonalInformationSettings";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";
import Header from "../../../components/secondary/Header";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import ProfileSettings from "./Profile";
import PersonalDetailsSettings from "./PersonalDetails";

const SettingsPage = () => {
  const items: TabsProps["items"] = [
    // {
    //   key: "1",
    //   label: "Personal Information",
    //   children: <PersonalInformationSettings />,
    // },
    {
      key: "1",
      label: "Profile",
      children: <ProfileSettings />,
    },
     {
      key: "2",
      label: "Personal Details",
      children: <PersonalDetailsSettings />,
    },
    {
      key: "3",
      label: "Account",
      children: <ChangePasswordSettings />,
    },
    // {
    //   key: "3",
    //   label: "Preferences",
    //   children: <PreferencesSettings />,
    // },
    // {
    //   key: "4",
    //   label: "My Data",
    //   children: <MyDataSettings />,
    // },
  ];

  return (
    <>
      <Header pageTitle="Settings" />

      <CustomDashboardLayout>
        <Layout>
          <Tabs defaultActiveKey="1" items={items} />
        </Layout>
      </CustomDashboardLayout>
    </>
  );
};

export default SettingsPage;
