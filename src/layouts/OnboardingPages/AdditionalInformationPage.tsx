import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import TextArea from "antd/es/input/TextArea";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { globalStyles } from "../../styles/globalStyles";

const { Dragger } = Upload;

const AdditionalInformationPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const props = {
    name: "file",
    multiple: false,
    accept: "image/*",
    action: "/upload",
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
        <div className={`text-xl font-semibold sm:text-lg ${globalStyles.text.primary.base} ${
          isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
        }`}>
          <p>Additional Information</p>
        </div>
      </div>

      <div className="mt-4 gap-y-4">
        <div>
          <label className={`block text-sm font-medium ${globalStyles.text.primary.base} ${
            isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
          }`}>
            About me
          </label>
          <div className="mt-2">
            <TextArea
              placeholder="Tell us more about yourself"
              allowClear
              className={`${globalStyles.input.base} ${
                isDarkMode 
                  ? `${globalStyles.input.dark} ant-input-dark` 
                  : `${globalStyles.input.light}`
              }`}
              style={{
                backgroundColor: "transparent",
              }}
              styles={{
                textarea: {
                  '&::placeholder': {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                    opacity: 1,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className={`block text-sm font-medium ${globalStyles.text.primary.base} ${
            isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
          }`}>
            Upload a profile picture
          </label>
          <div className="mt-2">
            <Dragger
              {...props}
              className={isDarkMode ? "bg-gray-800 hover:bg-transparent" : "bg-white hover:bg-transparent"}
            >
              <p className={`text-center text-2xl ${
                isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
              }`}>
                <InboxOutlined />
              </p>
              <p className={`text-center ${globalStyles.text.primary.base} ${
                isDarkMode ? globalStyles.text.primary.white: globalStyles.text.primary.light
              } mt-2`}>
                Upload or drag and drop
              </p>
              <p className={`text-center text-sm ${globalStyles.text.secondary.base} ${
                isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
              }`}>
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
