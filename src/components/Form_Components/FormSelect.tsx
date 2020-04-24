import React from 'react';

interface Props {
    value?: any;
    onChange?: (arg0: any) => void;
}

function FormSelect(props: Props) {

    return (
        <div className="select">
            <label>
                Beer Type:
            <select name="beerType" value={props.value} onChange={props.onChange} required >
                    <option aria-label="None" value="" />
                    <option value="Ale">Ale</option>
                    <option value="Lager">Lager</option>
                    <option value="Stout">Stout</option>
                </select>
            </label>
        </div>
    )
}

export default FormSelect;