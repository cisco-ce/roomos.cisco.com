
# Use Cisco device APIs to address hybrid work scenarios

## Overview

With Cisco devices, you can conduct meetings from anywhere, providing users with a flexible, inclusive, and secure experience. This not only facilitates easy setup through space management platforms but also ensures engaging, productive meetings that foster a sense of belonging and enhance employee retention. Additionally, the supportive hybrid work environment created by Cisco devices promotes employee well-being by prioritizing safety, ergonomics, sanitization, and sustainability.

This document gives an overview for integrators, whether they are resellers or software solution partners. It aims to help them understand how to configure and program APIs to meet the specific requirements of their customers' organizations. By doing so, they can effectively manage employee engagement, well-being, and workflow to create a tailored solution.

<img src="/doc/images/usecases/examples.png" />

<img src="/doc/images/usecases/devices.png" />

## Resources

For those unfamiliar with Cisco APIs, the two following resources will provide a thorough understanding of the possibilities they offer.

https://developer.webex.com – this is for all the APIs related to the whole Webex platform (Calling, Meetings, Messaging, Contact Center, Webex Assistant, Admin, FedRAMP and devices). Sign up for free and explore all the capabilities.

https://roomos.cisco.com – this resource is dedicated to RoomOS development, focusing exclusively on the operating system for Cisco video devices. It provides a focused exploration within the realm of devices, excluding the broader Webex Platform elements. Additionally, specific macro examples with corresponding code can be found on GitHub, serving as practical illustrations for developers.

## Use cases

<img src="/doc/images/usecases/hybriduser.png" />

The use cases are associated to where the person is working from and how to engage with them at that place.  For devices that you can program this will likely be a static place, such as the home, office, hot desk, conference room, huddle space, board room, phone booth kiosk etc.

The table below outlines various use cases, potential outcomes, and identifies the specific APIs to explore and integrate with third-party platforms if necessary. Numerous APIs fall under the category of xAPIs, enabling execution through Control Hub, the cloud management system. This approach eliminates the need for individual calls to the device, facilitating scalable command execution, use case implementation, and centralization.

## Hybrid work solutions

The following use cases will be covered at a high level.  Many of the APIs can be mixed as well to cover multiple use cases:

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

<img src="/doc/images/usecases/building-example.png" />


<!--
More use cases:
- Branding, personalisation
- Help / instructions
- Report issue
- Virtual sources
- Company alerts
- Gestures, reactions
- Webrtc / interop
- Video matrix / advanced compositing
- USB peripherals / remote
- Crestron / AMX
- Embedded apps
- Room divider
- Audio console
- CEC
-->


