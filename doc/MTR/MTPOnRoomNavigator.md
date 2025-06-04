# Microsoft Teams Panels on Cisco Room Navigator
Follow these instructions to set up the Microsoft Teams Panels experience on the Cisco Room Navigator.
## Before you begin

* Check that the Room Navigator has 4GB RAM (i.e., Product ID: CS-T10-WM-L).
* Factory reset the Room Navigator from the **Settings** menu or using the pinhole reset on the back.
* Note that deployment requires the Room Navigator to be configured in standalone mode and connected to an internet-accessible ethernet port. Microsoft Teams Panels on paired Room Navigators is not supported.
* Check the software version. If the device is not running version 11.27 or later, you need to upgrade it.

## Upgrade software to version 11.27 or later
Check which software version the Room Navigator is running: open the **Control panel**, tap **Device settings**, and then select **About this device**. Scroll down to see the current **Installed version**.
If the device is already on version 11.27 or later, go to *First-time setup wizard* in this article.
If not, then upgrade the software to version 11.27 or later:
1. After factory reset, access the API with SSH. Connect using the IP address or hostname of the device: ssh admin@IP address. The username is *admin* and leave the password blank.
2. Run the following command:

   swupgrade [https://binaries.webex.com/collaboration-endpoint-ce-production-stable/20250428121143/bifrost.pkg]
   
3. Once the software installation is complete, carry on to *First-time setup wizard* in this article.

**Note:** you can opt to install the MTP software via cop file. If this is preferred, go to *Install MTP software with a cop file* in this article.

## Install the MTP software with a cop file

First, download the cop file containing the MTP software from here:

https://software.cisco.com/download/home/286333883/type/280886992/release/RoomOS%2011.23.1.8

Then, to install the software:

1. Open a web browser and enter the device's IP address. Log into the web interface with the default credentials admin/no password.
   
2.  In the left pane scroll down to and select **Software**.

3.  Under the Software Upgrade tab, select the cop file from the **Choose File** dropdown. Click **Install** to run the installation.
   
4.  After installation is complete, factory reset the Room Navigator once again.

## First-time setup wizard

If you're going to register the device to Webex, then generate a Webex Registration code first by selecting 'Add device' on the workspace's page in Control hub. See this [help article](https://help.webex.com/en-us/article/iq6aw6/Room-Navigator-as-a-stand-alone-device) for more information about creating a workspace.

Turn on the Room Navigator to run the first-time setup wizard:

1. Choose your preferred language.
2. Select to set the device up as a Standalone unit.
3. Select **Room Booking**.
4. Choose **Outside the room**. Wait a moment while the Navigator refreshes into standalone mode.
5. Optionally configure any necessary network settings.
6. Set the time and timezone.
7. Select **Microsoft Teams Experience**.
  
   **Note:** 2 GB Navigators will not show this option.
   
   If the MTP app is not already present, you'll see a Software upgrade screen. The Navigator software will upgrade to the Microsoft Approved software version and then the Navigator will reboot.
8. Register the device to Webex or to MTR only:
   
   **Webex registration**: enter the activation code for the new or existing workspace.

    **MTR only (no Webex) registration**: skip the Webex activation code screen.
  
11. Create an admin username and password.
12. Allow **Diagnostic logging**.
13. Finish and exit the setup wizard. The Room Navigator will complete the MTP app installation and reboot, in Microsoft Teams Panel mode.

Your Cisco Room Navigator is now set up and ready to use with the Microsoft Teams Panel app.
To set up the Panels app, see this [Microsoft documentation.](https://learn.microsoft.com/en-us/microsoftteams/devices/use-teams-panels)

## Administration

Once setup, to carry out future administration:

* Administer the Room Navigator via the web user interface or over SSH using the admin credentials you created during setup.
* Access the Teams app device settings from the Microsoft Teams app's device settings panel. You can access the panel by triple-tapping the screen with three fingers, or by tapping the **Settings** icon in the bottom right corner of the screen.
* If you registered the Room Navigator to Webex, you can set configuration options and carry out other common tasks in Control Hub, as for any Standalone Navigator. See this Standalone Navigator  [help article](https://help.webex.com/en-us/article/iq6aw6/Room-Navigator-as-a-stand-alone-device) for more information.
* The standard configurations available on Microsoft Teams Admin Center are available for Cisco Room Navigators running Microsoft Teams Panels.
