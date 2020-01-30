import React, { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState(['Lucy', 'Luke'])

  const submitCallback = event => {
    event.preventDefault()
    const newName = event.target.name.value
    setUsers([...users, newName])
  }

  return (
    <>
      <h1>IT List</h1>
      <form onSubmit={submitCallback}>
        <fieldset>
          <legend>Add Me to the List</legend>
          <input type='text' name='name' placeholder='name' />
          <button type='submit'>Add Me Please!</button>
        </fieldset>
      </form>
      <ul>
        {users.map((username, idx) => (
          <li key={idx}>{username}</li>
        ))}
      </ul>
    </>
  )
}

export default App

/*
{x:123} -> </>  -> events
*/
