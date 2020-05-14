import React from 'react';
import { shallow } from 'enzyme';
import FormikTextInput from './FormikTextInput';
import { FastField } from 'formik';
import TextField from '@material-ui/core/TextField';

describe('<FormikTextInput />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('Should check all the parameters of the child', function () {

        const fieldPropsMock = {
            field: {
                name: 'test-name',
                value: 'test-value',
                onChange: jest.fn(),
                onBlur: jest.fn()
            },
        };

        const wrapper = shallow(<FormikTextInput type='text' name='' placeholder='test-placeholder' />)
        .find(FastField).renderProp('children')(fieldPropsMock);
        const wrapperProps = wrapper.props();

        expect(wrapper).toHaveLength(1);
        expect(wrapper.type()).toBe(TextField);
        expect(wrapperProps.name).toBe('test-name');
        expect(wrapperProps.value).toBe('test-value');
        expect(wrapperProps.type).toBe('text');
        expect(wrapperProps.onBlur).toBe(fieldPropsMock.field.onBlur);
        expect(wrapperProps.onChange).toBe(fieldPropsMock.field.onChange);
        expect(wrapper.prop('placeholder')).toBe('test-placeholder');
    });
});