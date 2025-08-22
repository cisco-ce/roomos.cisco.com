# Release notes
(Updated August 22, 2025) 

**For Cisco collaboration devices for Microsoft Teams Rooms, Microsoft only supports RoomOS software that they have released on Teams Admin Center. RoomOS versions on the Stable channel are therefore not necessarily supported by Microsoft. See: [latest RoomOS software version supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco).**

**The latest software version supported by Microsoft: RoomOS 11.29.1.7, based on RoomOS June 2025. This software version includes Teams Rooms App 1449/1.0.96.2025205603.**

This release note describes new software features and capabilities included in Cisco collaboration devices running RoomOS with Microsoft Teams Rooms on Android. Microsoft Teams Rooms is supported on the following Cisco collaboration devices:

* Cisco Board Pro 55
* Cisco Board Pro 75
* Cisco Board Pro G2
* Cisco Desk Pro
* Cisco Room Bar
* Cisco Room Bar Pro
* Cisco Room Kit EQ
* Cisco Room Kit EQX
* Cisco Room Kit Pro with Room Navigator
* Cisco Room Navigator for Microsoft Teams panels

Room Navigator with Board Pro is now supported. 

Only one Room Navigator per device is supported.

Cisco Touch 10 is not supported.

Software versions for onboarding new devices or devices registered to other calling platforms:

* Board Pro: Minimum software version RoomOS 11.3.1.16
* Desk Pro, Room Bar, Room Kit Pro: Minimum software version RoomOS 11.6.1.5
* Room Kit EQ: Minimum software version RoomOS 11.7.1.8
* Room Kit EQX, Board Pro G2: Minimum software version RoomOS 11.15.1.6

Read about software upgrades on the [Requirements page](/doc/MTR/Requirements).

## Additional resources

For release notes covering Microsoft Teams Rooms on Android see: https://learn.microsoft.com/en-us/microsoftteams/rooms/rooms-release-note?tabs=Android

For new features and capabilities supported on RoomOS with Control Hub registration see: 
* [Release notes for RoomOS devices](https://help.webex.com/6ger7db/)
* [What’s new in Control Hub](https://help.webex.com/u9dlxd/)

## August 2025

**Software version: RoomOS 11.31.1.5**

### Fixed issues
* CSCwp65243 - Codec with Quadcam and PTZ 4K cameras connected, randomly crashes and reboots.

## July 2025

**Software version: RoomOS 11.30.1.5**

### Miracast Indicator on Microsoft Teams Rooms

Miracast allows you to wirelessly share content from your laptop or mobile to your Cisco device. With this change users will now have visible iconography to indicate when Miracast is enabled on a device.

<img src="/doc/images/MTR/miracast-icon-homescreen.jpeg" style="width: 400px" />

### Fixed issues
* CSCwo67365 - Cannot scroll through camera presets.
* CSCwo60665 - Removing the USB-C cable during active share disables ability to share from HDMI during Teams meetings.

## June 2025

**NOTE:** RoomOS June is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about [Moving Microsoft Teams Android Devices to AOSP Device Management](/doc/MTR/AOSP).

### RoomOS June

**Software version: RoomOS 11.29.1.5**

### Support for Android 13

From RoomOS 11.29 and onward, Cisco collaboration devices with Microsoft Teams Rooms includes Android version 13. This upgrade ensures continued security fixes.

NOTE: With Android 13 and onward, it is not possible to downgrade to an earlier version of RoomOS. If you must downgrade, you need to first factory reset the device and then onboard it as a RoomOS device with the software version you want to downgrade to. Then you can onboard it the device to Microsoft Teams Rooms.  

### Fixed issues

* CSCwp17364 - Device loses main video during Microsoft Teams Meeting until source switch occurs.

## May 2025

**NOTE:** RoomOS May is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about [Moving Microsoft Teams Android Devices to AOSP Device Management](/doc/MTR/AOSP).

### RoomOS May

**Software version: RoomOS 11.28.1.5**

### Classroom camera mode

The classroom camera mode is designed for easy use in rooms where you present content and conduct educational and training sessions. The setup helps bring together groups from different sites. Whether the presenter is in the room or calling in from a remote location, participants receive a good and engaging experience.

Classroom mode is available on:
* Room Kit EQ
* Room Kit EQX
* Room Kit Pro
* Room Bar Pro
* Board Pro G2

Read more about [Classroom mode](/doc/MTR/classroom).

## April 2025

**NOTE:** RoomOS April is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about [Moving Microsoft Teams Android Devices to AOSP Device Management](/doc/MTR/AOSP).

### RoomOS April

**Software version: RoomOS 11.27.1.8**

### Fixed issues
* CSCwo90323 - "Microphone muted" notification appears in some scenarios when microphone is not muted.

**Software version: RoomOS 11.27.1.7**

### Extended USB camera support

You can now choose to use an additional USB camera as the main video source in a meeting or a call. Previously USB cameras were only supported for sharing content.

Read more about [USB content camera support](/doc/MTR/USBContentCameraMainVideo).

### Fixed issues
* CSCwo33123 - Unable to disable Standby Level Networked Mode.


## March 2025

**NOTE:** RoomOS February and RoomOS March is available for devices with Microsoft Teams Rooms that have finalized the AOSP Device Management migration. Read more about Moving Microsoft Teams Android Devices to AOSP Device Management.

### RoomOS March

**Software version: RoomOS 11.26.1.5**

### USB content camera support
RoomOS devices now support content cameras that can be plugged into a USB port in or out of a call. Any USB2.0 camera that supports MJPEG format should work.
USB cameras are only supported for content and not for video. You can select the camera content stream from the share tray.

Supported devices:
* Room Bar and Room Bar Pro
* Room Kit EQ and EQX
* Room Kit Pro
* Board Pro and Board Pro G2
* Desk Pro

Read more about [USB content camera support](/doc/MTR/USBContentCameraMainVideo).

### Cisco Zoom Implementation 

Join Zoom meetings with the best possible experience by leveraging Zoom’s CRC. Zoom’s CRC meeting use the Cisco interop solution for Zoom, with a Cisco UI to interact with Zoom’s CRC DTMF API.

Both ad-hoc (through the side panel), and One Button to Push (OBTP) will start a SIP CRC call into Zoom. No Zoom license is required. 

Requirements: 
* Control Hub registration
* Hybrid calendar enabled for OBTP

Read more about [Zoom Meetings with One Button To Push](/doc/MTR/ZoomMeetings).

### Fixed issues
* CSCwm50278 - Recorder Mode not working as described.

### RoomOS February

**Software version:RoomOS 11.25.1.6**

### Fixed issues
* CSCwn25022 - 'Video Input Connector 6' configurations for Codec Pro not visible in the device web interface.

## February 2025

### RoomOS January

**Software version: RoomOS 11.24.1.8** 

### Fixed issues
* CSCwn49592 - Auto-share of black screen if a powered extender is connected to a device.
* CSCwn15520 - Share tray comes up out of standby.
* CSCwn17177 - Powerpoint Live playback is not smooth.
* CSCwn38129 - Miracast share has to be selected when shared into Microsoft Teams call. Auto-share is not available.


## December 2024

### RoomOS December

**Software version: RoomOS 11.23.1.8 3963b07b5c5**

### Remote access to devices

Remote access allows administrators to interact with the device UI from Control Hub or the device's web interface as if the admin is in the room. Remote access assists you in troubleshooting and onboarding a device regardless of its platform. 

Remote access can help with tasks, such as drawing up meeting zones, configuring microphones, and testing macros.

Requires Control Hub registration.

#### Limitations:

* Remote access is only available after Control Hub registration of the device is complete.
* Onboarding to GCC High Cloud (Government Community Cloud) is not supported. For detailed instructions [using mouse support](/doc/MTR/MTROnBoarding#onboarding-to-gcc-highg). 
* MAC address provisioning and sign-in is not supported. For more information about [Microsoft Teams remote provisioning and login](https://learn.microsoft.com/microsoftteams/devices/remote-provision-remote-login). 

#### Known issues:

* If **Meet Now** button is pressed during a Remote access session, the device is considered in call and the remote access session will be closed. There is no API to close the meeting, so it is be possible to start a remote access session for 5 minutes until the meeting room opened times out. 

Read more about [remote access](https://help.webex.com/gge81eb/).

### Screen lock for devices in personal use

You can now lock the screen of a device used a personal device with a PIN. 

The PIN can be managed by a user through [user hub](https://user.webex.com/) or by an administraro through [Control Hub](https://admin.webex.com/).

Requires Control Hub registration.

Read more about [screen lock](/doc/MTR/PINlock).

### Fixed issues
* CSCwn15520 - Share tray comes up out of standby.
* CSCwn17177 - Powerpoint Live playback is not smooth.
* CSCwm59937 - RoomOs local share doesn't share audio until share is initiated from Microsoft Teams share menu.
* CSCwm53333 - Software encoder fallback when joining meetings.

## November 2024

### RoomOS November

**Software version: RoomOS 11.22.1.7 1eb6bbe23da** 

### Fixed issues
* CSCwm59937 - Local share doesn't share audio until share is initiated from Microsoft Teams Rooms UI.
* CSCwm45255 - Room Navigator is showing RoomOS mode UI.
* CSCwm55140 - Crash during sharing event.
* CSCwm47351 - Microphone mute doesn't work when doing USB-C passthrough.

## October 2024

### RoomOS October

**Software version: RoomOS 11.21.1.4 2a8ad5d61cc**

### Microsoft Teams panel

We now support Cisco Room Navigator for Microsoft Teams panels. When setup as a Microsoft Teams panel, a Room Navigator provides you with the ability to view location and meeting details at a glance and reserve an available meeting room. With text and color-coded indicators, you can see the meeting space’s availability.

Microsoft Teams panel can display meeting details scheduled through Microsoft Teams or Outlook 365 calendaring applications. With meeting details prominently displayed, attendees can confirm they’re in the right meeting space, at the right time, and for the right meeting.

The Room Navigator must have direct internet connectivity and must be set up as a stand-alone device. It can't be paired to a device locally or remotely.

Read more about [Microsoft Teams panels](https://learn.microsoft.com/microsoftteams/devices/overview-teams-panels).

### Fixed issues 

* CSCwk81006 - PresenterTrack UI is not available if only a PTZ4K or a P60 camera is connected to a device.
* CSCwm55140 - Crash during sharing event.
* CSCwm32910 - No audio when Miracast sharing in a Teams call.

## September 2024

### RoomOS September

**Software version: RoomOS 11.20.1.7 913a6c7c769**

### Fixed issues 

* CSCwm03535 - Codec does not go into standby after Miracast share.
  
**Software version: RoomOS 11.20.1.5 2d95ec00b03**

### Fixed issues 

* CSCwm32910 - No audio when sharing with Miracast in a Microsoft Teams call on a device for Microsoft Teams Rooms.
* CSCwk81006 - PresenterTrack UI is not available if only PTZ4K or P60 camera is connected to a device for Microsoft Teams Rooms.
* CSCwj29348 - System crash in a device for Microsoft Teams Rooms.
* CSCwk77160 - Miracast local audio not working on a device for Microsoft Teams Rooms.

## August 2024

### RoomOS August

**Software version: RoomOS 11.19.1.7 3055d561c16**

### New and changed features

**Webex and Zoom calling**

You can now call to Zoom and Webex Meetings from the side-plan. The Zoom calls use the Cisco-Zoom CRC integration. The Webex button lets you call Webex personal room meetings, Webex addresses, and start Webex instant meetings.

<img src="/doc/images/MTR/webex-button.png" style="width: 400px" />

Read more about [Webex and Zoom calling](/doc/MTR/JoinThirdPartyMeetings).

**Extended speaker view**

Get a front-row seat, wherever you are.

Adaptive speaker tracking and intelligent framing by the Cisco Quad Camera and the Cisco PTZ 4K pan-tilt-zoom camera, capture the active speaker and other in-room participants, even in the largest spaces.

Requirement: Room Kit EQ, Room Kit EQX, or Room Kit Pro, 1 x 4K PTZ cameras, minimum 4–6 x Table Microphone Pro's (depending on room size).

Read more about [extended speaker view](https://help.webex.com/n1av2t9/).


### Fixed issues 

* CSCwk77160 - Miracast local audio not working on device with Microsoft Teams Rooms.

## July 2024

### RoomOS July

**Software version: RoomOS 11.18.1.6 88e19d15753**

NOTE: If you have registered your devices to Control Hub, you may see the following configuration change on a device's History page in Control Hub. This configuration doesn't have any effect on the device and can be ignored.

Configuration name: Webex > Provisional Activation Service

Value change: Disabled (Default) - Enabled

### New and changed features

**4K screen preview**

For local preview, you can now experience an improved sharing experience.

Benefits include:
* 4K screen previews with cable
* Higher resolution Miracast previews
* Multiscreen capable for non-touch devices - up to 3 outputs (applies to devices with more than one screen)
* Multisource – view up to 3 different sources across screens (applies to devices with more than one screen)
* Touch redirect (Windows laptops only)

### Fixed issues 

* CSCwk29266 - Video freezes when Miracast disconnects.
* CSCwj85340 - UTC offset display difference for America/Mexico_City time zone for devices with and without Microsoft Teams Rooms.
* CSCwj91288 - Had to toggle mute button to get the device to send audio to the far-end site.
* CSCwk11016 - Unify the xStatus output for devices with and without Microsoft Teams Rooms.

## May 2024

### RoomOS May

**Software version: RoomOS 11.16.1.7 81e0063ac75**

### New and changed features

**Talkback accessibility option**

Talkback is an android accessibility option for the vision impaired that provides text to speech functionality for UI elements. When it's enabled, single tapping on an UI element will repeat the text over audio and a double tap will perform the action.

**Call app**

You can now use Cisco devices to dial a SIP URIs and Webex addresses. The call app is located in the side panel.

Requires Control Hub registration.

Read more about [the call app](/doc/MTR/RoomOSCalling).

## April 2024

### RoomOS April

**Software version: RoomOS 11.15.1.8 08c1fed621a**

**Software version: RoomOS 11.15.1.6 ab740596da6**

### New and changed features

**Government Corporate Cloud High**

Cisco collaboration devices can now use [Microsoft Teams Government Corporate Cloud High](https://learn.microsoft.com/en-us/microsoftteams/plan-for-government-gcc-high).

Read more about the [feature availability on the different security levels](https://learn.microsoft.com/en-us/microsoftteams/rooms/teams-devices-feature-comparison?source=recommendations&tabs=GCCHigh).

Onboarding a Cisco collaboration device on GCC High requires you to [connect a USB-mouse to the device](/doc/MTR/MTROnBoarding).

**Third-party touch screens**

You can replicate the Board Pro experience when using a Room Bar, Room Bar Pro, or EQ with a compatible third-party touchscreen.

Turn meeting rooms into immersive ideation spaces by easily connecting your interactive touch display to Cisco collaboration devices. Now you can add digital whiteboarding and interaction into your collaboration experience.

We support Samsung and Dell interactive displays through USB-A. Other displays can be tested in the future. 

Cisco collaboration devices for Microsoft Teams Rooms only support one touch screen. Two screen scenario is not supported for these devices.

Read more about [third-party touch screen support](https://help.webex.com/ncyh2f/).

**21:9 aspect ratio screens**

We've added support for 21:9 aspect ratio screens to our Cisco devices portfolio.

Limitations: 

* You can only connect one screen to the collaboration device. 
* Other apps than Microsoft Teams Rooms may be cropped to 16:9 with black bars on the side until they are made to fully utilize the 21:9 resolution. For example, when joining a native Webex meeting, the layout is cropped to 16:9.

Known issues:

* Caveats apply to input resolutions and how input sources are displayed in and outside a call.

**Support for Cisco Room Kit EQX**

We have added support for Cisco Room Kit EQX. Read more about the product details in the [datasheet](https://www.webex.com/content/dam/www/us/en/datasheets/devices/room-series/cisco-room-kit-eqx/ds-room-kit-EQX-datasheet_CM-6120.pdf). 

**Support for Cisco Board Pro G2**

We have added support for Cisco Board Pro G2. Read more about the product details in the [datasheet](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/board-pro-g2-ds.html). 

**Presenter track on Room Bar Pro**

Presenter tracking is now supported on Room Bar Pro when connected to a PTZ camera. 

Read more about [setting up presenter tracking](https://help.webex.com/9ur0g6/). 

### Fixed issues 

* CSCwj29348 - System crash in Microsoft Teams Rooms.
* CSCwj14420 - Disable the Webex Assistant wakeword.


## March 2024

### RoomOS March

**Software version: RoomOS 11.14.1.5 1bf4e96858f**

### New and changed features

**Camera presets**

Across the Microsoft Teams Rooms supported RoomOS devices, you can now make camera presets. This allows setting camera angle and zoom, and saving, recalling and editing presets. 

Read more about [camera settings](/doc/MTR/CameraOptions).

**Bulk API onboarding**

You can now use the API to onboard devices in bullk. You can use the API onboarding on new devices and devices that have been previously registered to Control Hub.

Read more about [onboarding devices](/doc/MTR/MTROnBoarding).

**Support for ThousandEyes agent integration**

ThousandEyes agent that is integrated with RoomOS devices offers network path visibility for active troubleshooting of meetings to pinpoint issues in real time. RoomOS software includes the ThousandEyes agent, so there is nothing to download but you need to activate the agent. ThousandEyes agent integration is supported on both Ethernet and Wi-Fi connections.

When a proxy is configured on the device, the ThousandEyes agent on the device can access the ThousandEyes cloud platform through the configured proxy.

Requirements: 

* [ThousandEyes Endpoint Agent licenses](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/endpoint-agent-licensing) (either essential or advantage). You need one endpoint license per device.
* [Add Dynamic Test for Microsoft Teams Rooms in ThousandEyes portal](https://docs.thousandeyes.com/product-documentation/end-user-monitoring/automated-session-test/configure-automated-session-tests)

Devices with Control Hub registration:

* [ThousandEyes installation for RoomOS devices](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/install-roomos)
* [Enable from Control Hub](https://help.webex.com/gg3kd3/)

Devices without Control Hub registration: 

* [Enable from device web interface](/doc/MTR/DeviceWebInterface)

### Fixed issues 

CSCwi73188 - PPT-Live video stops when unmuted and continues when muted. 

CSCwj08082 - Changing the MainVideoSource on a system with mulitple cameras leads to a camera freeze.

