# Browser based integration using JSXAPI

You can make web pages that talk directly to the video device. This can be handy for example if you want to remote control the device from a mobile phone or a tablet.

Once you have established the connection, the code to talk with the device is exactly the same as if you made it with a macro, or a Node JSXAPI integration.

## Requirements

* User credentials (admin, integator or similar)
* The browser has access to the same network as the device

The following configurations must be set:

```markup
xConfiguration NetworkServices HTTP Mode: HTTP+HTTPS
xConfiguration NetworkServices Websocket: FollowHTTPService
```

## Example

The bare bones example below connects to a device, sets the volume then reads it back. We use the JSXAPI library from a content delivery network. You can also download it and use it locally, or use `npm` to install and bundle it with your web app.

Copy the code to a file called eg index.html, replace the ip address, username and password and load the file in your browser.

```html
<html>
  <script src="https://unpkg.com/jsxapi@5.0.3/dist/jsxapi.js"></script>

  <script>

  jsxapi
    .connect('ws://10.0.0.24', {
      username: 'admin',
      password: 'password',
    })
    .on('error', console.error)
    .on('ready', async (xapi) => {

      xapi.Command.Audio.Volume.Set({ Level: 24 });

      const volume = await xapi.status.get('Audio Volume');
      console.log(`Volume: ${volume}`);
    });

  </script>
</html>
```
