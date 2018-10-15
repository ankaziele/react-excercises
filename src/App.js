import React, { Component } from 'react';
import Counter from './components/counter'
import Form from './Form'
import './App.css';

class App extends Component {

  state = {
    contacts: []
  }

  addContact = name => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.concat({
        name: name
      })
    })
  }
  render() {
    return (
      <div className="App">
       <Form addContactFunction={this.addContact}/>
       <Counter />
       <ul>
         {

         this.state.contacts.map(
           contact => (
             <li>{contact.name}</li>
           )
         )
         }
       </ul>
      </div>
    );
  }
}

export default App;
