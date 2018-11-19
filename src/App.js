import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Counters 
          counters = {this.state.counters}
          onIncrement = {this.handleIncrement}
          onReset = {this.handleReset}
          onDelete = {this.handleDelete}
          />  
        </main>
      </div>
    );
  }
}

export default App;
