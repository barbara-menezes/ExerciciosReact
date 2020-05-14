import React from 'react';
import { shallow } from 'enzyme';
import FormikSelect from './FormikSelect';
import { FastField } from 'formik';
import { Select } from '@material-ui/core';
import { InputLabel, FormControl } from '@material-ui/core';

describe('<FormikSelect />', () => {
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

        const wrapper = shallow(<FormikSelect type='text' name='' placeholder='test-placeholder' />)
        .find(FastField).renderProp('children')(fieldPropsMock);
        const inputlabel = wrapper.childAt(0);
        const select = wrapper.childAt(1);
        const selectProps = select.props();

        expect(wrapper).toHaveLength(1);
        expect(wrapper.type()).toBe(FormControl);
        expect(inputlabel.type()).toBe(InputLabel);
        expect(select.type()).toBe(Select);
        expect(selectProps.name).toBe('test-name');
        expect(selectProps.value).toBe('test-value');
        expect(selectProps.onBlur).toBe(fieldPropsMock.field.onBlur);
        expect(selectProps.onChange).toBe(fieldPropsMock.field.onChange);
        expect(select.prop('placeholder')).toBe('test-placeholder');
    });
});