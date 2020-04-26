import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormTextInput(props: Props) {

    return (
        <div className="textInput">
            <label htmlFor="beerName">Beer Name: </label>
            <input data-test="beerName" type="text" name="beerName" value={props.value} onChange={props.onChange} required />
        </div>
    )
}

export default FormTextInput;