import React from 'react';
import { Formik } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormikCheckbox() {
    return (
        <div>
            <Formik
                initialValues={{ hasCorn: true }}
                onSubmit={data => {
                    console.log("submit:", data);
                }}
            >
                {({ values, setFieldValue, handleBlur, handleSubmit }) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    data-test="CheckboxHasCorn"
                                    name="hasCorn"
                                    checked={values.hasCorn}
                                    onChange={() => setFieldValue("hasCorn", !values.hasCorn)} color="primary"
                                />
                            }
                            label="Start"
                            labelPlacement="start"
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormikCheckbox;
