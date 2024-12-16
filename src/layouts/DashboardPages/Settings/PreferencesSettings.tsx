import { Layout, Switch } from "antd";

import { Content } from "antd/es/layout/layout";

import { useEffect, useContext } from "react";

import { ThemeContext } from "../../../ThemeContext";

import { globalStyles } from "../../../styles/globalStyles";

const PreferencesSettings = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

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
  const onChange = (checked: boolean) => {
    toggleTheme();
  };

  return (
    <div className="mt-2">
      <Content
        className={`px-4 py-4 space-y-4 rounded-lg ${
          isDarkMode
            ? `${globalStyles.background.dark} border-gray-700`
            : "bg-white border-gray-900/10"
        }`}
      >
        <div className="sm:flex sm:justify-between border-b border-gray-900/10 py-4">
          <div>
            <h2
              className={`${globalStyles.heading.secondary} ${
                isDarkMode
                  ? globalStyles.heading.dark
                  : globalStyles.heading.light
              }`}
            >
              Preferences
            </h2>
            <p
              className={`mt-1 ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Here you can manage your notifications and preferences.
            </p>
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
                  <h2
                    className={`${globalStyles.heading.secondary} ${
                      isDarkMode
                        ? globalStyles.heading.dark
                        : globalStyles.heading.light
                    }`}
                  >
                    {section.heading}
                  </h2>
                  <p
                    className={`mt-1 ${globalStyles.text.secondary.base} ${
                      isDarkMode
                        ? globalStyles.text.secondary.dark
                        : globalStyles.text.secondary.light
                    }`}
                  >
                    {section.description}
                  </p>
                </div>

                <div className="sm:w-6/12 space-y-2">
                  {section.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center gap-x-3 pt-2"
                    >
                      <Switch
                        defaultChecked
                        onChange={(checked) => onChange(checked, option.label)}
                      />
                      <p
                        className={`block ${globalStyles.text.primary.base} ${
                          isDarkMode
                            ? globalStyles.text.primary.dark
                            : globalStyles.text.primary.light
                        }`}
                      >
                        {option.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
};

export default PreferencesSettings;
