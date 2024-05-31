# Display web content 

We're adding web-view and web-modal features making it possible to display web content. This allows users to interact with web applications or content directly from the interface of the Cisco device.
This is useful for things like getting assistance in a room, tracking issues, or using interactive web apps. You can launch these web extensions either automatically through predefined actions or from the side panel extension option. To use this feature, you need to register your device to Control Hub.

If a web view is opened through code in a macro on passive displays, there is currently no user interface option to close it. In such cases, the closure of the web view should also be done programmatically.

## Usage
### Web view

<img src="/doc/images/MTR/WebView.png" width="600"/>

* `xcommand UserInterface WebView Display Url: cisco.com`

Write the URL of the web page you would like to display.

* `xcommand UserInterface WebView Display Mode: Fullscreen`

Display the web page in full screen.

*    Tap **Exit** button to quit
*    Annotating isn't supported

### Web modal

<img src="/doc/images/MTR/WebModal.png" width="600"/>

* `xcommand UserInterface WebView Display Mode: Modal`

Tap outside to close.

### Web view on Touch controller

You can have a web view on the Touch controller by using this: 

* `xcommand UserInterface WebView Display Target: Controller`

However there is no button to close the web view, so you need to use the following command if you want to close it: 

* `xcommand UserInterface WebView Clear`

### Incoming call

When there is an incoming call, the web view will close automatically and the call will be visible.
