import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Counter from './counter'
import Form from './Form'
import NewForm from './NewForm'
import Title from './Title'
import Footer from './Footer'
import StudentsView from './components/StudentsView/StudnetsView'
import ShoppingList from './ShoppingList'
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    data: [],
    title: `Hello I'm props`,
    
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
       <Title title={this.state.title}/>
       <Title title={"other awesome title"}/>

       <Counter />
       <Footer title={this.state.title}/>
       
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

       <Router>
         <div>

         <ul>
           <li><NavLink to ="/students">Students</NavLink></li>
         </ul>

         <Route exact path="/students" component={StudentsView}/>
         </div>

         
       </Router>

       <ShoppingList />
      </div>
    );
  }
}

export default App;
