import React from 'react';
import { shallow, mount } from 'enzyme';
import FormTextArea from './FormTextArea';

describe('DogDetails', () => {
    it('Should check the className of the function', () => {
        const wrapper = shallow(<FormTextArea />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.prop('className')).toBe('textArea');
    });
    it('Should check the tags created on the function', () => {
        const wrapper = shallow(<FormTextArea />);
        const divWrapper = wrapper.find('div');
        const labelWrapper = wrapper.find('label');
        const textAreaWrapper = wrapper.find('textarea');

        expect(divWrapper).toHaveLength(1);
        expect(labelWrapper).toHaveLength(1);
        expect(textAreaWrapper).toHaveLength(1);
    });
    it('renders text input with label (default type)', () => {
        const wrapper = mount(<FormTextArea />);
        const label = wrapper.find('label');
        const textarea = wrapper.find('textarea');

        expect(label.prop('htmlFor')).toEqual('ingredients');
        expect(label.text()).toEqual('Ingredients: ');
        expect(textarea.prop('name')).toEqual('ingredients');
        expect(textarea.prop('data-test')).toEqual('ingredients');
    });
    it('Should capture beerName correctly onChange', function () {
        const onChange = jest.fn();
        const value = "teste1, teste2, teste3";
        const component = mount(<FormTextArea value={value} onChange={onChange} />);
        const textarea = component.find('textarea').at(0);

        expect(textarea.props().value).toEqual(value);
    });
});