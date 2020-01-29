import React, { useState, useCallback } from 'react'
import './App.css'

const ItList = () => {
  const [state, setState] = useState(['Johnny', 'Suzy'])

  const onSubmitCallback = useCallback(
    event => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value
      if (state.indexOf(name) !== -1) alert(`${name} is already on the list!`)
      else setState([...state, form.name.value])
      form.reset()
    },
    [state]
  )

  return (
    <>
      <h1>Cool Kids</h1>
      <form onSubmit={onSubmitCallback}>
        <fieldset>
          <legend>Get on the list!</legend>
          <input type='text' name='name' placeholder='Name' autoFocus />
          <button type='button'>Add Me Now</button>
        </fieldset>
      </form>
      <ul>
        {state.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ItList
