import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar