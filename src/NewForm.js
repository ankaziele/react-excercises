import React, { Component } from 'react';

class NewForm extends Component {
    state = { 
        name: "",
        surname: ""
     }

     handleChange = event =>
     this.setState({[event.target.name]: event.target.value})

     handleSubmit = event =>{
         event.preventDefault()
         this.props.addDataFunction(
             this.state.name, 
             this.state.surname)
         this.setState({
            name: ' ',
            surname: ' '
        })
     }

    render() { 
        return ( 

            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" 
                name="name"
                value={this.state.name} 
                onChange={this.handleChange}
                />
                <input placeholder="surname" 
                name="surname"
                value={this.state.surname} 
                onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>


         );
    }
}
 
export default NewForm;