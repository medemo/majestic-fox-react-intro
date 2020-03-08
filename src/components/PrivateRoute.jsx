import React, { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

import UserContext from 'contexts/UserContext'

const PrivateRoute = ({ children, ...props }) => {
  const { user } = useContext(UserContext)

  const location = useLocation()

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: location.pathname }
        }}
      />
    )
  }

  return (
    <Route {...props}>
      {
        children
        // user
        //   ? children
        //   : (
        //     <p className="text-xl italic">Please login first</p>
        //   )
      }
    </Route>
  )
}

export default PrivateRoute
