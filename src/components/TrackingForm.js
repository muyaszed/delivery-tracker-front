import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {userSignin} from '../actions/authAction'

class TrackingForm extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <h1>Please track your delivery here....</h1>
        <form id='tracking-form' onSubmit={this.handleSubmit}>
          <label htmlFor='tracking-number'>Tracking number</label>
          <input type="text" id='tracking-number' name="tracking-number"/>
          <button type="submit">Track</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: () => {
      dispatch(userSignin())
    }
  }
};

export default withRouter(connect(null, mapDispatchToProps)(TrackingForm))
