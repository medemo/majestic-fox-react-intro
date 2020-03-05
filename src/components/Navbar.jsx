import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const Navbar = () => {
  const { logout, user } = useContext(UserContext)

  return (
    <nav className="mb-6 py-3 border-b">
      <NavLink
        exact
        activeClassName="underline"
        className="text-2xl uppercase"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="underline"
        className="text-2xl ml-5 uppercase"
        to="/chatroom"
      >
        Chatroom
      </NavLink>
      {
        user
          ? (
            <span
              className="text-2xl ml-5 uppercase float-right cursor-pointer"
              onClick={logout}
            >
              Logout
            </span>
          ) : (
            <NavLink
              activeClassName="underline"
              className="text-2xl ml-5 uppercase float-right"
              to="/login"
            >
              Login
            </NavLink>
          )
      }
    </nav>
  )
}

export default Navbar