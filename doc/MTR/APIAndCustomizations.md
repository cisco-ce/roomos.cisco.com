# Advanced Customizations and Integrations

## Using the device API

RoomOS is the operating system that powers Cisco collaboration devices, no matter which service the device is registered to. RoomOS offers a powerful public API that lets you create integrations and customizations, and tweak and tune a device's setup and behavior. This API is often referred to as the _xAPI_.

### Requirements and limitations
You can sign in and program with the xAPI on a Cisco device with Microsoft Teams Rooms. Control Hub registration is not required.

### Connecting to the API
There are several ways to access the xAPI: SSH, HTTP/HTTPS, web sockets, serial connection, and using the [cloud API](https://developer.webex.com/docs/api/guides/device-developers-guide#xapi).

Regardless of which method you choose, you must sign in. Also, the structure of the API is the same. Choose the connection method that suits your application best.

**Example:** Connect to your video device by opening a terminal window and type `ssh admin@<mydevice>`, where `admin` is a user with ADMIN or INTEGRATOR rights to the device, and `<mydevice>` is the IP address or host name of the device.

### Available commands, configurations, and statuses
The xAPI consists of four, hierarchically organized command groups. In each group the set of available commands depends on the device type, registration, and software version.

* **Commands (xCommand):** Actions such as dialing a number or muting a microphone.
* **Configurations (xConfiguration):** Permanent device settings such as the name of the device and the default volume.
* **Status (xStatus):** Read-only state values of the device, for example the current volume and whether the device is in a call.
* **Events (xEvent):** Unlike statuses, events usually occur at specific points in time, for example, when a user tap a button or when a meeting is about to start.

You can run the following commands (terminal mode) to show the complete list of configurations and commands, including their parameters and valuespaces: `xConfiguration ??` and  `xCommand ??`.

Run the following commands if you want to see the current status and current configuration values: `xStatus` and `xConfiguration`.

## Display web content 

The web-view and web-modal features have been added in order to display web content. This allows users to interact with web applications or content directly from the interface of the Cisco device.
This is useful for things like getting assistance in a room, tracking issues, or showing dashboards and calendars. You can launch these web extensions either automatically using macros or from the control panel extension option. To use this feature, you need to register your device to Control Hub.

If a web view is opened through code on passive displays, there is currently no user interface option to close it. In such cases, the closure of the web view should also be done programmatically.

Showing custom web content can also be done with [digital signage](https://help.webex.com/en-us/article/nmd8log/Enable-digital-signage-on-Board,-Desk,-and-Room-Series-devices) on Cisco devices when they are in half-wake state.

### Web view

<img src="/doc/images/MTR/WebView.png" width="600"/>

`xcommand UserInterface WebView Display Url: cisco.com`

Write the URL of the web page you would like to display.

`xcommand UserInterface WebView Display Mode: Fullscreen`

Display the web page in full screen.

*    The web page is interactive
*    Annotating isn't supported
*    Tap **Exit** button to quit

### Web modal

<img src="/doc/images/MTR/WebModal.png" width="600"/>

`xcommand UserInterface WebView Display Mode: Modal`

* Tap outside to close.

### Web view on Touch controller

You can have a web view on the Touch controller by using this command: 

`xcommand UserInterface WebView Display Target: Controller`

To close the web view, tap the cross on the top right of the screen. You can also run the following command if you want to close it: 

`xcommand UserInterface WebView Clear`

### Incoming call

When there is an incoming call, the web view will close automatically and the call will be visible.

### Further reading
For general guidelines how to use the xAPI and thorough descriptions of all commands, configurations, and statuses, check out the complete API reference guide (pdf) on cisco.com, and the RoomOS website for developers and integrators (roomos.cisco.com):
* [API reference guide, which includes general guidelines and introduction to the xAPI (pdf)]( https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html)
* [Interactive API reference (html)](https://roomos.cisco.com/xapi)
* [Short introduction to the xAPI](https://roomos.cisco.com/doc/TechDocs/xAPI)

Other information about RoomOS and the cloud API:
* [Introduction to RoomOS](https://roomos.cisco.com/doc/TechDocs/Introduction)
* [Information about how to use the cloud API](https://developer.webex.com/docs/api/guides/device-developers-guide)
* [The cloud API reference guide](https://developer.webex.com/docs/api/v1/xapi)


