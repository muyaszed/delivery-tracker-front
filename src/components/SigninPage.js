import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signin} from '../actions/authAction'
import { withRouter, Redirect } from 'react-router-dom'
import SigninForm from './SigninForm'


class SigninPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    const {from} = this.props.location.state || { from: {pathname:'/'}}
    const {signInAction} = this.props
    signInAction(data).then(() => {
      this.props.history.push(from)
    })


  }



  render() {

    return(
      <div>
        <SigninForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: (data) => {
      return dispatch(signin(data))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authReducer.authenticated
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigninPage))
