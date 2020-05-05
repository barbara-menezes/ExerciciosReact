import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateBeerForm from './CreateBeerForm';

Enzyme.configure({ adapter: new Adapter() });

describe("Title input", () => {
    it("Should capture title correctly onChange", () => {
        const wrapper = shallow(<CreateBeerForm />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.prop('className')).toBe('form');
    });
    it('Should check the tags created on the function', () => {
        const wrapper = shallow(<CreateBeerForm />);
        const formCheckboxWrapper = wrapper.find('FormCheckbox');
        const formSelectWrapper = wrapper.find('FormSelect');
        const formTextAreaWrapper = wrapper.find('FormTextArea');
        const formTextInputWrapper = wrapper.find('FormTextInput');
        const buttonWrapper = wrapper.find('button');

        expect(formCheckboxWrapper).toHaveLength(1);
        expect(formSelectWrapper).toHaveLength(1);
        expect(formTextAreaWrapper).toHaveLength(1);
        expect(formTextInputWrapper).toHaveLength(1);
        expect(buttonWrapper).toHaveLength(1);
    });
    it('renders text input with label (default type)', () => {
        const wrapper = shallow(<CreateBeerForm />);
        const button = wrapper.find('button');
        
        expect(button.prop('type')).toEqual('submit');
        expect(button.prop('name')).toEqual('formSubmit');
        expect(button.prop('data-test')).toEqual('formSubmit');
    });
    it('calls onSubmit prop function when form is submitted', () => {
        console.log = jest.fn();
        const component = shallow(<CreateBeerForm />);

        component.find('form').simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(console.log).toHaveBeenCalledTimes(1);
    });
});