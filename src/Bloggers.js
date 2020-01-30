import React, { useState, useEffect } from 'react'

const Bloggers = () => {
  const [state, setState] = useState({ loading: true, users: [] })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setState({ loading: false, users }))
  }, [])

  if (state.loading) return <h1>Just wait a sec...</h1>

  return (
    <>
      <h1>Bloggers</h1>
      <ul>
        {state.users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
export default Bloggers
