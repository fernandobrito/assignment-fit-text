import React from 'react';

import { mount } from 'enzyme';

import * as Cookies from 'js-cookie';

import { LineChart } from './LineChart';
import { TextDisplay } from './TextDisplay';
import { TextInput } from './TextInput';
import { Slider } from './Slider';

import { App } from './App';

jest.mock('react-chartjs-2');
jest.mock('js-cookie');

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<App />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders a TextInput', () => {
    expect(wrapper.find(TextInput).length).toBe(1);
  });

  it('listens to TextInput changes and update TextDisplay', () => {
    wrapper.find(TextInput).prop('onChange')({ target: { value: 'new text' } });
    expect(wrapper.update().find(TextDisplay).prop('children')).toBe('new text');
  });

  it('renders a Slider', () => {
    expect(wrapper.find(Slider).length).toBe(1);
  });

  it('listens to Slider changes and update TextDisplay', () => {
    wrapper.find(Slider).prop('onChange')({ target: { value: 6 } });
    expect(wrapper.update().find(TextDisplay).prop('width')).toBe(6);
  });

  it('renders a TextDisplay', () => {
    expect(wrapper.find(TextDisplay).length).toBe(1);
  });

  it('renders a LineChart', () => {
    expect(wrapper.find(LineChart).length).toBe(1);
  });

  describe('cookies', () => {
    it('reads text and display width from cookies on mount', () => {
      expect(Cookies.get).toHaveBeenCalledWith('text');
      expect(Cookies.get).toHaveBeenCalledWith('textDisplayWidth');
    });

    it('stores text and display width on cookies when they change', () => {
      wrapper.find(TextInput).prop('onChange')({ target: { value: 'new text' } });
      wrapper.find(Slider).prop('onChange')({ target: { value: 9 } });
      expect(Cookies.set).toHaveBeenCalledWith('text', 'new text');
      expect(Cookies.set).toHaveBeenCalledWith('textDisplayWidth', 9);
    });
  });
});
