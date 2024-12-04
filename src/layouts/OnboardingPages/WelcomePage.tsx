import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const WelcomePage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="space-y-6">
      <div className="mt-2">
        <div
          className={`text-xl font-bold sm:text-xl ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <p>Welcome</p>
        </div>
        <div
          className={`text-base ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          <p>Faucibus commodo massa rhoncus, volutpat. Lorem ipsum dolor </p>
        </div>
      </div>
      <div className="py-16 flex justify-center">
        <img
          src="images\undraw_solution_mindset_re_57bf.svg"
          alt="Welcome illustration"
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
