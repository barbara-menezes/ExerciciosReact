import React from 'react';
import { shallow, mount } from 'enzyme';
import FormCheckbox from './FormCheckbox';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<FormCheckbox />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.prop('className')).toBe('checkbox');
    });
    it('Should check the tags created on the function', () => {
        const wrapper = shallow(<FormCheckbox />);
        const divWrapper = wrapper.find('div');
        const labelWrapper = wrapper.find('label');
        const inputWrapper = wrapper.find('input');

        expect(divWrapper).toHaveLength(1);
        expect(labelWrapper).toHaveLength(1);
        expect(inputWrapper).toHaveLength(1);
    });
    it('renders text input with label (default type)', () => {
        const wrapper = mount(<FormCheckbox />);
        const label = wrapper.find('label');
        const input = wrapper.find('input');

        expect(label.prop('htmlFor')).toEqual('hasCorn');
        expect(label.text()).toEqual('Has Corn: ');
        expect(input.prop('type')).toEqual('checkbox');
        expect(input.prop('name')).toEqual('hasCorn');
        expect(input.prop('data-test')).toEqual('hasCorn');
    });
    it('Should capture beerName correctly onChange', function () {
        const onChange = jest.fn();
        const value = false;
        const component = mount(<FormCheckbox value={value} onChange={onChange} />);
        const input = component.find('input').at(0);

        expect(input.props().value).toEqual(value);
    });
});