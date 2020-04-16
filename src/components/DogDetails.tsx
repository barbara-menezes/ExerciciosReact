import React, { useState } from "react";

interface Props<T> {
    name?: string;
    imagePath?: string;
    onBarkButton?: () => void;
}

function DogDetails <T extends object>(props: Props<T>) {
    const [count, setCount] = useState(0);

    var onCounter = () => { 
        setCount(count + 1); 
        return count;
    }

    return (
        <div className="details">
            <button data-test="buttonBark" onClick={props.onBarkButton}>Bark</button>
            <h1 data-test="dogName" >{props.name}</h1>
            <img data-test="dogimage" src={props.imagePath} width="400" height="200" alt=""/>
            <button data-test="buttonCounter" onClick={onCounter}>Scold!</button>
        </div>
    );
}

export default DogDetails;