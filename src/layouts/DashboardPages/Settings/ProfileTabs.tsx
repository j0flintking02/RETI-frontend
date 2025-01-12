import { Tabs } from "antd";

import { TabsProps } from "../../../services/types";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";

import ProfileSettings from "./Profile";

const ProfileTabs = () => {
  const items: TabsProps["items"] = [
    // {
    //   key: "1",
    //   label: "Personal Information",
    //   children: <PersonalInformationSettings />,
    // },
    {
      key: "1",
      label: "Profile",
      children: ''
    },
    {
      key: "2",
      label: "Change Password",
       children: ''
    },
    {
      key: "3",
      label: "Preferences",
      children: ''
    },
    {
      key: "4",
      label: "My Data",
       children: ''
    },
  ];

  return (
    <>
      
          <Tabs defaultActiveKey="1" items={items} />
       
    </>
  );
};

export default ProfileTabs;
