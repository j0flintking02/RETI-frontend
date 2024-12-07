import { EnvironmentOutlined} from "@ant-design/icons";
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from "react-router-dom";



const AllOpportunitiesPage = () => {
    const navigate = useNavigate();


    const jobOpportunities = [
        {
            id: 1,
            title: 'Plumber',
            description: 'Responsible for plumbing and maintenance work.',
            location: 'New York, NY',
            salary: '$35/hour',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'John Doe',
            createdWhen: new Date().toISOString(), 
        },
        {
            id: 2,
            title: 'Software Engineer',
            description: 'Develop and maintain software applications.',
            location: 'San Francisco, CA',
            salary: '$120,000/year',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'Jane Smith',
            createdWhen: '2024-12-03T10:00:00.000Z',
        },
        {
            id: 3,
            title: 'Graphic Designer',
            description: 'Create visual content for marketing and branding.',
            location: 'Remote',
            salary: '$50/hour',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'Creative Solutions',
            createdWhen: '2024-11-29T14:30:00.000Z',
        },
        {
            id: 4,
            title: 'Customer Service Representative',
            description: 'Assist customers with inquiries and issues.',
            location: 'Austin, TX',
            salary: '$18/hour',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'Customer Care LLC',
            createdWhen: '2024-12-01T09:15:00.000Z',
        },
        {
            id: 5,
            title: 'Marketing Specialist',
            description: 'Plan and execute marketing campaigns.',
            location: 'Boston, MA',
            salary: '$60,000/year',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'Marketeer Inc.',
            createdWhen: '2024-11-30T12:00:00.000Z',
        },
    ];





    return (
        <>
            <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {jobOpportunities.map((job) => {
                    const jobCreatedDate = new Date(job.createdWhen); 
                    const isJustAdded =
                        Date.now() - jobCreatedDate.getTime() < 3 * 24 * 60 * 60 * 1000; // Less than 3 days

                    return (
                        <div
                            key={job.id}
                            onClick={() => navigate(`/opportunities/${job.id}`)}
                            className=" h-34 relative flex flex-col p-1 border border-gray-300 rounded-sm bg-white hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                        >
                            <div className="p-2">
                                <div className="text-right mb-1">
                                    <h3
                                        className={`text-xs ${isJustAdded ? 'text-green-600' : 'text-gray-500'
                                            }`}
                                    >
                                        {isJustAdded ? 'Just Added' : `${formatDistanceToNow(jobCreatedDate)} ago`}
                                    </h3>
                                </div>

                                <h3 className="text-lg capitalize truncate  text-gray-700">
                                    {job.title}
                                </h3>
                                <p className="text-md truncate text-gray-500">{job.description}</p>
                                <p className="text-sm truncate text-gray-500 flex items-center gap-1">
                                    <span className="text-gray-400">
                                    <EnvironmentOutlined  /> 
                                    </span>
                                    {job.location}
                                </p>

                                <div className="mt-4">
                                    <p className="text-sm font-semibold truncate">Posted by</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-x-2">
                                            <img
                                                alt=""
                                                src={job.imageSrc}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <h3 className="text-base font-semibold tracking-tight text-gray-900">
                                                    {job.createdBy}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AllOpportunitiesPage;