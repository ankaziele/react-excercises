import React, { Component } from "react";
import ShoppigCategory from './ShoppingCategory'

class ShoppingList extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "Food",
        ListItems: [
            "Bread",
            "Butter",
            "Milk"
        ]
      },
      {
        id: 2,
        name: "Cloths",
        ListItems: [
            "Hat",
            "T-shirt",
            "Shoes"
        ]
      },
      {
        id: 3,
        name: "Paper",
        ListItems: [
            "Glue",
            "Notebook",
            "Pen"
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>My Shopping List</h1>
        <h2>Things I need to buy</h2>
        <ul>
            <ShoppigCategory categories={this.state.categories}/>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
