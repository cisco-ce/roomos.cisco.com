# Planning and Deployment 

## Cisco collaboration devices with Microsoft Teams Rooms

Cisco collaboration devices with Microsoft Teams Rooms offer camera and audio intelligence, and rich content sharing for Microsoft Teams meetings.  

<img src="/doc/images/MTR/HomeScreen.png" width="600"/>

Cisco devices feature AI-powered in-call experiences including noise removal and camera intelligence capabilities built-into our hardware solutions, resulting in a high-quality, inclusive, distraction free meeting experience on any platform. Users can easily access camera and audio settings at any time – both in and out of call. 

<img src="/doc/images/MTR/planning-guide2.png" style="width: 700px"/>

You can use [the planning guide and the launch guide](https://resources.webex.com/s/b75jpfr4k5zhw3f2944xzvm) for your implementation of Cisco collaboration devices with Microsoft Teams Rooms.

### Expand your device’s capabilities 

Cisco enables customers to register their Microsoft Teams Rooms certified devices in Control Hub for advanced cloud management, diagnostics, and analytics. This way admins can take advantage of RoomOS APIs to integrate with 3rd party room systems and controllers, get Webex meetings diagnostics, and leverage network-level diagnostics. These capabilities let you make informed decisions about workspace investments with room environmental and utilization data originating from device sensors.  

With Control Hub registration, you also get the option to join full-featured Webex meetings in Microsoft Teams Rooms mode with no reconfiguration required, combined with advanced device management, remote monitoring, and workspace analytics capabilities.  

## Prepare to onboard Cisco collaboration devices

**In preparation for set up of a Cisco collaboration device with Microsoft Teams Rooms, make sure that your devices are on the required software release and that an appropriate license is available to apply to the resource account or personal account assigned to the device.**

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

Cisco collaboration device with Microsoft Teams Rooms can be configured through Microsoft TAC, or you can double register the device to both TAC and Control Hub. 

<img src="/doc/images/MTR/planning-guide2.png" style="width: 700px"/>

You can use [the Plan, Launch, and Grow guides](https://resources.webex.com/s/nz73kxgsjmx44wwtw6m6gk9) for your implementation of Cisco collaboration devices with Microsoft Teams Rooms.
 
Read more about Microsoft Teams Rooms: https://learn.microsoft.com/microsoftteams/rooms/

### Limitations 

* Only Room Navigators with part numbers -L and -C, such as *CS-T10-TS-C=* and *CS-T10-TS-L*, are supported.
* On products that support more than one screen, maximum two screens are supported. Dual screen use case requires a Microsoft Teams Rooms Pro license.
* Cisco Touch 10 is not supported.
* Cisco SpeakerTrack 60 camera is not supported.
* Webex Edge for devices linked devices are not supported with Microsoft Teams Rooms.
* Only one Room Navigator can be connected to the device.

 ### Microsoft Teams Rooms management in Teams Admin Center
 
You can manage your devices in the Teams Admin Center (TAC). Before you start onboarding devices, deploy TAC to suit your needs. After you’ve onboarded your devices, you can use TAC for device management and monitoring.

Read more about Teams Admin Center: https://learn.microsoft.com/microsoftteams/devices/device-management

For general Teams Rooms Deployment see: https://learn.microsoft.com/microsoftteams/rooms/rooms-deploy

With Microsoft Teams Rooms Pro license, also the Pro Management service is available.

Read more about Teams Rooms Pro Management: https://learn.microsoft.com/en-us/microsoftteams/rooms/rooms-pro-management

### Microsoft licenses 

Depending on the process for acquiring Microsoft licenses in your organization, purchase and availability of licenses can take a significant amount of time. Make sure that licenses are available before the date of setup and testing of the Cisco collaboration device. 
 
Cisco collaboration devices with Microsoft Teams Rooms implemented in a shared space need a Microsoft Teams Room license.

**Microsoft Teams Room Pro:** Provides a full rich conferencing experience including intelligent audio and video, dual screen support, advanced device management, Intune licensing, phone system licensing, and more. For the best conferencing experience, Microsoft Teams Rooms Pro licenses are recommended to use with Cisco collaboration devices. 

For additional information on Microsoft Teams Licenses, visit: 
https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing 

If you plan to use your device to make and receive PSTN calls, additional licensing may be needed for PSTN connectivity. Read more about PSTN connectivity: 
https://learn.microsoft.com/microsoftteams/pstn-connectivity 


### Microsoft Authentication and Intune

Microsoft recommends a specific set of best practices when considering authentication for Android based devices. For example, multi-factor authentication isn’t recommended with shared devices as shared devices are tied to a room or space rather than to an end-user. For a full explanation, see: 
https://learn.microsoft.com/microsoftteams/devices/authentication-best-practices-for-android-devices 
 
If Intune is currently set up only for Android mobile phones, Cisco collaboration devices with Microsoft Teams Rooms will likely fail on current mobile device conditional access and/or compliance policies. For specifics, see: https://learn.microsoft.com/microsoftteams/rooms/supported-ca-and-compliance-policies?tabs=mtr-w    
 
If your Cisco collaboration device doesn’t login with credentials that login correctly on Teams web client, this can typically be an element of Microsoft Intune that is causing the device to not successfully login.  

For Intune provisioning and deployment, see: https://learn.microsoft.com/microsoftteams/devices/phones-displays-deploy

### Cisco collaboration device software requirements

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

## Onboarding

**NOTE:** Read the previous chapters before onboarding a Cisco collaboration device. When you have a device with a Room Navigator, you need to register both the device and the Room Navigator. If you are prevented from signing in on your Room Navigator, check your Device settings in Intune, before signing in again.

### Onboarding from the setup wizard

Onboarding a device is part of the setup wizard flow. To learn how to onboard a device using the public API, scroll down to the bottom of this page.

1. Select the **Language** for the device and tap the **Start** button. If your device is running an older software version, tap **Try the new onboarding**.

<img src="/doc/images/MTR/Onboarding2.jpg" style="width: 600px" />

2. Configure the device’s network connection settings and then tap the **Continue** button. We recommend using an Ethernet connection. For more information on Wi-Fi settings, see the relevant section in this guide.  

<img src="/doc/images/MTR/Onboarding3.png" style="width: 600px" />

3. Configure the device’s time zone and tap **Continue**.  

<img src="/doc/images/MTR/Onboarding4.png" style="width: 600px" />

4.  Choose Microsoft Teams Rooms as the platform by tapping the **Select** button under it.  

<img src="/doc/images/MTR/Onboarding5.png" style="width: 600px" />

   NOTE: When a device onboards to MTR, the setting menu is locked by default.   

5. If you are not registering to Control Hub, tap **Skip**. We recommend registration to Control Hub, which enables advanced software management, diagnostics, and analytics capabilities. When you are using Control Hub, enter the device activation code created from Control Hub and tap **Continue**.

<img src="/doc/images/MTR/Onboarding6.png" style="width: 600px" />

6. Set your own admin password and tap **Continue**. The password needs to be at least 8 characters.

<img src="/doc/images/MTR/Onboarding7.png" style="width: 600px" />

7. This is Cisco’s serviceability feature. Tap the **Continue** button.  

   Enable sending crash reports, metrics, and log uploads through an anonymized communication channel between Cisco and the device. These logs are not tied to any specific user or organization, but are identifiable only by hardware serial number.
To read more about Cisco’s systems information handling, visit the [Cisco Trust Portal](https://trustportal.cisco.com/c/r/ctp/trust-portal.html?doctype=Data%20Brief#/1604543672547988).

<img src="/doc/images/MTR/Onboarding8.png" style="width: 600px" />

8. You are now ready to install Microsoft Teams Rooms on the device. Tap **Begin installation** button.

<img src="/doc/images/MTR/Onboarding9.png" style="width: 600px" />

9. The device downloads new software and the installation starts. The process takes about 5 minutes to complete.

<img src="/doc/images/MTR/Onboarding10.png" style="width: 600px" />

10. After the installation is complete, follow the on-screen instructions and access the provided URL on your laptop. Use your Microsoft device account to sign in. Note that if you have a device with a Room Navigator, you need to register both the device and the Room Navigator.

<img src="/doc/images/MTR/Onboarding11.png" style="width: 600px" />

11. When the onboarding is complete, you can see the home screen.

<img src="/doc/images/MTR/Onboarding12.png" style="width: 600px" />

Tap **More** to access the settings menu. From the [settings menu](https://roomos.cisco.com/doc/MTR/SettingsMenu), you can change the accessibility, or the network settings. In the device settings, you can also access the Teams Rooms settings protected by the admin password. 

You can swipe right to access device settings like the [camera options](https://roomos.cisco.com/doc/MTR/CameraOptions), [microphone options](https://roomos.cisco.com/doc/MTR/MicrophoneOptions), and screen brightness.  

### Onboarding using API commands

As an alternative to running the setup wizard, you can onboard a device using the public API. This may be useful if you want to onboard several devices in bulk. 

1. We recommend you factory reset the device before you start.
  
If the device is already registered to Control Hub, you may proceed without factory resetting first.

2. Set a password on the device:  
`xCommand UserManagement User Passphrase Set NewPassphrase: "YourNewPassword" Username: admin YourPassphrase: "YourCurrentPassword"`

3. Stop the setup wizard which always appears the first time you start a device:  
`xCommand SystemUnit FirstTimeWizard Stop`

4. List the Microsoft Teams installation options that are applicable to this device.  
`xCommand MicrosoftTeams List`

5. Install Microsoft Teams on the device. Set the **Name** parameter to one of the applicable options found in the previous step, for example, "MicrosoftTeamsRooms".  
`xCommand MicrosoftTeams Install Name: "MicrosoftTeamsRooms"`

6. Optional: To improve and monitor the quality of the Microsoft Teams Rooms experience on Cisco devices, you can enable the following logging configurations.

   `xConfiguration Webex Privacy AllowUsageDataLogging: True`

   Enable sending crash reports, metrics, and log uploads to Cisco. These logs are not tied to any specific user or organization, but are identifiable only by hardware serial number. Requires xConfiguration Webex ProvisionalActivationService: Enabled

   `xConfiguration Webex ProvisionalActivationService: Enabled`

   Enable or disable the anonymized communication channel between Cisco and the device. When enabled, the channel can be used to retrieve a provisional account token on the device, which is identifiable only by hardware serial number, for communicating with Cisco. This token is only used for sending logs, crashes, and metrics when xConfiguration Webex Privacy AllowUsageDataLogging: True.

   To read more about Cisco’s systems information handling, visit the [Cisco Trust Portal](https://trustportal.cisco.com/c/r/ctp/trust-portal.html?doctype=Data%20Brief#/1604543672547988).
  
If required, the device first downloads new software. Then the installation, which takes about 5 minutes, starts.

### Onboarding to GCC High

Before you onboard a Cisco device to GCC High, you need to connect an external mouse to a USB-A port on the device. You can only use the mouse to interact with the Microsoft Teams interface, not the RoomOS interface.

Connecting a separate keyboard on USB is not supported.

To use an external mouse, make sure that [xConfiguration SystemUnit Extension MouseSupport](https://roomos.cisco.com/xapi/Configuration.SystemUnit.Extension.MouseSupport/?search=mouse) is set to *Enabled* on the Cisco device. The default value is Enabled. 

To onboard to GCC High, follow the above onboarding flow until step 9. Then use the mouse to open the **Settings** menu (cogwheel icon). 

<img src="/doc/images/MTR/2_onboarding_settings.png" style="width: 600px"/>

Select **Cloud** and **GCCH**. 

<img src="/doc/images/MTR/4_GCCH_selected.png" style="width: 600px"/>

Use the new access code you receive to log in on the website, or use it in the setup wizard.  

<img src="/doc/images/MTR/5_newonboardingcode.png" style="width: 600px"/>

## Control Hub registration after the initial setup

If you didn't register your Cisco devices with Microsoft Teams Rooms to Control Hub during the initial setup, you can do it later. Then you have two options; in both cases you have to create activation codes on Control Hub first.

1. On each device, open the [local device web interface](https://roomos.cisco.com/doc/MTR/DeviceWebInterface) and find the *Register Device* card on the *Home* page. Click **Register to Webex** and follow the instructions.

2. To programmatically register devices to Control Hub, you can directly call the device's API over HTTP POST. This simplifies bulk provisioning. The command has the same parameters as `xCommand Webex Registration Start`, find documentation [here](https://roomos.cisco.com/xapi/Command.Webex.Registration.Start/).  

**Example for option 2 using curl:**  
`curl -u username:password https://ip-address/api/webex/register --data '{"activationCode": "activationcode", "registrationType": "Personalization", "securityAction": "Harden"}'`, where _username:password_ is the username and password of the admin user, _ip-address_ is the IP address of the device, and _activationcode_ is the activation code created on Control Hub.



