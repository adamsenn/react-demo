import React from 'react'
import './App.css'

const App = () => (
  <>
    <h1>The IT list</h1>
    <form>
      <fieldset>
        <legend>Get on the list!</legend>
        <input type='text' name='name' placeholder='Name' autoFocus />
        <button type='button'>Add Me Now</button>
      </fieldset>
    </form>
    <ul>
      <li>So lonely...</li>
    </ul>
  </>
)

export default App
