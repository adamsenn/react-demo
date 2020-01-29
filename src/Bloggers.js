import React, { useState, useEffect } from 'react'
import './App.css'

const Bloggers = () => {
  const [state, setState] = useState({ loading: true, bloggers: [] })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setState({ loading: false, bloggers: json }))
  }, [])

  if (state.loading) return <h1>Wait for it...</h1>

  return (
    <>
      <h1>Bloggers - {state.bloggers.length}</h1>
      <ul>
        {state.bloggers.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Bloggers
