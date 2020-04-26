import React from 'react';
import { shallow, mount } from 'enzyme';
import FormSelect from './FormSelect';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<FormSelect />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.prop('className')).toBe('select');
    });
    it('Should check the tags created on the function', () => {
        const wrapper = shallow(<FormSelect />);
        const divWrapper = wrapper.find('div');
        const labelWrapper = wrapper.find('label');
        const selectWrapper = wrapper.find('select');
        const optionWrapper = wrapper.find('option');

        expect(divWrapper).toHaveLength(1);
        expect(labelWrapper).toHaveLength(1);
        expect(selectWrapper).toHaveLength(1);
        expect(optionWrapper).toHaveLength(4);
    });
    it('renders text input with label (default type)', () => {
        const wrapper = mount(<FormSelect />);
        const label = wrapper.find('label');
        const select = wrapper.find('select');

        expect(label.prop('htmlFor')).toEqual('beerType');
        expect(label.text()).toEqual('Beer Type: ');
        expect(select.prop('name')).toEqual('beerType');
        expect(select.prop('data-test')).toEqual('beerType');
    });
    it('Should capture beerName correctly onChange', function () {
        const onChange = jest.fn();
        const value = "Lager";
        const component = mount(<FormSelect value={value} onChange={onChange} />);
        const option = component.find('option').at(2);

        expect(option.props().value).toEqual(value);
    });
});