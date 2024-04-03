import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="w-full px-0 py-48">
    <div className='px-24 py-0 flex flex-col items-center justify-center'>
      <h2>404</h2>
      <h3>UH OH! You're lost.</h3>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the
        homepage.
      </p>

      <NavLink to="/">
        <button>Go To Home</button>
      </NavLink>
    </div>
  </div>
  )
}

export default ErrorPage
