import { Button, Input } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Ensure ThemeContext is correctly imported

const ResetPasswordForm = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access theme state from context

  return (
    <div
      className={`mt-8 sm:mx-auto sm:w-full sm:max-w-sm ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } sm:border sm:rounded-[12px] px-4 py-4`}
    >
      <form className="space-y-4">
        <div>
          <label
            className={`block text-sm/6 font-medium ${
              isDarkMode ? "text-gray-400" : "text-gray-900"
            }`}
          >
            Email
          </label>
          <div className="mt-2">
            <Input
              placeholder="Enter your email"
              type="email"
              size="large"
              className={`${
                isDarkMode
                  ? "bg-transparent border-gray-600 text-white placeholder-white focus:ring-0 focus:border-gray-500"
                  : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-0 focus:border-gray-500"
              }`}
              style={{
                // Ensure the background stays transparent and placeholder remains visible
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
          className={`text-[#5B9BD5] hover:text-[#5B9BD5] ${
            isDarkMode ? "text-[#5B9BD5]" : "text-[#5B9BD5]"
          }`}
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default ResetPasswordForm;
