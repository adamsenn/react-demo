const fetch = require('node-fetch')
const urljoin = require('url-join')


exports.handler = async function (event, context) {
    const { subdomain, callbackUrl, sessionToken, progressInfo } = JSON.parse(event.body)
    const progressApiEndpoint = urljoin(`https://${subdomain}.csod.com`, callbackUrl, `progress?sessionToken=${sessionToken}`)
    const base64Credentials = Buffer.from(`${process.env.CSOD_USER}:${process.env.CSOD_PASSWORD}`).toString('base64')

    console.log(`Updating status in CSOD ${progressApiEndpoint}`, progressInfo)

    const response = await fetch(progressApiEndpoint, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64Credentials}`,
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(progressInfo)
    })

    const content = await response.text()

    console.log(`Received ${response.statusCode} response from CSOD`, content)

    return {
        statusCode: 200,
        body: `${response.statusCode}: ${content}`
    }
}