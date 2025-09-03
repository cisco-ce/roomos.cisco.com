# Software upgrades

Cisco collaboration devices running Microsoft Teams Rooms get upgraded automatically from Teams Admin Center if not registered to Control Hub. The upgrade cadence of RoomOS from Microsoft might be different from that of Cisco, as Microsoft has to verify new releases before they are available in Teams Admin Center. Due to the verification process, releases from Microsoft will always be delayed in comparison to when they are released from Cisco, and if the verification process takes too long, a release might be skipped.

For Cisco collaboration devices running Microsoft Teams Rooms and Control Hub, you can choose either Cisco or Microsoft as the software provider. With Cisco as the software provider, you also get the option to use [advanced software upgrades](https://help.webex.com/idba5c/#Cisco_Reference.dita_7275e9c5-314e-4fb3-92d5-a2c40c47ffb0).

**Note**: While Cisco bundles a tested and verified set of Microsoft applications with every RoomOS release, Cisco cannot offer, nor block, upgrades of individual Microsoft applications if and when they become available. Individual Microsoft applications can **always** be updated automatically or manually from Teams Admin Center, regardless of the software provider you have selected in Control Hub. This means that if a new Microsoft application is released, like the Microsoft Teams Rooms application, the application will be updated based on your preferences in Teams Admin Center, even though you have selected Cisco as software provider. Read more about automatic updates from Teams Admin Center [here](https://learn.microsoft.com/en-us/microsoftteams/devices/remote-update#automatic-updates).


### Cisco as the software provider

With Cisco as the software provider, you can choose from the following channels:

* **Stable:** Default option. The latest Stable release of RoomOS that contains software fixes and new features.
  * Software update typically once a month
* **Microsoft approved:** Provides the same software version that is available through Teams Admin Center. Supported by Microsoft.
* **Preview:** Preview of the upcoming stable release that contains fixes to the software, but no new features.
  *	Software update typically once a month.
* **Verification:** Can be used to verify a new release before deploying it. 
  *	Available when advanced software control is enabled.
* **Trial:** An additional channel that gives you more flexibility when managing the software on your deployment. It can be used as an additional testing channel or for example home office devices or complex meeting rooms.
  *	Available when advanced software control is enabled.

### Microsoft as the software provider

With Microsoft as the software provider there is no channel selection in Control Hub, as software is managed through Teams Admin Center

For an overview of Microsoft approved software versions, see: [latest RoomOS software version supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco).

Read more about [RoomOS software upgrades and advanced software upgrades from Control Hub](https://help.webex.com/idba5c/). 

### <a name="android13_downgrade"></a> RoomOS Downgrade Block for Android 13 and newer

**From RoomOS 11.29.1, which introduces Android 13, it is not possible to downgrade to an earlier version of RoomOS.** If the device is on a channel with a software version that is lower that what the device in running, Webex continue to provide the same software as the device is running. If the device would be manually downgraded, the device will stop during boot and show a message indicating that the device was downgraded. 

This downgrade block is due that Android 13 cannot downgrade between security patches. As we continously patch the Android system in our software releases, it is not possible to downgrade to an earlier version of RoomOS.

If you must downgrade, you need to first factory reset the device and then onboard it as a RoomOS device with the software version you want to downgrade to. Then you can onboard it the device to Microsoft Teams Rooms.
