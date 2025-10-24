# Using xAPI over HTTP

This guide describes how to talk to a Cisco device with plain, connection-less HTTP(S) calls (not web socket), also called
the "putxml" API.

This method is very useful if you do not want to keep a long-running web socket connection alive, but simply
need to do periodical queries or commands.

**Note**: This is not a cloud API using Control Hub, but a direct client-to-device API that requires that you are on the same
network as the video device.

You can find more detailed information in the API PDF documentation on:
https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html

## Insecure HTTP

If you want to be able to use insecure HTTP (not HTTPS), set [xConfiguration NetworkServices HTTP Mode](https://roomos.cisco.com/xapi/Configuration.NetworkServices.HTTP.Mode/) to HTTP+HTTPS.


## Limitations

This will **not work from a web browser**. CORS-restrictions on the device web server will prevent the browser
from sending HTTP requests to the device.

The typical use case of the HTTP is for scripts, web servers etc.

## Endpoint

The base API endpoint is http://<device-ip>. To authenticate, add the header `Authorization: Basic <code>` where `code` is
the base-64 encoded string of `username:password` of a local admin user on the device.

In all cases, the response will be in XML, so you will need to parse that if you need the data.

## Getting a specific config or status

Endpoint:

`http://<ip-address>/getxml?location=<path>`

Get the volume:

`http://10.47.1.2/getxml?location=/Status/Audio/Volume`

Get the system name:

`http://10.47.1.2/getxml?location=/Configuration/SystemUnit/Name`

The response will be XML and look something like this:

```xml
<?xml version="1.0"?>
<Status product="Cisco Codec" version="ce26.0.0.51.ddab38ccabf" apiVersion="4">
  <Audio>
    <Volume>45</Volume>
  </Audio>
</Status>
```

## Setting a configuration or a running a command

Endpoint: `http://<ip-address>/putxml`
Method: POST
Content-Type: text/xml

There is not `path`, instead you need to set the body of the POST request with xml. Examples:

Configuration - set a custom message on the home screen:

```xml
<Configuration>
  <UserInterface>
    <CustomMessage>Yo there!</CustomMessage>
  </UserInterface>
</Configuration>
```

Command: Show an alert message for 5 seconds:

```xml
<Command>
  <UserInterface>
    <Message>
      <Alert>
        <Display>
          <Text>Hey device there</Text>
          <Duration>5</Duration>
        </Display>
      </Alert>
    </Message>
  </UserInterface>
</Command>
```

If you have multi-line data, just add it as a another parameter but with the tag `<body>`.

## Node.js example

This standalone node.js script shows a couple of examples of how to get a status, set a configuration and invoke a command.
It should be easy to translate this to other platforms such as Python or Java.

```js
const protocol = 'http' // or https
const ip = '10.1.1.2'
const username = 'admin'
const password = 'supersecret'

async function http(url, method = 'GET', body = null) {
  const headers = new Headers()
  const basicAuth = btoa(`${username}:${password}`)
  headers.append('Authorization', `Basic ${basicAuth}`)
  const options = { headers, method }
  if (body) {
    headers.append('Content-Type', 'text/xml')
    options.body = body
  }

  try {
    const res = await fetch(url, options)
    console.log('Response', await res.text())
  }
  catch (err) {
    console.error('HTTP Error:', err)
  }
}

function set(body) {
  const url = `${protocol}://${ip}/putxml`
  http(url, 'POST', body)
}

function get(path) {
  const url = `${protocol}://${ip}/getxml?location=${path}`
  http(url)
}

// Get the volume
get('/Status/Audio/Volume')

// Get the system name
get('/Configuration/SystemUnit/Name')

// Set custom message
set(`
  <Configuration>
    <UserInterface>
      <CustomMessage>Yo there!</CustomMessage>
    </UserInterface>
  </Configuration>
`)

// Show an alert message
set(`
<Command>
  <UserInterface>
    <Message>
      <Alert>
        <Display>
          <Text>Hey device there</Text>
          <Duration>5</Duration>
        </Display>
      </Alert>
    </Message>
  </UserInterface>
</Command>
`)
```

## Postman examples

Some old but good examples for Postman can be found on [DevNet](https://github.com/CiscoDevNet/postman-xapi).

## Session authentication

For performance, the HTTP api supports session authentication, so you don't need to send the username:password for each request. However,
in these day and age, if you have these kind of requirements it is recommended to use the JSXAPI / web sockets instead.

More info about the session authentication can be found in API PDF documentation linked to above.
