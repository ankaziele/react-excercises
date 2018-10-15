import React, { Component } from 'react';
import Counter from './components/counter'
import Form from './Form'
import NewForm from './NewForm'
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    data: []
  }

  addContact = name => {
    this.setState({
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name
      })
    })
  }

  addData = (name,surname) =>{
    this.setState({
      data: this.state.data.concat({
        id: Date.now(),
        name: name,
        surname: surname
      })
      
    })
  }
  render() {
    return (
      <div className="App">
       <Form addContactFunction={this.addContact}/>
       <NewForm addDataFunction={this.addData} />
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
       <h1>New Data</h1>
       <ul>
         {

         this.state.data.map(
           data => (
             <li key={data.id}>{data.name}{data.surname}</li>
           )
         )
         }
       </ul>
      </div>
    );
  }
}

export default App;
