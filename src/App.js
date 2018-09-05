import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'
import SigninPage from './components/SigninPage'
import TrackingForm from './components/TrackingForm'
import AdminPage from './components/AdminPage'


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {authenticated} = this.props

    return (
      <Router>
        <div>
          <header>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-only">Admin only</Link>
              </li>
            </ul>
          </header>
          <hr />

          <Route exact path="/" component={TrackingForm} />
          <Route path="/signin" component={SigninPage} />
          <PrivateRoute path="/admin-only" component={AdminPage} />

        </div>
      </Router>
    )


  }
}



export default App;
