import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const IndustryTrendChart = ({ data }) => {
  const industryYearFunding = {};

  data.forEach(entry => {
    const { industry, year, amount } = entry;
    if (!industryYearFunding[industry]) industryYearFunding[industry] = {};
    industryYearFunding[industry][year] = (industryYearFunding[industry][year] || 0) + amount;
  });

  const years = [...new Set(data.map(d => d.year))].sort();

  const datasets = Object.entries(industryYearFunding).map(([industry, yearData]) => ({
    label: industry,
    data: years.map(year => yearData[year] || 0),
    fill: false,
    borderColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
  }));

  const chartData = {
    labels: years,
    datasets,
  };

  return (
    <div>
      <h2>Funding Trends by Industry</h2>
      <Line data={chartData} />
    </div>
  );
};

export default IndustryTrendChart;