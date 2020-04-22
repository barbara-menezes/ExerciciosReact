import React from 'react';
import { Formik } from 'formik';
import Select from '@material-ui/core/Select';
import { InputLabel, FormControl } from '@material-ui/core';

function FormikSelect() {
    return (
        <div>
            <Formik
                initialValues={{ beerType: '' }}
                onSubmit={data => {
                    console.log("submit:", data);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (

                    <form className="form" onSubmit={handleSubmit}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Types</InputLabel>
                            <Select
                                native
                                value={values.beerType}
                                onChange={handleChange}
                            >
                                <option aria-label="None" value=""/>
                                <option value="Ale">Ale</option>
                                <option value="Lager">Lager</option>
                                <option value="Stout">Stout</option>
                            </Select>
                        </FormControl>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormikSelect;
