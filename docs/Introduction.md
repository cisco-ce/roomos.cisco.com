# Welcome

RoomOS is the operating system powering the Webex Devices such as Room Kit, Desk Pro, Webex Board, Webex Panorama and [many others](https://projectworkplace.cisco.com/).

It is an open platform with a powerful API (the xAPI) that let's you tweak and tune any part of it, as well as adding integrations, web applications, reading sensor data and much more:

<img src="/docs/images/meetingroom2.jpg" />

Discover the APIs here, read the docs, try the examples and join the vibrant community on Webex Teams.

For developer documention for the Webex platform itself, see [developer.webex.com](https://developer.webex.com).

## The xAPI

The xAPI is the language-independent API of RoomOS that let's you interact with the system, such as for placing calls, changing configurations, reading sensor data and automating tasks.

<img src="/docs/images/tshell.png" />

The best way to understand the xAPI is to play with it yourself from a terminal. See the [xAPI guide](/docs/xAPI.md) for step by step instructions for basic actions such as placing a call and adjusting volume.

## Integrations types

<img src="/docs/images/integrations.png" />

RoomOS supports a wide variety of integrations types. You can connect to the video devices with different protocols and technologies, depending on your requirements or preference. The most important types are:

### Terminal / SSH

Use a terminal window to SSH into your device. This is typically done to explore they xAPI, debug and and learn the xAPI quickly and manually. You need a local user to log in.

### Web socket

Connect with web sockets from external servers, Raspberry Pis, mobile phones, web browsers etc. This requires your integration be on the same network as the video device, and a local user to authenticate. We recommend the [JSXAPI SDK for Node.js](/docs/JSXAPI/Intro.md) if you want to use this integration type.

### Webex API (cloud)

Connect to the xAPI with REST APIs on the Webex platform over cloud, which means your integration can be on a different network than the video device. This is not possible for devices using an on-premise deployment. See more info on [developer.webex.com](https://developer.webex.com/docs/api/v1/xapi).

### Macros

Macros are user scripts that run on the device itself. This makes it easy to automate tasks, control other hardware in the room or make custom userinterface elements on the touch panels. Macros can be created with the macro editor available from the web interface of the video device. See the [tutorial](/docs/MacroTutorial) to get started.

### HTTP GetXML

This is a HTTP api that was created before the days of REST APIs. It lets you access the xAPI with HTTP requests containing XML data. Getting feedback from the video device is also possible using HTTP Feedback, a mechanism similar to web hooks. HTTP GetXML requires you to be on the same network as the video device and a local user for authentication.

<!--
### RS232

## User roles

-->

