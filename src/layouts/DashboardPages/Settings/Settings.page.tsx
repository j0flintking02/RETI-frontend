import { Layout, Tabs } from "antd";
import CustomAppTitle from "../../../components/seconday/CustomAppTitle";

import { TabsProps } from "../../../services/types";
import PersonalInformationSettings from "./PersonalInformationSettings";
import ChangePasswordSettings from "./ChangePasswordSettings";
import PreferencesSettings from "./PreferencesSettings";
import MyDataSettings from "./MyDataSettings";


const SettingsPage = () => {

 

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Personal Information',
            children: <PersonalInformationSettings />,
        },
        {
            key: '2',
            label: 'Change Password',
            children: <ChangePasswordSettings />,
        },
        {
            key: '3',
            label: 'Preferences',
            children: <PreferencesSettings />,
        },
        {
            key: '4',
            label: 'My Data',
            children: <MyDataSettings />,
        },
    ];

    return (
        <div className="space-y-4">
            <CustomAppTitle>Settings</CustomAppTitle>
            <Layout>
                {/* tab */}
                <Tabs defaultActiveKey="1" items={items} 
                />
            </Layout>
        </div>
    )
};

export default SettingsPage;