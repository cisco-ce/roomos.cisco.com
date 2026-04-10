# Device Management and Security

Control, monitor, and secure the devices after they are deployed.

## Cisco devices in Control Hub

When you register your devices to [Control Hub](https://help.webex.com/nkhozs6/), you get access to centralized device management. With Control Hub registered devices, users can join [meetings](https://roomos.cisco.com/doc/MTR/JoinThirdPartyMeetings) with an extensive range of built-in features.

Contact your partner to set up Control Hub access for your organization.

<img src="/doc/images/MTR/planning-guide2.png" style="width: 700px"/>

You can use [the planning guide and the launch guide](https://resources.webex.com/s/b75jpfr4k5zhw3f2944xzvm) for your implementation of Cisco collaboration devices with Microsoft Teams Rooms.


### Managing and supporting your device deployment

You can achieve scalable and efficient deployments with Control Hub. Control Hub offers comprehensive device and workspace management:

* Status monitoring
* Detailed device and workspace history
* Workspace overviews
* Real-time alerts
* Configuration access

Learn the basics of managing [workspaces](https://help.webex.com/noolw6w/) in Control Hub.

You can [search, list, and show status values](https://help.webex.com/nvdtsac/) from a specific device directly on Control Hub. A status contains the current state of the device, such as connected calls, connected inputs, and output sources.

[Device history](https://help.webex.com/jhkg7ab/) allows you to quickly check what has happened on the device. Details on changes to configurations, macros, web apps, and software versions help you when you want to see what has been changed and when you have to troubleshoot a device.

Get an [overview of all your workspaces](https://help.webex.com/yuzsuw/) within your organization, know the state-of-affairs, and make data-driven decisions about your workplace resources.

Keep up to date with your devices by setting up alerts. With [device alerts](https://help.webex.com/u3uiam/), you can view all important events and updates in one place.

Apply [settings and configurations](https://help.webex.com/n5pqqcm/) to your devices, individually or for the whole organization.

### Run commands right from the cloud

Easily control devices with commands and keep track of changes through device history.

[Commands](https://help.webex.com/9lk0bf/) instruct a device to execute actions, such as to go into standby mode or to set a new user passphrase.

[Device history](https://help.webex.com/jhkg7ab/) allows you to quickly check what has happened on the device. Details on changes to configurations, macros, web apps, and software versions help you when you want to see what has been changed and when you have to troubleshoot a device.

### Proactively monitor usage and meeting room environment

Gaining insights into how your organization's devices and workspaces are used can lead to better decision-making. By understanding usage patterns and environmental conditions, you can allocate resources more efficiently and improve operational effectiveness. This results in a smarter use of space and technology, optimizing overall performance.

* [Workspace insights](https://help.webex.com/yuzsuw/)
* [Environmental and historical data](https://help.webex.com/nc6od6r/)
* [Usage analytics](https://help.webex.com/n0rlwxe/o#reference-template_6e0c7f40-2d40-4495-9fa3-7a902687e7a9)


### Customize your in room experience

Enhance your workspace capabilities with custom controls, workspace integrations, and automated alerts.

Create custom controls for your users with [UI extensions and macros](https://help.webex.com/gj962f/).

[Workspace integrations](https://developer.webex.com/create/docs/workspace-integrations) provide a framework for services to access Webex developer APIs, with a focus on extending the capabilities of workspaces and Cisco devices.

You can [set up a webhook callback URL](https://help.webex.com/3gv4ci/) so that alerts show up in third-party applications. Control Hub offers an alerts center which allows you to create, manage, and receive alerts on various events across your deployment through multiple delivery channels. The delivery channels that alert center currently support are through email, Webex App spaces, and in Control Hub.

[Webhooks for room analytics](https://help.webex.com/nj9r68z/) are a powerful way to automate monitoring of devices. You can allow Control Hub to send requests to a specified web service containing information about an event that happened on a device. For example, when the people count value changes. The service can then act based on the incoming webhook, for example store the data, or trigger other events or services.

The Board, Desk, and Room Series devices feature [User interface (UI) extensions](https://roomos.cisco.com/doc/TechDocs/UiExtensions) that enable you to design new panels and action buttons for creating custom functionalities.

You can enable [web views](https://roomos.cisco.com/doc/MTR/WebViews) to display web content. This allows users to interact with web applications or content directly from the interface of the Cisco device.

Track and Analyze usage and environmental performance of your device deployment using [comprehensive reports and historical data insights](https://help.webex.com/n0rlwxe/#reference-template_08600d25-d4ad-4016-af4f-37c4a8b98c23
).

## Software upgrades

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

With Microsoft as the software provider there is no channel selection in Control Hub, as software is managed through Teams Admin Center.

For an overview of Microsoft approved software versions, see: [latest RoomOS software version supported by Microsoft](https://learn.microsoft.com/microsoftteams/devices/certified-hardware-android?tabs=firmware#cisco).

Read more about [RoomOS software upgrades and advanced software upgrades from Control Hub](https://help.webex.com/idba5c/). 

### <a name="android13_downgrade"></a> RoomOS Downgrade Block for Android 13 and newer

**From RoomOS 11.29.1, which introduces Android 13, it is not possible to downgrade to an earlier version of RoomOS.** If the device is on a channel with a software version that is lower that what the device in running, Webex continue to provide the same software as the device is running. If the device would be manually downgraded, the device will stop during boot and show a message indicating that the device was downgraded. 

This downgrade block is due to the fact that Android 13 cannot downgrade between security patches. As we continously patch the Android system in our software releases, it is not possible to downgrade to an earlier version of RoomOS.

If you must downgrade, you need to first factory reset the device and then onboard it as a RoomOS device with the software version you want to downgrade to. Then you can onboard the device to Microsoft Teams Rooms.


## The device web interface

A Cisco collaboration device comes with a local web interface, which is an administration portal for the device. You can connect from a computer and administrate the device remotely. It provides full configuration access and offers tools and mechanisms for maintenance.

### Requirements and limitations 

* You need to know the device's IP address.
* Your computer must be connected to the same network as the device.
* The device web interface requires that HTTP or HTTPS is enabled (refer to the _NetworkServices > HTTP > Mode_ setting).

### How to find the device's IP address

If you have a new device, or a device that has been factory reset, you can find the IP address in the upper left corner of the Welcome screen.   

If your device is not yet onboarded to Microsoft Teams Rooms:
1. Swipe from the right or tap the controls icon in the upper, right corner to open the control panel. Then tap **Device settings**.   
2. Tap **About this room device** to find the IP address.

If your device is onboarded to Microsoft Teams Rooms:
1. Tap **More** on the device's home screen.
2. Tap **Settings**, followed by **Device settings**.
3. Tap **About this room device** to find the IP address.

### Sign in and open the device web interface

1. Open a web browser and enter the device's IP address in the address bar.  
We recommend that you use the latest release of one of the major web browsers (Internet Explorer is not supported). 
2. Enter username and passphrase for the device and click **Sign In**.  
The device is delivered with a default user named _admin_. A passphrase is assigned when onboarding the device to Microsoft Teams Rooms. Leave the _Passphrase_ field blank if a passphrase is not set yet.

### How the device web interface is organized

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

### Main menu overview

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

### Local users and user roles
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

### Remote support user
In cases where you need to diagnose problems on the device you can create a remote support user. The remote support user is granted read access to the device and has access to a limited set of commands that can aid troubleshooting.

You will need assistance from Cisco Technical Assistance Center (TAC) to acquire the password for the remote support user.
1. Select **Users** in the device web interface main menu and look for the _Remote Support_ card.
2. Click **Create User** in the _Remote Support_ card.
3. Open a case with the Cisco Technical Assistance Center.
4. Copy the text in the _Token_ field and send it to the Cisco Technical Assistance Center.
5. The Cisco Technical Assistance Center will generate a password. The remote support user is valid for fifteen days, or until it is deleted.

### Configurations and statuses
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

### Find device information, diagnostics messages, and logs

Go to the device web interface _Home_ page to find the device's software version, MTR and Webex registration status, and an overview of current issues. More detailed diagnostics messages for active issues are on the _Issues and Diagnostics_ page.

The device log files are useful when diagnosing issues. You can download all current and historical logs from the device web interface _Issues and Diagnostics_ page.


## ThousandEyes agent

Enable [ThousandEyes Agent](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/install-roomos) on devices to get hop-by-hop network path visibility when these devices are part of meetings. 

1. Get [ThousandEyes Endpoint Agent licenses](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/endpoint-agent-licensing) (either essential or advantage). You need one endpoint license per device. 
2. Get the [connection string](https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/endpoint-agent-installation-reference#connection-string) for the account group you want the agent on the device to register with.
3. On the device's web interface, go to *Settings* > *Configurations* > *ThousandEyes* and enter the connection string.
4. [Add Dynamic Test for Microsoft Teams Rooms in ThousandEyes portal](https://docs.thousandeyes.com/product-documentation/end-user-monitoring/automated-session-test/configure-automated-session-tests)

## Intercepting proxy Certificate Authority (CA)

An intercepting proxy is a tool that sits between a user's device and the internet, allowing the user to monitor and modify communication for tasks like security testing or debugging. It intercepts data traffic, enabling users to analyze or manipulate information exchanged between their device and web servers.

To enable the use of an intercepting proxy for a specific customer, they need to provision a CA certificate, which is then added to the Android Keystore. In the default MTR environment, the CA trusted by Android Open Source Project code (AOSP) and those added by Microsoft are stored in the Android Keystore.

Once a certificate has been uploaded through the device web interface, users have to reboot their device to ensure that Android recognizes and incorporates the CA certificate into the Android Keystore.

### Add the CA certificate

Access to the local device controls of the device and navigate to **Security** > **Certificates** > **Custom**, and upload your CA certificate. Now, when you install MTR on your system, RoomOS will retrieve the content of the custom CA certificate and integrate it into the Android Keystore. 

<img src="/doc/images/MTR/UploadCertificates.png" style="width: 700px" />

If you have a Cisco Room Navigator, the **certificate sync** feature needs to be enabled, as this feature synchronizes all the CAs on the codec with the Room Navigator.
Make sure that `xConfiguration Peripherals Security Certificates SyncToPeripherals Enabled` is set to `True`. When set to `True`, the certificates are deployed on the Room Navigator.


### Limitations regarding intercepting proxy and tenant restriction 

Intercepting certain Microsoft domains can disrupt the sign-in flow, as detailed in this documentation: https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/tenant-restrictions.

Microsoft TLS interception support focuses on enabling tenant restrictions, intercepting these three domains: `login.microsoftonline.com`, `login.microsoft.com`, and `login.windows.net`. If interception occurs on other domains, the disruption to the sign-in flow is minimized to around 10 minutes.

📝 As mentioned [here](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/tenant-restrictions), do not include subdomains under `*.login.microsoftonline.com` in your proxy configuration. Doing so will include `device.login.microsoftonline.com` and will interfere with Client Certificate authentication, which is used in Device Registration and Device-based Conditional Access scenarios. Configure your proxy server to exclude `device.login.microsoftonline.com` and `enterpriseregistration.windows.net` from TLS break-and-inspect and header injection.


## Further reading
Find more information about the device web interface in the [Administrator guide (pdf)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-maintenance-guides-list.html). The Administration guide primarily addresses capabilities and configurations for devices registered to a Cisco on-premises service (CUCM, VCS), but many capabilities and configurations also apply to devices that are registered to Microsoft Teams Rooms or Webex cloud services.

Public configurations and statuses are also described in the [API reference guide (pdf)](https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html) and in the [xAPI part of the RoomOS website for developers and integrators](https://roomos.cisco.com/xapi).

