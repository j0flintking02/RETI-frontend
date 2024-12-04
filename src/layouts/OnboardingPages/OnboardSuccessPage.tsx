import { Button, Layout } from 'antd';
import viteLogo from '/images/undraw_business_chat_re_gg4h.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext'; // Import ThemeContext

const SuccessOnboardPage = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state

  return (
    <Layout className={`h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div
        className={`my-auto sm:mx-auto sm:w-full sm:max-w-md px-4 py-4 sm:border sm:rounded-[12px] ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
        }`}
      >
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-32 w-auto" src={viteLogo} alt="Your Company" />
            <h2
              className={`mt-6 text-center text-2xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Your account has been successfully created
            </h2>
            <p
              className={`mt-2 text-sm text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-900'
              }`}
            >
              Now you can start exploring!
            </p>
          </div>
          <div className="mt-8">
            <Button
              type="primary"
              className={`flex w-full justify-center px-3 py-4 text-sm font-semibold ${
                isDarkMode ? 'bg-blue-600 text-white' : 'text-white'
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
