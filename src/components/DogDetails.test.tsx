import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from '../components/DogDetails';

describe('DogDetails', () => {
    it('Should open an alert on the button', () => {
        const wrapper = shallow(<DogDetails />);

        expect(wrapper.find('.details')).toHaveLength(1);
    });
    it('Should open an alert on the button', () => {

        const button = <button />;
        const h1 = <h1/>;
        const image = <img />;

        const wrapper = shallow(<DogDetails />);
    
        expect(wrapper.find(button)).toHaveLength(1);
        expect(wrapper.find(h1)).toHaveLength(1);
        expect(wrapper.find(image)).toHaveLength(1);
    });
    it('Should open an alert on the button', () => {

        const onBarkButton = jest.fn();
        const wrapper = shallow(<DogDetails onBarkButton={onBarkButton} />);
        wrapper.find('button:first-child').simulate('click');

        expect(onBarkButton).toHaveBeenCalledTimes(1);
    });
    it('Should open an alert on the button', () => {
        const onCounter = jest.fn();
        const wrapper = shallow(<DogDetails onCounter={onCounter} />);
        wrapper.find('button.last').simulate('click');

        expect(onCounter).toHaveBeenCalledTimes(1);
    });
  });