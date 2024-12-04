import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext
import { useRouteError } from "react-router-dom";
import { Result, Button } from 'antd';

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const error: { statusText: string; message: string } = useRouteError();
  console.error(error);

  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from context

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} h-screen flex items-center justify-center`}>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, an unexpected error has occurred."
        extra={
          <Button href="/" type="primary" className={`${isDarkMode ? "bg-blue-500" : "bg-blue-700"} text-white`}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
