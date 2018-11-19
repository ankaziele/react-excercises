import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Counters />  
        </main>
      </div>
    );
  }
}

export default App;
