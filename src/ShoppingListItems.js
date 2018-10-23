import React, { Component } from "react";

class ShoppingListItems extends Component {
  render() {
    return (
   
       
            <h2>
              
            
              {this.props.items.map(item => (<li>{item}</li>))}
         
            </h2>
          )
        }
    
    
  }


export default ShoppingListItems;
