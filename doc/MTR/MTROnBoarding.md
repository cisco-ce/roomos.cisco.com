# Onboarding

**NOTE:** Read the [Requirements article](https://roomos.cisco.com/doc/MTR/Requirements) before onboarding a Cisco collaboration device. When you have a device with a Room Navigator, you need to register both the device and the Room Navigator. If you are prevented from signing in on your Room Navigator, check your Device settings in Intune, before signing in again. Read [this article](https://roomos.cisco.com/doc/MTR/Requirements#microsoft-authentication-and-intune) for more information on Microsoft authentication and Intune.

## Onboarding from the setup wizard

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

   Enable sending crash reports, metrics, and log uploads through an anonymized communication channel between Cisco and the device. These logs are not tied to any specific user or organization, but are identifiable by a device’s serial number or log upload ID.
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

## Onboarding using API commands

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

   Enable sending crash reports, metrics, and log uploads to Cisco. These logs are not tied to any specific user or organization, but are identifiable by a device’s serial number or log upload ID. Requires xConfiguration Webex ProvisionalActivationService: Enabled

   `xConfiguration Webex ProvisionalActivationService: Enabled`

   Enable or disable the anonymized communication channel between Cisco and the device. When enabled, the channel can be used to retrieve a provisional account token on the device, either serial number or log upload ID, for communicating with Cisco. This token is only used for sending logs, crashes, and metrics when xConfiguration Webex Privacy AllowUsageDataLogging: True.

   To read more about Cisco’s systems information handling, visit the [Cisco Trust Portal](https://trustportal.cisco.com/c/r/ctp/trust-portal.html?doctype=Data%20Brief#/1604543672547988).
  
If required, the device first downloads new software. Then the installation, which takes about 5 minutes, starts.

## Onboarding to GCC High

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
