import { useEffect, useState } from 'react';
import FundingBarChart from './components/FundingBarChart';
import IndustryTrendChart from './components/IndustryTrendChart';

function App() {
  const [fundingData, setFundingData] = useState([]);

  useEffect(() => {
    fetch('/funding.json')
      .then(response => response.json())
      .then(data => setFundingData(data))
      .catch(error => console.error('Error loading funding data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Startup Funding Tracker</h1>
      <FundingBarChart data={fundingData} />
      <IndustryTrendChart data={fundingData} />
    </div>
  );
}

export default App;
