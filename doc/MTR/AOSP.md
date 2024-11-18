# Moving Microsoft Teams Android Devices to AOSP Device Management

Microsoft is moving from Device Administrator to Intune Android Open Source Project (AOSP) device management. This applies to all Microsoft Teams Rooms on Android and Teams panels devices.

AOSP Device Management replaces the legacy Android Device Administrator. This is a mandatory migration for all Microsoft Teams rooms Android systems. For Cisco devices running Microsoft Teams Rooms, this will take place in the start of 2025, with AOSP firmware being rolled around the start of February.

There are no changes to device functionality for the end users.

Follow Microsoft’s guide for migration to ensure your devices are migrated between MDM platforms:

[Migrating Teams Android Devices to AOSP Device Management from Device Administrator](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide). 

## Cisco collaboration devices for Microsoft Teams Rooms with Cisco as the software provider

If any of your devices are Control Hub registered and get their software updates from Webex, follow Step 1 and Step 2 in the guidance for migration. When you have completed both steps, please go this form to register your organization as ready for the AOSP migration: [Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).
By registering your org in this form, your org will be allowed to receive AOSP firmware when it is released in the beginning of February. We recommend that you complete this as soon as possible. 

If you have not registered your organization as ready for AOSP migration, Cisco will block Teams Rooms devices from upgrading to RoomOS releases with AOSP Device Management. This block will remain until your organization has been registered as ready. Be aware, any system that was blocked on a channel with an AOSP release, will immediately upgrade after the block is removed.

In the case that the organization has been registered but the migration was not completed, systems will be logged out when receiving the AOSP firmware.

## Cisco collaboration devices for Microsoft Teams Rooms with Microsoft as the software provider

If your devices are not registered to Control Hub or have Microsoft as the software provider selected in Control Hub, follow the guidance for migration. 

In Teams Admin Center, you can see when AOSP DM compatible firmware is available for your devices. Follow [Microsoft Teams support blog](https://techcommunity.microsoft.com/blog/microsoftteamssupport/moving-teams-android-devices-to-aosp-device-management/4140893) for more information and updates on when AOSP DM firmware has been made generally available in Teams Admin Center.
