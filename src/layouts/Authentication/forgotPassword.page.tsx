import { Layout } from "antd";
import viteLogo from '/images/undraw_business_chat_re_gg4h.svg';
import ForgotPasswordForm from "../../components/seconday/ForgotPassword";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

const ForgotPasswordPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Layout className={`h-screen ${globalStyles.page.base} ${
      isDarkMode ? 'bg-gray-950' : globalStyles.page.light
    }`}>
      <div className={`my-auto sm:mx-auto sm:w-full sm:max-w-md ${
        isDarkMode ? 'bg-gray-900 border border-gray-800' : globalStyles.container.card.light
      }`}>
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img 
              className="mx-auto h-24 w-auto" 
              src={viteLogo} 
              alt="Your Company" 
            />
            <h2 className={`mt-10 text-center ${globalStyles.heading.primary} ${
              isDarkMode ? 'text-gray-200' : globalStyles.heading.light
            }`}>
              Change password
            </h2>

            <p className={`mt-2 text-center ${globalStyles.text.secondary.base} ${
              isDarkMode ? 'text-gray-400' : globalStyles.text.secondary.light
            }`}>
              Enter a new password below to change your password
            </p>
          </div>
          <ForgotPasswordForm isDarkMode={isDarkMode} />
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasswordPage;
