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
      contacts: this.state.contacts.concat({
        id: Date.now(),
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
             <li key={contact.id}>{contact.name}</li>
           )
         )
         }
       </ul>
      </div>
    );
  }
}

export default App;
