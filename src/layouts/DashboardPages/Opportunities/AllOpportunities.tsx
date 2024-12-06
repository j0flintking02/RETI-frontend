import { Badge } from "antd";
import { formatDistanceToNow } from 'date-fns';



const AllOpportunitiesPage = () => {

    

    const jobOpportunities = [
        {
            id: 1,
            title: 'Plumber',
            description: 'Responsible for plumbing and maintenance work.',
            location: 'New York, NY',
            salary: '$35/hour',
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdBy: 'John Doe',
            createdWhen: new Date().toISOString(), // Example of a "just added" job
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


    //   // Function to handle card click
    //   const handleCardClick = () => {
    //     history.push(`/job/${job.id}`);
    // };


    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {jobOpportunities.map((job) => {
                    const jobCreatedDate = new Date(job.createdWhen); // Convert createdWhen to Date
                    const isJustAdded =
                        Date.now() - jobCreatedDate.getTime() < 3 * 24 * 60 * 60 * 1000; // Less than 3 days

                    return (
                        <div
                            key={job.id}
                            // onClick={handleCardClick}
                            className="w-lg h-34 relative flex flex-col p-1 border border-gray-300 rounded-lg bg-white hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                        // key={job.id}
                        // className="w-lg relative flex flex-col p-1 border border-gray-300 rounded-lg bg-white"
                        >
                            <div className="p-2">
                                <h3 className="text-lg capitalize truncate font-semibold text-gray-700">
                                    {job.title}
                                </h3>
                                <p className="py-2 text-md truncate text-gray-500">{job.description}</p>

                                <p className="py-2 text-md font-semibold truncate">Posted by</p>
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

                                    {/* Display Badge */}
                                    <Badge
                                        count={isJustAdded ? 'Just Added' : formatDistanceToNow(jobCreatedDate)}
                                        style={{ backgroundColor: isJustAdded ? '#52c41a' : '#d9d9d9' }}
                                    />
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