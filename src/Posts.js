import React, { useState, useEffect } from 'react'
import './App.css'
import { getPostsAsync } from './ApiService'

const Posts = () => {
  const [state, setState] = useState({ loading: true, posts: [] })

  useEffect(() => {
    const loadDataAsync = async () => {
      const posts = await getPostsAsync()
      setState({ loading: false, posts })
    }
    loadDataAsync()
  }, [])

  if (state.loading) return <h1>Wait for it...</h1>

  return (
    <>
      <h1>Posts - {state.posts.length}</h1>
      <ul>
        {state.posts.map(item => (
          <li key={item.id}>
            {item.user.name} wrote '{item.title}'
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
