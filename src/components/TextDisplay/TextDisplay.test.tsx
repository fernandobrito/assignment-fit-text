import React from 'react';

import { shallow } from 'enzyme';

import { ITextDisplayProps, TextDisplay } from './';

const onChangeMock = jest.fn();
const defaultProps = {
  className: 'class',
  width: 200,
  height: 100,
  children: 'text'
} as ITextDisplayProps;

describe('TextDisplay', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TextDisplay {...defaultProps} />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders its children', () => {
    expect(wrapper.text()).toBe(defaultProps.children);
  });
});
