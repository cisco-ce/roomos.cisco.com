# Using the device API

RoomOS is the operating system that powers Cisco collaboration devices, no matter which service the device is registered to. RoomOS offers a powerful public API that lets you create integrations and customizations, and tweak and tune a device's setup and behavior. This API is often referred to as the _xAPI_.

---
The list of supported APIs on MTR registered devices is a work in progress. This means that the list of commands that are available now are likely to change in the upcoming releases. Therefore, we recommend you to NOT create integrations based on the currently available set of APIs.
---

## Requirements
* To be able to sign in and program against the xAPI, the device must be registered to both MTR and Webex (dual registration). If the device is registered only to MTR, xAPI access is blocked.

## Connecting to the API
There are several ways to access the xAPI: SSH, HTTP/HTTPS, web sockets, serial connection, and using the cloud xAPI.

Regardless of which method you choose, you must sign in. Also, the structure of the API is the same. Choose the connection method that suits your application best.

**Example:** Connect to your video device by opening a terminal window and type `ssh admin@<mydevice>`, where `admin` is a user with ADMIN or INTEGRATOR rights to the device, and `<mydevice>` is the IP address or host name of the device.

## Available commands, configurations, and statuses
The xAPI consists of four, hierarchically organized command groups. In each group the set of available commands depends on the device type, registration, and software version.

* Commands (xCommand): Actions such as dialing a number or muting a microphone.
* Configurations (xConfiguration): Permanent device settings like the name of the device or the default volume.
* Status (xStatus): Read-only state values of the device, for example the current volume or whether the device is in a call.
* Events (xEvent): Unlike statuses, events usually occur at specific points in time, such as a notification that a meeting is about to start or that a user tapped a button.

You can run the following commands (terminal mode) to show the complete list of configurations and commands, including their parameters and valuespaces:
* `xConfiguration ?? <enter>` 
* `xCommand ?? <enter>`

To see the current values of configurations and list the current status:
*	`xConfiguration <enter>`
*	`xStatus <enter>`

## Further reading
For general guidelines how to use the xAPI and thorough descriptions of all commands, configurations, and statuses, check out the complete API reference guide (pdf) on cisco.com, and the RoomOS website for developers and integrators (roomos.cisco.com):
* [API reference guide, which includes general guidelines and introduction to the xAPI (pdf)]( https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html)
* [Interactive API reference (html)](https://roomos.cisco.com/xapi)
* [Short introduction to the xAPI](https://roomos.cisco.com/doc/TechDocs/xAPI)

Other information:
* [Information about how to use the cloud API](https://developer.webex.com/docs/api/guides/device-developers-guide)
* [Introduction to RoomOS](https://roomos.cisco.com/doc/TechDocs/Introduction)
