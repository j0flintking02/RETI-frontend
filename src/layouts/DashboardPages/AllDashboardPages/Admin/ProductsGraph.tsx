
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ProductStockStatistics = () => {
  // Sample data for product stock
  const data = {
    labels: ['Product Stock'],  // Only one label for "Product Stock"
    datasets: [
      {
        label: 'In Stock',
        data: [150],  // Example data for In Stock products
        backgroundColor: '#4CAF50', // Green for In Stock
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'Out of Stock',
        data: [30],  // Example data for Out of Stock products
        backgroundColor: '#FF3300', // Red for Out of Stock
        borderColor: '#CC2900', // Darker red for the border
        borderWidth: 1,
      },
      {
        label: 'Low Stock',
        data: [45],  // Example data for Low Stock products
        backgroundColor: '#2196F3', // Blue for Low Stock
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
        text: 'Product Stock Status',
      },
    },
  };

  return (
    <div className="p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductStockStatistics;
