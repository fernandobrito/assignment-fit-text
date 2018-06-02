import React from 'react';

import { shallow } from 'enzyme';
import { Line } from 'react-chartjs-2';

import { ILineChartProps, LineChart } from './';

const defaultProps = {
  name: 'Data series',
  data: [1, 2, 3]
} as ILineChartProps;

describe('LineChart', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<LineChart {...defaultProps} />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders a line graph', () => {
    expect(wrapper.find(Line).length).toBe(1);
  });

  it('passes the data to the graph', () => {
    const formattedData = wrapper.find(Line).prop('data');
    expect(formattedData.datasets[0].label).toBe(defaultProps.name);
    expect(formattedData.datasets[0].data).toBe(defaultProps.data);
  });
});
