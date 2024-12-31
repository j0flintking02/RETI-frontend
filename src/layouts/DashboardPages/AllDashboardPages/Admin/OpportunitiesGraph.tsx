
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const JobOpportunitiesStatistics = () => {
  // Sample data for job opportunities
  const data = {
    labels: ['Job Opportunities'],  // Only one label for "Job Opportunities"
    datasets: [
      {
        label: 'Available Jobs',
        data: [120],  // Example data for Available Jobs
        backgroundColor: '#4CAF50', // Green for Available Jobs
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'Applied Jobs',
        data: [80],  // Example data for Applied Jobs
        backgroundColor: '#FF9800', // Orange for Applied Jobs
        borderColor: '#F57C00',
        borderWidth: 1,
      },
      {
        label: 'Hired Jobs',
        data: [40],  // Example data for Hired Jobs
        backgroundColor: '#2196F3', // Blue for Hired Jobs
        borderColor: '#1976D2',
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Job Opportunities by Status',
      },
    },
  };

  return (
    <div className="p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default JobOpportunitiesStatistics;
