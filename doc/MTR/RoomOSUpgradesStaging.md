# Software upgrades

Cisco collaboration devices with Microsoft Teams Rooms get upgraded automatically from Teams Admin Center if not registered to Control Hub. The upgrade cadence from Microsoft might be different from that of Cisco, as Microsoft has to verify new releases before they are available in Teams Admin Center. Due to the verification process, releases from Microsoft will always be delayed in comparison when they are released from Cisc, and if the verification process takes too long, a release might be skipped.

For Cisco collaboration devices with Microsoft Teams Rooms and Control Hub, you can choose either Cisco or Microsoft as the software provider. With the Cisco as the software provider, you will get the option to use [advanced software upgrades](https://help.webex.com/idba5c/#Cisco_Reference.dita_7275e9c5-314e-4fb3-92d5-a2c40c47ffb0).

Note that Cisco is limited to only managing the RoomOS software, and cannot manage individual Microsoft applications updates. Microsoft applications can **always** be updated by Microsoft Teams Admin center, regardless of the software provider you have selected in Control Hub. This means that when new Microsoft applications are released, like the Microsoft Teams Rooms application, those applications will be updated based on your preferences in Microsoft Teams Admin center, even though you have selected Cisco as software provider.


**With Cisco as the software provider, you can choose from the following channels:**

* **Stable:** Default option. The latest Stable release of RoomOS that contains software fixes and new features.
  * Software update typically once a month
* **Microsoft approved:** Provides the same software version that is available through Teams Admin Center. Supported by Microsoft.
* **Preview:** Preview of the upcoming stable release that contains fixes to the software, but no new features.
  *	Software update typically once a month.
* **Verification:** Can be used to verify a new release before deploying it. 
  *	Available when advanced software control is enabled.
* **Trial:** An additional channel that gives you more flexibility when managing the software on your deployment. It can be used as an additional testing channel or for example home office devices or complex meeting rooms.
  *	Available when advanced software control is enabled.

With Microsoft as the software provider there is no channel selection in Control Hub, as software is managed through Teams Admin Center

For an overview of Microsoft approved software versions, see: [latest RoomOS software version supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco).

Read more about [RoomOS software upgrades and advanced software upgrades from Control Hub](https://help.webex.com/idba5c/). 

