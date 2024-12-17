import { useParams } from 'react-router-dom';
import CustomAppTitle from '../../../components/seconday/CustomAppTitle';
import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { formatDistanceToNow } from '../../../utils';
import { EnvironmentOutlined, MailOutlined, MoneyCollectOutlined, PhoneOutlined, ScheduleOutlined } from '@ant-design/icons';
import CustomDahboardLayout from '../../../components/seconday/CustomDashboardPagesLayout';
import Header from '../../../components/seconday/Header';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import { globalStyles } from '../../../styles/globalStyles';

const OpportunitiesDetailsPage = () => {
    const { id } = useParams();
    const { isDarkMode } = useContext(ThemeContext);

    const job = {
        id,
        title: "Software Developer",
        description: "We are looking for a highly skilled Software Developer to join our team. The ideal candidate should have experience with React and Node.js, as well as a passion for building scalable applications. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, eos dolorum? Inventore magni doloremque, nam nulla eos dicta sint perspiciatis, perferendis, repellat rem officiis! Odio aspernatur officiis accusamus dolor commodi?",
        location: "Remote",
        jobType: "Full-Time",
        minSalary: 60000,
        maxSalary: 120000,
        applicationDeadline: "2024-12-31",
        createdBy: "John Doe",
        createdWhen: "2024-12-05",
        companyName: "Marvel Act Company",
        companyLogo: "https://example.com/company-logo.jpg",
        imageSrc: "https://randomuser.me/api/portraits/men/1.jpg",
        contactEmail: "hr@example.com",
        contactPhone: "+123 456 7890",
        socialLinks: {
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe"
        }
    };

    const jobCreatedDate = new Date(job.createdWhen);
    const isJustAdded = Date.now() - jobCreatedDate.getTime() < 3 * 24 * 60 * 60 * 1000;

    return (
        <div>
            <Header pageTitle="Opportunity Details" />
            <CustomAppTitle showBackButton={true}></CustomAppTitle>
            <CustomDahboardLayout>
                <Content className={`mt-2 border rounded-lg ${
                    isDarkMode 
                        ? `${globalStyles.background.dark} border-gray-700` 
                        : 'bg-white border-gray-900/10'
                }`}>
                    <div className='sm:flex justify-between'>
                        <div className={`sm:w-8/12 border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
                            {/* job section */}
                            <div className="">
                                <h1 className={`text-2xl font-bold mb-4 ${
                                    isDarkMode ? globalStyles.text.primary.white : 'text-gray-800'
                                }`}>{job.title}</h1>

                                <div>
                                    <h3 className={`pt-2 text-lg font-semibold ${
                                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                                    }`}>{job.companyName}</h3>
                                    <p className={`text-sm ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>{`Posted ${formatDistanceToNow(jobCreatedDate)} ago`}</p>
                                </div>

                                <p className={`text-md mb-6 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>{job.description}</p>

                                <div className="mb-6">
                                    <h4 className={`font-semibold ${
                                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                                    }`}>Application Deadline: {' '}
                                        <span className={
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }>{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                                    </h4>
                                </div>

                                <div className="">
                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <EnvironmentOutlined />
                                        </span>
                                        {job.location}
                                    </p>

                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <ScheduleOutlined />
                                        </span>
                                        {job.jobType}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <MoneyCollectOutlined />
                                        </span>
                                        ${job.minSalary} - ${job.maxSalary}
                                    </p>
                                </div>

                                <Button className='mt-4' type="primary">Apply now</Button>
                            </div>
                        </div>

                        {/* job post */}
                        <div className="w-4/12">
                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-4 ${
                                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                                }`}>Posted by</h3>
                                <div className="flex items-center gap-x-3">
                                    <img
                                        alt="Poster"
                                        src={job.imageSrc}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h4 className={`text-lg font-semibold ${
                                            isDarkMode ? 'text-gray-100' : 'text-gray-900'
                                        }`}>{job.createdBy}</h4>
                                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Recruiter</p>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <h4 className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                        Company: <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{job.companyName}</span>
                                    </h4>
                                </div>

                                <div className="mt-2">
                                    <h4 className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Contact:</h4>

                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <MailOutlined />
                                        </span>
                                        {job.contactEmail}
                                    </p>
                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <EnvironmentOutlined />
                                        </span>
                                        {job.location}
                                    </p>
                                    <p className={`text-sm truncate flex items-center gap-2 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                                            <PhoneOutlined />
                                        </span>
                                        {job.contactPhone}
                                    </p>
                                </div>

                                <Button className="bg-green-600 text-white hover:bg-green-700" type='default'>Contact recruiter</Button>
                            </div>
                        </div>
                    </div>
                </Content>
            </CustomDahboardLayout>
        </div>
    );
};

export default OpportunitiesDetailsPage;



