import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('Should check the className of the function', () => {
    const wrapper = shallow(<Counter initialCount={0} />);

    expect(wrapper.prop('className')).toBe('details');
  });
  it('Should check the tags created on the function', () => {

    const wrapper = shallow(<Counter initialCount={0} />);
    const buttonWrapper = wrapper.find('button');
    const pWrapper = wrapper.find('p');

    expect(buttonWrapper).toHaveLength(1);
    expect(pWrapper).toHaveLength(1);
  });
  it('Should check the order of the tags created on the function', () => {

    const wrapper = shallow(<Counter initialCount={0} />);

    expect(wrapper.childAt(0).type()).toBe('button');
    expect(wrapper.childAt(1).type()).toBe('p');
  });
  it('Should show the initial value', () => {
    const wrapper = shallow(<Counter initialCount={5} />);
    expect(wrapper.text()).toBe('Scold!You clicked 5 times');
  });

  it('Should increment value after click on "Increment"', () => {
    const wrapper = shallow(<Counter initialCount={5} />);
    wrapper.find('button').simulate('click');

    expect(wrapper.text()).toBe('Scold!You clicked 6 times');
  });
});