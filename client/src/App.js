import React, { Component } from 'react'
import './App.css'
import TextInput from './components/inputs/TextInput';

class App extends Component {

  state = {
    firstName: '',
    lastName: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <TextInput 
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <TextInput 
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
        />

        {/* <ProductList products={products}/> */}
      </div>
    )
  }
}

export default App;