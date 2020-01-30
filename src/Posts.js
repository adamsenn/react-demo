import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [state, setState] = useState({ loading: true, posts: [] })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setState({ loading: false, posts }))
  }, [])

  if (state.loading) return <h1>Just wait a sec...</h1>

  return (
    <>
      <h1>Posts - {state.posts.length}</h1>
      <ul>
        {state.posts.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
export default Posts
