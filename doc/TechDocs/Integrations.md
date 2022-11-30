# RoomOS Integrations

<img src="/doc/images/meetingroom4.jpeg" />

RoomOS supports many alternative types of integrations, and it can initially be difficult to know which one to choose. This guide describes the main alternatives, how they differ from each other, and suggests when to use and not use each one.

In the end, they all use the public xAPI, so a basic understanding of that is essential when you actually start developing.

## Short summary

A short summary of the integration types are:

* **Macros:** JavaScript snippets that run on the device itself.

* **Cloud xAPI / Workspace integrations**: Integration that can run outside of the collab device network and talks to the devices via the cloud using Webex APIs.

* **JSXAPI / Web sockets:** A web-socket based Node.js integration on a machine in the same network as the collab devices, using the same SDK to access the xAPI as the macros (JSXAPI).

* **HTTP API**: Similar to the JSXAPI integration, but uses standard HTTP requests and a web hook like mechanism for feedback.

* **SSH / Serial**: SSH based connection (serial cable, USB, ...), typically for legacy room controllers such as Crestron and Extron, often placed in the same room as the collab device.

All solutions presented here work with UI extensions bi-directionally, meaning that the integration can respond to user events, and update the UI based on external events.

## Quick sheet

<table style="font-size: 14px">
  <tr>
    <th></th>
    <th>Macros</th>
    <th>Cloud xAPI</th>
    <th>JSXAPI</th>
    <th>HTTP</th>
    <th>SSH</th>
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

*Cloud xAPI is not allowed to use xAPIs marked as **privacy-impacting** on personal-registered devices, and can only subscribe to a small subset of events and status changes.*

## Macros

Macros are JavaScripts that run on the collab device itself. The scripts can use a xapi library to talk to the device and receive feedback from it. This is similar to Node.js rather than a browser, the JavaScript does not have access to any HTML or CSS.

<img src="/doc/images/integrations/macros.png" />

Macros are typically created in the macro editor on a specific device, then copied to other devices. Macros are heavily sandboxed and cannot access the file system, setup socket connections etc, but they can talk to other web services using the xAPI HTTP Client apis.

<img src="/doc/images/macroeditor.png" style="border: 1px solid #333" />

Common examples of macros are providing support for custom UI actions such as quick dials, custom layouts, controlling lights, blinds, climate controls, and creating automated workflows like unbooking a room when nobody shows up. Since they run on the device itself, there is no network involved, and the response to device events, user interactions etc are instantaneous.

Macros can run as either admin or integrator / room control user, but in general there is no fine grained way to set which APIs a particular macro can and cannot access. In practise, a third party macro designed to eg just provide light control will typically also have access to call logs, network settings, user management etc.

### Use macros when:

- You want to create something quick, or start learning the xAPI.

- You want to create solutions for a few, big complex rooms (like auditoriums).

- You have access to limited programming skills and resources.

- You need fast respons to events on the device, or user interactions.

- You don't want or don't have the ability to host code elsewhere.

Macros are also a great way to learn working with the Cisco devices and the xAPI. You can create a Hello World application in a matter of minutes from deciding to start, without needing to download or setup any developer environment.

You can provision macros from the device itself or from Control Hub. There are no offical support for bulk provisioning, so if you need to deploy to many devices, you need to use other tools such as [CE Deploy](https://cs.co/ce-deplo) or write your own scripts.

### Don't use macros when:

- You need to respond to external events, such as a fire alarm. Macros cannot receive web hooks, or set up websockets to external end points.

- You need co-operation between devices.

- You don't trust the integration and need fine grained control over which APIs the integration is allowed to use.

- You need centralized integration logic that you need to update often.


### Typical use cases

* In-room controls for lights, shades, climate controls
* Custom ui panels on the device to control custom layout
* Automatically unbook a meeting room when it's scheduled but no one shows up

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

### Use cloud xAPI and workspace integrations when:

* You have a publicly accessible server
* You want to create solutions that you can sell to customers that they can start using simply by enabling it in Control Hub

### Don't use when:

- You need data to stay strictly within your own network
- You need access to more APIs than the cloud xAPIs allow
- You need the integration to work with devices in personal mode
- You need fast respons to events (eg adjusting a light as the user moves a slider)
- You have an on-prem device deployment

To get started with cloud xAPI and workspace integrations, see [the device guide](https://developer.webex.com/docs/api/guides/device-developers-guide) and the [Workspace Integrations guide](https://developer.webex.com/docs/api/guides/workspace-integrations-guide) on developer.webex.com.

### Typical use cases

* Collecting usage metrics from large number of devices in an organisation to a central analytics tool.
* Providing a "Report Issue" form on all devices in the meeting rooms thar forwards the issue to eg ServiceNow



## External on-prem integrations

External on-prem integrations are code that runs on virtual machines or similar inside the corporate network and access the video device's xAPI using either the same web socket SDK as the macros ([JSXAPI / Node.js](/doc/TechDocs/JSXAPIIntro)) or the older HTTP api (<need separate doc for this>). This requires authentication using local user on the device, and gives the integration the same level of access as the macros. The latency is likely higher than macros, but still fast if the network is in good condition.

<img src="/doc/images/integrations/onprem.png" />

Although we call it "on-prem" here, it works equally well both for on-prem and cloud deployed devices.

Some of the advantages of this integraion type is that:

- It can combine data from several devices.
- It can respond the external events, eg a fire alarm.
- It is not restricted to the xAPI or JavaScript and can use Python, Java libraries etc.
- The integration can be easily upgraded, and doesn't require bulk deployment solutions (though you will need to bulk provision local user access).

Challenges:

- It must keep an up-to-date record of IP addresses for all devices, as well as usernames and passwords.
- If it's using the JSXAPI, maintaining long-lived web sockets is not always trivial.
- If it's using the HTTP API, there is no solid support for feedback from the devices when status change and events occur.

Typical use case: Company alerts, where a message alert is shown on all devices screens in the office, such as an evacuation map when there is a fire alarm.


## SSH / Serial connection

<img src="/doc/images/integrations/rs232.png" />

For more technical details, see the the [API reference guide (PDF)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html) and the drivers for Creston / Extron etc on the [useful links](/doc/UsefulLinks/Resources) page.


## Combined solutions


## What about the web apps on the devices?

As of 2022, the web apps (and other web based features such as digital signage and embedded apps) do not have any access to the device xAPI, for security reasons.

<!--
for each type:
- high level overview
- link to more detail
- pros/cons
- example
- when to use

Combination of methods

There are a few more specific topics on accessing the xAPI. For those interested, these are:
* Accessing the xAPI directly from a browser (eg a smart phone)
* Accessing the xAPI from a web app running ont the collab device
-->
