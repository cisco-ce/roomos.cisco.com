# Node.js

If you want to create integrations that run on a separate device with Node.js, such as a Linux server or a Raspberry Pi, the JSXAPI is a mature and well-documented SDK. This is the same xAPI SDK that the macros use, so code and knowledge can easily be transferred. The main difference is that the Node.js integration needs to establish a connection and authenticate, whereas the the macros get this automatically.

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
