import React, { useState, useContext } from "react";
import { Button, Progress } from "antd";
import WelcomePage from "./WelcomePage";
import InformationPage from "./InformationPage";
import SectionsPage from "./SectorsPage";
import AdditionalInformationPage from "./AdditionalInformationPage";
import { ThemeContext } from "../../ThemeContext";

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

  const next = () => setCurrent((prev) => prev + 1);

  const prev = () => setCurrent((prev) => prev - 1);

  const [sectionsData, setSectionsData] = useState<string | null>(null);

  // form data
  const handleSubmit = () => {
    console.log("form data:", { sectionsData });
  };

  const progressPercentage = ((current + 1) / steps.length) * 100;

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="mx-auto max-w-2xl">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <form>
            {/* Progress bar & step text */}
            <div className="px-2">
              <div className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Step {current + 1} of {steps.length}
              </div>
              <Progress percent={progressPercentage} showInfo={false} />
            </div>

            {/* Step content */}
            <div className={`sm:h-[500px] px-2 w-full sm:overflow-hidden ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}>
              {/* {steps[current].content} */}
              {steps[current].content({
                sectionsData,
                setSectionsData,
              })}
            </div>

            {/* Navigation buttons */}
            <div className="mt-10 text-right">
              {current > 0 && (
                <Button className="ml-2 w-24" onClick={() => prev()}>
                  Back
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button
                  className="ml-2 w-24"
                  type="primary"
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  className="ml-2 w-24"
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
