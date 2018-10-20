import React, { Component } from "react";

class ShoppingList extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "Food"
      },
      {
        id: 2,
        name: "Cloths"
      },
      {
        id: 3,
        name: "Paper"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>My Shopping List</h1>
        <h2>Things I need to buy</h2>
        <ul>
          {this.state.categories.map(category => (
            <ol key={category.id}>{category.name} </ol>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
