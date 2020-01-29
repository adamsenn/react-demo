import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [state, setState] = useState(['Johnny', 'Suzy'])

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    setState([...state, form.name.value])
    form.reset()
  }

  return (
    <>
      <h1>The IT list</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Get on the list!</legend>
          <input type='text' name='name' placeholder='Name' autoFocus />
          <button type='button'>Add Me Now</button>
        </fieldset>
      </form>
      <ul>
        {state.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
