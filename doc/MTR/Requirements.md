# Prepare to onboard Cisco collaboration devices

**In preparation for set up of a Cisco collaboration device as a Microsoft Teams Room (MTR), make sure that your devices are on the required software release and that an appropriate license is available to apply to the resource account assigned to the device.**

<img src="/doc/images/MTR/setup.png" style="width: 400px"/>

## Microsoft licenses 

Depending on the in-house process for acquiring Microsoft licenses, purchase and availability of licenses can take a significant amount of time. Please confirm that licenses are available before the intended date of setup and testing of the Cisco collaboration device.

Cisco collaboration MTR devices implemented in a shared space will need to be provided with a Microsoft Teams Room license. Microsoft Teams Room license can be purchased in two levels, Pro and Basic.

*	Microsoft Teams Room Pro: provides a full rich conferencing experience including intelligent audio and video, dual screen support, advanced device management, Intune licensing, phone system licensing, and more. For best conferencing experience, MTR Pro licenses are recommended to use with Cisco collaboration MTR devices.
*	Microsoft Teams Room Basic: provides a core meeting experience for MTR devices. This is a free license but provides a limited feature set. This license can be assigned up to 25 MTR devices. Any additional licenses would need to be a Teams Room Pro license.

For additional information on Microsoft Teams Licenses and a comparison matrix of features between the Basic and Pro licenses, visit: https://learn.microsoft.com/enus/microsoftteams/rooms/rooms-licensing

If you plan to use your MTR device to make/receive PSTN calls, additional licensing may be needed for PSTN connectivity. Read more about PSTN connectivity: 
https://learn.microsoft.com/enus/microsoftteams/pstn-connectivity

## Microsoft Authentication and Intune

Microsoft recommends a specific set of best practices when considering authentication for Android based devices. For example, multi-factor authentication isn’t recommended with shared devices as shared devices are tied to a room or space rather than to an end user. For a full explanation of these best practices, see: https://docs.microsoft.com/enus/microsoftteams/devices/authentication-best-practices-for-android-devices.

If Intune is currently set up for only Android mobile phone, Cisco collaboration MTRoA devices will likely fail on current mobile device conditional access and/or compliance policies. For specifics on supported policies for MTRoA devices, see: 
https://docs.microsoft.com/en-us/microsoftteams/rooms/supported-ca-and-compliancepolicies?tabs=mtr-w 

If your Cisco collaboration MTRoA device doesn’t login with credentials that login correctly on Teams web client, this can typically be an element of Microsoft Intune that is causing the device to not successfully login. 

## Cisco collaboration device software requirements

Something about different variants and that you need to be on this software version… 

To onboard your devices to MTR, you need to do the initial software upgrade, unless you already have the correct one. After onboarding, the device gets upgraded automatically. 

### Webex registered devices

Before you onboard a Webex registered device to MTR, you need to make sure the device is running the latest Stable release. In Control Hub, go to there and there to check the channel
