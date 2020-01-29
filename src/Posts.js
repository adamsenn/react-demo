import React, { useState, useEffect } from 'react'
import './App.css'

const Posts = () => {
  const [state, setState] = useState({ loading: true, posts: [] })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setState({ loading: false, posts: json }))
  }, [])

  if (state.loading) return <h1>Wait for it...</h1>

  return (
    <>
      <h1>Posts - {state.posts.length}</h1>
      <ul>
        {state.posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Posts
