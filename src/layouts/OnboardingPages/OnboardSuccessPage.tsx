import { Button, Layout } from 'antd';
import viteLogo from '/images/undraw_business_chat_re_gg4h.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { globalStyles } from '../../styles/globalStyles';

const SuccessOnboardPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Layout className={`h-screen ${globalStyles.page.base} ${
      isDarkMode ? globalStyles.background.gray.dark : globalStyles.page.light
    }`}>
      <div className={`my-auto sm:mx-auto sm:w-full sm:max-w-md ${globalStyles.container.card.base} ${
        isDarkMode ? globalStyles.background.dark: globalStyles.container.card.light
      }`}>
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-32 w-auto" src={viteLogo} alt="Your Company" />
            <h2 className={`mt-6 text-center ${globalStyles.heading.primary} ${
              isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
            }`}>
              Your account has been successfully created
            </h2>
            <p className={`mt-2 text-center ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Now you can start exploring!
            </p>
          </div>
          <div className="mt-8">
            <Button
              type="primary"
              className={`w-full ${globalStyles.button.primary.base} ${
                isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
              }`}
            >
              Go to dashboard
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessOnboardPage;
