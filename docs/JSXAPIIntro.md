# JSXAPI

The JSXAPI is a JavaScript SDK for talking xAPI to the Webex Room devices.

It can be used both in the scripts running on the video devices themselves (macros), standalone on a Node.js server, or in a web browser.

Example snippet:

```javascript
const jsxapi = require('jsxapi');

jsxapi
  .connect('wss://host.example.com', {
    username: 'admin',
    password: 'password',
  })
  .on('error', console.error)
  .on('ready', async (xapi) => {
    const volume = await xapi.status.get('Audio Volume');
    console.log(`volume is: ${volume}`);
    xapi.close();
  });
```

JSXAPI can be installed as any other **npm** package:

```
npm install --save jsxapi
```

For more information, see [Github](https://github.com/cisco-ce/jsxapi)
