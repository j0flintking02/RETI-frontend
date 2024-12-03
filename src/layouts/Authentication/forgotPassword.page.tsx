import { Layout } from "antd";
import viteLogo from '/images/undraw_business_chat_re_gg4h.svg';
import ForgotPasswordForm from "../../components/seconday/ForgotPassword";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Assuming you have a theme context

const ForgotPasswordPage = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from context

  return (
    <Layout className={`h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div
        className={`my-auto sm:mx-auto sm:w-full sm:max-w-md sm:border sm:rounded-[12px] px-4 py-4 ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-24 w-auto" src={viteLogo} alt="Your Company" />
            <h2
              className={`mt-10 text-center text-2xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Change password
            </h2>

            <p
              className={`mt-2 text-sm text-center ${
                isDarkMode ? "text-gray-400" : "text-gray-900"
              }`}
            >
              Enter a new password below to change your password
            </p>
          </div>
          <ForgotPasswordForm isDarkMode={isDarkMode} /> {/* Pass isDarkMode to the form */}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasswordPage;
