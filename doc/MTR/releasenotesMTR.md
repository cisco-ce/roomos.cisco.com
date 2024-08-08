# Release notes
(Updated August 8, 2024) 

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
* [What’s new on RoomOS devices](https://help.webex.com/6ger7db/)
* [RoomOS 11 known and resolved issues](https://help.webex.com/ndws09o/)
* [What’s new in Control Hub](https://help.webex.com/u9dlxd/)

## August 2024
RoomOS August

Software version: RoomOS 11.19.1.7 3055d561c16

### New and changed features

**Webex and Zoom calling**

You can now call to Zoom and Webex Meetings from the side-plan. The Zoom calls use the Cisco-Zoom CRC integration. The Webex button lets you call Webex personal room meetings, Webex addresses, and start Webex instant meetings.

<img src="/doc/images/MTR/webex-button.png" style="width: 400px" />

Read more about [Webex and Zoom calling](/doc/MTR/JoinThirdPartyMeetings).

### Fixed issues 

* CSCwk77160 - Miracast local audio not working on device with Microsoft Teams Rooms.

## July 2024
RoomOS July

Software version: RoomOS 11.18.1.6 88e19d15753

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
RoomOS May

Software version: RoomOS 11.16.1.7 81e0063ac75

### New and changed features

**Talkback accessibility option**

Talkback is an android accessibility option for the vision impaired that provides text to speech functionality for UI elements. When it's enabled, single tapping on an UI element will repeat the text over audio and a double tap will perform the action.

**Call app**

You can now use Cisco devices to dial a SIP URIs and Webex addresses. The call app is located in the side panel.

Requires Control Hub registration.

Read more about [the call app](/doc/MTR/RoomOSCalling).

## April 2024
RoomOS April 

Software version: RoomOS 11.15.1.8 08c1fed621a

Software version: RoomOS 11.15.1.6 ab740596da6

### New and changed features

**Government Corporate Cloud High**

Cisco collaboration devices can now use [Microsoft Teams Government Corporate Cloud High](https://learn.microsoft.com/en-us/microsoftteams/plan-for-government-gcc-high).

Read more about the [feature availability on the different security levels](https://learn.microsoft.com/en-us/microsoftteams/rooms/teams-devices-feature-comparison?source=recommendations&tabs=GCCHigh).

Onboarding a Cisco collaboration device on GCC High requires you to [connect a USB-mouse to the device](/doc/MTR/MTROnBoarding).

**Third-party touch screens**

You can replicate the Board Pro experience when using a Room Bar, Room Bar Pro, or EQ with a compatible third-party touchscreen.

Turn meeting rooms into immersive ideation spaces by easily connecting your interactive touch display to Cisco collaboration devices. Now you can add digital whiteboarding and interaction into your collaboration experience.

We support Samsung and Dell interactive displays through USB-A. Other displays can be tested in the future. 

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
RoomOS March 

Software version: RoomOS 11.14.1.5 1bf4e96858f

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

