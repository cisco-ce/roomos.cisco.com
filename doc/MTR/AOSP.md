# Moving Microsoft Teams Android Devices to AOSP Device Management

<!--
> [!CAUTION]
> Action required for devices with Cisco as the software provider. See the section Cisco collaboration devices for Microsoft Teams Rooms with Cisco as the software provider.-->


Microsoft is moving from Device Administrator to Intune Android Open Source Project (AOSP) device management. This applies to all Microsoft Teams Rooms on Android and Teams panels devices.

AOSP Device Management replaces the legacy Android Device Administrator. This is a mandatory migration for all Microsoft Teams rooms Android systems. For Cisco devices running Microsoft Teams Rooms, this will take place in the start of 2025, with AOSP firmware being rolled around the start of February.

There are no changes to device functionality for the end-users but it will improve device stability and availability.

Follow Microsoft’s guide for migration to ensure your devices are migrated between MDM platforms:

[Migrating Teams Android Devices to AOSP Device Management from Device Administrator](https://learn.microsoft.com/MicrosoftTeams/rooms/android-migration-guide). 

## Cisco collaboration devices for Microsoft Teams Rooms with Cisco as the software provider

Microsoft Teams Devices that is registered to Control Hub with Cisco as software provider will not receive AOSP Device Management software unless the organization is registered as ready for migration.

**If you do not manage or enroll your devices in Intune:** Your organization is already ready for migration, and can register your organization as ready for migration. See the blue Important note in Step 1 of the migration guide for more details.

**If you do manage or enroll you devices in Intune:** Complete Step 1 and Step 2 of the migration guide before registering your organization as ready for migration.

To register your organization as ready for migration, please fill out the following form:

[Ready for AOSP migration registration](https://ciscocx.qualtrics.com/jfe/form/SV_eWIgDZWDYexwS3k).

By registering your org in this form, your org will be allowed to receive AOSP firmware when it is released in the beginning of February. We recommend that you complete this as soon as possible. 

If you have not registered your organization as ready for AOSP migration, Cisco will block Teams Rooms devices from upgrading to RoomOS releases with AOSP Device Management. This block will remain until your organization has been registered as ready. Be aware, any system that was blocked on a channel with an AOSP release, will immediately upgrade after the block is removed.

In the case that the organization has been registered as ready for migration, but required migration steps was not completed, there is a risk that the devices logged out when receiving the AOSP Device Management firmware.

## Cisco collaboration devices for Microsoft Teams Rooms with Microsoft as the software provider

If your devices are not registered to Control Hub or have Microsoft as the software provider selected in Control Hub, follow Step 1 and Step 2 in the migration guide. Step 3 in the guide cannot be completed until AOSP Device Management compatible firmware is available in Teams Admin Center.

In the beginning of February, AOSP Device Management compatible firmware will be available for Cisco Devices in Teams Admin Center. At this point, you can complete Step 3 of the migration guide. 
