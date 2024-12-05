import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useRouteError } from "react-router-dom";
import { Result, Button } from 'antd';
import { globalStyles } from "../styles/globalStyles";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const error: { statusText: string; message: string } = useRouteError();
  console.error(error);

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${globalStyles.page.base} ${
      isDarkMode ? globalStyles.background.dark : globalStyles.page.light
    } h-screen flex items-center justify-center`}>
      <Result
        status="500"
        title={<span className={isDarkMode ? "text-white" : "text-gray-900"}>500</span>}
        subTitle={
          <span className={`${globalStyles.text.secondary.base} ${
            isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
          }`}>
            Sorry, an unexpected error has occurred.
          </span>
        }
        extra={
          <Button 
            href="/" 
            type="primary" 
            className={`${globalStyles.button.primary.base} ${
              isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
            }`}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
}
