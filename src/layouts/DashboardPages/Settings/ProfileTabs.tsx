import { Tabs } from "antd";
import { TabsProps } from "../../../services/types";
import ProfileDetails from "./ProfileDetails";
import Projects from "./ProfileProjects";

import Education from "./ProfileEducation";
import Experience from "./ProfileWorkExperience";
import ProfileDetailsExt from "./ProfileDetailsExt";

const ProfileTabs = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Skills, Demographics, and Location Details",
      children: <ProfileDetails />
    },
    {
      key: "2",
      label: "Training Institutions, Cohorts and Trades",
       children: <ProfileDetailsExt/>
    },
    {
      key: "3",
      label: "Work experience",
      children: <Experience />
    },
    {
      key: "4",
      label: "Education",
      children: <Education />
    },
  ];

  return (
    <>
          <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default ProfileTabs;
