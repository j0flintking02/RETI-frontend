import { useParams } from 'react-router-dom'; // To get job ID from the URL

const JobDetails = () => {
    const { id } = useParams(); // Get job ID from URL

    // Dummy job data (replace this with actual data fetching logic)
    const job = {
        id,
        title: "Software Developer",
        description: "We are looking for a highly skilled Software Developer to join our team. The ideal candidate should have experience with React and Node.js, as well as a passion for building scalable applications.",
        location: "Remote",
        jobType: "Full-Time",
        minSalary: 60000,
        maxSalary: 120000,
        applicationDeadline: "2024-12-31",
        createdBy: "John Doe",
        createdWhen: "2024-12-05",
        imageSrc: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual poster image
    };

    // const jobCreatedDate = new Date(job.createdWhen);
    // const isJustAdded = Date.now() - jobCreatedDate.getTime() < 3 * 24 * 60 * 60 * 1000;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="bg-white shadow-xl rounded-lg p-6 lg:flex lg:space-x-12">
                {/* Job Details Section */}
                <div className="lg:w-2/3">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
                    <div className="flex items-center gap-x-3 mb-4">
                        <img
                            alt="Job Poster"
                            src={job.imageSrc}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{job.createdBy}</h3>
                            {/* <p className="text-sm text-gray-500">{`Posted ${formatDistanceToNow(jobCreatedDate)} ago`}</p> */}
                        </div>
                    </div>

                    <p className="text-md text-gray-700 mb-6">{job.description}</p>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800">Location: <span className="text-gray-600">{job.location}</span></h4>
                        <h4 className="font-semibold text-gray-800">Job Type: <span className="text-gray-600">{job.jobType}</span></h4>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800">Salary: 
                            <span className="text-gray-600"> ${job.minSalary} - ${job.maxSalary}</span>
                        </h4>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800">Application Deadline: 
                            <span className="text-gray-600">{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                        </h4>
                    </div>

                    <div>
                        <button
                            onClick={() => alert('Apply Now!')}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                {/* Job Poster Info Section */}
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Poster Info</h3>
                        <div className="flex items-center gap-x-3">
                            <img
                                alt="Poster"
                                src={job.imageSrc}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{job.createdBy}</h4>
                                <p className="text-md text-gray-600">Recruiter</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-800">Contact:</h4>
                            <p className="text-gray-600">hr@example.com</p>
                            <p className="text-gray-600">+123 456 7890</p>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => alert('Message sent!')}
                                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                            >
                                Contact the Recruiter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// // Helper function to format the date to "distance from now"
// const formatDistanceToNow = (date) => {
//     const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
//     let interval = seconds / 31536000;

//     if (interval > 1) {
//         return `${Math.floor(interval)} years ago`;
//     }
//     interval = seconds / 2592000;
//     if (interval > 1) {
//         return `${Math.floor(interval)} months ago`;
//     }
//     interval = seconds / 86400;
//     if (interval > 1) {
//         return `${Math.floor(interval)} days ago`;
//     }
//     interval = seconds / 3600;
//     if (interval > 1) {
//         return `${Math.floor(interval)} hours ago`;
//     }
//     interval = seconds / 60;
//     if (interval > 1) {
//         return `${Math.floor(interval)} minutes ago`;
//     }
//     return `${Math.floor(seconds)} seconds ago`;
// };

export default JobDetails;
