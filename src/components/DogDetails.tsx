import React from "react";

interface Props<T> {
    name: string;
    imagePath: string;
    onBarkButton: () => void;
}

function DogDetails <T extends object>(props: Props<T>) {
    return (
        <div className="DogDetails">
            <button data-test="buttonBark" onClick={props.onBarkButton}>Bark</button>
            <h1 data-test="dogName" >{props.name}</h1>
            <img data-test="dogimage" src={props.imagePath} width="400" height="200" alt=""/>
        </div>
    );
}

export default DogDetails;