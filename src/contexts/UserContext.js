import React, { useState, createContext, useContext } from 'react'

const UserContext = createContext()

export default UserContext

export const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { user } = useContext(UserContext)
  return user
}

export const useLogin = () => {
  const { login } = useContext(UserContext)
  return login
}

export const useLogout = () => {
  const { logout } = useContext(UserContext)
  return logout
}

