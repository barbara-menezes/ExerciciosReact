import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from '../components/DogDetails';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<DogDetails />);

        expect(wrapper.prop('className')).toBe('details');
    });
    it('Should check the tags created on the function', () => {

        const wrapper = shallow(<DogDetails />);
        const buttonWrapper = wrapper.find('button');
        const h1Wrapper = wrapper.find('h1');
        const imageWrapper = wrapper.find('img');
    
        expect(buttonWrapper).toHaveLength(2);
        expect(h1Wrapper).toHaveLength(1);
        expect(imageWrapper).toHaveLength(1);
    });
    it('Should check the order of the tags created on the function', () => {

        const wrapper = shallow(<DogDetails />);
    
        expect(wrapper.childAt(0).type()).toBe('button');
        expect(wrapper.childAt(1).type()).toBe('h1');
        expect(wrapper.childAt(2).type()).toBe('img');
        expect(wrapper.childAt(3).type()).toBe('button');
    });
    it('Should open an alert onBarkButton', () => {

        const onBarkButton = jest.fn();
        const wrapper = shallow(<DogDetails onBarkButton={onBarkButton} />);
        const buttonWrapper = wrapper.find('button');
        
        expect(buttonWrapper.at(0).exists()).toBeTruthy();
        
        buttonWrapper.at(0).simulate('click');
        
        expect(onBarkButton).toHaveBeenCalledTimes(1);
    });
    it('Should open an alert onCounter', () => {
        
        const onCounter = jest.fn();
        const wrapper = shallow(<DogDetails />);
        const buttonWrapper = wrapper.find('button');
        
        expect(buttonWrapper.at(0).exists()).toBeTruthy();
        
        buttonWrapper.at(1).simulate('click');
        
        expect(onCounter).toHaveBeenCalledTimes(0);
    });
  });