import React, { Fragment, useCallback, useState } from 'react'

const getUrlParameter = function (name) {
  const match = RegExp('[?&]' + name + '=([^&]*)', 'i').exec(window.location.search)
  return (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || 'NA'
}

const timestamp = new Date()
const csodParams = ['courseId', 'userGuid', 'sessionToken', 'callbackUrl', 'subdomain', 'registrationNumber'].reduce((agg, curr) => {
  agg[curr] = getUrlParameter(curr)
  return agg
}, {})
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
  const [progressInfo, setProgressInfo] = useState(JSON.stringify(progressData, null, 2))

  const onSubmitCallback = useCallback(
    event => {
      event.preventDefault()
      fetch('/.netlify/functions/update-progress', {
        method: 'POST',
        body: progressInfo
      }).then(r => {
        console.log(r)
        alert('Success!')
      }).catch(err => {
        alert('Error: ' + err)
      })
    },
    [progressInfo]
  )

  return (
    <>
      <h1>DXC Course Launcher</h1>
      <div style={{ display: 'flex', marginTop: '2em' }}>
        <dl style={{ flex: '0 0 auto', paddingRight: '50px' }}>
          {Object.entries(csodParams).map(([key, value]) => <Fragment key={key}><dt>{key}</dt><dd>{value}</dd></Fragment>)}
        </dl>
        <form onSubmit={onSubmitCallback} style={{ flex: '1 1 auto' }}>
          <textarea name='progressInfo' value={progressInfo} style={{ height: '480px', width: '100%' }} onChange={evt => setProgressInfo(evt.target.value)}></textarea>
          <div style={{ textAlign: 'right' }}>
            <button type='submit'>Send Progress to CSOD</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CourseLauncher
