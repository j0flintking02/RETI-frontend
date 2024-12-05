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
      isDarkMode ? 'bg-gray-950' : globalStyles.page.light
    }`}>
      <div className={`mx-auto max-w-2xl ${globalStyles.container.card.base} ${
        isDarkMode ? 'bg-gray-900 border border-gray-800' : globalStyles.container.card.light
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
              isDarkMode ? 'bg-gray-900' : 'bg-white'
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
                  className={`w-24 ${globalStyles.button.secondary.base} ${
                    isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
                  }`}
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
