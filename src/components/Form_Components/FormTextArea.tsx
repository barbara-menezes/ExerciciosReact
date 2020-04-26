import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormTextArea(props: Props) {

    return (
        <div className="textArea">
            <label htmlFor="ingredients">Ingredients: </label>
            <textarea data-test="ingredients" name="ingredients" value={props.value} onChange={props.onChange} required />
        </div >
    )
}

export default FormTextArea;