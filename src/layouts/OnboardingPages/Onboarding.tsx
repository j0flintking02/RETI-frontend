import React, { useState, useContext } from "react";
import { Button, Progress } from "antd";
import WelcomePage from "./WelcomePage";
import InformationPage from "./InformationPage";
import SectionsPage from "./SectorsPage";
import AdditionalInformationPage from "./AdditionalInformationPage";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

const steps = [
  {
    title: "Welcome",
    content: () => <WelcomePage />,
    key: "welcomeData",
  },
  {
    title: "Second",
    content: () => <InformationPage />,
    key: "informationData",
  },
  {
    title: "Third",
    content: ({
      sectionsData,
      setSectionsData,
    }: {
      sectionsData: string | null;
      setSectionsData: React.Dispatch<React.SetStateAction<string | null>>;
    }) => (
      <SectionsPage
        sectionsData={sectionsData}
        setSectionsData={setSectionsData}
      />
    ),
    key: "sectionsData",
  },
  {
    title: "four",
    content: () => <AdditionalInformationPage />,
    key: "lastData",
  },
];

const Onboarding: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);
  const [sectionsData, setSectionsData] = useState<string | null>(null);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("form data:", { sectionsData });
  };

  const progressPercentage = ((current + 1) / steps.length) * 100;

  return (
    <div className={`min-h-screen py-20 ${globalStyles.page.base} ${
      isDarkMode ? globalStyles.background.dark  : globalStyles.page.light
    }`}>
      <div className={`mx-auto max-w-2xl ${
        isDarkMode ? globalStyles.background.dark : globalStyles.container.card.light
      }`}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <form>
            {/* Progress bar & step text */}
            <div className="px-2">
              <div className={`font-semibold ${globalStyles.text.primary.base} ${
                isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
              }`}>
                Step {current + 1} of {steps.length}
              </div>
              <Progress percent={progressPercentage} showInfo={false} />
            </div>

            {/* Step content */}
            <div className={`sm:h-[500px] px-2 w-full sm:overflow-hidden ${
              isDarkMode ? globalStyles.background.dark : 'bg-white'
            }`}>
              {steps[current].content({
                sectionsData,
                setSectionsData,
              })}
            </div>

            {/* Navigation buttons */}
            <div className="mt-10 flex justify-end gap-2">
              {current > 0 && (
                <Button
                  className={`w-24 ${
                    isDarkMode 
                      ? "bg-transparent border border-gray-700 text-gray-300 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-100 hover:border-gray-600" 
                      : "bg-transparent border border-gray-300 text-gray-700 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-900 hover:border-gray-400"
                  }`}
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onClick={() => prev()}
                >
                  Back
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button
                  className={`w-24 ${globalStyles.button.primary.base} ${
                    isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
                  }`}
                  type="primary"
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  className={`w-24 ${globalStyles.button.primary.base} ${
                    isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
                  }`}
                  type="primary"
                  onClick={() => handleSubmit()}
                >
                  Finish
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
