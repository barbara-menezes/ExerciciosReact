import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormTextArea(props: Props) {

    return (
        <div className="textArea">
            <label>
                Ingredients:
            <textarea name="ingredients" value={props.value} onChange={props.onChange} required />
            </label>
        </div >
    )
}

export default FormTextArea;