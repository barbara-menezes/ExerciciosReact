import React from 'react';
import { FastField, FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField';

interface Props {
    name: string;
    type?: 'text' | 'number' | 'password' | 'textarea';
    placeholder?: string;
}

function FormikTextInput(props: Props) {
    return (
        <FastField name={props.name}>
            {(fieldProps: FieldProps) => {
                return (
                    <TextField
                        data-test-id="beername-formik"
                        name={fieldProps.field.name}
                        value={fieldProps.field.value || ''}
                        onChange={fieldProps.field.onChange}
                        onBlur={fieldProps.field.onBlur}
                        type={props.type || 'text'}
                        placeholder={props.placeholder || ''}
                        variant="outlined"
                    />
                );
            }}
        </FastField>
    )
}

export default FormikTextInput;
