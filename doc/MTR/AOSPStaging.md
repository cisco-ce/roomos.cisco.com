# Moving Microsoft Teams Android Devices to AOSP Device Management

<!--
> [!CAUTION]
> Action required for devices with Cisco as the software provider. See the section Cisco collaboration devices for Microsoft Teams Rooms with Cisco as the software provider.-->

<div style="background-color: #9a2b2b;padding: 10px 15px;border-radius: 5px;font-size: 11pt;color: white;">
  <b style="font-size: 12pt;">Action Required</b> for Cisco devices running Microsoft Teams Rooms.</i>
  </div>  

### What is happening?
Microsoft is moving from using *Android Device Administrator* to *AOSP Device Management* (AOSP DM) to manage Microsoft Teams Android devices. This applies to all Microsoft Teams Rooms and Teams Panels devices running Android, and it is a mandatory migration. 

RoomOS January 2025 / RoomOS 11.24 will be the first AOSP DM software

Cisco devices with Microsoft Teams Rooms og Panels will 

not automatically receive releases from RoomOS 11.24 / RoomOS January 2025 and onwards without customer interaction. To continue to receive automatic updates, organizations must complete the migration steps outlined in this article. 

AOSP DM firmware is scheduled to be available in February.

Read more on the schedule for RoomOS devices in our [release plan](#cisco_sw_release_plan) section.

### Why is this happening?
Android Device Administrator is the legacy management system for Android devices. It is being deprecated and replaced by AOSP Device Management which is more secure and reliable. As Microsoft Teams Android devices has been using Android Device Administrator up until now, all Microsoft Teams Android devices has to undergo this migration to be able to continue to operate.

### What does this mean for me?
* **There are no changes to device functionality for the end-users** but it will improve device stability and availability.
* Depending on the configuration of your tenant, devices could get logged out if some migration steps are not completed. **To be sure your devices does not get logged out, please follow the steps below**
* You will not receive RoomOS 11.24 or newer until AOSP DM software is ready, and you have completed the migration steps.


### What do I need to do?
Based on your who is providing your devices with software please follow the appropriate step:
* [Cisco, through Webex (with Cisco selected as software provider)](#cisco_sw_provider)
* [Microsoft, through Teams Admin Center](#microsoft_sw_provider)

<!-- If you want to learn about the details, head down to our [FAQ](#faq) section. -->

## <a name="cisco_sw_provider"></a>Cisco as the Software Provider

From RoomOS January 2025, Cisco devices running Microsoft Teams Rooms will not automatically receive updates without customer registering themselves as ready for migration. This is because neither Cisco nor Microsoft can verify completion of the migration steps.

See [What does it mean to register as ready for migration?](#cisco_what_register) for more details.

### What do I need to do?
Based on how you manage or enroll your devices, follow the appropriate step:
* [If you manage or enroll you devices in Intune](#cisco_intune_managed)
* [If you do NOT manage or enroll your devices in Intune](#cisco_not_intune_managed)

### <a name="cisco_intune_managed"></a>If you manage or enroll you devices in Intune:

1. Complete Step 1 and Step 2 in Microsofts migration guide:
[Microsoft - AOSP Device Management migration guide](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide).
2. Register your organization as ready for migration:
[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_not_intune_managed"></a>If you do NOT manage or enroll your devices in Intune

1. Register your organization as ready for migration:
[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_what_register"></a>What does it mean to register as ready for migration?

By registering your org in this form, your org will be allowed to receive AOSP firmware when it is released in February. We recommend that you complete this as soon as possible. 

If you have not registered your organization as ready for AOSP migration, Cisco devices running Teams Rooms will continue to not receive updates for the time being. This block will remain until your organization has been registered as ready. Be aware, any system that was blocked on a channel with an AOSP release, will immediately upgrade after the block is removed.

### <a name="cisco_sw_release_plan">Control Hub Release Plan for RoomOS and AOSP Device Management firmware

## <a name="microsoft_sw_provider"></a>Microsoft as the software provider

Devices running Microsoft Teams Rooms or Panels with Microsoft as the software provider will have to be able to install AOSP DM firmware through TAC when it is available.

### What do I need to do?
Based on how you manage or enroll your devices, follow the appropriate step:
* [If you manage or enroll you devices in Intune](#msft_intune_managed)
* [If you do NOT manage or enroll your devices in Intune](#msft_not_intune_managed)

### <a name="msft_intune_managed"></a>If you manage or enroll you devices in Intune:

1. Complete Step 1 and Step 2 in Microsofts migration guide:
[Microsoft - AOSP Device Management migration guide](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide).
2. When AOSP DM firmware is available, follow Step 3 of the migration guide: [Microsoft - AOSP Device Management migration guide](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide).

### <a name="msft_not_intune_managed"></a>If you do NOT manage or enroll your devices in Intune

1. When AOSP DM firmware is available, follow Step 3 of the migration guide: [Microsoft - AOSP Device Management migration guide](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide).

In the beginning of February, AOSP Device Management compatible firmware will be available for Cisco Devices in Teams Admin Center. At this point, you can complete Step 3 of the migration guide. 

### <a name="cisco_sw_release_plan"></a>Teams Admin Center Release Plan for RoomOS and AOSP Device Management firmware

As soon as Microsoft has verified our AOSP DM firmware, they will make it available in Teams Admin Center. This is expected to happen in February.

## <a name="faq"></a>Frequency Asked Questions

#### What happens if I register as ready for migration but did not complete the migration steps?
If the organization has been registered as ready for migration, but has not completed the required migration steps, there is a risk that devices log out when receiving the AOSP Device Management firmware.