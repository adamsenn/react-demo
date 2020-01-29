import React, { useState, useEffect } from 'react'
import './App.css'
import { getUsersAsync } from './ApiService'

const Bloggers = () => {
  const [state, setState] = useState({ loading: true, bloggers: [] })

  useEffect(() => {
    const loadDataAsync = async () => {
      const bloggers = await getUsersAsync()
      setState({ loading: false, bloggers })
    }
    loadDataAsync()
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
