import React, { useState, useRef, useEffect } from 'react';
import FormTextInput from '../Form_Components/FormTextInput';
import FormSelect from '../Form_Components/FormSelect';
import FormCheckbox from '../Form_Components/FormCheckbox';
import FormTextArea from '../Form_Components/FormTextArea';

function CreateBeerForm() {

    const [beerName, setBeerName] = useState('');
    const [beerNameError, setBeerNameError] = useState('');
    const [beerType, setBeerType] = useState('');
    const [beerTypeError, setBeerTypeError] = useState('');
    const [hasCorn, setHasCorn] = useState(false);
    const [ingredients, setIngredients] = useState('');
    const [ingredientsError, setIngredientsError] = useState('');
    const [disable, setDisabled] = useState(true);
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setDisabled(formValidation())

    }, [beerName, beerType, ingredients])

    const formValidation = () => {
        let counter = 0;

        if (beerName === "") {
            setBeerNameError('Beer Name cannot be empty');
            counter++;
        } else {
            setBeerNameError('');
        }

        if (beerType === "") {
            setBeerTypeError('Beer Type cannot be empty')
            counter++;
        }
        else {
            setBeerTypeError('');
        }

        if (ingredients === "") {
            setIngredientsError('Ingredients cannot be empty')
            counter++;
        }
        else {
            setIngredientsError('');
        }

        if (counter === 0) {
            return false;
        } else {
            return true;
        }

    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        console.log(
            "beerName:" + beerName,
            "beerName:" + beerType,
            "beerName:" + hasCorn,
            "beerName:" + ingredients
        );
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div>
                {beerNameError && <p style={{color: "red"}}>{beerNameError}</p>}
                <FormTextInput value={beerName} onChange={event => setBeerName(event.target.value)} />
            </div>
            <div>
                {beerTypeError && <p style={{color: "red"}}>{beerTypeError}</p>}
                <FormSelect value={beerType} onChange={event => setBeerType(event.target.value)} />
            </div>
            <div>
                <FormCheckbox value={hasCorn} onChange={event => setHasCorn(event.target.value ? event.target.checked : event.target.value)} />
            </div>
            <div>
                {ingredientsError && <p style={{color: "red"}}>{ingredientsError}</p>}
                <FormTextArea value={ingredients} onChange={event => setIngredients(event.target.value)} />
            </div>
            <button disabled={disable} type="submit" data-test="formSubmit" name="formSubmit" >Submit</button>
        </form>
    )
}

export default CreateBeerForm;