const fetch = require('node-fetch')

exports.handler = async function (event, context) {
    const { subdomain, callbackUrl, sessionToken, progressInfo } = JSON.parse(event.body)
    const progressApiEndpoint = new URL(`https://${subdomain}.csod.com`, callbackUrl, `progress?sessionToken=${sessionToken}`)

    const response = await fetch(progressApiEndpoint, {
        method: 'POST',
        headers: { Authorization: `Basic ${btoa(`${process.env.CSOD_USER}:${process.env.CSOD_PASSWORD}`)}` },
        body: progressInfo
    })

    return {
        statusCode: 200,
        body: await response.text()
    }
}