# The device web interface

A Cisco collaboration device comes with a local web interface, which is an administration portal for the device. You can connect from a computer and administrate the device remotely. It provides full configuration access and offers tools and mechanisms for maintenance.

## Requirements and limitations 

* You need to know the device's IP address.
* Your computer must be connected to the same network as the device.
* The device web interface requires that HTTP or HTTPS is enabled (refer to the _NetworkServices > HTTP > Mode_ setting).

## How to find the device's IP address
If you have a new device, or a device that has been factory reset, you can find the IP address in the upper left corner of the Welcome screen.   

If your device is not yet onboarded to Microsoft Teams Rooms:
1. Swipe from the right or tap the controls icon in the upper, right corner to open the control panel. Then tap **Device settings**.   
2. Tap **About this room device** to find the IP address.

If your device is onboarded to Microsoft Teams Rooms:
1. Tap **More** on the device's home screen.
2. Tap **Settings**, followed by **Device settings**.
3. Tap **About this room device** to find the IP address.

## Sign in and open the device web interface

1. Open a web browser and enter the device's IP address in the address bar.  
We recommend that you use the latest release of one of the major web browsers (Internet Explorer is not supported). 
2. Enter username and passphrase for the device and click **Sign In**.  
The device is delivered with a default user named _admin_. A passphrase is assigned when onboarding the device to Microsoft Teams Rooms. Leave the _Passphrase_ field blank if a passphrase is not set yet.

## How the device web interface is organized

You can select pages or topics from the menu at the left side. There is a search field in the top bar to help you find the page you are searching for.

Which pages are present depends on:
* Device type and service registration.
* Connected peripherals and setup.
* Roles and access rights of the user that is signed in.

This means that some of the main menu entries shown in the illustration may not be present on your device. Read more about local users, user roles, and access rights in the _Local users and user roles_ section.

<img src= "/doc/images/MTR/WebUIOverview.png">

A. Device name and type.

B. Main menu. Click an item to open the corresponding page.

C. Tabs. On some pages the information is organized in tabs. There may also be sub-tabs. The selected tab is highlighted.

D. Cards. The information on a page, tab, or sub-tab may be further grouped in cards.

E. Search field. Use this field to search for a page. Suggestions for relevant pages appear when you start typing. When you click on one of them, the corresponding page opens.

F. The user menu. Click the symbol to see who is signed in. You can also edit the user settings, change your passphrase, and sign out.

## Main menu overview

<img src= "/doc/images/MTR/WebUIMainMenu.png" style="width: 200px">

**Home**: Lists general information such as IP address, MAC address, serial number, active network interface, software version, issues, Microsoft Teams Rooms and registration status, utilization and environment data, and more.

**Settings**: Opens a page that give you access to the device settings (configurations) and statuses, details about cameras, screens, microphones, and other inputs, outputs, and peripherals.

**Users**: Opens a page where you can add, edit, or delete users, or change a user's passphrase. You can also create a remote support user from this page.

**Security**: Opens a page where you can upload and view certificates that are required to communicate with different services and backends. You can also create a sign-in banner and choose which system components to reset automatically when restarting the device. A sign-in banner is a message that is shown to the users before they sign in to the web or command line interfaces.

**Audio Console**: Opens the Audio Console, which provides a graphical interface that allows advanced customization of audio features.

**UI Extensions Editor**: Opens the UI Extensions Editor, which allows you to create custom UI panels and action buttons.

**Macro Editor**: Opens the Macro Editor, which allows you to create snippets of code (macros) that automates or customizes the behavior of your device.

**Developer API**: Opens a page where you can view the device's XML files and execute commands and configurations.

**Software**: Opens a page where you can install new software.

**Issues and Diagnostics**: Opens a page where you can look at active diagnostics messages, download logs, and create screenshots of the user interface and on-screen messages and indicators.

**Backup and Recovery**: Opens a page where you can backup and restore information on your device, such as the sign-in banner and configurations. You can also swap to the previous software image, factory reset, restart, or shut down the device.

## Local users and user roles
You must sign in to the device with a local user to access the device web or command line interfaces. You can assign different roles to users, to determine what they should have access to.

Create a new user account:
1. Select **Users** in the device web interface main menu.
2. Click **Create User** (at the top of the page).
3. Fill in the form with _Username_, _New passphrase_, and _Confirm passphrase_ input fields, and check the appropriate _Roles_ check boxes.  
If you assign the _Admin_ role to a user, enter your own passphrase in the _Your passphrase_ input field for verification.
4. Set the Status to _Active_ to activate the user.
5. Click **Create User**.  
Use the _Back_ button to leave without making any changes.

Change or delete a user account:
1. Select **Users** in the device web interface main menu.
2. Click the appropriate user in the list.
3. Make the changes in the form that opens.
4. Click **Save User**, **Set New Passphrase**, or **Delete User** as appropriate.  
If you make changes to a user that holds the _Admin_ role, you must always enter your own passphrase in the _Your passphrase_ input field for verification.

Change your own passphrase:
1. Click the user symbol in the top bar to open a menu.
2. Click **Change Passphrase**.
3. Enter new and current passphrases in the appropriate input fields, then click _Set New Passphrase_.

### User roles
A user account may hold one or a combination of user roles. A user account with full access rights, like the default admin user, should possess the ADMIN, USER and AUDIT roles.

ADMIN: A user with this role can create new users, change most settings, make calls, and search the contact lists. The user cannot upload audit certificates and change the security audit settings.

USER: A user with this role can make calls and search the contact lists. The user can modify a few settings, for example adjust the ringtone volume and set the time and date format.

AUDIT: A user with this role can change the security audit settings and upload audit certificates.

### Passphrase policy
When signing in to the device as a local user, the password must follow the rules set by the _UserManagement > PasswordPolicy_ settings. These are rules such as minimum length, minimum number of upper-case and lower-case letters, minimum number of digits and special characters, how long before a password expires, and how soon a password can be reused.

A new password rule will not apply to existing passwords but will take effect on the next password change.

## Remote support user
In cases where you need to diagnose problems on the device you can create a remote support user. The remote support user is granted read access to the device and has access to a limited set of commands that can aid troubleshooting.

You will need assistance from Cisco Technical Assistance Center (TAC) to acquire the password for the remote support user.
1. Select **Users** in the device web interface main menu and look for the _Remote Support_ card.
2. Click **Create User** in the _Remote Support_ card.
3. Open a case with the Cisco Technical Assistance Center.
4. Copy the text in the _Token_ field and send it to the Cisco Technical Assistance Center.
5. The Cisco Technical Assistance Center will generate a password. The remote support user is valid for fifteen days, or until it is deleted.

## Configurations and statuses
You can change the device settings (configurations) and inspect the detailed status information for the device from the device web interface. Click **Settings** and select the _Configurations_ or _Statuses_ tab.

For descriptions of the different statuses, settings, and valuespaces, see the _Further reading_ section.

### Configurations
Changing different settings may require different user credentials. To be sure that an administrator can change all device settings, an _admin_ user must possess the ADMIN, USER, and AUDIT user roles (see the _Local users and user roles_ section).

<img src= "/doc/images/MTR/WebUISettingsOverview.png">

Search for settings: Enter as many letters as needed in the search field (A). All settings that contain these letters are shown in the right pane (B). Settings that have these letters in their value space are also shown.

Select a settings category: The device settings are grouped in categories. When you choose a category in the left pane (C), all associated settings are shown in the right pane (B).

Check the valuespace for a setting: A setting's valuespace is specified either by text following the input field (D) or in a drop-down list that opens when you click the arrow (E).

Change a value: Choose the preferred value from the drop-down list or enter new text in the input field. Then click **Save** for the change to take effect. Use the **Revert** buttons if you don't want to make any changes. Categories with unsaved changes are marked with an edit symbol.

### Statuses
<img src= "/doc/images/MTR/WebUIStatusesOverview.png">

Search for a status entry: Enter as many letters as needed in the search field (A). All entries that contain these letters are shown in the right pane (B). Entries that have these letters in their value are also shown.

Select a status category: The device statuses are grouped in categories. When you choose a category in the left pane (C), all associated statuses are shown in the right pane (B).

## Find device information, diagnostics messages, and logs

Go to the device web interface _Home_ page to find the device's software version, MTR and Webex registration status, and an overview of current issues. More detailed diagnostics messages for active issues are on the _Issues and Diagnostics_ page.

The device log files are useful when diagnosing issues. You can download all current and historical logs from the device web interface _Issues and Diagnostics_ page.

## Registering a device to Control Hub after the initial setup

If you didn't register your Cisco device with Microsoft Teams Rooms to Control Hub during the initial setup, you can do it later. 

1. Create an activation code on Control Hub.
2. Go to the device web interface _Home_ page and find the _Register Device_ card.
3. Click **Register to Webex** and follow the instructions.

If you rather want to programmatically register your device to Control Hub, you can directly call the device's API over HTTP POST. This simplifies bulk provisioning. The command has the same parameters as `xCommand Webex Registration Start`, find documentation [here](https://roomos.cisco.com/xapi/Command.Webex.Registration.Start/).

**Example using curl:**  
`curl -u username:password https://ip-address/api/webex/register --data '{"activationCode": "activationcode", "registrationType": "Personalization", "securityAction": "Harden"}'` 
, where _username:password_ is the username and password of the admin user, _ip-address_ is the IP address of the device, and _activationcode_ is the activation code created on Control Hub.

## Enable ThousandEyes agent on a device

Enable [ThousandEyes Agent](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/install-roomos) on devices to get hop-by-hop network path visibility when these devices are part of meetings. 

1. Get [ThousandEyes Endpoint Agent licenses](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/endpoint-agent-licensing) (either essential or advantage). You need one endpoint license per device. 
2. Get the [connection string](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/endpoint-agent-installation-reference#connection-string) for the account group you want the agent on the device to register with.
3. On the device's web interface, go to *Settings* > *Configurations* > *ThousandEyes* and enter the connection string.
4. [Add Dynamic Test for Microsoft Teams Rooms in ThousandEyes portal](https://docs.thousandeyes.com/product-documentation/end-user-monitoring/automated-session-test/configure-automated-session-tests)

## Further reading
Find more information about the device web interface in the [Administrator guide (pdf)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-maintenance-guides-list.html). The Administration guide primarily addresses capabilities and configurations for devices registered to a Cisco on-premises service (CUCM, VCS), but many capabilities and configurations also apply to devices that are registered to Microsoft Teams Rooms or Webex cloud services.

Public configurations and statuses are also described in the [API reference guide (pdf)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html) and in the [xAPI part of the RoomOS website for developers and integrators](https://roomos.cisco.com/xapi).
