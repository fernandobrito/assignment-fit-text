import React from 'react';

import { Line } from 'react-chartjs-2';

export class LineChart extends React.Component<any, any> {
  formatData() {
    return {
      labels: Array.from(Array(this.props.data.length).keys()),
      datasets: [{
        data: this.props.data,
        label: this.props.name,
        radius: 0
      }]
    }
  };


  render() {
    return (
      <Line
        data={this.formatData()}
        options={{
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
        }}
      />
    );
  }
}
