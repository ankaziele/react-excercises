import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };

  styles = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%'
  }

  handleIncrement = product => {
    console.log("Increment clicked");
    this.setState({count: this.state.count +1})
  }

  render() {
    return (
      <div style = { this.styles }>
        <img src={this.state.imageUrl} alt="picsumPhoto"/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
