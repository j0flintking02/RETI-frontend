import { Button, Input } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Ensure ThemeContext is correctly imported
import { globalStyles } from "../../styles/globalStyles";
// Access theme state from context

  const ResetPasswordForm = () => {
    const { isDarkMode } = useContext(ThemeContext);
  
    return (
      <div
        className={`mt-8 sm:mx-auto sm:w-full sm:max-w-sm ${
          isDarkMode ? globalStyles.background.dark : "bg-white text-gray-900"
        } px-4 py-4`}
      >
        <form className="space-y-4">
          <div>
            <label
              className={`block ${globalStyles.text.secondary.base} ${
                isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
              }`}
            >
              Email
            </label>
            <div className="mt-2">
              <Input
                placeholder="Enter your email"
                type="email"
                size="large"
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
  
          <div>
            <Button
              type="primary"
              size="large"
              className={`flex w-full justify-center px-3 py-4 text-sm font-semibold ${
                isDarkMode ? "bg-blue-600" : "bg-blue-500"
              } text-white`}
            >
              Reset your password
            </Button>
          </div>
        </form>
  
        <p
          className={`mt-6 text-center text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Remembered your password?{" "}
          <a
            href="/login"
            className={`text-[#5B9BD5] hover:text-[#5B9BD5]`}
          >
            Log in
          </a>
        </p>
      </div>
    );
  };

export default ResetPasswordForm;
