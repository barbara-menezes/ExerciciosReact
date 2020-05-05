import React, { useState } from 'react';
import FormTextInput from '../Form_Components/FormTextInput';
import FormSelect from '../Form_Components/FormSelect';
import FormCheckbox from '../Form_Components/FormCheckbox';
import FormTextArea from '../Form_Components/FormTextArea';

function CreateBeerForm() {

    const [beerName, setUBeerName] = useState('');
    const [beerType, setUBeerType] = useState('');
    const [hasCorn, setHasCorn] = useState(false);
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(
            "beerName:" + beerName,
            "beerName:" + beerType,
            "beerName:" + hasCorn,
            "beerName:" + ingredients
        );
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FormTextInput value={beerName} onChange={event => setUBeerName(event.target.value)} />
            <FormSelect value={beerType} onChange={event => setUBeerType(event.target.value)} />
            <FormCheckbox value={hasCorn}
                onChange={event =>
                    setHasCorn(event.target.value ? event.target.checked : event.target.value)
                }
            />
            <FormTextArea value={ingredients} onChange={event => setIngredients(event.target.value)} />
            <button type="submit" data-test="formSubmit" name="formSubmit">Submit</button>
        </form>
    )
}

export default CreateBeerForm;