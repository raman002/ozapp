import React from 'react';
import ReactDOM from 'react-dom';

const Person = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    );
}

export default Person;