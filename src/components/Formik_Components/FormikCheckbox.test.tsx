import React from 'react';
import { shallow } from 'enzyme';
import FormikCheckbox from './FormikCheckbox';
import { FastField } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

describe('<FormikCheckbox />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('Should check all the parameters of the children', function () {

        const fieldPropsMock = {
            field: {
                name: 'test-name',
                value: 'test-value',
                onChange: jest.fn(),
                onBlur: jest.fn()
            },
        };

        const wrapper = shallow(<FormikCheckbox type='text' name='' placeholder='test-placeholder' />)
        .find(FastField).renderProp('children')(fieldPropsMock);
        const wrapperProps = wrapper.prop('control');

        expect(wrapper).toHaveLength(1);
        expect(wrapper.type()).toBe(FormControlLabel);
        //expect(wrapper.type('displayname')).toBe(Checkbox);
        //expect(wrapperProps.name).toBe('test-name');
        //expect(wrapperProps.value).toBe('test-value');
        //expect(wrapperProps.onBlur).toBe(fieldPropsMock.field.onBlur);
        //expect(wrapperProps.onChange).toBe(fieldPropsMock.field.onChange);
        //expect(wrapperProps.prop('placeholder')).toBe('test-placeholder');
    });
});