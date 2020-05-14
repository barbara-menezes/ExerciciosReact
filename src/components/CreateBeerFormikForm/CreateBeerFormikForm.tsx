import React from 'react';
import FormikTextInput from '../Formik_Components/FormikTextInput';
import FormikSelect from '../Formik_Components/FormikSelect';
import FormikCheckbox from '../Formik_Components/FormikCheckbox';
import FormikTextArea from '../Formik_Components/FormikTextArea';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
const validations = yup.object().shape({
    beerName: yup.string().min(3, 'Beer Name must have at least 3 characters').required('Beer Name is required'),
    beerType: yup.object().required('Beer Type is required').default('Ale'),
    ingredients: yup.string().min(3, 'Ingredients must have at least 3 characters').required('Ingredients is required')
});

function CreateBeerFormikForm() {
    return (
        <Formik
            initialValues={{ beerName: '', beerType: '', hasCorn: '', ingredients: '' }}
            onSubmit={data => {
                console.log(data);
            }}
            validationSchema={validations}
        >
            {({ errors, touched }) => (
                <Form className='form'>
                    <div>
                        {touched && touched.beerName && errors && errors.beerName && <p>{errors.beerName}</p>}
                        <FormikTextInput type='text' name='beerName' placeholder='beerName' data-test-id="beername-formik"/>
                    </div>
                    <div>
                        {touched && touched.beerType && errors && errors.beerType && <p>{errors.beerType}</p>}
                        <FormikSelect name='beerType' placeholder='beerType' data-test-id='beertype-formik'/>
                    </div>
                    <div>
                        {touched && touched.hasCorn && errors && errors.hasCorn && <p>{errors.hasCorn}</p>}
                        <FormikCheckbox name='hasCorn' placeholder='hasCorn' data-test-id='hascorn-formik' />
                    </div>
                    <div>
                        {touched && touched.ingredients && errors && errors.ingredients && <p>{errors.ingredients}</p>}
                        <FormikTextArea type='text' name='ingredients' placeholder='ingredients' data-test-id='ingredients-formik'/>
                    </div>
                    <button
                        data-test="formSubmit"
                        color="primary"
                        type="submit"
                        disabled={Object.keys(errors).length !== 0}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>

    );
}

export default CreateBeerFormikForm;