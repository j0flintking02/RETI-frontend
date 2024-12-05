import { Layout } from "antd";
import viteLogo from "/images/undraw_business_chat_re_gg4h.svg";
import ResetPasswordForm from "../../components/seconday/ResetPassword";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

const ResetPasswordPage = () => {
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
              Reset your password
            </h2>

            <p className={`mt-2 text-center ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              We will send a link to your email to reset the password to your
              account
            </p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;
