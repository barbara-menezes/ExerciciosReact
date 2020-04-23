import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<CreateBeerForm />);

        expect(wrapper.prop('className')).toBe('form');
        expect(wrapper.prop('className')).toBe('textInput');
        expect(wrapper.prop('className')).toBe('select');
        expect(wrapper.prop('className')).toBe('checkbox');
        expect(wrapper.prop('className')).toBe('textArea');
        expect(wrapper.prop('className')).toBe('submit');
    });
    it('Should check the tags created on the function', () => {

        const wrapper = shallow(<CreateBeerForm />);
        const buttonWrapper = wrapper.find('button');
        const h1Wrapper = wrapper.find('h1');
        const imageWrapper = wrapper.find('img');
        const componentWrapper = wrapper.find(Counter);

        expect(buttonWrapper).toHaveLength(1);
        expect(h1Wrapper).toHaveLength(1);
        expect(imageWrapper).toHaveLength(1);
        expect(componentWrapper).toHaveLength(1);
    });
    it('Should check the order of the tags created on the function', () => {

        const wrapper = shallow(<CreateBeerForm />);

        expect(wrapper.childAt(0).type()).toBe('button');
        expect(wrapper.childAt(1).type()).toBe('h1');
        expect(wrapper.childAt(2).type()).toBe('img');
        expect(wrapper.childAt(3).type()).toBe(Counter);
    });
    it('Should open an alert onBarkButton', () => {

        const onBarkButton = jest.fn();
        const wrapper = shallow(<CreateBeerForm onBarkButton={onBarkButton} />);
        const buttonWrapper = wrapper.find('button');

        expect(buttonWrapper.at(0).exists()).toBeTruthy();

        buttonWrapper.at(0).simulate('click');

        expect(onBarkButton).toHaveBeenCalledTimes(1);
    });
});