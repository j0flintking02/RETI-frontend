import { useContext } from "react";
import reti from '/src/assets/reti.png';
import RegisterForm from "../../components/seconday/registerForm";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

export default function RegisterPage() {
  const { isDarkMode } = useContext(ThemeContext); 

  return (
    <div className={`${globalStyles.page.base} ${
      isDarkMode ? globalStyles.background.dark : globalStyles.page.light
    }`}>
      <div className={globalStyles.container.base}>
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  alt="Your Company"
                  src={reti}
                  className= "h-16 w-auto"
                />
                <h2 className={`mt-8 ${globalStyles.heading.primary} ${
                  isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                }`}>
                  Register
                </h2>
                <p className={`mt-2 ${globalStyles.text.secondary.base} ${
                  isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                }`}>
                  Start your journey with our product
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block rounded-l-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
