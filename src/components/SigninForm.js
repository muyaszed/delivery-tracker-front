import React, {Component} from 'react'

class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('hello')
    this.props.onSubmit()
  }



  render() {

    return(
      <form id='signin-form' onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input id='email'/>
        <label htmlFor='password'>Password</label>
        <input id='password'/>
        <button type="submit">Signin</button>
      </form>
    )
  }
}

export default SigninForm
