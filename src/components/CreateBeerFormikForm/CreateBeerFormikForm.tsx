import React from 'react';
import FormikTextInput from '../Formik_Components/FormikTextInput';
import FormikSelect from '../Formik_Components/FormikSelect';
import FormikCheckbox from '../Formik_Components/FormikCheckbox';
import FormikTextArea from '../Formik_Components/FormikTextArea';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button } from '@material-ui/core';
const validations = yup.object().shape({
    beerName: yup.string().min(3, 'Beer Name must have at least 3 characters').required('Beer Name is required'),
    beerType: yup.string().required('Beer Type is required'),
    ingredients: yup.string().min(3, 'Ingredients must have at least 3 characters').required('Ingredients is required')
});

function CreateBeerFormikForm() {
    return (
        <Formik
            initialValues={{ beerName: '', beerType: 'Ale', hasCorn: '', ingredients: '' }}
            onSubmit={data => {
                console.log(data);
            }}
            validationSchema={validations}
        >
            {({ errors, touched }) => (
                <Form className='form'>
                    <div style={{color: "black"}}>Formik</div>
                        <div>
                            {touched && touched.beerName && errors && errors.beerName && <p style={{color: "red"}}>{errors.beerName}</p>}
                            <FormikTextInput type='text' name='beerName' placeholder='beerName' data-test-id="beername-formik" />
                        </div>
                        <div>
                            {touched && touched.beerType && errors && errors.beerType && <p style={{color: "red"}}>{errors.beerType}</p>}
                            <FormikSelect name='beerType' placeholder='beerType' data-test-id='beertype-formik' />
                        </div>
                        <div>
                            {touched && touched.hasCorn && errors && errors.hasCorn && <p style={{color: "red"}}>{errors.hasCorn}</p>}
                            <FormikCheckbox name='hasCorn' placeholder='hasCorn' data-test-id='hascorn-formik' />
                        </div>
                        <div>
                            {touched && touched.ingredients && errors && errors.ingredients && <p style={{color: "red"}}>{errors.ingredients}</p>}
                            <FormikTextArea type='text' name='ingredients' placeholder='ingredients' data-test-id='ingredients-formik' />
                        </div>
                        <Button
                            data-test="formSubmit"
                            color="primary"
                            type="submit"
                            variant="contained"
                            disabled={Object.keys(errors).length === 0 ? false : true}
                        >
                            Submit
                    </Button>
                </Form>
            )}
        </Formik>

    );
}

export default CreateBeerFormikForm;