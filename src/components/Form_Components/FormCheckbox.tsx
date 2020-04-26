import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormCheckbox(props: Props) {

    return (
        <div className="checkbox">
            <label htmlFor="hasCorn">Has Corn: </label>
            <input data-test="hasCorn" type="checkbox" name="hasCorn" value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default FormCheckbox;