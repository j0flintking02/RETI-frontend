// PreferencesSettings.js
import { useEffect, useContext } from "react";
import { Layout, Switch } from "antd";
import { Content } from "antd/es/layout/layout";
import { ThemeContext } from "../../../ThemeContext"; // Make sure to import the ThemeContext

const PreferencesSettings = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Access theme state and toggle function
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  const onChange = (checked: boolean) => {
    toggleTheme(); // Call the toggleTheme function when the switch changes
  };

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

  return (
    <div className="mt-2">
      <Layout
        className={`transition-colors duration-300 ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Content className="px-4 py-4 space-y-4 bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-gray-700 rounded-lg">
          <div className="sm:flex sm:justify-between border-b border-gray-900/10 dark:border-gray-700 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Preferences
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">
                Here you can manage your notifications and preferences.
              </p>
            </div>
          </div>

          {/* Preferences */}
          <div className="py-4">
            {notificationSections.map((section) => (
              <div
                key={section.id}
                className="sm:flex sm:justify-between border-b border-gray-900/10 dark:border-gray-700 py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {section.heading}
                  </h2>
                  <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">
                    {section.description}
                  </p>
                </div>

                <div className="sm:w-6/12 space-y-2">
                  {section.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center gap-x-3 pt-2"
                    >
                      {option.label === "Dark" || option.label === "Light" ? (
                        <Switch checked={isDarkMode} onChange={onChange} />
                      ) : (
                        <Switch
                          defaultChecked
                          onChange={(checked) =>
                            console.log(
                              `${option.label} is now ${
                                checked ? "enabled" : "disabled"
                              }`
                            )
                          }
                        />
                      )}
                      <p className="block text-md text-gray-900 dark:text-gray-100">
                        {option.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default PreferencesSettings;
