import React, { useState, useCallback } from 'react'

const getUrlParameter = function (name) {
  const match = RegExp('[?&]' + name + '=([^&]*)', 'i').exec(window.location.search)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

const progressApiEndpoint = `https://subdomain.csod.com/${getUrlParameter('callbackUrl')}/progress?sessionToken=${getUrlParameter('sessionToken')}`
const csodParams = ['userGuid', 'sessionToken', 'callbackUrl', 'subdomain', 'registrationNumber']

const CourseLauncher = () => {
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
      <h1>Course Launcher</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <dl style={{ paddingRight: '50px' }}>
          {csodParams.map(p => <><dt>{p}</dt><dd>{getUrlParameter(p)}</dd></>)}
        </dl>
        <div style={{ flex: '1 1 auto' }}>
          <strong>POST to {progressApiEndpoint}</strong>
          <form onSubmit={onSubmitCallback}>
            <textarea style={{ height: 'calc(100vh - 150px)', width: '100%' }}></textarea>
            <div style={{ textAlign: 'right' }}>
              <button type='submit'>Send Progress to CSOD</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CourseLauncher
