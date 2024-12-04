import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Import ThemeContext
import TextArea from "antd/es/input/TextArea";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const AdditionalInformationPage = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state

  const props = {
    name: "file",
    multiple: false,
    accept: "image/*", // Restricts to images only
    action: "/upload", // Replace with your upload endpoint
    onChange(info: any) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="space-y-6">
      <div className="mt-2">
        <div
          className={`text-xl font-semibold sm:text-lg ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <p>Additional Information</p>
        </div>
      </div>

      <div className="mt-4 gap-y-4">
        <div>
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About me
          </label>
          <div className="mt-2">
            <TextArea
              placeholder="Tell us more about yourself"
              allowClear
              className={`bg-transparent border border-gray-300 ${
                isDarkMode ? "text-white placeholder-white" : "text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Upload a profile picture
          </label>
          <div className="mt-2">
            <Dragger
              {...props}
              className={isDarkMode ? "bg-gray-800" : "bg-white"}
            >
              <p className="text-center text-2xl">
                <InboxOutlined />
              </p>
              <p
                className={`text-center ${
                  isDarkMode ? "text-white" : "text-gray-600"
                } mt-2`}
              >
                Upload or drag and drop
              </p>
              <p
                className={`text-center text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Only image files are supported.
              </p>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformationPage;
