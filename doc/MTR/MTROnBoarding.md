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
  
If required, the device first downloads new software. Then the installation, which takes about 5 minutes, starts.

After the installation is complete, you are ready to continue from step 10 in the setup wizard procedure described above.


