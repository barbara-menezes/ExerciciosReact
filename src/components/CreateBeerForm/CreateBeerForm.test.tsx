import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
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
    // it('Should check the order of the tags created on the function', () => {

    //     const wrapper = mount(<CreateBeerForm />);
    //     const wrapperForm = wrapper.find('form');
    //     console.log(wrapperForm.debug());

    //     expect(wrapperForm.childAt(1).type()).toBe('FormTextInput');
    //     expect(wrapperForm.childAt(2).type()).toBe('FormSelect');
    //     expect(wrapperForm.childAt(3).type()).toBe('FormCheckbox');
    //     expect(wrapperForm.childAt(4).type()).toBe('FormTextArea');
    //     expect(wrapperForm.childAt(5).type()).toBe('button');
    // });
    it('renders text input with label (default type)', () => {
        const wrapper = shallow(<CreateBeerForm />);
        const button = wrapper.find('button');
        
        expect(button.prop('type')).toEqual('submit');
        expect(button.prop('name')).toEqual('formSubmit');
        expect(button.text()).toEqual('Submit');
        expect(button.prop('data-test')).toEqual('formSubmit');
    });
    it('calls onSubmit prop function when form is submitted', () => {
        console.log = jest.fn();
        const component = shallow(<CreateBeerForm />);
        
        const input = component.find('FormTextInput');
        input.simulate('change', { target: { name:'beerName', value: 'pilsen'} });
        const select = component.find('FormSelect');
        select.simulate('change', { target: { name:'beerType', value: 'Ale'} });
        const checkbox = component.find('FormCheckbox');
        checkbox.simulate('change', { target: { name:'hasCorn', value: true} });
        const inputArea = component.find('FormTextArea');
		inputArea.simulate('change', { target: { name:'ingredients', value: 'text 1, text 2'} });
        
        component.find('form').simulate('submit', {
            preventDefault: jest.fn()
        });

        expect(console.log).toHaveBeenCalledTimes(1);
        //expect(console.log).toBe({ input, select, checkbox, inputArea });
    });
});