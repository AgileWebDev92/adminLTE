import { useEffect, useState } from 'react';

const BarChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.chartOptions);
  }, []);

  return <></>;
};

export default BarChart;
