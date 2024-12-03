import { useContext, useEffect } from "react";
import LoginForm from "../../components/seconday/LoginForm";
import { ThemeContext } from "../../ThemeContext"; // Ensure ThemeContext is correctly imported
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";

const LoginPage = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access theme context for dark mode

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`xl:py-10 ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  alt="Your Company"
                  src={viteLogo}
                  className="h-10 w-auto"
                />
                <h2 className="mt-8 text-2xl font-bold tracking-tight dark:text-gray-100 text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Experience the power of networking
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <LoginForm />
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
