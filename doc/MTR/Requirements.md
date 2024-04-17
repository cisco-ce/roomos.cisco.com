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

Room Navigator with Board Pro and Board Pro G2 is now supported. 

Cisco Touch 10 is not supported.

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

To initially onboard your devices to MTR, your device needs to be on the correct RoomOS software version. After onboarding, the device gets upgraded automatically from Teams Admin Center.  

To learn more about device management in Teams Admin Center, visit: https://learn.microsoft.com/microsoftteams/devices/device-management 
 
Software versions for onboarding new devices or devices registered to other calling platforms: 
*	Board Pro: Minimum software version RoomOS 11.3.1.16
*	Desk Pro, Room Bar, Room Kit Pro: Minimum software version RoomOS 11.6.1.5
*	Room Kit EQ: Minimum software version RoomOS 11.7.1.8
*	Room Kit EQX, Board Pro G2: Minimum software version RoomOS 11.15.1.6

To get the correct software version, you need to do a software upgrade from the device’s setup wizard. 

### Software upgrade from setup wizard

After the device starts up, go through the setup wizard up to **Choose configuration**. You don’t need to change any of the settings, just select **Next** on each step. 

On the Choose configuration page, select **Cisco Webex**. Wait for a few seconds and agree to the software upgrade. The device receives the latest software version and it’s installed on the device. 

After the software installation is finished, the setup wizard starts up again from the *Welcome screen*. Follow the instructions in the [Onboarding](https://roomos.cisco.com/doc/MTR/MTROnBoarding) article.

### Software upgrades from Control Hub for previously Webex registered devices

Before you onboard a Webex registered device to MTR, you need to make sure the device is running the latest Stable release. You can see the software channel on the device page in Control Hub.  

Software versions for onboarding: 
*	Webex registered Board Pro: Stable channel, minimum RoomOS March 2023
*	Webex registered Desk Pro, Room Bar, Room Kit Pro: Stable channel, minimum RoomOS July 2023
 
If you need to change the software channel, sign in to [admin.webex.com](https://admin.webex.com). Go to **Workspaces** and select the Workspace with the device you want to onboard from the list. Under **Devices**, click the cogwheel icon. In the **Software upgrade channel** drop-down menu, select **Stable** and click **Done**. 
 
After the onboarding, the software channel in Control Hub shows up as **Microsoft**. This means that the device gets its software upgrades from Teams Admin Center.  


