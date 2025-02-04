<p>Last updated February 4th, 2025<p>

# Migrating Microsoft Teams Android Devices to AOSP Device Management

<div style="background-color:rgb(123, 8, 8);padding: 10px 15px;border-radius: 5px;font-size: 11pt;color: white;">
  <b style="font-size: 12pt;">Action Required</b> for Cisco devices running Microsoft Teams Rooms. See <a href='#what-do-i-as-an-administrator-need-to-do' style="color:rgb(126, 172, 251); ">What do I need to do?</a></i>
  </div> 

<h2 id="what-is-this-migration" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">What is this Migration?</h2>

Microsoft is moving from using *Android Device Administrator* to *AOSP Device Management* (AOSP DM) to manage Microsoft Teams Android devices as [announced](https://techcommunity.microsoft.com/blog/intunecustomersuccess/intune-ending-support-for-android-device-administrator-on-devices-with-gms-in-de/3915443) back in September of 2023. This applies to all Microsoft Teams Rooms and Teams Panels devices running Android, and it is a mandatory migration.

RoomOS January 2025 / RoomOS 11.24 will be the first AOSP DM software for Cisco devices running Microsoft Teams Rooms or Panels. It is currently being tested and verified by Microsoft and is scheduled to be available in February.

Cisco devices running Microsoft Teams Rooms or Panels will not receive RoomOS January 2025 / RoomOS 11.24 or newer software automatically, without customer interaction. To receive future updates, organizations must complete the migration steps outlined in this article.

Read more on the schedule for RoomOS devices in our [release plan](#cisco-sw-release-plan) section.

<h2 id="why-is-this-migration-needed" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Why is this Migration Needed?</h2>

Android Device Administrator is the legacy management system for Android devices. It is being [deprecated](https://blog.google/products/android-enterprise/da-migration/) and replaced by AOSP Device Management which is more secure and reliable. As Microsoft Teams Android devices have been using Android Device Administrator up until now, all Microsoft Teams Android devices have to undergo this migration to be able to continue to operate. This applies regardless of the usage of the managment features in Intune.

<h2 id="what-does-this-migration-mean-for-my-organization" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">What does this Migration mean for my organization?</h2>

We have distilled this down to the most important points for you:
* **There are no changes to device functionality for the end-users** but it will improve the device stability and availability.
* Depending on the configuration of your tenant, devices could get logged out if some migration steps are not completed. **To be sure your devices do not get logged out, please complete the migration as soon as possible.**
* RoomOS January 2025 / RoomOS 11.24 and newer software will not be available for Cisco devices running Microsoft Teams Rooms or Panels before it is approved by Microsoft. This is expected to happen in February.
* Devices will not receive updates without customer interaction, see the section below.
* You can roll out the AOSP DM software at your own pace using the Advanced Software Upgrade feature in Control Hub. See more in [Control the Rollout of AOSP Device Management Software Using the Advanced Software Upgrade](#cisco-sw-advanced-software-upgrade) section.

<h2 id="what-do-i-as-an-administrator-need-to-do" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">What do I, as an administrator, need to do?</h2>

To be ready for the migration and continue to receive future software updates, there are some steps you need to complete. **This process should not take more than a couple of minutes.**

**Based on who is providing your devices with software updates please proceed to the appropriate section:**
* [Cisco, through Webex with Cisco selected as software provider →](#cisco-as-the-software-provider)
* [Microsoft, through Teams Admin Center →](#microsoft-as-the-software-provider)

<!-- If you want to learn about the details, head down to our [FAQ](#faq) section. -->

<h2 id="cisco-as-the-software-provider" style="padding-top: 2em;font-size: x-large;">Cisco as the Software Provider</h2>

From RoomOS January 2025, Cisco devices running Microsoft Teams Rooms will not automatically receive updates before customers register themselves as ready for migration. This is because neither Cisco nor Microsoft can verify completion of the migration steps.

### <a name="cisco_sw_provider_actions"></a> Required Actions

**Based on how you manage your devices, please proceed to the appropriate section:**
* [If you manage or enroll your devices in Intune →](#cisco-if-you-manage-or-enroll-your-devices-in-intune)
* [If you do NOT manage or enroll your devices in Intune →](#cisco-if-you-do-not-manage-or-enroll-your-devices-in-intune)

<h3 id="cisco-if-you-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you manage or enroll your devices in Intune</h3>

Your Microsoft tenant is not ready and you need to complete these migration steps to be ready for migration:
1. Complete [Step 1](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-1---set-up-new-aosp-management-enrollment-profiles) in Microsoft's migration guide.
2. Complete [Step 2](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-2---set-up-aosp-management-configuration--compliance-policies) in Microsoft's migration guide (this is optional but recommended).
3. You are now ready and must register your organization as ready for migration to receive future updates:
[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

<h3 id="cisco-if-you-do-not-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you do NOT manage or enroll your devices in Intune</h3>

You are already ready for migration, as the migration steps are not applicable to you. However, you still need to register your organization as ready for migration. You do this by filling out the form:

[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_what_register"></a>What does it mean to register as ready for migration?

By registering your organization as ready, you will receive AOSP DM software as well as future updates. See more about the release schedule in the section below.

<h2 id="cisco-sw-release-plan" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Control Hub Release Plan for RoomOS and AOSP Device Management Software</h2>

The RoomOS Control Hub release schedule will continue to follow the same cadence as before. However, starting from RoomOS January 2025, Cisco devices running Microsoft Teams Rooms or Panels will not be able to receive newer releases until RoomOS 11.24 has been verified by Microsoft.

The RoomOS 11.24 release is currently being tested and verified by Microsoft. Once Microsoft has verified our AOSP DM firmware, it will be made available in Teams Admin Center. This is expected to happen in February.

When RoomOS 11.24 is released in TAC, RoomOS January 2025 will be updated with the same build, and organizations that have registered as ready for migration will receive the software. If a Microsoft Teams device is set to receive RoomOS January 2025 at that point, it will be upgraded to RoomOS 11.24 with AOSP DM.

Details about the rollout of RoomOS February 2025 / 11.25 will be announced later this week.

If you want to have more control over this rollout, see the section below.

<h2 id="cisco-sw-advanced-software-upgrade" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Control the Rollout of AOSP Device Management Software Using the Advanced Software Upgrade</h2>

If you want to have more control over the rollout of AOSP DM software, you can use the Advanced Software Upgrade feature in Control Hub. This feature allows you to control which release is available in your organization's Stable channel.

When enabling Advanced Software Upgrade, you will also get two new channels, Verification and Trial. These channels can be used to test and verify the AOSP DM release before putting the Stable channel on an AOSP DM release.

You can read more about Advanced Software Upgrade in the [RoomOS software upgrades Webex documentation](https://help.webex.com/en-us/article/idba5c/RoomOS-software-upgrades#Cisco_Reference.dita_7275e9c5-314e-4fb3-92d5-a2c40c47ffb0).

<h2 id="microsoft-as-the-software-provider" style="padding-top: 2em;font-size: x-large;">Microsoft as the Software Provider</h2>

Devices running Microsoft Teams Rooms or Panels with Microsoft as the software provider will have to be able to install AOSP DM firmware through TAC when it is available.

### <a name="msft_sw_provider_actions"></a> Required Actions
Based on how you manage or enroll your devices, follow the appropriate step:
* [If you manage or enroll your devices in Intune →](#msft-if-you-manage-or-enroll-your-devices-in-intune)
* [If you do NOT manage or enroll your devices in Intune →](#msft-if-you-do-not-manage-or-enroll-your-devices-in-intune)

<h3 id="msft-if-you-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you manage or enroll your devices in Intune</h3>

Your Microsoft tenant is not ready and you need to complete these migration steps to be ready for migration:

1. Complete [Step 1](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-1---set-up-new-aosp-management-enrollment-profiles) in Microsoft's migration guide.
2. Complete [Step 2](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-2---set-up-aosp-management-configuration--compliance-policies) in Microsoft's migration guide (this is optional but recommended).
3. When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

<h3 id="msft-if-you-do-not-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you do NOT manage or enroll your devices in Intune</h3>

Your Microsoft tenant is ready for the migration, however, you have to wait for AOSP DM firmware to become available. This is scheduled to happen in February.

When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

### Teams Admin Center Release Plan for RoomOS and AOSP Device Management firmware

As soon as Microsoft has verified our AOSP DM firmware, they will make it available in Teams Admin Center. This is expected to happen in February.

<div style="height: 40em;"></div>

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