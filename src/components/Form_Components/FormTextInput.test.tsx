import React from 'react';
import { shallow, mount } from 'enzyme';
import FormTextInput from './FormTextInput';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<FormTextInput />);

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
        const wrapper = mount(<FormTextInput />);
        const label = wrapper.find('label');
        const input = wrapper.find('input');

        expect(label).toHaveLength(1);
        expect(label.prop('htmlFor')).toEqual('beerName');
        expect(label.text()).toEqual('Beer Name: ');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('text');
        expect(input.prop('name')).toEqual('beerName');
        expect(input.prop('id')).toEqual('beerName');
    });
    it('Should capture beerNsme correctly onChange', function(){
        const onChange = jest.fn();
        const component = mount(<FormTextInput value={"teste"} onChange={onChange} />);
        const input = component.find('input').at(0);

        expect(input.props().value).toEqual('teste');
      })

});