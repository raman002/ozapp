import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import React, {useState} from 'react';

const App = props => {

    const [personsState, setPersonsState] = useState(
        {
            persons: [
                {name: 'abc', age: 20},
                {name: 'xyz', age: 21}
            ],
            otherState: 'some other value'
        }
    );

    const [otherState, setOtherState] = useState({otherState: 'some value'});

    console.log(otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons : [
                {name: newName, age: 26},
                {name: 'abc', age: 26}
            ]
        });

    }

    // useState('some other value');

    return (
        <div className="App">
            <h1>Hey, React!</h1>
            <button onClick={switchNameHandler.bind(this, "raman")}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandler.bind(this, "Neha")}></Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
        </div>
    );
}

export default App;
