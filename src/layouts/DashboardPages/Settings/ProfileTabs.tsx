import { Tabs } from "antd";
import { TabsProps } from "../../../services/types";
import ProfileSkills from "./ProfileSkills";
import Projects from "./ProfileProjects";

import Education from "./ProfileEducation";
import Experience from "./ProfileWorkExperience";

const ProfileTabs = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Skills and specilization",
      children: <ProfileSkills />
    },
    {
      key: "2",
      label: "Projects",
       children: <Projects/>
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
