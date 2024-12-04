
import React, { useState } from 'react';
import { Button, Progress, Form } from 'antd';
import WelcomePage from './WelcomePage';
import InformationPage from './InformationPage';
import SectionsPage from './SectorsPage';
import AdditionalInformationPage from './AdditionalInformationPage';
import {useRegisterMutation} from "../../services/users.ts";

interface InformData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    role?: string
}

interface AdditionalInformation {
    aboutMe?: string;
    profilePicture?: string;
}

const Onboarding: React.FC = () => {
    const [form] = Form.useForm();

    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => prev + 1);

    const prev = () => setCurrent((prev) => prev - 1);

    const [informData, setInformData] = useState<InformData | null>(null);
    const [sectionsData, setSectionsData] = useState<string | null>(null);
    const [additionalData, setAdditionalData] = useState<AdditionalInformation | null>(null);

    const steps = [
        {
            title: 'Welcome',
            content: () => <WelcomePage />,
            key: 'welcomeData',
        },
        {
            title: 'Second',
            content: () => (
                <InformationPage setInformData={setInformData} />),
            key: 'informationData',
        },
        {
            title: 'Third',
            content: () => (
                <SectionsPage sectionsData={sectionsData} setSectionsData={setSectionsData} />
            ),
            key: 'sectionsData',
        },
        {
            title: 'four',
            content: () => <AdditionalInformationPage setAdditionalData={setAdditionalData} />,
            key: 'lastData',
        },
    ];
    console.log(additionalData, 'sectionsData1');
    const [registerUser] = useRegisterMutation()

    const progressPercentage = ((current + 1) / steps.length) * 100;
    const handleFinish = async ()=> {
        await registerUser({
            ...informData,
            ...additionalData,
            role:sectionsData,
        }).unwrap()
    }

    return (
        <div className='py-20'>
            <div className="mx-auto max-w-2xl">
                <div
                    className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
                >
                    <Form form={form} onFinish={handleFinish}>
                        {/* Progress bar & step text */}
                        <div className='px-2'>
                            <div className="font-semibold text-sm text-gray-900">
                                Step {current + 1} of {steps.length}
                            </div>
                            <Progress percent={progressPercentage} showInfo={false} />
                        </div>

                        {/* Step content */}
                        <div  className="sm:h-[500px] px-2 w-full sm:overflow-hidden">
                           
                            {/* {steps[current].content} */}
                            {steps[current].content()}
                        </div>

                        {/* Navigation buttons */}
                        <div className="mt-10 text-right">
                            {current > 0 && (
                                <Button className="ml-2 w-24" onClick={() => prev()}>
                                    Back
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button className="ml-2 w-24" type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button
                                    className="ml-2 w-24"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Finish
                                </Button>
                            )}
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
