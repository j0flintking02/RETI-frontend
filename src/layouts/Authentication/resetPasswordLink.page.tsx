import { Button, Layout } from "antd";
import viteLogo from '/images/undraw_business_chat_re_gg4h.svg';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

const ResetPasswordLinkPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Layout className={`h-screen ${
      isDarkMode ? globalStyles.page.dark : globalStyles.page.light
    }`}>
      <div className={`my-auto sm:mx-auto sm:w-full sm:max-w-md ${globalStyles.container.card.base} ${
        isDarkMode ? globalStyles.container.card.dark : globalStyles.container.card.light
      }`}>
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img 
              className="mx-auto h-24 w-auto" 
              src={viteLogo} 
              alt="Your Company" 
            />
            <h2 className={`mt-10 text-center ${globalStyles.heading.primary} ${
              isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
            }`}>
              Security link has been sent to your email
            </h2>
            <p className={`mt-2 text-center ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Hurry up! This link is valid for 30 minutes.
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <Button 
              href='/login' 
              type="primary" 
              className={`w-full ${globalStyles.button.primary.base} ${
                isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
              }`}
            >
              Back to login
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordLinkPage;


