import React from "react";
import Counter from './Counter/Counter';

interface Props<T> {
    name?: string;
    imagePath?: string;
    onBarkButton?: () => void;
}

function DogDetails<T extends object>(props: Props<T>) {

    return (
        <div className="details">
            <button data-test="buttonBark" onClick={props.onBarkButton}>Bark</button>
            <h1 data-test="dogName" >{props.name}</h1>
            <img data-test="dogimage" src={props.imagePath} width="400" height="200" alt="" />
            <Counter initialCount={0} />
        </div>
    );
}

export default DogDetails;