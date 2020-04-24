import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormTextInput(props: Props) {

    return (
        <div className="textInput">
            <label>
                Beer Name:
            <input id="beerName" type="text" name="beerName" value={props.value} onChange={props.onChange} required />
            </label>
        </div>
    )
}

export default FormTextInput;