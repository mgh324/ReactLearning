import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "mahdi", age: 19 },
    ],
    showPersons: false,
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
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      border: "1px solid  blue",
      cursor: "pointer",
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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
    return (
      <div className="App">
        <h1>"Hi,I am a react app"</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch name{" "}
        </button>
        {/* {this.setState.showPersons ? ( //age showperson true bashe div namayesh dade mishe */}
        {persons}
      </div>
    );
  }
}

export default App;
