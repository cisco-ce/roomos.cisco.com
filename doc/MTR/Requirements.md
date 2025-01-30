# Prepare to onboard Cisco collaboration devices

**In preparation for set up of a Cisco collaboration device with Microsoft Teams Rooms, make sure that your devices are on the required software release and that an appropriate license is available to apply to the resource account assigned to the device.**

<img src="/doc/images/MTR/setup.png" style="width: 400px"/>

Supported devices: 

* Cisco Board Pro 55
* Cisco Board Pro 75
* Cisco Board Pro G2
* Cisco Desk Pro
* Cisco Room Bar
* Cisco Room Bar Pro
* Cisco Room Kit EQ
* Cisco Room Kit EQX
* Cisco Room Kit Pro with Room Navigator
* Cisco Room Navigator for Microsoft Teams panel

Room Navigator with Board Pro and Board Pro G2 is now supported. 

Only Room Navigators with a partnumber with *-L*, such as *CS-T10-TS-L*, are supported.

On products that support more than one screen, maximum two screens are supported. Dual screen use case requires a Microsoft Teams Rooms Pro license.

Cisco Touch 10 is not supported.

<img src="/doc/images/MTR/planning-guide2.png" style="width: 700px"/>

You can use [the planning guide and the launch guide](https://resources.webex.com/s/b75jpfr4k5zhw3f2944xzvm) for your implementation of Cisco collaboration devices with Microsoft Teams Rooms.
 
Read more about Microsoft Teams Rooms: https://learn.microsoft.com/microsoftteams/rooms/

 ## Microsoft Teams Rooms management in Teams Admin Center
 
You can manage your devices in the Teams Admin Center (TAC). Before you start onboarding devices, deploy TAC to suit your needs. After you’ve onboarded your devices, you can use TAC for device management and monitoring.

Read more about Teams Admin Center: https://learn.microsoft.com/microsoftteams/devices/device-management

For general Teams Rooms Deployment see: https://learn.microsoft.com/microsoftteams/rooms/rooms-deploy

With Microsoft Teams Rooms Pro license, also the Pro Management service is available.

Read more about Teams Rooms Pro Management: https://learn.microsoft.com/en-us/microsoftteams/rooms/rooms-pro-management

## Microsoft licenses 

Depending on the process for acquiring Microsoft licenses in your organization, purchase and availability of licenses can take a significant amount of time. Make sure that licenses are available before the date of setup and testing of the Cisco collaboration device. 
 
Cisco collaboration devices with Microsoft Teams Rooms implemented in a shared space need a Microsoft Teams Room license.

* Microsoft Teams Room Pro: provides a full rich conferencing experience including intelligent audio and video, dual screen support, advanced device management, Intune licensing, phone system licensing, and more. For the best conferencing experience, Microsoft Teams Rooms Pro licenses are recommended to use with Cisco collaboration devices. 
 
For additional information on Microsoft Teams Licenses, visit: 
https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing 
 
If you plan to use your device to make and receive PSTN calls, additional licensing may be needed for PSTN connectivity. Read more about PSTN connectivity: 
https://learn.microsoft.com/microsoftteams/pstn-connectivity 


## Microsoft Authentication and Intune

Microsoft recommends a specific set of best practices when considering authentication for Android based devices. For example, multi-factor authentication isn’t recommended with shared devices as shared devices are tied to a room or space rather than to an end-user. For a full explanation, see: 
https://learn.microsoft.com/microsoftteams/devices/authentication-best-practices-for-android-devices 
 
If Intune is currently set up only for Android mobile phones, Cisco collaboration devices with Microsoft Teams Rooms will likely fail on current mobile device conditional access and/or compliance policies. For specifics, see: https://learn.microsoft.com/microsoftteams/rooms/supported-ca-and-compliance-policies?tabs=mtr-w    
 
If your Cisco collaboration device doesn’t login with credentials that login correctly on Teams web client, this can typically be an element of Microsoft Intune that is causing the device to not successfully login.  

For Intune provisioning and deployment, see: https://learn.microsoft.com/microsoftteams/devices/phones-displays-deploy

## Cisco collaboration device software requirements

To initially onboard your devices to Microsoft Teams Rooms, your device needs to be on the correct RoomOS software version. After onboarding, the device gets upgraded automatically from Teams Admin Center.  

To learn more about device management in Teams Admin Center, visit: https://learn.microsoft.com/microsoftteams/devices/device-management 
 
Software versions for onboarding new devices or devices registered to other calling platforms: 
*	Board Pro: Minimum software version RoomOS 11.3.1.16
*	Desk Pro, Room Bar, Room Kit Pro: Minimum software version RoomOS 11.6.1.5
*	Room Kit EQ: Minimum software version RoomOS 11.7.1.8
*	Room Kit EQX, Board Pro G2: Minimum software version RoomOS 11.15.1.6
*	Room Navigator for Microsoft Teams panel: Minimum software version RoomOS 11.21.1.4

To get the correct software version, you need to do a software upgrade from the device’s setup wizard. 

If you're not using Control Hub and auto-upgrade devices to a release that supports Microsoft Teams Rooms, you will not see the Microsoft Teams Rooms option during onboarding process. To use Microsoft Teams Rooms, download the RoomOS 11.14.3.0 image that contains the Microsoft Teams Rooms option *cmterm-s53300-mtr-ce11_14_3_0.k4.cop.sha512* from [software.cisco.com](https://software.cisco.com).

### Software upgrade from setup wizard

After the device starts up, go through the setup wizard up to **Choose configuration**. You don’t need to change any of the settings, just select **Next** on each step. 

On the **Choose configuration** page, select **Cisco Webex**. Wait for a few seconds and agree to the software upgrade. The device receives the latest software version and it’s installed on the device. 

After the software installation is finished, the setup wizard starts up again from the *Welcome screen*. Follow the instructions in the [Onboarding](https://roomos.cisco.com/doc/MTR/MTROnBoarding) article.

### Software upgrades from Control Hub for previously Webex registered devices

Before you onboard a Webex registered device to Microsoft Teams Rooms, you need to make sure the device is running [the latest Stable release supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco). You can see the software channel on the device page in Control Hub. 

You may need to enable [advanced software control](https://help.webex.com/idba5c/) in Control Hub to select the supported software version.
 
After the onboarding, the software provider in Control Hub shows up as **Microsoft**. This means that the device gets its software upgrades from Teams Admin Center.  

You can also choose **Cisco** as the software provider. See the RoomOS software upgrades article for information on how to select a software channel [for an individual device](https://help.webex.com/idba5c/#sx10_t_sw_channel_single_workspace) or [for several devices](https://help.webex.com/idba5c/#sx10_t_sw_channel_bulk).

