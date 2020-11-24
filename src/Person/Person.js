import React from 'react';
import ReactDOM from 'react-dom';

const Person = (props) => {
    return (
        <div>
            <button onClick={props.click}>Change Name inside person</button>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;
