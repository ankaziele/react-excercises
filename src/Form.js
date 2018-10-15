import React, {Component} from 'react'

class Form extends Component{
state = {
    name: " "
}

handleChange = event => {
    this.setState({name: event.target.value})
}

handleSubmit = event => {
    event.preventDefault()
    this.props.addContactFunction(this.state.name)
    this.setState({name: ''})
}

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form