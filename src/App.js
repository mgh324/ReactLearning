import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "SuperMahdi ",
  };

  userNameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Mahdi" />
        <UserOutput
          userName="
        Mahdi"
        />
      </div>
    );
  }
}

export default App;
