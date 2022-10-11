
# Using Cisco device APIs to address hybrid work scenarios

## Overview

With Cisco video devices you have the ability to have meetings from anywhere. The value to the user is that they have an experience that is inclusive, flexible, supportive, managed and secure. The outcomes are meetings that are easy to set up with space management platforms, engaging, productive and drive a sense of belonging to improve employee retention. Similarly the employees well being can be improved with supportive hybrid work that is safe, ergonomic , sanitized and improves sustainability

This document gives an overview for integrators, be they resellers or software solution partners, to understand how they can configure and program with API’s for customers’ specific requirements for their organization and how they manage their employees engagement , well being and workflow.

<img src="/docs/images/usecases/examples.png" />

<img src="/docs/images/usecases/devices.png" />

## Resources

For those that are not familiar with Cisco API’s there are 2 resources that will enable you to gain a deep understanding of what is possible.

https://developer.webex.com – this is for all API’s related to the whole Webex platform (Calling, Meetings, Messaging, Contact Center, Webex Assistant, Admin, FedRAMP and devices) Sign Up for free and explore all the capabilities

https://roomos.cisco.com – this is specifically for developing on RoomOS, which is the operating system for Cisco video devices and keeps it all under the realm of devices without all of the other Webex Platform elements above. At the same time there are specific macros examples for devices with the code on Github as examples.

## Use cases

<img src="/docs/images/usecases/hybriduser.png" />

The use cases are associated to where the person is working from and how to engage with them at that place.  For devices that you can program this will likely be a static place, such as the home, office, hot desk, conference room, huddle space, board room, phone booth kiosk etc.

The table below displays the use cases, what the outcomes can be and which API’s you should look at and integrate with a 3rd party platform if needed. Many API’s are considered xAPI’s which means they can be executed with Control Hub, which is the cloud management system, not requiring an individual call to the device itself, allowing for scaling of commands and use cases and centralizing.

## Hybrid work solutions

The following use cases will be covered at a high level.  Many of the API’s can be mixed as well to cover multiple use cases:

* Space management
  * Enhanced version of room booking often including hot desks
* Visitor registration
  * Using devices to check in visitors
* Team and personal communications
  * Often referred to as digital signage when applied to teams, but can be used on Desk devices as well (Desk Mini / Desk / Desk Pro) for personal use
* Well being
  * Includes engagement (social and emotional well being) , and environmentals (physical well being)
* Hotdesking
* Wayfinding & mapping
* Visual collaboration
  * Often various forms of whiteboarding from basic to advanced)
* Spatial analytics
  * Often used for planning purposes and driving real time behavior on devices

<img src="/docs/images/usecases/building-example.png" />


## Use case: Room controls

<img src="/docs/images/usecases/ui-extensions.png" />

*What:* With custom user interface extensions, macros and the ability to call other HTTP services directly, the video devices can act as a powerful universal remote control in the meeting room, for example to control lights and shades without additional touch panels or hardware boxes in the room. And if the external equipment does not support HTTP APIs, you can easily connect Crestron controllers etc to the video device.

Example of use cases:
* Controlling lights (manually or automatically based on in-call state, presentation state etc)
* Report technical issues in the room
* Temperature control
* Music players
* Shades and blinds
* Media devices such as Bluray players, DVD players and setop boxes
* Projectors and projector canvas
* Order food and refreshments

**Relevant APIs:**

* [UserInterface Extensions](/xapi/search?search=userinterface+extensions) - UI extensions APIs
* [UserInterface Message](/xapi/search?search=userinterface+message) - UI alerts and input dialogs
* [HttpClient](xapi/search?search=httpclient) - APIs for calling external web services


For more info about UI extensions and macro programming, see [Intro to UI extensions](/docs/UiExtensions) and [Intro to macros](/docs/Macro/Introduction).

## Use case: Web applications

<img src="/docs/images/usecases/webapps.png" />

Bring your own favourite web applications into the team room, the meeting room or your personal device. The web apps can be installed from Control Hub, from the device's local web interface or by the user from the settings menu on the device itself.

Example of useful apps:

* Collaborative tools (Miro, Trello)
* Dashboards (Jira, Tableau)
* Office maps, wayfinding
* YouTube
* Ice breakers and games (Google Quickdraw)

For more info about the Chromium web engine, see [the web engine guide](/docs/WebEngine).

**Relevant APIs:**

* [xCommand UserInterface Extensions WebApp](/xapi/Command.UserInterface.Extensions.WebApp.Save/) - Add a web app to the device
* [xConfiguration WebEngine Features LocalWebAppManagement](/xapi/Configuration.WebEngine.Features.LocalWebAppManagement/) - Allow users to add apps on the device itself

**Device**

Any video device with a touch screen, such as the Desk series and the Board series.

## Use case: Kiosk

<img src="/docs/images/kiosk/overview.png" />

*What:* Provide a Webex Desk in the reception, where visitors can walk up and register themselves. A visitor registration web app can provide the registering UI and push the registration to the company's internal visiting system, as well as print out visitor badge.

**Relevant APIs:**

* [xConfiguration UserInterface Kiosk](/xapi/search?search=userinterface+kiosk) - Set the URL for the web kiosk
* [xConfiguration UserInterface Features](/xapi/search?search=userinterface+features) - Hide share button, whiteboard app, phonebook button etc from home screen
* [xCommand UserInterface Branding](/xapi/search?search=userinterface+branding&Type=Command) - Set custom wallpaper and branding logo to style the kiosk according to your company's visual identity
* [xConfiguration WebEngine Features SipUrlHandler](/xapi/Configuration.WebEngine.Features.SipUrlHandler/) - Allow the web kiosk to provide links to place calls
* [xConfiguration Standby](/xapi/search?search=standby&Type=Configuration) - Configure the standby timeout, to keep the device on at office hours
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby

*Device support:* Typically Desk series (Desk Pro, Desk or Desk Mini).

**Examples:**

* [Webex Bank Kiosk](https://cisco-ce.github.io/roomos-samples/kiosk-example/)
* [Visitor Registration Kiosk](https://cisco-ce.github.io/roomos-samples/visitor-kiosk/)

## Use case: People count

<img src="/docs/images/meetingroom2.jpg" />

*What:* Use the sensors of the video device to device if there are people in the room, and how many. This can be used for:

* Space management
* Hot desking
* Spatial analytics

The video devices provide two different methods of measuring people:

* Ultra-sound (~radar) to detect motion, using microphones. This is a either or value, not countint the number of people
* Head detection, using the cameras. This can give an estimate of the actual number of people

**Relevant APIs:**

* [xStatus RoomAnalytics PeoplePresence](/xapi/Status.RoomAnalytics.PeoplePresence/) - Is there people detected in the room?
* [xStatus RoomAnalytics PeopleCount Current](/xapi/Status.RoomAnalytics.PeopleCount.Current/) - How many people (faces) are detected
* [xStatus RoomAnalytics PeopleCount Capacity](/xapi/Status.RoomAnalytics.PeopleCount.Capacity/) - What's the room's max capacity (configurable in Control Hub)
* [xConfiguration RoomAnalytics PeoplePresenceDetector](/xapi/Configuration.RoomAnalytics.PeoplePresenceDetector/?) - Enable the ultrasound-based detector
* [xConfiguration RoomAnalytics PeopleCountOutOfCall](/xapi/Configuration.RoomAnalytics.PeopleCountOutOfCall/) - Enable head detection also when the room is not in a video call
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby
* [HttpClient](/xapi/search?search=httpclient) - These APIs can be used to send data from the device to external web services

**Device support:** All (Desk series, Room series, Board series)

## Use case: Environmental sensors

<img src="/docs/images/usecases/environmental-sensors.png" />

Many of the devices now includes environmental sensors, including temperature, humidity, CO2 levels and ambient noise. These can be used to for example:

* Warn individuals about poor working conditions, either in the home office or in meeting rooms
* Provide statistics to facility managers

**Relevant APIs:**

* [xStatus RoomAnalytics AmbientTemperature](xapi/Status.RoomAnalytics.AmbientTemperature/) - Air temperature in the room
* [xStatus RoomAnalytics RelativeHumidity](/xapi/Status.RoomAnalytics.RelativeHumidity/) - Level of percentage humidity in the air
* [xStatus RoomAnalytics AmbientNoise Level](/xapi/Status.RoomAnalytics.AmbientNoise.Level.A/) - Overall noise level in the room, in decibels
* [xStatus Peripherals ConnectedDevice RoomAnalytics AirQuality](/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.AirQuality.Index/) - Level of CO2 in the air. **Note**: Requires a Room Navigator
* [xConfiguration RoomAnalytics AmbientNoiseEstimation Mode](xapi/Configuration.RoomAnalytics.AmbientNoiseEstimation.Mode/) - Enable ambient noise estimation

## Use case: Digital signage

<img src="/docs/images/usecases/signage.png" />

Make optimal use of the video device screens by showing relevant information ("signage") to employees and visitors when the device is not in active use. Digital signage replaces the normal screen saver ("half wake") with a web page that the IT admin can configure to whichever URL they wish. On touch screens, there is even the possibity for interactive content.

Be sure to use the office hours settings too, to save energy and not show signage at night or in the weekends.

Example of information to show:

* Employee information
* Company news
* Visitor information
* Company branding
* Team status (in team rooms)
* Dashboards, metrics

**Relevant APIs**:

* [xConfiguration Standby Signage](https://roomos.cisco.com/xapi/search?search=signage) - Enable and set signage URL
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby
* [xConfiguration Time OfficeHours](https://roomos.cisco.com/xapi/search?search=officehours) - Control exactly when signage should be shown


## Use case: Custom calendaring / booking

The Cisco Room Navigator comes with a great booking user interface, but if you have specific needs, you can also create your own booking web app on the Navigator.

<img src="/docs/images/usecases/navigator.webp" />

**Relevant APIs:**

* [xConfiguration UserInterface HomeScreen Peripherals WebApp URL](/xapi/Configuration.UserInterface.HomeScreen.Peripherals.WebApp.URL/) - Configure the web app URL
* [xConfiguration WebEngine Features Xapi Peripherals AllowedHosts Hosts](/xapi/Configuration.WebEngine.Features.Xapi.Peripherals.AllowedHosts.Hosts/) - Set the list of allowed hosts
* [xConfiguration Security Xapi WebSocket ApiKey Allowed](/xapi/Configuration.Security.Xapi.WebSocket.ApiKey.Allowed/) - Allow the web app to access parts of the xAPI (for LED control etc)

See [Configure a persistent web app](https://help.webex.com/en-us/article/ohq3u6/Configure-a-persistent-web-app-on-Webex-Room-Navigator) for more details.

## Use case: T3 Alarm detection

<img src="/docs/images/usecases/firedrill.jpeg" />

Expand your building alarm system with visual aids when a firealarm is detected. Especially nice for employees with reduced hearing, or that are using head phones. Use custom UI alerts or even web pages to show information to employees when an alarm is detected.

**Relevant APIs**:

* [xConfiguration RoomAnalytics T3AlarmDetction Mode](/xapi/Configuration.RoomAnalytics.T3AlarmDetection.Mode) - Enable the alarm detection feature
* [xStatus RoomAnalytics T3Alarm Detected](/xapi/Status.RoomAnalytics.T3Alarm.Detected) - Indication of whether an alarm is currently detected
* [xCommand UserInterface Message Alert Display](/xapi/Command.UserInterface.Message.Alert.Display/) - Show a info dialog on screen with custom text
* [xCommand UserInterface WebView Display](/xapi/Command.UserInterface.WebView/) - Show/hide a custom web page on screen, with eg escape route map


<!--
More use cases:
- Help / instructions
- Report issue
- Virtual sources
- Company alerts
- Webrtc / interop
- Video matrix / advanced compositing
- USB peripherals / remote
- Crestron / AMX
- Embedded apps
- Room divider
- Audio console
- CEC
-->


