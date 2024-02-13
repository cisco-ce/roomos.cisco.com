# Display web content 

We're adding web-view and web-modal features to the MTR platform making it possible to display web content, allowing users to interact with web applications or content directly from the MTR interface.
This is useful for things like getting assistance in a room, tracking issues, or using interactive web apps. In MTR mode, you can launch these web extensions either automatically through predefined actions or from the side panel extension option. To use this feature, simply enroll your devices in Webex Control Hub.

<img src="/doc/images/MTR/WebView.png" width="600"/>

## Usage
### Web view

`xcommand UserInterface WebView Display Mode: Fullscreen`

*    Tap **Exit** button to quit
*    Annotating isn't supported

### Web modal

`xcommand UserInterface WebView Display Mode: Modal`

*  Tap outside to close

### Web view on Touch controller

You can have a web view on the Touch controller by using this: 

`xcommand UserInterface WebView Display Target: Controller`

However there is no button to close the web view, so you need to use the following command if you want to close it: 

`xcommand UserInterface WebView Clear`

### Incoming call

When there is an incoming call, the webview will close and the call will be visible.
