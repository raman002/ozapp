import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import React, {Component} from 'react';

class App extends Component {

  state = {
    persons : [
      {name: 'raman', age: 26},
      {name: 'xyz', age: 26}
    ]
  }

  switchNameHandler = () => {
      this.setState({
          persons : [
              {name: 'raman singh', age: 26},
              {name: 'abc', age: 26}
          ]
      });
  }

  render () {
    return (
        <div className="App">
            <h1>Hey, React!</h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        </div>
    );
  }
}

export default App;
