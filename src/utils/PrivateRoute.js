import React from 'react'
import { Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'




const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  return <Route {...rest} render={props => {

        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )


      }

    }
  />
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authReducer.authenticated
  }
}


export default withRouter(connect(mapStateToProps)(PrivateRoute))
