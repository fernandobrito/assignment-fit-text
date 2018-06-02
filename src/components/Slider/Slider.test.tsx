import React from 'react';

import { shallow } from 'enzyme';

import { ISliderProps, Slider } from './';

const onChangeMock = jest.fn();
const defaultProps = {
  id: 'id',
  min: 1,
  max: 10,
  value: 3,
  onChange: onChangeMock
} as ISliderProps;

describe('Slider', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Slider {...defaultProps} />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders a input field', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('passes the id, min and max props to the input field', () => {
    const input = wrapper.find('input');
    expect(input.prop('id')).toBe(defaultProps.id);
    expect(input.prop('min')).toBe(defaultProps.min);
    expect(input.prop('max')).toBe(defaultProps.max);
    expect(input.prop('value')).toBe(defaultProps.value);
  });

  it('triggers onChange when input value changes', () => {
    const eventMock = { target: { value: 7 } };
    wrapper.find('input').simulate('change', eventMock);
    expect(onChangeMock).toHaveBeenCalledWith(eventMock);
  });
});
