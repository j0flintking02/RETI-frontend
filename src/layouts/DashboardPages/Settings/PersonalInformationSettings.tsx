import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Input, Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

const PersonalInformationSettings = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="mt-2">
      <Layout className={`${globalStyles.container.card.base} ${
        isDarkMode ? globalStyles.background.dark : globalStyles.container.card.light
      }`}>
        <Content className="px-4 py-4 space-y-4">
          <div className="sm:flex sm:justify-between">
            <div>
              <h2 className={`${globalStyles.heading.secondary} ${
                isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
              }`}>
                Personal Information
              </h2>
              <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
              }`}>
                Update your photo and personal details here.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className={`w-32 p-2 ${globalStyles.button.secondary.base} ${
                isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
              }`}>
                Cancel
              </Button>
              <Button className={`w-32 p-2 ${globalStyles.button.primary.base} ${
                isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
              }`} type="primary">
                Save changes
              </Button>
            </div>
          </div>

          <div className={`sm:flex gap-2 border-b py-8 ${
            isDarkMode ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <div className={`sm:w-3/12 text-center mb-8 ${globalStyles.text.primary.base} ${
              isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
            }`}>
              <div>
                <Avatar size={80} icon={<UserOutlined />} />
                <p className="text-md font-semibold mt-2">Jenny Blum</p>
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  className="text-blue-500 mt-2"
                >
                  Change avatar
                </Button>
              </div>
            </div>

            <div className="sm:w-9/12 space-y-4">
              <div className="sm:flex gap-4">
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    First name
                  </label>
                  <Input
                    value="John"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    Last name
                  </label>
                  <Input
                    value="Doe"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    Date of birth
                  </label>
                  <Input
                    value="28/12/2009"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    Gender
                  </label>
                  <Input
                    value="Male"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    Email address
                  </label>
                  <Input
                    value="johnd@gmail.com"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    Phone number
                  </label>
                  <Input
                    value="+256787123456"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-full">
                  <label className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                  }`}>
                    About
                  </label>
                  <TextArea
                    value="Lorem ipsum dolor sit"
                    size="large"
                    className={`${
                      isDarkMode
                        ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                        : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
                    }`}
                    style={{
                      backgroundColor: "transparent", // Keeps the background transparent
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Alert
              message={
                <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>
                  Delete your account
                </span>
              }
              className={`p-4 flex ${
                isDarkMode ? 'border-red-700 bg-red-900/20' : 'border-red-200 bg-red-50'
              }`}
              description={
                <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>
                  Once you delete your account, all your data will be permanently removed.
                </span>
              }
              type="error"
              action={
                <Button 
                  size="large" 
                  style={{ background: 'transparent' }}
                  className={`border hover:bg-transparent focus:bg-transparent active:bg-transparent ${
                    isDarkMode 
                      ? 'border-red-700 text-red-400 hover:text-red-300 hover:border-red-600' 
                      : 'border-red-200 text-red-600 hover:text-red-700 hover:border-red-300'
                  }`}
                >
                  Delete your account
                </Button>
              }
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default PersonalInformationSettings;
