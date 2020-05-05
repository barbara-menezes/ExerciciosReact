import React from 'react';
import { shallow } from 'enzyme';
import FormTextInput from './FormTextInput';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<FormTextInput />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.prop('className')).toBe('textInput');
    });
    it('Should check the tags created on the function', () => {
        const wrapper = shallow(<FormTextInput />);
        const divWrapper = wrapper.find('div');
        const labelWrapper = wrapper.find('label');
        const inputWrapper = wrapper.find('input');

        expect(divWrapper).toHaveLength(1);
        expect(labelWrapper).toHaveLength(1);
        expect(inputWrapper).toHaveLength(1);
    });
    it('renders text input with label (default type)', () => {
        const wrapper = shallow(<FormTextInput />);
        const label = wrapper.find('label');
        const input = wrapper.find('input');

        expect(label.prop('htmlFor')).toEqual('beerName');
        expect(label.text()).toEqual('Beer Name: ');
        expect(input.prop('type')).toEqual('text');
        expect(input.prop('name')).toEqual('beerName');
        expect(input.prop('data-test')).toEqual('beerName');
    });
    it('Should capture beerName correctly onChange', function () {
        const onChange = jest.fn();
        const value = "teste";
        const component = shallow(<FormTextInput value={value} onChange={onChange} />);
        const input = component.find('input').at(0);

        expect(input.props().value).toEqual(value);
    });
});