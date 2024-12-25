
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import 'tailwindcss/tailwind.css';


// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UserStatistics = () => {
  // Sample data
  const data = {
    labels: [ 'Users', ],
    datasets: [
      {
        label: 'Mentors',
        data: [5000], // Example data for mentors, users, employees
        backgroundColor: '#4CAF50', // Green for Mentors
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'Youth',
        data: [6000], // Example data for Users
        backgroundColor: '#FF9800', // Orange for Users
        borderColor: '#F57C00',
        borderWidth: 1,
      },
      {
        label: 'Employees',
        data: [900], // Example data for Employees
        backgroundColor: '#2196F3', // Blue for Employees
        borderColor: '#1976D2',
        borderWidth: 1,
      },
    ],
  };

  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Total Users by Type',
      },
    },
  };

  return (
    <div className="p-4">
     
        <Bar data={data} options={options} />
      
    </div>
  );
};

export default UserStatistics;
