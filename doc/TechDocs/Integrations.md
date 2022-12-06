# RoomOS Integrations Explained

<img src="/doc/images/meetingroom4.jpeg" />

RoomOS supports many alternative types of integrations, and it can initially be difficult to know which one to choose. This guide describes the main alterntives for connecting to a Cisco device, how they differ from each other, and suggests when to use and not use each one.

All the integrations use the xAPI, and often an integration can be implemented with any of the alternatives. The difference is the way they connect, the network requirements, how they can be deployed, and the security model.

## Short summary

A short summary of the integration types are:

* **Macros:** JavaScript snippets that run on the device itself.

* **Cloud xAPI / Workspace integrations**: Integration that can run outside of the collab device network and talks to the devices via the cloud using Webex APIs.

* **JSXAPI / Web sockets:** A web-socket based Node.js integration on a machine in the same network as the collab devices, using the same SDK to access the xAPI as the macros (JSXAPI).

* **HTTP API**: Similar to the JSXAPI integration, but uses standard HTTP requests and a web hook like mechanism for feedback.

* **RS232 / Serial**: Cable-based connection (serial cable or USB), typically for legacy room controllers such as Crestron and Extron, often placed in the same room as the collab device.


All the solutions presented here support UI extensions.

## Quick sheet

<table style="font-size: 14px">
  <tr>
    <th></th>
    <th>Macros</th>
    <th>Cloud xAPI</th>
    <th>JSXAPI</th>
    <th>HTTP</th>
    <th>RS-232</th>
  </tr>
  <tr>
    <td>⚙️ Programming language / SDK</td>
    <td>JavaScript</td>
    <td>Any</td>
    <td>JavaScript</td>
    <td>Any</td>
    <td>Any</td>
  </tr>
  <tr>
    <td>🚚 On-prem / cloud</td>
    <td>Both</td>
    <td>Cloud only</td>
    <td>Both</td>
    <td>Both</td>
    <td>Both</td>
  </tr>
  <tr>
    <td>🏎️ Latency</td>
    <td>Instantaneous</td>
    <td>~1s</td>
    <td>Very low</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>🔐 Access control</td>
    <td>User based</td>
    <td>Token based</td>
    <td>User based</td>
    <td>User based</td>
    <td>Optional</td>
  </tr>
    <tr>
    <td>👮‍♀️ API access</td>
    <td>Full</td>
    <td>Limited*</td>
    <td>Full</td>
    <td>Full</td>
    <td>Full</td>
  </tr>
</table>

\**Cloud xAPI can only subscribe to a small subset of events and status changes, and is not allowed to use xAPIs marked as **privacy-impacting** on personal-registered devices.*

## Macros

Macros are JavaScripts that run on the collab device itself. The scripts can use an xAPI library to talk to the device and receive feedback from it. This is similar to Node.js rather than a browser, the JavaScript macro does not have access to any HTML or CSS.

<img src="/doc/images/integrations/macros.png" />

Macros are typically created in the macro editor on a specific device, then copied to other devices. Macros are heavily sandboxed and cannot access the file system, setup socket connections etc, but they can talk to other web services using the xAPI HTTP Client apis.

<img src="/doc/images/macroeditor.png" style="border: 1px solid #333" />

Common examples of macros are providing support for custom UI actions such as quick dials, custom layouts, controlling lights, blinds, climate controls, and creating automated workflows like unbooking a room when nobody shows up. Since they run on the device itself, there is no network involved, and the response to device events, user interactions etc are instantaneous.

Macros can run as either admin or integrator / room control user, but in general there is no fine grained way to set which APIs a particular macro can and cannot access. In practise, a third party macro designed to eg just provide light control will typically also have access to call logs, network settings, user management etc.

### Use macros when:

- You want to create something quick, or start learning the xAPI.

- You want to create solutions for a few, big complex rooms (like auditoriums).

- You have access to limited programming skills and resources.

- You need fast response to events on the device, or user interactions.

- You don't want or don't have the ability to host code elsewhere.

Macros are also a great way to learn working with the Cisco devices and the xAPI. You can create a Hello World application in a matter of minutes from deciding to start, without needing to download or setup any developer environment.

You can provision macros from the device itself or from Control Hub. There are no offical support for bulk provisioning, so if you need to deploy to many devices, you need to use other tools such as [CE Deploy](https://cs.co/ce-deplo) or write your own scripts.

### Don't use macros when:

- You need to respond to external events, such as a fire alarm. Macros cannot receive web hooks, or set up websockets to external end points.

- You need co-operation between devices.

- You don't trust the integration and need fine grained control over which APIs the integration is allowed to use.

- You need centralized integration logic that you need to update often.


### Typical use cases

* Modern ion-room controls for lights, shades, climate controls supporting HTTP REST APIs
* Custom ui panels on the device to control custom layout
* Custom automations such as automatically unbooking a meeting room when it's scheduled but no one shows up

For an intro to macros, start with: [Macro Tutorial](/doc/TechDocs/MacroTutorial). For dozens of examples, see [extensions on this site](/macros).

## Cloud xAPI / Workspace integrations

Cloud xAPI talks to the device using modern REST APIs. These calls are made from the integration not to the Cisco device itself, but to the Webex cloud, so the integration does not need to be on the same network as the devices.

<img src="/doc/images/integrations/cloud.png" />

The access model is a bit more complicated than the macros and on-prem solutions, and does not use local user access. Instead, access is granted as tokens, either by:

- Using a tokan on behalf of an authorised org admin.
- Giving bots access to the devices specifically (a bot in this case just means a machine account generated in the Webex cloud, not necessarily a chat bot).

The cloud xAPI does not provide any feedback mechanisms such as notifying the integration when a status has changed on the device, or a user interatction has occured. It can still be useful as a way to change device configurations in bulk based on specific business requirements.

<img src="/doc/images/integrations/workspace-integrations.png" />

Workspace integrations build on top of the cloud xAPI to improve this: It allows you to create integrations in the cloud that receive notifications and events that you specify in the manifest. Furthermore, unlike all the other integrations, it allows you to specify exactly which xAPIs the integration is allowed to access, giving you fine grained access control over what an integration can and cannot do.

Workspace integrations can be created for your own org, but it can also be created as a public integration that any Webex customer can use. This creates a unique business opportunity for developers to create solutions that can be offered to any Webex customer and installed almost as a one-click operation on Control Hub.

### Use cloud xAPI and workspace integrations when:

* You have a publicly accessible web service
* You want to create solutions that you can sell to customers that they can start using simply by enabling it in Control Hub
* You want to provide integrations to hundreds or thousands of devices in your org, with small maintenance efforts

### Don't use when:

- You need data to stay strictly within your own network
- You need access to more APIs than the cloud xAPIs allow
- You need the integration to work with devices in personal mode
- You need fast respons to events (eg adjusting a light as the user moves a slider)
- You have an on-prem device deployment

To get started with cloud xAPI and workspace integrations, see [the device guide](https://developer.webex.com/docs/api/guides/device-developers-guide) and the [Workspace Integrations guide](https://developer.webex.com/docs/api/guides/workspace-integrations-guide) on developer.webex.com.

### Typical use cases

* Collecting usage metrics from large number of devices in an organisation to a central analytics tool.
* Providing a "Report Issue" form on all devices in the meeting rooms thar forwards the issue to eg ServiceNow.


## JSXAPI / Node.js

JSXAPI is a web-socket based SDK for Node.js that let's you talk to devices from eg virtual machines or Raspberry Pis that are on the same network as the collab devices. The syntax for the SDK is exactly the same as the macros use, so it's easy to move code from a macro to a more centralized integration.

Since the integration is running on your own platform of choice, you can now use any other tool such as crypto, databases, sockets, machine learning etc. You can also listen to external events and update the collab devices based on that, or make integrations that synchronizes devices.

<img src="/doc/images/integrations/onprem.png" />

This solution requires that you use a local user to connect to the devices, so you need to maintain an up-to-date list of ip addresses, usernames and passwords. You also need to handle re-connects for the web-sockets, for example if the network is temporarily down.

Since the integration is hosted in one centralized place, maintenance is done by simply upgrading your integration and restarting it.

Both secure web sockets (wss) and unsecure (ws) is supported.

### Use this integration when:

- You need to combine data from multiple devices
- You need to respond to external events
- You need to use external libraries not supported by macros
- You need to use the APIs directly from a browser (not via a web server)

### Do not use this integration when

- Maintaining device IP addresses, local users and passwords is not an option.
- You don't have access to the device network (isolated network).

### Typical use case

* A building management server that controls lights, climate control etc in the building by listening to UI events from the Cisco devices and forwards the requests to the appropriate smart building controllers.

* Showing important company alerts on all screens in the office, such as fire alarm and evacuation maps.

For an introduction, see [JSXAPI / Node.js](/doc/TechDocs/JSXAPIIntro).

## HTTP(S) API

You can also talk to the collab device with HTTP(S) API. The format of this API is not a REST API, but rather a proprietary XML over HTTP API. An integration using this is connection-less (fire and forget), so it doesn't need to maintain a connection like the web socket. Conceptually this solution is otherwise very similar to the JSXAPI approach.

<img src="/doc/images/integrations/http.png" />

There is also a web-hook like mechanism that can instruct the device to post HTTP messages back to a web server (HTTP Feedback), based on status changes or events that you specify.

It's recommended to use this approach in the same situations as the JSXAPI situation above, but where:

* You cannot use web socket, perhaps your integration platform does not support web sockets

* You dont need feedback, and prefer a simple fire and forget HTTP solution

## Don't use when:

* You need to access directly the API directly from a browser / web app (no CORS: the devices don't HTTP requests from different origins) 

See the [Postman collection](/doc/UsefulLinks/Resources) at DevNET for many good examples.

## RS232 / Serial connection

RS-232 / serial connection allows you to plug a cable directly into the Cisco devices that support these inputs. These kind of iintegrations are usually set up for external room controllers such as Crestron and Extron located in the same room as the Cisco device, with USB or serial cables.

<img src="/doc/images/integrations/rs232.png" />

For more technical details, see the the [API reference guide (PDF)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html) and the drivers for Creston / Extron etc on the [useful links](/doc/UsefulLinks/Resources) page.

### Use this integration when

* You need to use a legacy control system that doesn't support HTTP or web sockets.

* You require a direct cabled connection for security reasons.

### Typical use case

* Legacy room control (lights, shades, climate control) or advanced AV control with proprietary drivers

* Legacy ontrol systems that don't support HTTP, web socket or SSH connections

## Combined solutions

There is of course nothing stopping you from creating solutions that combine several of the solutions mentioned above. Just make sure you understand the strengths and pain points of each integration type first and make sure it's worth the extra complexity and maintenance effort.

## Browser based solutions

Connecting directly from a web browser on a laptop or a mobile phone to a Cisco device is also possible. This can be done using the JSXAPI solution or HTTP solution mentioned above. A couple of security considerations are worth noting:

* The Cisco devices use self signed SSL certificates, which most browser don't like. A user will need to approve the certifciate before using the integration the first time.

* Username and password for the collab device should not be made freely available on a publicly accessible web page.

The best practise would typically be that the browser talks to a web server, that then talks to the collab device, which basically means the JSXAPI or HTTP based solution mentioned earlier.

See [this guide ](/doc/TechDocs/JSXAPIBrowser) for more details.

## What about the web apps on the devices?

As of 2022, the web apps (and other web based features such as digital signage, embedded apps and web views opened from API) do not have any access to the device xAPI, for security reasons.

<!--


Combination of methods

There are a few more specific topics on accessing the xAPI. For those interested, these are:
* Accessing the xAPI directly from a browser (eg a smart phone)
* Accessing the xAPI from a web app running ont the collab device
-->
