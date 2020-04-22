import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

function FormikTextArea() {
    return (
        <div>
            <Formik
                initialValues={{ ingredients: '' }}
                onSubmit={data => {
                    console.log("submit:", data);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (

                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            data-test="ImputIngredients"
                            name="ingredients"
                            placeholder="malte"
                            label="Ingredients"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.ingredients}
                            onChange={handleChange}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormikTextArea;
