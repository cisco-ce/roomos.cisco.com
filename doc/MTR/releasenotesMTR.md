# Release notes
(Updated March 13, 2024) 

This release note describes new software features and capabilities included in Cisco collaboration devices running RoomOS with Microsoft Teams Rooms on Android. Microsoft Teams Rooms is supported on the following Cisco collaboration devices:

* Cisco Board Pro 55
* Cisco Board Pro 75
* Cisco Desk Pro
* Cisco Room Bar
* Cisco Room Bar Pro
* Cisco Room Kit EQ
* Cisco Room Kit Pro with Room Navigator

Room Navigator with Board Pro is now supported. 

Only one Room Navigator per device is supported.

Cisco Touch 10 is not supported.

Software versions for onboarding new devices or devices registered to other calling platforms:

* Board Pro: Minimum software version RoomOS 11.3.1.16
* Desk Pro, Room Bar, Room Kit Pro: Minimum software version RoomOS 11.6.1.5
* Room Kit EQ: Minimum software version RoomOS 11.7.1.8

Read about software upgrades on the [Requirements page](/doc/MTR/Requirements).

## Additional resources

For release notes covering Microsoft Teams Rooms on Android see: https://learn.microsoft.com/en-us/microsoftteams/rooms/rooms-release-note?tabs=Android

For new features and capabilities supported on RoomOS with Control Hub registration see: 
* [What’s new on RoomOS devices](https://help.webex.com/6ger7db/)
* [RoomOS 11 known and resolved issues](https://help.webex.com/ndws09o/)
* [What’s new in Control Hub](https://help.webex.com/u9dlxd/)

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

Visualization in ThousandEyes portal provides correlated meeting information from Microsoft Call quality data.

When a proxy is configured on the device, the ThousandEyes agent on the device can access the ThousandEyes cloud platform through the configured proxy.

Requirements: 

* [ThousandEyes Endpoint Agent licenses](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/endpoint-agent-licensing) (either essential or advantage). You need one endpoint license per device. 

Devices with Control Hub registration:

* [ThousandEyes installation for RoomOS devices](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/install-roomos)
* [Enable from Control Hub](https://help.webex.com/gg3kd3/)
* [Add AST for Microsoft Teams Rooms in ThousandEyes portal](https://docs.thousandeyes.com/product-documentation/end-user-monitoring/automated-session-test/configure-automated-session-tests)

Devices without Control Hub registration: 

* [Enable from device web interface](/doc/MTR/DeviceWebInterface)
* [Add AST for Microsoft Teams Rooms in ThousandEyes portal](https://docs.thousandeyes.com/product-documentation/end-user-monitoring/automated-session-test/configure-automated-session-tests)

### Fixed issues 

CSCwi73188 - PPT-Live video stops when unmuted and continues when muted. 
CSCwj08082 - Changing the MainVideoSource on a system with mulitple cameras leads to a camera freeze.

