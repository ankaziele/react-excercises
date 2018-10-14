import React, { Component } from "react";

class Counter extends Component {
  state = {
      count: 0,
      
  };

  styles = {
    fontSize: 10,
  };

  render() {
    return (
      <div>
        
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount(){
      return this.state.count === 0 ? 'zero' : this.state.count
  }
}

export default Counter;
