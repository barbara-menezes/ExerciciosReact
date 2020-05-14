import React from 'react';
import { FastField, FieldProps } from 'formik';
import Select from '@material-ui/core/Select';
import { InputLabel, FormControl } from '@material-ui/core';

interface Props {
    name: string;
    type?: 'text' | 'number' | 'password' | 'textarea';
    placeholder?: string;
}

function FormikSelect(props: Props) {
    return (
        <FastField name={props.name}>
            {(fieldProps: FieldProps) => {
                return (
                    <FormControl>
                        <InputLabel htmlFor="demo">Beer Type</InputLabel>
                        <Select
                            data-test-id="beertype-formik"
                            name={fieldProps.field.name}
                            value={fieldProps.field.value || 'Ale'}
                            onChange={fieldProps.field.onChange}
                            onBlur={fieldProps.field.onBlur}
                            placeholder={props.placeholder || ''}
                        >
                            <option value="Ale">Ale</option>
                            <option value="Lager">Lager</option>
                            <option value="Stout">Stout</option>
                        </Select>
                    </FormControl>
                );
            }}
        </FastField>
    );
}

export default FormikSelect;
