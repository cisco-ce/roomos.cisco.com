<p>Last updated March 19, 2025<p>

# Migrating Microsoft Teams Android Devices to AOSP Device Management

<div style="background-color:rgb(123, 8, 8);padding: 10px 15px;border-radius: 5px;font-size: 11pt;color: white;">
  <b style="font-size: 12pt;">Action Required</b> for Cisco devices running Microsoft Teams Rooms. See <a href='#what-do-i-as-an-administrator-need-to-do' style="color:rgb(126, 172, 251); ">What do I need to do?</a></i>
  </div> 


**Change log**

* March 19, 2025: Microsoft have updated their instructions, see their validation step for. We've added additional information about Device Enrollment Manager (DEM). See <a href='#device-enrollment-manager' style="color:rgb(0, 188, 235); ">Device Enrollment Manager →</a>
* February 25, 2025: Updated Cisco software release plan. See <a href='#cisco-sw-release-plan' style="color:rgb(0, 188, 235); ">Software release plan section →</a>


<h2 id="what-is-this-migration" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">What is this Migration?</h2>

Microsoft is moving from using *Android Device Administrator* to *AOSP Device Management* (AOSP DM) to manage Microsoft Teams Android devices as [announced](https://techcommunity.microsoft.com/blog/intunecustomersuccess/intune-ending-support-for-android-device-administrator-on-devices-with-gms-in-de/3915443) back in September of 2023. This applies to all Microsoft Teams Rooms and Teams Panels devices running Android, and it is a mandatory migration.

RoomOS January 2025 / RoomOS 11.24 is the first AOSP DM software for Cisco devices running Microsoft Teams Rooms or Panels. It has been tested and verified by Microsoft and is now available.

Cisco devices running Microsoft Teams Rooms or Panels will not receive RoomOS January 2025 / RoomOS 11.24 or newer software automatically, without customer interaction. To receive future updates, organizations must complete the migration steps outlined in this article.

**This is a one way migration and once completed, devices will not be able to revert back to software with Android Device Administrator without being logged out from Microsoft Teams.**

Read more on the schedule for RoomOS devices in our [release plan](#cisco-sw-release-plan) section.

<h2 id="why-is-this-migration-needed" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Why is this Migration Needed?</h2>

Android Device Administrator is the legacy management system for Android devices. It is being [deprecated](https://blog.google/products/android-enterprise/da-migration/) and replaced by AOSP Device Management which is more secure and reliable. As Microsoft Teams Android devices have been using Android Device Administrator up until now, all Microsoft Teams Android devices have to undergo this migration to be able to continue to operate. This applies regardless of the usage of the managment features in Intune.

<h2 id="what-does-this-migration-mean-for-my-organization" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">What does this Migration mean for my organization?</h2>

We have distilled this down to the most important points for you:
* **There are no changes to device functionality for the end-users** but it will improve the device stability and availability.
* Depending on the configuration of your tenant, devices could get logged out if some migration steps are not completed. **To be sure your devices do not get logged out, please complete the migration as soon as possible.**
* RoomOS January 2025 / RoomOS 11.24 and newer software will not be available for Cisco devices running Microsoft Teams Rooms or Panels before it is approved by Microsoft. This is expected to happen in February.
* This is a one way migration and once completed, devices will not be able to revert back to software with Android Device Administrator without being logged out from Microsoft Teams.
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
3. To insure that Microsoft doesn't sign out your devices, validate compliance with [Supported Conditional Access and Intune device compliance policies for Microsoft Teams Rooms and Teams Android Devices](https://learn.microsoft.com/microsoftteams/rooms/supported-ca-and-compliance-policies?tabs=mtr-a). 
4. You are now ready and must register your organization as ready for migration to receive future updates:
[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

<h3 id="device-enrollment-manager" style="margin-top: 0;padding-top: 2em;">Device enrollment manager (DEM)</h3>

A device enrollment manager (DEM) is a nonadministrator user who can enroll devices in Intune. However, AOSP doesn't support DEM accounts. 

If you want to use an account that is on a DEM list to migrate devices to AOSP, it needs to be removed from the DEM list. The instructions to remove an account from a DEM list are the inverse of adding an account: https://learn.microsoft.com/mem/intune/enrollment/device-enrollment-manager-enroll

<h3 id="cisco-if-you-do-not-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you do NOT manage or enroll your devices in Intune</h3>

You are already ready for migration, as the migration steps are not applicable to you. However, you still need to register your organization as ready for migration. You do this by filling out the form:

[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

### <a name="cisco_what_register"></a>What does it mean to register as ready for migration?

By registering your organization as ready, you will receive AOSP DM software as well as future updates. See more about the release schedule in the section below.

<h2 id="cisco-sw-release-plan" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Control Hub Release Plan for RoomOS and AOSP Device Management Software</h2>

*Updated February 25th, 2025*

The RoomOS Control Hub release schedule will continue to follow the same cadence as before. However, starting from RoomOS January 2025, Cisco devices running Microsoft Teams Rooms or Panels will not be able to receive newer releases until they have registered as ready for migration.

Microsoft has now released RoomOS 11.24.1.8 with AOSP Device Management. See the below sections for the release plan for our Control Hub releases.

**RoomOS January 2025**

RoomOS 11.24.1.8 with AOSP DM has been released to RoomOS January 2025. Devices on a channel with RoomOS January 2025 will receive RoomOS 11.24.1.8 if the organization has registered as ready for migration.

**RoomOS February 2025 and Automatic Upgrades**

From Tuesday, February 25th, we started rolling out the RoomOS 11.24.1.8 release to devices set to receive RoomOS February 2025. This means if a device is on a channel manually pinned to RoomOS February 2025, or if it is set to get automatic upgrades, it will receive RoomOS 11.24.1.8 if the organization has registered as ready for migration.

Later, when RoomOS 11.25 has been tested by Microsoft, RoomOS February 2025 will be updated and RoomOS 11.25 with AOSP DM will be available for Microsoft Teams Rooms devices, if the organization has registered as ready for migration.

**RoomOS March 2025 and Future Releases**

With RoomOS March 2025 and future releases, we aim to provide software to Microsoft Teams Rooms devices at the time of release. However, only organizations that have registered as ready for migration will receive the software.


**If you want to have more control over the rollout of AOSP DM software to your devices, please see the section below.**

<h2 id="cisco-sw-advanced-software-upgrade" style="border-bottom: none;padding-bottom: 0; padding-top: 3em; margin-top:0">Control the Rollout of AOSP Device Management Software Using the Advanced Software Upgrade</h2> 

If you want to have more control over the rollout of AOSP DM software, **after it has been released to the Stable channel**, you can use the Advanced Software Upgrade feature in Control Hub. This feature allows you to control which release is available in your organization's Stable channel.

When enabling Advanced Software Upgrade, you will also get two new channels, Verification and Trial. These channels can be used to test and verify the AOSP DM release before putting the Stable channel on an AOSP DM release. **Important: To roll out using Advanced Software Upgrade, you need to set your Stable channel to RoomOS December 2024 before we release RoomOS 11.24 with AOSP DM.**

Note that AOSP DM software is also not available for Microsoft Teams devices in the Verification and Trial channels until it has been released to the Stable channel. See the previous section for details about the release plan.

You can read more about Advanced Software Upgrade in the [RoomOS software upgrades Webex documentation](https://help.webex.com/en-us/article/idba5c/RoomOS-software-upgrades#Cisco_Reference.dita_7275e9c5-314e-4fb3-92d5-a2c40c47ffb0).

<h2 id="microsoft-as-the-software-provider" style="padding-top: 2em;font-size: x-large;">Microsoft as the Software Provider</h2>

Devices running Microsoft Teams Rooms or Panels with Microsoft as the software provider will have to be able to install AOSP DM firmware through Teams Admin Center when it is available.

### <a name="msft_sw_provider_actions"></a> Required Actions
Based on how you manage or enroll your devices, follow the appropriate step:
* [If you manage or enroll your devices in Intune →](#msft-if-you-manage-or-enroll-your-devices-in-intune)
* [If you do NOT manage or enroll your devices in Intune →](#msft-if-you-do-not-manage-or-enroll-your-devices-in-intune)

<h3 id="msft-if-you-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you manage or enroll your devices in Intune</h3>

Your Microsoft tenant is not ready and you need to complete these migration steps to be ready for migration:

1. Complete [Step 1](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-1---set-up-new-aosp-management-enrollment-profiles) in Microsoft's migration guide.
2. Complete [Step 2](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-2---set-up-aosp-management-configuration--compliance-policies) in Microsoft's migration guide (this is optional but recommended).
3. To insure that Microsoft doesn't sign out your devices, validate compliance with [Supported Conditional Access and Intune device compliance policies for Microsoft Teams Rooms and Teams Android Devices](https://learn.microsoft.com/microsoftteams/rooms/supported-ca-and-compliance-policies?tabs=mtr-a). 
4. When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

<h3 id="device-enrollment-manager" style="margin-top: 0;padding-top: 2em;">Device enrollment manager (DEM)</h3>

A device enrollment manager (DEM) is a nonadministrator user who can enroll devices in Intune. However, AOSP doesn't support DEM accounts. 

If you want to use an account that is on a DEM list to migrate devices to AOSP, it needs to be removed from the DEM list. The instructions to remove an account from a DEM list are the inverse of adding an account: https://learn.microsoft.com/mem/intune/enrollment/device-enrollment-manager-enroll

<h3 id="msft-if-you-do-not-manage-or-enroll-your-devices-in-intune" style="margin-top: 0;padding-top: 2em;">If you do NOT manage or enroll your devices in Intune</h3>

Your Microsoft tenant is ready for the migration, however, you have to wait for AOSP DM firmware to become available. This is scheduled to happen in February.

When AOSP DM firmware is available, follow [Step 3](https://learn.microsoft.com/en-us/MicrosoftTeams/rooms/android-migration-guide#step-3---deploy-aosp-management-capable-device-firmware) in Microsoft's migration guide.

### Teams Admin Center Release Plan for RoomOS and AOSP Device Management firmware

As soon as Microsoft has verified our AOSP DM firmware, they will make it available in Teams Admin Center. RoomOS 11.24.1.8 with AOSP DM based on RoomOS January was release in February 2025.

<div style="height: 40em;"></div>
