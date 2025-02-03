# Migrating Microsoft Teams Android Devices to AOSP Device Management

<!--
> [!CAUTION]
> Action required for devices with Cisco as the software provider. See the section Cisco collaboration devices for Microsoft Teams Rooms with Cisco as the software provider.-->

<div style="background-color:rgb(123, 8, 8);padding: 10px 15px;border-radius: 5px;font-size: 11pt;color: white;">
  <b style="font-size: 12pt;">Action Required</b> for Cisco devices running Microsoft Teams Rooms. See <a href='#what_do_i_need_to_do' style="color:rgb(126, 172, 251); ">What do I need to do?</a></i>
  </div> 
<style>

</style>

## What is this Migration?
Microsoft is moving from using *Android Device Administrator* to *AOSP Device Management* (AOSP DM) to manage Microsoft Teams Android devices. This applies to all Microsoft Teams Rooms and Teams Panels devices running Android, and it is a mandatory migration. 

RoomOS January 2025 / RoomOS 11.24 will be the first AOSP DM software for Cisco devices running Microsoft Teams Rooms or Panels. It is currently being tested and verified by Microsoft and is scheduled to be available in February.

Cisco devices running Microsoft Teams Rooms or Panels will not receive RoomOS January 2025 / RoomOS 11.24 or newer software automatically, without customer interaction. To receive future updates, organizations must complete the migration steps outlined in this article.

Read more on the schedule for RoomOS devices in our [release plan](#cisco_sw_release_plan) section.

## Why is this Migration Needed?
Android Device Administrator is the legacy management system for Android devices. It is being deprecated and replaced by AOSP Device Management which is more secure and reliable. As Microsoft Teams Android devices have been using Android Device Administrator up until now, all Microsoft Teams Android devices have to undergo this migration to be able to continue to operate.

## What does this Migration mean for my organization?
We have distilled this down to the most important points for you:
* **There are no changes to device functionality for the end-users** but it will improve the device stability and availability.
* Depending on the configuration of your tenant, devices could get logged out if some migration steps are not completed. **To be sure your devices do not get logged out, please complete the migration as soon as possible.**
* RoomOS January 2025 / RoomOS 11.24 and newer software will not be available for Cisco devices running Microsoft Teams Rooms or Panels before it is approved by Microsoft. This is expected to happen in February.
* Devices will not receive updates without customer interaction, see the section below.

## <a name="what_do_i_need_to_do"></a>What do I, as an administrator, need to do?
To be ready for the migration and continue to receive future software updates, there are some steps you need to complete. **This process should not take more than a couple of minutes.**

**Based on who is providing your devices with software please proceed to the appropriate section:**
* [Cisco, through Webex with Cisco selected as software provider →](#cisco_sw_provider)
* [Microsoft, through Teams Admin Center →](#microsoft_sw_provider)

<!-- If you want to learn about the details, head down to our [FAQ](#faq) section. -->

## <a name="cisco_sw_provider"></a>Cisco as the Software Provider

From RoomOS January 2025, Cisco devices running Microsoft Teams Rooms will not automatically receive updates before customers register themselves as ready for migration. This is because neither Cisco nor Microsoft can verify completion of the migration steps.

### <a name="cisco_sw_provider_actions"></a> Required Actions

**Based on how you manage your devices, please proceed to the appropriate section:**
* [If you manage or enroll your devices in Intune →](#cisco_intune_managed)
* [If you do NOT manage or enroll your devices in Intune →](#cisco_not_intune_managed)

### <a name="cisco_intune_managed"></a> If you manage or enroll your devices in Intune

Your Microsoft tenant is not ready and you need to complete these migration steps to be ready for migration:
1. Complete [Step 1](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-1---set-up-new-aosp-management-enrollment-profiles) in Microsoft's migration guide.
2. Complete [Step 2](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-2---set-up-aosp-management-configuration--compliance-policies) in Microsoft's migration guide.
3. You are now ready and can register your organization as ready for migration:
[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_not_intune_managed"></a>If you do NOT manage or enroll your devices in Intune

You are already ready for migration, as the migration steps are not applicable to you. However, you still need to register your organization as ready for migration. You do this by filling out the form:

[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_what_register"></a>What does it mean to register as ready for migration?

By registering your organization as ready, you will be allowed to receive any future release with AOSP DM. See more about the release schedule in the section below.

### <a name="cisco_sw_release_plan"></a>Control Hub Release Plan for RoomOS and AOSP Device Management Software

The RoomOS Control Hub release schedule will continue to follow the same cadence as before. However, starting from RoomOS January 2025, Cisco devices running Microsoft Teams Rooms or Panels will not be able to receive newer releases until RoomOS 11.24 has been verified by Microsoft.

The RoomOS 11.24 release is currently being tested and verified by Microsoft. Once Microsoft has verified our AOSP DM firmware, it will be made available in Teams Admin Center. This is expected to happen in February.

When RoomOS 11.24 is released in TAC, RoomOS January 2025 will be updated with the same build, and organizations that have registered as ready for migration will receive the software. If a Microsoft Teams device is set to receive RoomOS January 2025 at that point, it will be upgraded to RoomOS 11.24 with AOSP Device Management.

Details about the rollout of RoomOS February 2025 / 11.25 will be announced later this week.

If you want to have more control over this rollout, see the section below.

### <a name="cisco_sw_advanced_software_upgrade"></a>Control the Rollout of AOSP Device Management Software Using the Advanced Software Upgrade

If you want to have more control over the rollout of AOSP Device Management software, you can use the Advanced Software Upgrade feature in Control Hub. This feature allows you to control which release is available in your organization's Stable channel.

When enabling Advanced Software Upgrade, you will also get two new channels, Verification and Trial. These channels can be used to test and verify the AOSP DM release before putting the Stable channel on an AOSP DM release.

You can read more about Advanced Software Upgrade in the [RoomOS software upgrades Webex documentation](https://help.webex.com/en-us/article/idba5c/RoomOS-software-upgrades#Cisco_Reference.dita_7275e9c5-314e-4fb3-92d5-a2c40c47ffb0).

## <a name="microsoft_sw_provider"></a>Microsoft as the software provider

Devices running Microsoft Teams Rooms or Panels with Microsoft as the software provider will have to be able to install AOSP DM firmware through TAC when it is available.

### <a name="msft_sw_provider_actions"></a> Required Actions
Based on how you manage or enroll your devices, follow the appropriate step:
* [If you manage or enroll your devices in Intune →](#msft_intune_managed)
* [If you do NOT manage or enroll your devices in Intune →](#msft_not_intune_managed)

### <a name="msft_intune_managed"></a>If you manage or enroll your devices in Intune:
Your Microsoft tenant is not ready and you need to complete these migration steps to be ready for migration:

1. Complete [Step 1](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-1---set-up-new-aosp-management-enrollment-profiles) in Microsoft's migration guide.
2. Complete [Step 2](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-2---set-up-aosp-management-configuration--compliance-policies) in Microsoft's migration guide.
3. When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

### <a name="msft_not_intune_managed"></a>If you do NOT manage or enroll your devices in Intune
Your Microsoft tenant is ready for the migration, however, you have to wait for AOSP DM firmware to become available. This is scheduled to happen in February.

When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

### <a name="cisco_sw_release_plan"></a>Teams Admin Center Release Plan for RoomOS and AOSP Device Management firmware

As soon as Microsoft has verified our AOSP DM firmware, they will make it available in Teams Admin Center. This is expected to happen in February.
<!--
## <a name="faq"></a>Frequently Asked Questions

### What happens if I register as ready for migration but did not complete the migration steps?
If the organization has been registered as ready for migration, but has not completed the required migration steps, there is a risk that devices log out when receiving the AOSP Device Management firmware.

### What happens if AOSP DM software is deployed to a system in a tenant that has not completed the appropriate migration steps?

If you manage or enroll your device in Intune, there is a risk that the devices log out when receiving the AOSP Device Management firmware.

### What happens if I never register as ready for migration?
If you have not registered your organization as ready for AOSP migration, Cisco devices running Teams Rooms will continue to not receive updates for the time being. In February, when AOSP DM software is released, we will announce a timeline for when we will allow all orgs to receive AOSP DM software, regardless of registering as ready for migration.

This block will remain until your organization has been registered as ready. Be aware, any system that was blocked on a channel with an AOSP release, will immediately upgrade after the block is removed.
-->