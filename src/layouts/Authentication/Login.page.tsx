import { useContext, useEffect } from "react";
import LoginForm from "../../components/seconday/LoginForm";
import { ThemeContext } from "../../ThemeContext"; // Ensure ThemeContext is correctly imported
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";
import { globalStyles } from "../../styles/globalStyles";

const LoginPage = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access theme context for dark mode

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const inputStyles = isDarkMode
    ? `
    bg-transparent 
    border-gray-700 
    text-white 
    placeholder-gray-300
    focus:bg-transparent 
    hover:bg-transparent
    focus:border-gray-500
  `
    : `
    bg-white 
    border-gray-300 
    text-gray-900 
    placeholder-gray-500
    focus:border-blue-500
  `;

  return (
    <div
      className={`${globalStyles.page.base} ${
        isDarkMode ? globalStyles.background.dark : globalStyles.page.light
      }`}
    >
      <div className={globalStyles.container.base}>
        <div className="flex min-h-full flex-1">
          <div
            className={`flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ${
              isDarkMode ? globalStyles.background.dark : "bg-white"
            }`}
          >
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  alt="Your Company"
                  src={viteLogo}
                  className="h-10 w-auto"
                />
                <h2
                  className={`mt-8 ${globalStyles.heading.primary} ${
                    isDarkMode
                      ? globalStyles.heading.dark
                      : globalStyles.heading.light
                  }`}
                >
                  Sign in to your account
                </h2>
                <p
                  className={`mt-2 ${globalStyles.text.secondary.base} ${
                    isDarkMode
                      ? globalStyles.text.secondary.dark
                      : globalStyles.text.secondary.light
                  }`}
                >
                  Experience the power of networking
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <LoginForm
                    inputStyles={inputStyles}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block rounded-l-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              className="absolute inset-0 size-full object-cover rounded-l-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
