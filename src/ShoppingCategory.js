import React, { Component } from "react";
import ShoppingListItems from  './ShoppingListItems'

class ShoppingCategory extends Component {

  render() {
    return (
      <div className="shoppingList">
        <p>
          {this.props.categories.map(category => (
            <h2>
              {category.id} {category.name} 
              <ShoppingListItems items={category.ListItems}/>
              {/* <li>{category.ListItems.map(item => (<li>{item}</li>))}</li> */}
         
            </h2>
          ))}
    
        </p>
      </div>
    );
  }
}

export default ShoppingCategory;
