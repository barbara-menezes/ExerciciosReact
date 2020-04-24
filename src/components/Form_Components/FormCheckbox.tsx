import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormCheckbox(props: Props) {

    return (
        <div className="checkbox">
            <label>
                Has Corn:
            <input value={props.value} onChange={props.onChange} type="checkbox" name="hasCorn"/>
            </label>
        </div>
    )
}

export default FormCheckbox;