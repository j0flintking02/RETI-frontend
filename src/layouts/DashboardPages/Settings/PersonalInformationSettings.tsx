import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Input, Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext"; // Import the ThemeContext

const PersonalInformationSettings = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from context

  return (
    <div className="mt-2">
      <Layout
        className={`transition-colors duration-300 ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Content
          className={`px-4 py-4 space-y-4 bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-gray-700 rounded-lg`}
        >
          <div className="sm:flex sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Personal Information
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">
                Update your photo and personal details here.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="w-32 p-2">Cancel</Button>
              <Button className="w-32 p-2" type="primary">
                Save changes
              </Button>
            </div>
          </div>

          {/* profile picture and inputs */}
          <div className="sm:flex gap-2 border-b border-gray-900/10 dark:border-gray-700 py-8">
            <div className="sm:w-3/12 text-center text-gray-900 dark:text-gray-100 mb-8">
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
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    First name
                  </label>
                  <Input
                    value="John"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Last name
                  </label>
                  <Input
                    value="Doe"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-6/12">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Date of birth
                  </label>
                  <Input
                    value="28/12/2009"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Gender
                  </label>
                  <Input
                    value="Male"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-6/12">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Email address
                  </label>
                  <Input
                    value="johnd@gmail.com"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
                <div className="sm:w-6/12">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Phone number
                  </label>
                  <Input
                    value="+256787123456"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
              </div>
              <div className="sm:flex gap-4">
                <div className="sm:w-full">
                  <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">
                    About
                  </label>
                  <TextArea
                    value="Lorem ipsum dolor sit"
                    size="large"
                    className={`bg-transparent border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-red-600">
            <Alert
              message="Delete your account"
              className="p-4 flex border-red-900 text-red-800 bg-red-800 bg-opacity-40"
              description="Once you delete your account, all your data will be permanently removed."
              type="error"
              action={
                <Button size="large" danger>
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
