import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement, 
  Tooltip,
  Legend, 
  CategoryScale,
  LinearScale
} from "chart.js";
import { Chart, BarController, BarElement } from 'chart.js';
Chart.register(BarController, BarElement);
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement, 
  Tooltip,
  Legend, 

)

function BarChart() {
  const [chartData, setChartData] = useState({
    datasets : [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Users',
          data: [4005,3003,1020,9600,2000,1200,4500],
          borderColor: 'rgb(53,162,235)',
          backgroundColor: 'rgb(53,162,235,0.4)'
        }

      ]
    })  
  }, [])
  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] w-[50vh] m-auto p-4 border rounded-lg bg-white mx-[15%]'>
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default BarChart