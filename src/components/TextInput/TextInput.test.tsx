import React from 'react';

import { shallow } from 'enzyme';

import { ITextInputProps, TextInput } from './';

const onChangeMock = jest.fn();
const defaultProps = {
  id: 'id',
  value: 'value',
  onChange: onChangeMock
} as ITextInputProps;

describe('TextInput', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TextInput {...defaultProps} />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders a input field', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('passes the id to the input field', () => {
    const input = wrapper.find('input');
    expect(input.prop('id')).toBe(defaultProps.id);
  });

  it('triggers onChange when input value changes', () => {
    const eventMock = { target: { value: 'new' } };
    wrapper.find('input').simulate('change', eventMock);
    expect(onChangeMock).toHaveBeenCalledWith(eventMock);
  });
});
