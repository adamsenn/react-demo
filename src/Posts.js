import React, { useState, useCallback } from 'react'
import './App.css'

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

const Bloggers = () => {
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
      <h1>Bloggers</h1>
      <ul>
        {state.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Bloggers
