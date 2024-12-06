import { DatePicker, Input, Space } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

const InformationPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="space-y-6">
      <div className="mt-2">
        <div
          className={`${globalStyles.heading.secondary} ${
            isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
          }`}
        >
          <p>General Information</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              First name
            </label>
            <div className="mt-2">
              <Input
                size="large"
                placeholder="Enter your first name"
                type="text"
                className={`${globalStyles.input.base} ${
                  isDarkMode 
                    ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                    : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Last name
            </label>
            <div className="mt-2">
              <Input
                size="large"
                placeholder="Enter your Last name"
                type="text"
                className={`${globalStyles.input.base} ${
                  isDarkMode 
                    ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                    : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Date of birth
            </label>
            <div className="mt-2">
              <DatePicker
                size="large"
                placeholder="Select date of birth"
                className={`w-full ${globalStyles.input.base} ${
                  isDarkMode
                    ? `${globalStyles.input.dark} hover:bg-transparent focus:bg-transparent active:bg-transparent` 
                    : `${globalStyles.input.light} hover:bg-transparent focus:bg-transparent active:bg-transparent`
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
                needConfirm
                popupClassName={isDarkMode ? "dark-datepicker" : ""}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Gender
            </label>
            <div className="mt-2">
              <Input
                size="large"
                placeholder="Enter your gender"
                type="text"
                className={`${globalStyles.input.base} ${
                  isDarkMode 
                    ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                    : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Email address
            </label>
            <div className="mt-2">
              <Input
                size="large"
                placeholder="Enter your email"
                type="email"
                className={`${globalStyles.input.base} ${
                  isDarkMode 
                    ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                    : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Phone number
            </label>
            <div className="mt-2">
              <Space.Compact>
                <Input
                  size="large"
                  className={`${globalStyles.input.base} ${
                    isDarkMode 
                      ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                      : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                  }`}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  defaultValue="+256"
                  readOnly
                />
                <Input
                  size="large"
                  className={`${globalStyles.input.base} ${
                    isDarkMode 
                      ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}` 
                      : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
                  }`}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  defaultValue="786123456"
                />
              </Space.Compact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
