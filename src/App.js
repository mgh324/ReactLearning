import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "mahdi", age: 19 },
    ],
  };
  switchNameHandler = () => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: "max", age: 28 },
        { name: "Mahdi", age: 19 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>"Hi,I am a react app"</h1>
        <button onClick={this.switchNameHandler}>Switch name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hoobies:gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
