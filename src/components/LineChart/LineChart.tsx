import React from 'react';

import { Line } from 'react-chartjs-2';

export interface ILineChartProps {
  name: string;
  data: number[];
}

export const LineChart: React.SFC<ILineChartProps> = (props) => {
  const options = {
    legend: {
      labels: {
        fontColor: '#3a0e35'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#3a0e35'
        }
      }],
      xAxes: [{
        display: false
      }]
    }
  };

  const formatData = () => {
    return {
      labels: Array.from(Array(props.data.length).keys()),
      datasets: [{
        data: props.data,
        label: props.name,
        radius: 0
      }]
    };
  };

  return (
    <Line
      data={formatData()}
      options={options}
    />
  );
};
