import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateBeerFormikForm from './CreateBeerFormikForm';
import { Formik } from 'formik';

Enzyme.configure({ adapter: new Adapter() });

describe("<CreateBeerFormikForm />", () => {
  it("Should check if there is a formik form", () => {
    const wrapper = shallow(<CreateBeerFormikForm />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.type()).toBe(Formik);
   });
  // it('Should check the tags created on the function', () => {
  //   const wrapper = shallow(<CreateBeerFormikForm />)
  //     .renderProp('children')({});
  //   const formikTextInputWrapper = wrapper.find('FormikTextInput');
  //   const formikSelectWrapper = wrapper.find('FormikSelect');
  //   const formikCheckboxWrapper = wrapper.find('FormikCheckbox');
  //   const formikTextAreaWrapper = wrapper.find('FormikTextArea');
  //   const buttonWrapper = wrapper.find('button');

  //   expect(wrapper.find('Form').prop('className')).toBe('form');
  //   expect(formikCheckboxWrapper).toHaveLength(1);
  //   expect(formikSelectWrapper).toHaveLength(1);
  //   expect(formikTextAreaWrapper).toHaveLength(1);
  //   expect(formikTextInputWrapper).toHaveLength(1);
  //   expect(buttonWrapper).toHaveLength(1);
  // });
  // it("submits when values are correct", () => {
  //   console.log = jest.fn();
  //   initialValues={{ beerName: '', beerType: '', hasCorn: '', ingredients: '' }}
  //   const wrapper = shallow(<CreateBeerFormikForm />);

  //   const input = wrapper.find('[data-test-id="beername-formik"]').at(0).simulate("change", {
  //     target: { name: 'beerName', value: 'Skol' }
  //   });
  //   const select = wrapper.find('[data-test-id="beertype-formik"]').at(0).simulate("change", {
  //     target: { name: 'beerType', value: 'Ale' }
  //   });
  //   const checkbox = wrapper.find('[data-test-id="hascorn-formik"]').at(0).simulate("change", {
  //     target: { name: 'hasCorn', value: true }
  //   });
  //   const inputArea = wrapper.find('[data-test-id="ingredients-formik"]').at(0).simulate("change", {
  //     target: { name: 'ingredients', value: "cevada" }
  //   });

  //   const formWrapper = wrapper.find('form');
  //   formWrapper.find("button").simulate('submit');

  //   expect(console.log).toHaveBeenCalledTimes(1);
  //   expect(console.log).toBe({ input, select, checkbox, inputArea });
  // });
});