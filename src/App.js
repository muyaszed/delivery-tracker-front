import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SigninForm from './components/SigninForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    console.log(e)
  }

  render() {
    return (
      <SigninForm onSubmit={this.handleSubmit} />
    );
  }
}

export default App;
