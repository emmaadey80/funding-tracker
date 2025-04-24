import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FundingBarChart = ({ data }) => {
  const yearFunding = {};

  data.forEach(entry => {
    const year = entry.year;
    yearFunding[year] = (yearFunding[year] || 0) + entry.amount;
  });

  const chartData = {
    labels: Object.keys(yearFunding),
    datasets: [
      {
        label: 'Total Funding ($)',
        data: Object.values(yearFunding),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Total Funding by Year</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default FundingBarChart;