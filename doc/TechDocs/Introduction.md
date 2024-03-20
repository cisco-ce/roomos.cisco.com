# Welcome

RoomOS is the operating system that powers the Webex Devices such as Room Kit, Desk Pro, Webex Board, Webex Panorama and [many others](https://projectworkplace.cisco.com/).

It is an open platform with a powerful API (the xAPI) that let's you tweak and tune any part of it, as well as adding integrations, web applications, reading sensor data and much more:

<img src="/doc/images/meetingroom2.jpg" />

Discover the APIs here, read the docs, try the examples and join the vibrant community on Webex Teams.

For developer documention for the Webex platform itself, see [developer.webex.com](https://developer.webex.com).

## The xAPI

The xAPI is the language-independent API of RoomOS that lets you interact with the system, such as for placing calls, changing configurations, reading sensor data and automating tasks.

<img src="/doc/images/tshell.png" />

The best way to understand the xAPI is to play with it yourself from a terminal. See the [xAPI guide](doc/TechDocs/xAPI) for step by step instructions for basic actions such as placing a call and adjusting volume.

## Integrations types

<img src="/doc/images/integrations.png" />

RoomOS supports a wide variety of ways of connecting to the video device. Depending on your infrastructure, requirements or preference, you can choose the one that best fits the task you are solving. The most important protocols are:

## Terminal / SSH

Use a terminal window to SSH into your device. This is typically done to explore the xAPI, debug and learn the xAPI quickly and manually. You need a local user to log in.

## Web socket

Connect with full-duplex web sockets from external servers, Raspberry Pis, mobile phones, web browsers etc. This requires your integration be on the same network as the video device, and a local user to authenticate. We recommend the [JSXAPI SDK for Node.js](/doc/JSXAPI/Intro.md) if you want to use this integration type.

## Webex API (cloud)

Connect to the xAPI with REST APIs on the Webex platform over cloud, which means your integration can be on a different network than the video device. This is not possible for devices using an on-premise deployment. See more info on [developer.webex.com](https://developer.webex.com/docs/api/v1/xapi).

## Macros

Macros are user scripts that run on the device itself. They are written in JavaScript. This makes it easy to automate tasks, control other hardware in the room or make custom user interface elements on the touch panels. Macros can be created with the macro editor available from the web interface of the video device. Macros has full access to the xAPI, and can  See the [tutorial](/doc/MacroTutorial) to get started.

## HTTP(S)

This is a stateless HTTP API that was created before the days of REST APIs. It lets you access the xAPI with HTTP requests containing XML data. Getting feedback from the video device is also possible using HTTP Feedback, a mechanism similar to webhooks. HTTP GetXML requires you to be on the same network as the video device and a local user for authentication. See the [POSTMAN examples](https://github.com/CiscoDevNet/postman-xapi) to get started.

## RS232

Traditional meeting room equipment such as Crestron and AMX can talk directly to Webex devices over serial cable. The integration then typically needs to be in the same room as the video device.

## User roles

xAPI supports different user roles. Some of the APIs are limited to admin only. These are the public roles supported:

**Admin**

An admin can create new users, change most settings, make calls, and search the contact list. The user cannot upload audit certificates and change the security audit settings.

**User**

A user with this role can make calls and search the contact lists. The user can modify a limited group of settings, such as the ringtone volume or timezone and date format.

**Audit**

A user with this role can change the security audit settings and upload audit certificates.

**Roomcontrol**

A roomcontrol user can create customized UI panels (for example UI extension panels). The user has access to the UI Extensions editor and associated development tools.

**Integrator**

An integrator has access to settings, commands, and status that are required to set up advanced A/V scenarios, and to integrate the Webex devices with third-party equipment, in addition to the same features as roomcontrol user.


<!--
## Deployments (onprem, cloud, edge)
## User roles
-->

