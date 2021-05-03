import React, { Fragment, useCallback, useEffect, useState } from 'react'

const getUrlParameter = function (name) {
  const match = RegExp('[?&]' + name + '=([^&]*)', 'i').exec(window.location.search)
  return (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || 'NA'
}

const timestamp = new Date()
const csodParams = ['courseId', 'userGuid', 'sessionToken', 'callbackUrl', 'subdomain', 'registrationNumber'].reduce((agg, curr) => {
  agg[curr] = getUrlParameter(curr)
  return agg
}, {})
const progressApiEndpoint = `https://${csodParams.subdomain}.csod.com/${csodParams.callbackUrl}/progress?sessionToken=${csodParams.sessionToken}`
const progressData = [{
  courseId: csodParams.courseId,
  userGuid: csodParams.userGuid,
  status: "Completed",
  userScore: 100,
  totalTime: "00:12:34",
  timesAccessed: 1,
  successStatus: "Pass",
  progress: 100,
  registrationDate: "2021-05-01T12:34:56.789Z",
  completionDate: timestamp.toISOString(),
  lastTimeAccessed: timestamp.toISOString()
}]

const CourseLauncher = () => {
  const [canSubmit, setCanSubmit] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [progressInfo, setProgressInfo] = useState(JSON.stringify(progressData, null, 2))

  useEffect(() => setCanSubmit(user && password), [user, password, setCanSubmit])

  const onSubmitCallback = useCallback(
    event => {
      event.preventDefault()
      fetch(progressApiEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(user + ":" + password)}`
        },
        body: progressInfo
      }).then(r => {
        console.log(r)
        alert('Success!')
      }).catch(err => {
        alert('Error: ' + err)
      })
    },
    [user, password, progressInfo]
  )

  return (
    <>
      <h1>Course Launcher</h1>
      <div style={{ display: 'flex' }}>
        <dl style={{ flex: '0 0 auto', paddingRight: '50px' }}>
          {Object.entries(csodParams).map(([key, value]) => <Fragment key={key}><dt>{key}</dt><dd>{value}</dd></Fragment>)}
        </dl>
        <div style={{ flex: '1 1 auto', maxWidth: '825px' }}>
          <strong>{progressApiEndpoint}</strong>
          <form method='POST' target={progressApiEndpoint} onSubmit={onSubmitCallback}>
            <div>
              <label style={{ fontWeight: 'bold', width: '6em' }}>User</label><input type='text' autoFocus value={user} onChange={evt => setUser(evt.target.value)}></input>
            </div>
            <div>
              <label style={{ fontWeight: 'bold', width: '6em' }}>Password</label><input type='text' value={password} onChange={evt => setPassword(evt.target.value)}></input>
            </div>
            <textarea name='progressInfo' value={progressInfo} style={{ height: '480px', width: '100%' }} onChange={evt => setProgressInfo(evt.target.value)}></textarea>
            <div style={{ textAlign: 'right' }}>
              <button type='submit' disabled={!canSubmit}>Send Progress to CSOD</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CourseLauncher
