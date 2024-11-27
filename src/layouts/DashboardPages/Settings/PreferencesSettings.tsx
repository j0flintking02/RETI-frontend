
import { Layout, Switch } from "antd";

import { Content } from "antd/es/layout/layout";



const PreferencesSettings = () => {

    const notificationSections = [
        {
            id: 1,
            heading: "Appearance",
            description: "Customize the appearance of your app",
            options: [
              { id: 1, label: "Dark" },
              { id: 2, label: "Light" },
            ],
          },
        {
            id: 2,
            heading: "Notifications",
            description: "These are app activity notifications",
            options: [
                { id: 1, label: "Emails" },
                { id: 2, label: "Platform notification" },
            ],
        },
        {
            id: 3,
            heading: "Chat messaging",
            description: "Manage your app chats",
            options: [
                { id: 1, label: "Emails" },
                { id: 2, label: "Platform notification" },
            ],
        },
    ];

    const onChange = (checked: boolean, label: string) => {
        console.log(`${label} is now ${checked ? "enabled" : "disabled"}`);
    };

 
    return (
        <div className="mt-2">
            <Layout>
                <Content className="px-4 py-4 space-y-4 bg-white border border-gray-900/10 rounded-lg"
                >
                    <div className="sm:flex sm:justify-between  border-b border-gray-900/10 py-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Here you can manage your notifications and preferences.</p>
                        </div>
                    </div>

                    {/* prefernces */}
                    <div className="py-4">
                        <div>
                            {notificationSections.map((section) => (
                                <div
                                    key={section.id}
                                    className="sm:flex sm:justify-between border-b border-gray-900/10 py-4"
                                >
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-900">{section.heading}</h2>
                                        <p className="mt-1 text-sm/6 text-gray-600">{section.description}</p>
                                    </div>

                                    <div className="sm:w-6/12 space-y-2">
                                        {section.options.map((option) => (
                                            <div key={option.id} className="flex items-center gap-x-3 pt-2">
                                                <Switch
                                                    defaultChecked
                                                    onChange={(checked) => onChange(checked, option.label)}
                                                />
                                                <p className="block text-md text-gray-900">{option.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
};

export default PreferencesSettings;