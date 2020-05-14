import React from 'react';
import { FastField, FieldProps } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
    name: string;
    type?: 'text' | 'number' | 'password' | 'textarea';
    placeholder?: string;
}

function FormikCheckbox(props: Props) {
    return (
        <FastField name={props.name}>
            {(fieldProps: FieldProps) => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                data-test-id='hascorn-formik'
                                name={fieldProps.field.name}
                                value={fieldProps.field.value || false}
                                onChange={fieldProps.field.onChange}
                                onBlur={fieldProps.field.onBlur}
                            />
                        }
                        label="Has Corn"
                        labelPlacement="start"
                    />
                );
            }}
        </FastField>
    );
}

export default FormikCheckbox;
