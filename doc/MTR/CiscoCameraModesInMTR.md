# Cisco Camera Modes in Microsoft Teams Rooms and Microsoft IntelliFrame 

You can now select your preferred camera mode directly from the Microsoft Teams Rooms on Cisco devices. 
This update brings the familiar Cisco camera experiences into Microsoft Teams Rooms, using Microsoft’s naming conventions for seamless integration. Additionally, Microsoft Cloud IntelliFrame, a cloud-based video intelligence feature, is now available.

## New Camera Mode Menu Options

The following camera modes are available in the Microsoft Teams Rooms on Cisco devices:

   * IntelliFrame: Microsoft’s cloud-based smart video feeds zoom into the faces of in-room participants, minimizing distractions.
   * Room: Displays a view of the entire room, powered by Cisco’s Group framing technology.
   * Active Speaker: Uses Cisco’s on-device speaker tracking technology to focus on the active speaker in the room.
   * Composite: Employs Cisco’s AI-powered Frames technology to zoom, crop, and frame individuals and groups in a single view,
     eliminating unused space while preserving meeting context.
   <img src="/doc/images/MTR/ciscoCameraModesInMTR.jpg" style="width: 700px"/>  
     
Learn more about Microsoft Cloud IntelliFrame here: [Microsoft Cloud IntelliFrame](https://learn.microsoft.com/en-us/microsoftteams/devices/cloud-intelliframe)

> **_NOTE:_**  Dynamic Mode remains the default camera experience and there is no change to the side swipe menu.

When a smart camera setting is selected through the Microsoft Teams Rooms (MTR) user interface (UI), the following mappings are applied to RoomOS speakertrack:
 
  * **composite-people-feed** → Frames
  * **active-speaker** → Speaker (Closeup)
  * **Room (auto framing)** → Group (best-overview)
  * **Intelliframe** → Manual
  * If enhanced framing is off, the mode defaults to Manual


When a smart camera setting is selected through the RoomOS UI, the following mappings determine what is displayed in the MTR UI:

* **Frames** → composite-people-feed
* **Dynamic** → composite-people-feed
* **group-and-speaker** → composite-people-feed
* **Speaker (closeup)** → active-speaker
* **Group (best-overview)** → Room (auto-framing)

