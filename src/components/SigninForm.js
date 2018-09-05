import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userSignin} from '../actions/authAction'


class SigninForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      error: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {

    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const {data} = this.state
    this.props.onSubmit(data)
  }


  render() {
    const { data } = this.state
    return(
      <div>
        <h1>Please signin here....</h1>
        <form id='signin-form' onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type="text" id='email' name="email" value={data.email} onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type="text" id='password' name="password" value={data.password} onChange={this.handleChange}/>
          <button type="submit">Signin</button>
        </form>
      </div>
    )
  }
}

export default SigninForm
