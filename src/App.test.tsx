import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('DogDetails', () => {
  it('Should open an alert on the button', () => {
    const wrapper = shallow(<App />);
      
    expect(wrapper.find('.App')).toHaveLength(1);
  });
  it('Should open an alert on the button', () => {
    const wrapper = shallow(<App />);
      
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });
});


