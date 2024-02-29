# Using the device API

RoomOS is the operating system that powers Cisco collaboration devices, no matter which service the device is registered to. RoomOS offers a powerful public API that lets you create integrations and customizations, and tweak and tune a device's setup and behavior. This API is often referred to as the _xAPI_.

## Requirements and limitations
To be able to sign in and program with the xAPI, a Cisco device with Microsoft Teams Rooms must also be registered to Control Hub.

## Connecting to the API
There are several ways to access the xAPI: SSH, HTTP/HTTPS, web sockets, serial connection, and using the [cloud API](https://developer.webex.com/docs/api/guides/device-developers-guide#xapi).

Regardless of which method you choose, you must sign in. Also, the structure of the API is the same. Choose the connection method that suits your application best.

**Example:** Connect to your video device by opening a terminal window and type `ssh admin@<mydevice>`, where `admin` is a user with ADMIN or INTEGRATOR rights to the device, and `<mydevice>` is the IP address or host name of the device.

## Available commands, configurations, and statuses
The xAPI consists of four, hierarchically organized command groups. In each group the set of available commands depends on the device type, registration, and software version.

* **Commands (xCommand):** Actions such as dialing a number or muting a microphone.
* **Configurations (xConfiguration):** Permanent device settings such as the name of the device and the default volume.
* **Status (xStatus):** Read-only state values of the device, for example the current volume and whether the device is in a call.
* **Events (xEvent):** Unlike statuses, events usually occur at specific points in time, for example, when a user tap a button or when a meeting is about to start.

You can run the following commands (terminal mode) to show the complete list of configurations and commands, including their parameters and valuespaces: `xConfiguration ??` and  `xCommand ??`.

Run the following commands if you want to see the current status and current configuration values: `xStatus` and `xConfiguration`.

## Further reading
For general guidelines how to use the xAPI and thorough descriptions of all commands, configurations, and statuses, check out the complete API reference guide (pdf) on cisco.com, and the RoomOS website for developers and integrators (roomos.cisco.com):
* [API reference guide, which includes general guidelines and introduction to the xAPI (pdf)]( https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html)
* [Interactive API reference (html)](https://roomos.cisco.com/xapi)
* [Short introduction to the xAPI](https://roomos.cisco.com/doc/TechDocs/xAPI)

Other information about RoomOS and the cloud API:
* [Introduction to RoomOS](https://roomos.cisco.com/doc/TechDocs/Introduction)
* [Information about how to use the cloud API](https://developer.webex.com/docs/api/guides/device-developers-guide)
* [The cloud API reference guide](https://developer.webex.com/docs/api/v1/xapi)

