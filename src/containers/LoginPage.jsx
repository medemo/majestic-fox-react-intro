import React, { useState } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

import { useUser, useLogin } from '../contexts/UserContext'

const LoginPage = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const location = useLocation()

  const user = useUser()
  const login = useLogin()

  if (user) {
    return <Redirect to={location.state?.referrer || '/'} />
  }

  return (
    <div>
      <input
        className="border rounded px-4 py-2"
        type="text"
        value={usernameInput}
        placeholder="username"
        onChange={e => setUsernameInput(e.target.value)}
      />
      <button
        className="ml-3 border rounded px-3 py-2 bg-gray-200"
        onClick={() => login(usernameInput)}
      >
        LOGIN
      </button>
    </div>
  )
}

export default LoginPage