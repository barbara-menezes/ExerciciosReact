import React from 'react';
import { useForm } from 'react-hook-form';

function CreateBeerForm() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="textInput">
                <label>Beer Name</label>
                <input type="text" name="beerName" ref={register} required />
            </div>
            <div className="select">
                <label>Beer Type</label>
                <select name="beerType" ref={register} required >
                    <option aria-label="None" value="" />
                    <option value="Ale">Ale</option>
                    <option value="Lager">Lager</option>
                    <option value="Stout">Stout</option>
                </select>
            </div>
            <div className="checkbox">
                <label>Has Corn</label>
                <input type="checkbox" ref={register} name="hasCorn" />
            </div>
            <div className="textArea">
                <label>Ingredients</label>
                <textarea name="ingredients" ref={register} required />
            </div >
            <div className="submit">
                <button type="submit" value="addData">Submit</button>
            </div>
        </form>
    )
}

export default CreateBeerForm;