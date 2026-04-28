
# Sidebar for Microsoft Teams Panel (MTP)

This guide explains how to use the Sidebar on Microsoft Teams Panel (MTP), including settings access, UI extensions, web apps, and Cisco Check-in / Check-out controls on MTP and MTR.

Automatic Cisco Check-in / Check-out is available when configured. This feature provides an enhanced experience by offering manual Check-in and Check-out buttons in the sidebar, alongside support for UI extensions and web apps on MTP.

## 1. Purpose
This document provides instructions for enabling and using the MTP sidebar experience, detailing supported check-in/check-out flows, and outlining current system behaviors.

## 2. Audience
*   **Admins** managing Cisco devices configured as Microsoft Teams Panel (MTP).
*   **Admins** managing Cisco devices configured as Microsoft Teams Rooms (MTR).
*   **Developers or Admins** validating UI extensions, macros, or web apps on MTP.

## 3. Overview
The Sidebar on Microsoft Teams Panel (MTP) provides users with quick access to:
*   Settings
*   UI extension action buttons
*   UI extension panels and pop-up messages
*   Web apps
*   Meeting Check-in / Check-out controls (when enabled)

The Cisco Check-in / Check-out sidebar UI is consistent across both MTP and MTR interfaces.

## 4. Requirements
*   **Software:** Device must be running a supported RoomOS version that includes this feature.
*   **Configuration:** Device must be configured as Microsoft Teams Panel (MTP) or Microsoft Teams Rooms (MTR).
*   **Customization:** Upload your UI extensions, macros, or web apps to utilize custom actions from the sidebar.
*   **Calendar:** Hybrid Calendar is required for Cisco Check-in / Check-out; the mailbox must match the one used for the MTR/MTP room.

## 5. Enable the Sidebar on MTP
To make the sidebar settings entry visible on MTP, use the following configuration:

`xConfiguration UserInterface SettingsMenu Visibility: Auto`

To hide the entry:

`xConfiguration UserInterface SettingsMenu Visibility: Hidden`

*When set to Hidden, the sidebar settings entry is no longer available on the MTP interface.*

## 6. Enable Cisco Check-in / Check-out in the Sidebar
To enable manual and automatic check-in features, use this configuration:

`xConfiguration Bookings CheckIn Enabled: True`

**With Cisco Check-in / Check-out enabled:**
*   Users can automatically check in when joining a meeting or occupying a room.
*   A check-out reminder appears when leaving a meeting.
*   Users can manually use the sidebar **Check in** and **Check out** buttons.

The sidebar displays **Check in** for meetings within the allowed window. Once checked in, the button toggles to **Check out**.

For detailed setup, refer to the official Cisco Help documentation: [Set up Room Navigator as a room booking device.](https://help.webex.com/en-us/article/55ypt4/Set-up-Room-Navigator-as-a-room-booking-device#sx10_r_checkin_checkout)

> **Note:** Cisco Check-in / Check-out cannot be used simultaneously with Microsoft's native MTP check-in and auto-release implementation.

## 7. Using the Sidebar
1.  From the MTP home screen, open the right-side control panel area.
2.  Tap an extension action (e.g., **Open panel** or **Pop up**).
3.  Interact with the opened panel, message, or web app.
4.  Dismiss the pop-up or close the panel when finished.

## 8. Cisco Check-in / Check-out Behavior
Automatic check-in is supported on MTR and MTP when Cisco Check-in / Check-out is configured. This feature also provides manual sidebar buttons for user-initiated status changes.

*   **Automatic Check-in:** Occurs when the room is detected as "in use" (e.g., people-count presence detection or when a call starts).
*   **Auto-Release:** If no occupancy is detected, the room is automatically released after 10 minutes.
*   **Manual Control:** Users can override or initiate these states via the sidebar buttons.

## 9. Web Apps on the MTP Sidebar
Web apps can be integrated into the MTP sidebar alongside UI extensions.

> **Note:** Performance may vary when running MTP simultaneously with complex web apps. Admins should validate that deployed web apps provide an optimal experience in their specific environment.

## 10. Operational Behavior and Limitations

### Scheduled Meetings
*   **Manual Check-in:** Supported.
*   **Auto Check-in:** Supported when room occupancy is detected or a call is active.
*   **Manual Check-out:** Supported.

### Ad-hoc Meetings (Created via "Reserve" Button)
*   **Manual Check-in:** Supported.
*   **Auto Check-in:** Supported when room occupancy is detected or a call is active.
*   **Limitation:** Auto check-in does not trigger if 0 people are detected and there is no active call/sharing session.
*   **Check-out:** Not available for "Reserve" button meetings due to Microsoft-side management limitations. If needed, delete the ad-hoc meeting directly from the Microsoft Teams calendar client.  
 
