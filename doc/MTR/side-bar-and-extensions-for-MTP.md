
# Sidebar for Microsoft Teams Panel (MTP)

This guide explains how to use the sidebar on Microsoft Teams Panel (MTP), including settings access, UI extensions, web apps, and Cisco check-in/check-out controls on MTP and MTR.

Automatic Cisco check-in/check-out is available when configured. This feature provides an enhanced experience by offering manual check-in and check-out buttons in the sidebar, alongside support for UI extensions and web apps on MTP.

## 1. Purpose
This document provides instructions for enabling and using the MTP sidebar experience, detailing supported check-in/check-out flows, and outlining current system behaviors.

## 2. Audience
*   **Admins** managing Cisco devices configured as Microsoft Teams Panel (MTP).
*   **Admins** managing Cisco devices configured as Microsoft Teams Rooms (MTR).
*   **Developers or Admins** validating UI extensions, macros, or web apps on MTP.

## 3. Overview
The sidebar on Microsoft Teams Panel (MTP) provides users with quick access to:
*   Device settings
*   UI extension action buttons
*   UI extension panels and pop-up messages
*   Web apps
*   Meeting check-in/check-out controls (when enabled)

The check-in/check-out sidebar UI is consistent across both MTP and MTR interfaces.

## 4. Requirements
*   **Software:** Device must be running a supported RoomOS version that includes this feature.
*   **Configuration:** Device must be configured as Microsoft Teams Panel (MTP) or Microsoft Teams Rooms (MTR).
*   **Customization:** Upload your UI extensions, macros, or web apps to utilize custom actions from the sidebar.
*   **Calendar:** Hybrid Calendar is required for Cisco check-in/check-out; the mailbox must match the one used for the MTR/MTP room.

## 5. Enable the sidebar on MTP
To make the sidebar settings entry visible on MTP, use the following configuration:

`xConfiguration UserInterface SettingsMenu Visibility: Auto`

To hide the entry:

`xConfiguration UserInterface SettingsMenu Visibility: Hidden`

*When set to Hidden, the sidebar settings entry is no longer available on the MTP interface.*

## 6. Enable Cisco check-in/check-out in the sidebar
To enable manual and automatic check-in features, use this configuration:

`xConfiguration Bookings CheckIn Enabled: True`

**With Cisco check-in/check-out enabled:**
*   Users can automatically check in when joining a meeting or occupying a room.
*   A check-out reminder appears when leaving a meeting.
*   Users can manually use the sidebar **Check in** and **Check out** buttons.
  <img src="/doc/images/MTR/sidebar-checkin.png" style="width: 700px"/>

The sidebar displays **Check in** for meetings within the allowed window. Once checked in, the button toggles to **Check out**.

<img src="/doc/images/MTR/sidebar-checkout.png" style="width: 700px"/>

<img src="/doc/images/MTR/sidebar-checkout-confirmation.png" style="width: 700px"/>

For detailed setup, refer to the official Cisco Help documentation: [Set up Room Navigator as a room booking device.](https://help.webex.com/en-us/article/55ypt4/Set-up-Room-Navigator-as-a-room-booking-device#sx10_r_checkin_checkout)

> **Note:** Cisco check-in/check-out cannot be used simultaneously with Microsoft's native MTP check-in and auto-release implementation.

## 7. Using the sidebar
1.  From the MTP home screen, open the right-side control panel area.
2.  Tap an extension action (e.g., **Open panel** or **Pop up**).
   <img src="/doc/images/MTR/side-bar-with-extensions.png" style="width: 700px"/>
   
3.  Interact with the opened panel, message, or web app.
   <img src="/doc/images/MTR/sidebar-example-extension-panel.png" style="width: 700px"/>
   
6.  Dismiss the pop-up or close the panel when finished.
   <img src="/doc/images/MTR/sidebar-example-popup-message.png" style="width: 700px"/>

## 8. Cisco check-in/check-out behavior
Automatic check-in is supported on MTR and MTP when Cisco check-in/check-out is configured. This feature also provides manual sidebar buttons for user-initiated status changes.

*   **Automatic check-in:** Occurs when the room is detected as "in use" (e.g., people-count presence detection or when a call starts).
*   **Auto-release:** If no occupancy is detected, the room is automatically released after 10 minutes.
*   **Manual control:** Users can override or initiate these states via the sidebar buttons.


## 9. Web apps on the MTP sidebar
Web apps can be integrated into the MTP sidebar alongside UI extensions.

> **Note:** Performance may vary when running MTP simultaneously with complex web apps. Admins should validate that deployed web apps provide an optimal experience in their specific environment.

## 10. Operational behavior and limitations

### Scheduled meetings
*   **Manual check-in:** Supported.
*   **Auto check-in:** Supported when room occupancy is detected or a call is active.
*   **Manual check-out:** Supported.

### Ad-hoc meetings (created using "Reserve" button)
*   **Manual check-in:** Supported.
*   **Auto check-in:** Supported when room occupancy is detected or a call is active.
*   **Limitation:** Auto check-in does not trigger if 0 people are detected and there is no active call/sharing session.
*   **Check-out:** Not available for "Reserve" button meetings due to Microsoft-side management limitations. If needed, delete the ad-hoc meeting directly from the Microsoft Teams calendar client.  
 
