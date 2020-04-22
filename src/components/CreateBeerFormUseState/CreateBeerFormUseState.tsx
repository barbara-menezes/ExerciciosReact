import React from 'react';
import { useForm } from 'react-hook-form';

function CreateBeerFormUseState() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Beer Name</label>
                <input type="text" name="beerName" ref={register} required  />
            </div>
            <div>
                <label>Beer Type</label>
                <select name="beerType" ref={register} required >
                    <option aria-label="None" value="" />
                    <option value="Ale">Ale</option>
                    <option value="Lager">Lager</option>
                    <option value="Stout">Stout</option>
                </select>
            </div>
            <div>
                <label>Has Corn</label>
                <input type="checkbox" ref={register} name="hasCorn" />
            </div>
            <div>
                <label>Ingredients</label>
                <textarea name="ingredients" ref={register} required/>
            </div>
            <button type="submit" value="addData">Submit</button>
        </form>
    )
}

export default CreateBeerFormUseState;