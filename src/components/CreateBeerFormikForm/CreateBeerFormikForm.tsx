import React from 'react';
import FormikTextInput from '../Formik_Components/FormikTextInput';
import FormikSelect from '../Formik_Components/FormikSelect';
import FormikCheckbox from '../Formik_Components/FormikCheckbox';
import FormikTextArea from '../Formik_Components/FormikTextArea';
import { Container } from '@material-ui/core';

function CreateBeerFormikForm() {
    return (
        <div className="BeerForm">
            <Container>
                <FormikTextInput />
                <FormikSelect />
                <FormikCheckbox />
                <FormikTextArea />
                <button data-test="buttonSubmit">Submit</button>
            </Container>
        </div>
    );
}

export default CreateBeerFormikForm;