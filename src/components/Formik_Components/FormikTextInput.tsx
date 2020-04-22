import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

function FormikTextInput() {
    return (
        <div>
            <Formik
                initialValues={{ beerName: '' }}
                onSubmit={data => {
                    console.log("submit:", data);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            data-test="ImputbeerName"
                            placeholder="malte"
                            label="Beer Name"
                            variant="outlined"
                            name="beerName"
                            value={values.beerName}
                            onChange={handleChange}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormikTextInput;
