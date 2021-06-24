<img src="/docs/images/releases/Cisco_Logo_no_TM_Midnight_Blue-RGB.png" style="border: none; height: 100px; width: 200px;"><br><br>
# Cisco Webex RoomOS 10 
# Release notes
---
D15463.02 - June 2021

## Document revision history

<table class=''>
	<tr>
		<th>Revision</th> <th>Date</th> <th>Description</th>
	</tr>
	<tr>
		<td>2</td> <td>June 24th 2021</td> <td>Release of Cisco Webex RoomOS 10.3.3.0 e383f779e98, patch</td>
	</tr>
	<tr>
		<td>1</td> <td>April 29th 2021</td> <td>Release of Cisco Webex RoomOS 10.3.2.0 85049347ae0, major</td>
	</tr>
</table>

## Introduction to Cisco Webex RoomOS 10 <a name='intro'></a>

This release note describes new software features and capabilities included in RoomOS 10. RoomOS 10 is supported by the following products:

<table width="100%">
	<tr>
		<th><b>Cisco Webex Room Series</b></th>
	</tr>
	<tr>
		<td>Cisco Webex Room USB, Room Kit Mini, Room Kit, Room 55<br> 
Cisco Webex Codec Plus, Codec Pro<br>
Cisco Webex Room 55 Dual, Room 70 (Single/Dual), Room 70 G2 (Single/Dual)<br>
Cisco Webex Room Panorama, Room 70 Panorama 
	</tr>
	<tr>
		<th><b>Cisco Webex Board Series</b></th>
	</tr>
	<tr>
		<td>Cisco Webex Board 55/55S, 70/70S, 85S
	</tr>
	<tr>
		<th><b>Cisco Webex Desk Series</b></th>
	</tr>
	<tr>
		<td>Cisco Webex Desk Pro, Desk Limited Edition
	</tr>
</table>

The software described in this document is released to [https://www.cisco.com](https://software.cisco.com/download/home/283611944?catid=280789323) for on-premises deployment. If you register a Webex Room Device to Webex you will be upgraded to the latest RoomOS cloud version available. RoomOS cloud software is not supported for on-premises deployment unless you are linked to **Webex Edge for Devices with Cloud Software Management enabled**. 

You can tell the difference between a cloud and on-premises RoomOS version by looking at the third version number. For example: 

* 10.3.**1**.x = Cloud 
* 10.3.**X > 1**.x = On-premises 

**Cisco Webex RoomOS 10 is based on Collaboration Endpoint Software 9 (CE9) and is a continuation of the same software**

This means that the first release of RoomOS 10 inherits the same features as CE9.15.3.17 as of April 2021. In the future, there will be a difference between the CE9 and RoomOS 10 since RoomOS 10 will be running on newer products. 

Note: You will still find “ce” notations in provisioning services (TMS, UCM etc.), xAPI and on the software packages. If you look at the software version on the Touch panel bug you will see that the name has changed from CE to RoomOS. 

Cisco Webex RoomOS 10 can be downloaded [here](https://software.cisco.com/download/home/283611944?catid=280789323).
<br><br> 

# Release summary for RoomOS 10.3

## Notes and warnings for this release

### The legacy media resillience protocol (FLUX) will soon be deprecated

Predicted version where this feature will be deprecated: **RoomOS 10.7.x**

A media resillience protocol is present to make the media resillient to loss in lossy network conditions. RoomOS 10 has support for a much more effective protocol (Media Assurance) which is also supported by CE9 and is used in all supported backends. This is the primary resillience protocol used today.

**How this change will affect you**

FLUX has been kept for backwards compatibility with endpoints that is runnning TC7.x software. This upcoming change means that 1:1 calling between a TC7.x and RoomOS 10.7.x+ devices, may in lossy network conditions experience degraded media quality.

## RoomOS 10.3.3.0

This is a patch release and contains bugfixes only.

* <b>Bug fixes</b>
    * [Click here for a list of resolved defects in RoomOS 10.3.3.0](https://bst.cloudapps.cisco.com/bugsearch/search?kw=*&pf=prdNm&pfVal=283661039&rls=10.3.3.0&sb=fr&sts=fd&bt=custV)

<br>

## RoomOS 10.3.2.0 
* [Initial feature parity with Collaboration Endpoint Software CE9.15.3.17](#10320-1) 
* [Support for Cisco Webex Desk Limited Edition](#10320-2)
* [Immersive share for Cisco Webex Desk Pro and Desk Limited Edition](#10320-3)
* [Other changes](#10320-4)
    * [Added a new button to enable Personally Identifiable Information (PII) logging from the Touch interface](#10320-41)
    * [Added Room Analytics dashboard in the Web UI](#10320-42)
* [Important notes and warnings for this software release](#10320-5)
    * [RoomOS 10 do not support older device models](#10320-51)
    * [ISDN Link is no longer supported](#10320-52)
* <b>Bug fixes</b>
    * [Click here for a list of resolved defects in RoomOS 10.3.2.0](https://bst.cloudapps.cisco.com/bugsearch/search?kw=*&pf=prdNm&pfVal=283661039&rls=10.3.2.0&sb=fr&sts=fd&bt=custV)
    
<br>

## RoomOS 10.3.2.0 feature descriptions 

### Initial feature parity with Collaboration Endpoint Software CE9.15.3.17 <a name='10320-1'></a>

New features in CE9.15.3.17 also included in RoomOS 10:
* CMS Raise hand (requires Cisco Meeting Server (CMS) 3.2)
* Share WebApps in call
* Whiteboard shapes
* Direct ad-hoc booking from inside meeting rooms (requires Webex Edge for Devices or Webex registration)

[Click here](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/software/ce9/release-notes/ce-software-release-notes-ce9.pdf) for more information about CE9.15.3.17 and the features above.

### Support for Cisco Webex Desk Limited Edition <a name='10320-2'></a>
<img src="/docs/images/releases/desklimited.png" style="border: none; height: 300px; width: 400px;">

Cisco Webex Desk Limited Edition is a new product in the Cisco Webex Desk Series and is only supported with RoomOS 10 and above. 

### Immersive share for Cisco Webex Desk Pro and Desk Limited Edition<a name='10320-3'></a>

<img src="/docs/images/releases/immersiveshare.png" style="border: none; height: 300px; width: 400px;">

Deliver more engaging presentations, by placing yourself in front of any content you share from your computer. 

* You need to enable Virtual Backgrounds before using Immersive Share.
* Your computer must be connected to the Cisco Webex Desk Pro or Desk Limited Edition with the USB-C cable.

The presentation and video are both sent in the content stream so you will stay in focus until you stop sharing. This is available through the floating content bar. 

The main video is muted while you are in immersive share mode. 

Known limitation: <br>
While in immersive share mode, the camera LED is not lit. A workaround is to look at the screen, you will see yourself in the presentation as a indication that the camera is enabled. This will be resolved in a future release.

<a href="https://help.webex.com/en-us/nmhu88ab/Immersive-Share-on-Desk-Pro">Click here for more information about immersive share</a>

### Other changes <a name='10320-4'></a>

**Added a new button to enable Personally Identifiable Information (PII) logging from the Touch interface <a name='10320-41'></a>**

On the touch panel. Go into the settings menu and press "Issues and diagnostics". A new button is available to enable PII logging.

<img src="/docs/images/releases/piilogging.png" style="border: none; height: 300px; width: 600px;">

When PII Logging is enabled the device will write PII information in the logs. A PII warning banner is displayed on the Touch device and on the screen.   

This feature can be used for troubleshooting purposes when unobscured logs are required. This setting does not persist a reboot.

**Added Room Analytics dashboard in the Web UI<a name='10320-42'></a>**

If you have enabled any Room Analytics features on your Cisco Webex Device, a Room Analytics dashboard will appear on the web interface home page. 

<img src="/docs/images/releases/roomanalyticsdashboard.png" style="border: none; height: 300px; width: 600px;">

### Important notes and warnings for this software release <a name='10320-5'></a>

**RoomOS 10 do not have support for older device models <a name='10320-51'></a>**
<table  width="100%">
	<tr>
		<th><b>The following devices and older are not supported with RoomOS 10:</b></th>
	</tr>
	<tr>
		<td>Cisco TelePresence SX10, SX20, SX80
	</tr>
	<tr>
		<td>Cisco TelePresence DX70, DX80
	</tr>
	<tr>
		<td>Cisco TelePresence MX700, MX800, MX800 Dual, MX200 G2, MX300 G2
	</tr>
</table>

[Click here for an overview of supported devices](#intro)

**ISDN Link is no longer supported <a name='10320-52'></a>**

Software support for ISDN Link has been removed in RoomOS 10. If you require to use ISDN Link, please use the latest Collaboration Endpoint Software version supported by the Room Devices.

**Cisco Proximity Share To Clients Removed <a name='10320-53'></a>**

The Cisco Proximity for Mobile app is being phased out, and no further development is planned on these apps. As a step in this process the "share to clients" functionality has been removed from RoomOS 10.3.2.0. The Cisco Proximity for Desktop version is still supported (share from clients) and will receive updates going forward.
<br><br>
# Software upgrade and downgrade

## Upgrading software on a Cisco Webex Room Device 

Upgrading from any CE9 version directly is supported, <u>however there may be limitations to the different upgrade methods that you need to take into consideration</u>. Using the xAPI method to download the “.cop” software from a HTTP server should work from any CE9 version to RoomOS 10.  

You can upgrade devices using the native web interface of the device, Unified CM, TMS or using the device xAPI. 

Note: If you upgrade to RoomOS 10 from version < CE9.13.x, any settings that no longer exist in RoomOS 10 will be removed from the configuration database. When you now downgrade back to a version < CE9.13.x, the settings will be set to the default value on the respective version. 

Before you start, please make sure you have downloaded the software for the correct platform.

<table  width="100%">
	<tr>
		<th><b>Device</b></th><th><b>Software platform identifier</b></th> <th><b>Latest available RoomOS software</b></th>
	</tr>
	<tr>
		<td>Cisco Webex Codec Plus, Room USB, Room Kit Mini, Room Kit, Room 55, Room 55 Dual, Room 70, Board Series</td> <td><b>s53200</b></td> <td><b>cmterm-s53200ce10_3_3_0.k3.cop.sgn</b><br><b>cmterm-s53200ce10_3_3_0.k3.cop.sha512</b>*</td> 
	</tr>
	<tr>
		<td>Cisco Webex Codec Pro, Room 70 G2, Room 70 Panorama, Room Panorama, Desk Series</td> <td><b>s53300</b></td> <td><b>cmterm-s53300ce10_3_3_0.k3.cop.sgn</b><br><b>cmterm-s53300ce10_3_3_0.k3.cop.sha512</b>*</td>
	</tr>
	<tr>
		<td>All products</td> <td><b>N/A</b></td> <td><b>cmterm-ce10_3_3_0.k3.cop.sgn</b><br><b>cmterm-ce10_3_3_0.k3.cop.sha512</b>*</td>
	</tr>
	<tr>
		<th colspan="3"><a href="https://software.cisco.com/download/home/283611944?catid=280789323" target="_blank">Follow this link</a> to find and download software for the Room Device you are about to upgrade.<br>* .cop.sha512 cop files are used with UCM 14 and above</th>
	</tr>
</table>

The "All products" cop file (super cop) must only be installed to a provisioning service, for example Unified CM. This package provides software to all supported video models and peripherals, so you only have to install one cop file. 

**WARNING: Do not delete ".pkg" files that are stated to be "Not in use" on Unified CM. The devices are pointed to a loads file that tells it what package to use for the different peripherals. UCM is not aware that the ".pkg" is in use. By deleting peripheral or device software the device will fail to upgrade or fail to upgrade its peripherals.**

### Software integrity verification after download

To verify the integrity of the software image you have downloaded from cisco.com, you can calculate a SHA512 checksum and verify that it matches with the one listed on the software download page. To find the checksum, hover the mouse pointer over the software image you have downloaded. 
 
At the bottom you find the SHA512 checksum, if you do not see the whole checksum you can expand it by pressing the "..." at the end. 
To calculate a SHA512 checksum on your local desktop please see below.

#### SHA512 checksum calculation command examples	

**Microsoft Windows**

Open a command line window and type the following command:
```
> certutil.exe -hashfile filename.k3.cop.sgn SHA512
```

**macOS**	

Open a terminal window and type the following command:
```
$ shasum -a 512 filename.k3.cop.sgn
```

**Linux**	

Open a terminal window and type the following command:
```
$ sha512sum filename.k3.cop.sgn
Or
$ shasum -a 512 filename.k3.cop.sgn
```

If the SHA512 checksum matches, there is a high level of certainty that no one has tampered with the software image or the image has not been corrupted during download. 

If the SHA512 checksum does not match, we advise you to not attempt upgrading any systems with the software image. Download the software again and verify the SHA512 checksum again. If there is a constant mismatch, please open a case with the Cisco Technical Assistance Center.

Note:
You should always use the “.cop” file when upgrading the devices listed above. Upgrading using “.pkg” on these devices will leave the device unable to upgrade the peripherals and you may experience error messages regarding software mismatch after upgrade. Such issues could happen if you used the “.pkg” extension when upgrading the device from UCM or in other ways. To resolve this, upgrade the software again using the “.cop” file. Cisco only release “.cop” files for RoomOS 10 and above. 

**Upgrade using the web interface**

Access the web interface of the device on: 

`https://codecIP/web/software`

Upload the correct software package by following the instructions on the web page. The upgrade will start, and the device will reboot with the new software. 

**If you are on a software version before CE9.9.1 or CE9.8.2 you may experience a file size warning if the file you are uploading are larger than 1GB. If you experience this, please upgrade using one of the other methods described below.** 

**Upgrade using UCM**

Install the appropriate “.cop” file containing the software for the device platform you wish to upgrade according to the cop installation process on UCM. 

Go into the device default loads on the UCM administration page and make sure the platform has populated the correct filename. 

For Cisco Webex Room devices s53200 and s53300, the load file name should not contain any extension at all if the device is running software >= CE9.8.2. For example:

Platform Specific packages:<br>
s53200ce10_X_X_X.pkg (**wrong**)<br>
s53200ce10_X_X_X (**correct**)

All products (containing all software versions for all products):<br>
ce10_X_X_X (**correct**)

If the device is running software lower than CE9.8.2 the above method may not work, please use the xAPI method to upgrade. See below. 

**Upgrade using TMS**

Upload the software to TMS according to the TMS instructions of software upgrade. 

**Upgrade using the xAPI**
 
If none of the above methods are applicable, you can use an existing HTTP server or setup a HTTP server that is reachable by the device(s) you want to upgrade. 

Log into the xAPI CLI using SSH or Serial. Type the following command to initiate the upgrade:

```
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourHTTPserver/path/to/file
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourUCMserver:6970/file
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourTMSserver/public/path/to/file
```

The device will download the software package and upgrade without warning. If you want the user to be warned and postpone the upgrade, add the parameter: `“Forced: False”` to the command as the default is `“Forced: True”`.

### Downgrading

Downgrading is performed the same way as described above, using a software version lower than the one you are currently running. 
When downgrading from RoomOS 10 to CE9.12.x or lower, the provisioning mode setting will reset to the default value even if the setting exists on both versions. The workaround is to manually configure the provisioning mode after downgrade. 


## Software deferral policy 

A software version is deferred when we find critical issues within the software. This is to prevent users from downloading and installing affected software versions. Replacement software will always be in place before a software version is deferred.

Older software versions will be deferred on a regular basis from the download section on https://www.cisco.com to avoid providing potential vulnerable software after security fixes. As a general rule you will be able to download the latest release and the version before. Older software versions will be removed from cisco.com regularly. 

**Example:**

**RoomOS 10.X.Y.z = Major.Minor.Patch.Buildnumber**

For RoomOS versions that has been provided by the Webex cloud, "Y" will always be 1 (10.X.**1**.z) while a RoomOS version released to cisco.com the same number will always be higher than 1 and will increment by one for each patch release. 

If for example RoomOS 10.3.2.x and RoomOS 10.6.2.x is released and RoomOS 10.9.2.x becomes available, RoomOS 10.3.2.x may be removed as part of the deferral policy.

Cisco supports the latest minor release and the previous minor release (i.e. RoomOS 10.3.2.x) and the newest (i.e. RoomOS 10.6.2.x) as a general rule. 

Exceptions are made if supported hardware or particular feature deployments are depending on a major release. Deferral of older maintenance releases still applies. 

## Open and resolved caveats in RoomOS 10 <a name='defects'></a>

### Using the Bug Search Tool

You can use the Bug Search Tool to find information about caveats (bugs) for this release, including a description of the problems and available workarounds. The Bug Search Tool lists both open and resolved caveats. No subset of open or resolved bugs will be listed in the release notes unless deemed relevant for a particular software version. 

A pre-defined link will provide the correct list of all open or resolved bugs. Please note that the "Series/Model" listed in the pre-defined search is universal and will list all relevant bugs relating to all products that runs RoomOS Software.

Please refer to the release summary for a link to open and resolved bugs under the specific release.

To use the Bug Search Tool, follow these steps:

* **Step 1** Access the Bug Search Tool by navigating to https://bst.cloudapps.cisco.com/bugsearch/
* **Step 2** Log in with your Cisco.com user ID and password
* **Step 3** To look for information about a specific problem, enter the bug ID number in the ‘Search for bug ID’ field, then click ‘Go’

## Known limitations and advisories for RoomOS 10

### Resource consumption

**Extended Logging**		
Extended logging is a troubleshooting feature and will consume a high amount of resources when enabled. Enabling extended logging can generate unexpected behavior in production calls and in rare cases, cause the device to crash due to resource consumption. This feature should therefore only be enabled in short periods if higher data collection is required when reproducing issues for example, in cooperation with Cisco TAC. 

**Network Congestion**	
Anything that degrades network performance can affect voice and video quality and, in some cases, can cause a call to drop. Sources of network degradation can include, but are not limited to, the following activities:

* Administrative tasks such as an internal port scan or security scan
* Attacks that occur on your network, such as a denial-of-service attack

To reduce or eliminate any adverse effects to conferences, schedule any administrative network tasks during a time when the Cisco Webex Room system is not being used, or exclude the Cisco Webex Room systems from the testing.

### Wi-Fi Connection 

Due to compliance regulations, it is required to enable 802.11d in access points for the product to operate properly within 5725 MHz – 5875 MHz. As Wi-Fi connections can be used as a flexible option, an Ethernet connection is always preferred for high performance.

**WPA-EAP**<br>
There is currently no diagnostic message for expired certificates

**CA Certificates**<br>
CA certificates must be uploaded per endpoint. There is currently no way to mass-distribute certificates to endpoints running software version < CE9.2.1. Please also note that the endpoint must be connected to a wired or WPA2-PSK wireless network in order to upload a certificate before attempting to connect to a WPA-EAP enabled network that requires a CA certificate. 

Devices flagged with "NR" (No Radio) do not have Wi-Fi capability. 

**Network paired Cisco Touch 10 not supported when the video system is connected through Wi-Fi**<br>
Even though this connectivity works, you may end up in cumbersome scenarios if the Wi-Fi connectivity is lost for any reason, for example when the Wi-Fi password is changed. In order to reconfigure the Wi-Fi connection, you need to setup a direct pairing between the video system and the Touch 10 before reconnecting the Cisco Touch 10. When the video system is using Wi-Fi connectivity Cisco recommends that you have the Touch 10 directly paired with the video system.  

### Cisco Webex and Cisco Webex Edge for Devices 

**Pairing Cisco Touch 10 or Room Navigator**<br>
To activate a system on Webex Teams with a LAN paired Cisco Touch 10 or Cisco Webex Room Navigator panel, you must pair the touch device before you activate the system on Webex Teams. 

Note: In newer versions you can now create new user accounts to pair the touch device after registration. 
We recommend that you upgrade to the latest available RoomOS version before activating your device on Webex Teams. 

**Encryption is required to activate a Room Device on Webex**<br>
A Room Device with support for encryption is required to activate the device on Webex and Webex Edge for Devices. Cisco Webex Room Devices with the K7 flag in the partnumber, do not have support for encryption and cannot be registered or linked to Webex. Encryption support for Cisco Webex Room Devices are determined by hardware and are not using encryption option keys. 

If the device do not have the entryption option, then the device is a K7 device. Devices flagged with K9 in the partnumber have support for encryption. 

You can check if the device have the encryption option key from the web interface under "option keys". This key can neither be added or removed as it is based on the hardware model you have with K7 (no crypto) or K9 (crypto) notation. 
 
### Peripherals

**Cisco Touch 10**<br>

An area may appear dead on the Cisco Touch 10 controller’s screen if this area has been touched during start-up of the panel. In the start-up phase, a touch calibration process takes place. If something is in contact with the touch panel at this time, this area may lose its function until the Touch 10 has been restarted. Do not touch the touch panel during boot to avoid this.  

<table width="100%">
	<tr>
		<th><b>Feature / equipment</b></th>
		<th><b>Limitations and advisories</b></th>
	</tr>
	<tr>
		<td>Unified CM</td> 
		<td>
			<b>H.323 and SIP consideration when provisioned by CUCM</b><br>
When using CUCM provisioning, the endpoint cannot register to a VCS (SIP or H.323) at the same time. This use-case is not supported. When 			CUCM provisioning is active, H.323 mode is disabled. We recommend TelePresence customers to migrate from H.323 to SIP. 
Please note that being registered to CUCM without having provisioning mode set to “CUCM” is not a supported scenario.
<br><br>	
<b>NTP</b><br>
The collaboration endpoints do not support broadcast NTP servers from CUCM, unicast only. 
		</td> 
	</tr>
	<tr>
		<td>SIP</td>
		<td>
			<b>SIP Listen Port diagnostics warning</b><br>
			When registered to a SIP proxy and SIP Listen Port is enabled, a diagnostics warning will be displayed in the web interface 			“SIPListenPortAndRegistration”. We recommend that SIP Listen Port is turned off when registered to a SIP proxy
		</td>
	</tr>
	<tr>
		<td>Cisco Intelligent Proximity</td> 
		<td>
Please refer to the <a href="http://www.cisco.com/web/go/proximity-support" target="_blank">Cisco Support Forums</a> for questions and support<br>
If you have issues with Cisco Intelligent Proximity, read the <b><a href="https://supportforums.cisco.com/document/12159326/troubleshooting-guide-cisco-proximity" target="_blank">Cisco Proximity troubleshooting guide</a></b>
</td>
</tr>
	<tr>
		<td>Web interface</td> <td><b>HTTP Rate limiting</b><br>
To increase device stability and security rate limiting is in effect on the Room Devices.<br><br>

<b>Max processed requests per second:</b><br>
Authenticated (for example POST to /putxml with basic authentication): 1 (queue 30)<br><br>

Using session cookies (for example being logged in to the web interface via a browser): 15 (queue 90)<br><br>

To explain what these numbers mean, let’s take for example the "authenticated" method:<br>
If you send 30 authenticated HTTP requests at once, it will take minimum 30 seconds before you get a response to the last request. If you send 31 requests, assuming all is coming in at the same time, the 31st request will get a http 503 response. 

If you hit the rate-limiting (max requests per second), the request is queued until others are processed. This happens until the queue is full, and then new requests will get a HTTP 503 response instead of being queued.

Logs will show when the requests are being rate limited.</td></tr>
	<tr>
		<td>SNMP</td> <td>The Collaboration Endpoint Software is configured with the default SNMP community strings. SNMP community strings should be treated as credentials, and therefore these must be changed after initial configuration. RoomOS 10 only has basic support for SNMPv2 with default MIB only.</td>
	</tr>
	<tr>
		<td>Security</td> <td>The codecs shipped with RoomOS 10 software do not meet the Cisco standard passphrase policy. Cisco recommends users to set a passphrase on the system when installed to avoid the system from being compromised. This issue will be addressed in a future release.</td>
	</tr>
	<tr>
		<td>PresenterTrack</td> <td><b>PresenterTrack is disabled in MultiSite calls</b><br>
The PresenterTrack feature is not available in MultiSite calls. 
Note that PresenterTrack will work in a Dual Screen call with CMS from CE9. 
<br><br><b>Trigger zone configuration</b><br>
There is a known limitation when configuring the trigger zone through the web interface; whenever the blue square is moved around and placed the trigger zone will be saved (regardless if the "save" button is pressed or not. The blue square that is displaying in the selfview on the endpoint do not disappear until the configuration has been saved manually from web or activate the PresenterTrack preset from the Touch interface. 
		</td>
	</tr>
	<tr>
		<td>SpeakerTrack</td> <td><b>Face masks</b><br>SpeakerTrack (Quad Camera and integrated cameras, for example on Room Kits) with the Cisco Webex Room Series has been improved with an additional “head detector” that will detect the head instead of the face. Note that this may also increase the frequency of detecting objects with a “head” in the room. This functionality will give an improved experience in a meeting where the people in the room are wearing face masks. </td>
	<tr>
		<td>Startup Wizard</td> <td>While the Startup Wizard is active the system will have “Do Not Disturb” mode enabled by design. The DND mode cannot be turned off while the Startup Wizard is active. To remove the Startup Wizard, finish the Startup Wizard normally by following the steps or turn off the “RunStartupWizard” by setting the value to “False”. If the Startup Wizard is active, a diagnostics message will be active in the web interface with a link to the configuration to turn it off. This should only be done by advanced users that wants to configure the system manually.   </td>	
	<tr>
		<td>Custom wallpaper and branding</td> <td>A system using custom wallpaper will not display on-screen elements for example, custom branding, the clock, today’s bookings or One Button to Push. This limitation is intentional as we do not know how these elements will appear on customized wallpapers.  
		</td>
	</tr>
	<tr>
		<td>Audio Console</td> <td>You need to create equalizers through the xAPI as you are only able to select between equalizers in the Audio Console UI and not create them. 
<br><br>When adding HDMI input connectors that have set “Mute on inactive video”, it will look like it has not been added the first time and needs to be added a second time. <br><br>
The settings will update live when configuring the Audio Console but will not be stored in a macro until it is saved. If you do not save the Audio Console setup it will get lost if you reboot the device. 
		</td>
	</tr>
	<tr>
		<td>HDCP</td> <td>Device is not entering standby
If you connect for example, a Google Chromecast, the device will not be able to enter standby because the standby activity makes the Chromecast send “Active” signal to the codec forcing it to wake up again. 

<b>All content is considered as HDCP when enabled</b>
When the input has been configured to support HDCP, it will consider anything connected to this input as HDCP content, even if it´s not. This will prevent you from sharing content from this port in a call. You can share anything locally the same way as before but note that on a dual screen device you may only see content on one screen. Check if your room device has support for one or two HDCP outputs. 
		</td>
	</tr>
	<tr>
		<td>Layout controls in Webex meetings</td> <td>
<b>Layout control for on-premises devices in Webex Calls</b>
On-premises devices that are calling into Webex meetings will currently not have the same control options of the meeting that a Webex registered / linked device have. There are still some actions that are available through DTMF tones. Please visit https://help.webex.com/en-us/nli1uz4/DTMF-Commands-for-Video-Device-Enabled-Cisco-Webex-Meetings for a list of valid DTMF tones that can be sent to the Webex meeting to invoke certain actions. 
		</td>
		</tr>
	<tr>
		<td>Immersive share</td> <td>
<b>Camera LED is not lit when immersive share is enabled</b>
You will see yourself on the screen as an indication of being filmed by the camera. This limitation will be resolved in a future release and is valid for Cisco Webex Desk Pro and Desk Limited Edition. 
		</td>
	</tr>
</table>


## Interoperability for RoomOS 10
The interoperability section describes the equipment and software revisions that have been tested for interoperability with this release. Please note: The absence of a device or revision from this section does not imply a lack of interoperability.

<table  width="100%">
	<tr>
		<th><b>H323 gatekeepers / traversal servers</b></th><th><b>Minimum software</b></th>
		</tr>
	<tr>
		<td>Cisco TelePresence System Video Communication Server (VCS)</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<th colspan="2"><b>SIP registrars / proxy servers</b></th>
	<tr>
		<td>Cisco TelePresence System Video Communication Server (VCS)</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<td>Unified CM</td> <td><b>10.5</b><br> For device support, please make sure you have the latest UCM device pack for your version installed. </td>
	</tr>
	<tr>
		<th colspan="2"><b>MCU Interoperability</b></th>
	</tr>
	<tr>
		<td>Cisco Meeting Server (CMS)</td> <td><b>2.8</b><br>For the latest conferencing features available in CMS, the latest available software is always recommended.</b></td>
	</tr>
	<tr>
		<td>
			Cisco TelePresence Server 7010<br>
			Virtual TelePresence Server<br>
			Cisco TelePresence Server MSE 8710<br>
			Cisco MCU 53xx<br>
			Cisco MCU 42xx<br>
			Cisco MCU 45xx
		</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<th colspan="2"><b>Management server interoperability</b></th>
	</tr>
	<tr>
		<td>TelePresence Management Suite</td> <td><b>Latest version available</b></td>	
	</tr>
</table>

### Camera firmware and support

Note: The camera firmware has parity with the version installed on the Room Device. Camera software for Cisco Webex Quad Camera, Cisco TelePresence Precision 60 and Cisco TelePresence SpeakerTrack 60 will automatically be updated when the Room Device is upgraded or downgraded. The camera firmware should share the same hash as the current software installed on the Room Device. 

<table  width="100%">
	<tr>
		<th><b>Room Device</b></th><th><b>Camera</b></th><th><b>Comments</b></th>
	</tr>
	<tr>
		<td rowspan="4">Cisco Webex Codec Pro</td> <td>Cisco TelePresence Precision 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Cisco Webex Quad Camera</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Cisco TelePresence SpeakerTrack 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Sony SRG-120DH<br>Sony EVI-120DH</td> <td>Pairing over IP and basic usage with pan tilt and zoom functionality is supported, Camera firmware update is not supported. </td> 
	</tr>
	<tr>
		<td rowspan="4">Cisco Webex Room Codec Plus</td> <td>Cisco TelePresence Precision 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Sony SRG-120DH<br>Sony EVI-120DH</td> <td>Pairing over IP and basic usage with pan tilt and zoom functionality is supported, Camera firmware update is not supported.</td> 
	</tr>
	<tr>
		<td>Cisco Webex Quad Camera</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Cisco TelePresence SpeakerTrack 60</td> <td>Full support</td> 
	</tr>
</table>

**Third party cameras**

Third-party and older cameras may work with our Integration Room Devices but this is not tested and functionality cannot be guaranteed. TAC support may be rejected or limited. 

### Cisco recommended screens for best interoperability

Cisco recommends using the following LG and Samsung Digital Signage screens together with Cisco Webex Room Series and other room devices for the best visual experience and verified CEC 2.0 compatibility. 

<table  width="100%">
	<tr>
		<th><b>LG screens</b></th>
	<tr>
		<td><b><a href="https://www.lg.com/global/business/information-display/digital-signage/lg-49UH5C">49” UHD (49UH5C)</a><br>

<a href="https://www.lg.com/global/business/information-display/digital-signage/lg-55UH5C" target="_blank">55” UHD (55UH5C)</a><br>

<a href="https://www.lg.com/global/business/information-display/digital-signage/lg-65UH5C" target="_blank">65” UHD (65UH5C)</a><br>

<a href="https://www.lg.com/global/business/information-display/digital-signage/lg-75UH5C" target="_blank">75” UHD (75UH5C)</a><br>

<a href="https://www.lg.com/global/business/information-display/digital-signage/lg-86UH5C" target="_blank">86” UHD (86UH5C)</a><br>

<a href="https://www.lg.com/global/business/information-display/digital-signage/lg-98LS95D" target="_blank">98” UHD (98UH5C)</a></b></td> 
	</tr>
	<tr>
		<th><b>Samsung Screens</b></th>
	</tr>
	<tr>
		<td><b><a href="https://displaysolutions.samsung.com/digital-signage/detail/1269/QM43N" target="_blank">QMN Series (43”,49”,55”,65”,75”)</a><br>

<a href="https://displaysolutions.samsung.com/digital-signage/detail/1144/QM49H" target="_blank">QMH Series (49”,55”,65”)</a><br>

<a href="https://displaysolutions.samsung.com/digital-signage/detail/1274/QB43N" target="_blank">QBN Series (43”,49”,55”,65”,75”)</a><br>

<a href="https://displaysolutions.samsung.com/digital-signage/detail/1205/QB65H" target="_blank">QBH Series (65”,75”)</a></b></td> 
	</tr>
</table>

**HDMI Cable quality**<br>
Cisco recommends use of high-quality HDMI 2.0 certified cables. Lower quality cables may work but may also have an impact on the image quality. 

If you experience problems and do not have access to high quality cables, try using shorter HDMI cables. 

## xAPI Changes 
We recommend endpoint configuration through the web interface and not from the xAPI command line.

The admin user has access to only a subset of relevant commands and configuration from the xAPI. The admin user can fully manage the system from the web interface where all the configurations are available. The "remotesupport" user has access to the full list of xAPI commands when utilized (requires TAC engagement). 

Specific xAPI changes are not published in the release notes. Please refer to the Cisco API Reference Guides for the integrator products at the following locations:

Cisco Webex Room Series: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html

Cisco Webex Boards: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-board/products-command-reference-list.html

Please also visit https://roomos.cisco.com for a great overview of the xAPI and other resources. 

## Hardware revision and software dependencies

Due to occasional updates to hardware components, there can be constraints on running older software on newly manufactured Room Devices.

To identify a Room Device compatibility level, you can access the web interface of the Room Device and click on Settings > Statuses. Scroll down to the compatibility level on this page. The below tables can be used to identify software constraints based on the compatibility level of your endpoint.  
Downgrading to an unsupported software version will fail. 
The latest software release is backward compatible with previous hardware revisions.

Note: When "all" is mentioned as the minimum version it is referring to all software versions of RoomOS 10 that is or has been released on https://www.cisco.com.

### Cisco Webex Room Series software compatibility matrix

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 10</th>
	</tr>
	<tr>
		<td>Cisco Webex Room Kit	</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Codec Plus	</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Room 55 Dual</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Room 70S/70D</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Webex Codec Pro</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Webex Room 70/70D G2</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Webex Room Kit Mini</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Webex Room USB	</td> 
		<td>0</td> <td>All</td>
	</tr>
</table>

### Cisco Webex Board Series Software Compatibility Matrix 

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 10</th>
	</tr>
	<tr>
		<td>Cisco Webex Board 55	</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Board 70	</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Board 55S</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Board 70S</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Webex Board 85S</td> 
		<td>0</td> <td>All</td>
	</tr>
</table>

### Cisco Webex Desk Series Software Compatibility Matrix 

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 10</th>
	</tr>
	<tr>
		<td>Cisco Webex Desk Pro</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Desk Limited Edition</td> 
		<td>0</td> <td>All</td> 
	</tr>
</table>

### Cisco Peripheral Software Compatibility Matrix 

Cisco peripheral software compatibility refers to touch devices and cameras that are requesting software from the Room Device. Some of the peripherals may require a higher software version than the Room Device is currently running. 

**Touch devices**

If you see an error on the touch screen about the software not being compatible with the current software, please upgrade the Room Device software to the latest available version and try again.

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 10</th>
	</tr>
	<tr>
		<td>Cisco Touch 10</td> 
		<td>102300-3<br>102310-0<br>102310-1</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Webex Room Navigator</td> 
		<td>101864-0<br>101864-1</td> <td>All</td> 
	</tr>
</table>

**Cameras**

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 10</th>
	</tr>
	<tr>
		<td>Cisco Webex Quad Camera</td> 
		<td>73-100746-0<br>73-100746-1</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco TelePresence Precision 60</td> 
		<td>2018/07 and earlier<br>2018/08 and later</td> <td>All</td> 
	</tr>	
</table>

**Notes for Cisco Webex Quad Camera**

Systems that support Quad Camera are Cisco Webex Codec Pro, Codec Plus, Room 70 and Room 70 G2 (single / dual).
Hardware revisions of the Quad Camera can be identified using xStatus. 

**Example:**
```
xStatus: Peripherals ConnectedDevice XXXX HardwareInfo: "73-100746-1".
```
 
**Notes for Cisco TelePresence Precision 60**

Systems that support Cisco TelePresence Precision 60 with RoomOS 10 is Cisco Webex Codec Pro, Codec Plus, Room 70 and Room 70 G2 (single / dual).

New hardware revisions of the Cisco TelePresence Precision 60 camera are identified by production date printed on a sticker underneath the base. If there no sticker is present and you still see an error message on screen about the camera not being compatible with the current software version, please upgrade the room device to the latest software. 

## Cisco Terms of Service

Your use of Cisco software and cloud services are subject to these [terms and conditions](https://www.cisco.com/c/en/us/about/legal/cloud-and-software.html)

Your use of Cisco APIs is subject to the [Cisco Webex Developer Terms of Service](https://developer.webex.com/terms-of-service)

### Permitted Commercial Use for Scheduled Meeting Join Experience
The following use case requires separate permission for commercial use: 

Providing a scheduled meeting join experience like one button to push. 

This includes use of any API that updates the device with calendar data from an external source to provide this functionality including ´xCommand Bookings Put´ or previous private API’s such as ´bookingsputxml´ In addition, using other APIs to accomplish the same functionality would also require permission for commercial use.

If you are providing a Scheduled Meeting Join Experience you either must comply with the below permitted commercial use terms or it must be for non-commercial use. Non-commercial use is defined as being solely for your internal business operations only and not for any activities that involve you using the API as part of or in furtherance of an income-generating service or product, whether directly or indirectly. 

Any use to provide a Scheduled Meeting Join Experience that does not qualify under non-commercial use requires separate permission from Cisco. 
Cisco reserves the right to revoke your license to use our API if, in our sole discretion, we deem that your use is for unauthorized commercial purposes or otherwise violates the Webex Developer Terms of Service. 

Please contact us at <a mailto="devsupport@webex.com">devsupport@webex.com</a> if you have any questions about whether your intended use of the API is permitted, or to inquire about obtaining permission.  

### Webex Certified and Webex Compatible vendors 

To view a list of Webex Certified and Webex Compatible vendors, please visit: https://cs.co/certifiedvendors 

<hr>

THE SPECIFICATIONS AND INFORMATION REGARDING THE PRODUCTS IN THIS MANUAL ARE SUBJECT TO CHANGE WITHOUT NOTICE. ALL STATEMENTS, INFORMATION, AND RECOMMENDATIONS IN THIS MANUAL ARE BELIEVED TO BE ACCURATE BUT ARE PRESENTED WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. USERS MUST TAKE FULL RESPONSIBILITY FOR THEIR APPLICATION OF ANY PRODUCTS.

THE SOFTWARE LICENSE AND LIMITED WARRANTY FOR THE ACCOMPANYING PRODUCT ARE SET FORTH IN THE INFORMATION PACKET THAT SHIPPED WITH THE PRODUCT AND ARE INCORPORATED HEREIN BY THIS REFERENCE. IF YOU ARE UNABLE TO LOCATE THE SOFTWARE LICENSE OR LIMITED WARRANTY, CONTACT YOUR CISCO REPRESENTATIVE FOR A COPY.

The Cisco implementation of TCP header compression is an adaptation of a program developed by the University of California, Berkeley (UCB) as part of UCB’s public domain version of the UNIX operating system. All rights reserved. Copyright © 1981, Regents of the University of California. 

NOTWITHSTANDING ANY OTHER WARRANTY HEREIN, ALL DOCUMENT FILES AND SOFTWARE OF THESE SUPPLIERS ARE PROVIDED “AS IS” WITH ALL FAULTS. CISCO AND THE ABOVE-NAMED SUPPLIERS DISCLAIM ALL WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OR ARISING FROM A COURSE OF DEALING, USAGE, OR TRADE PRACTICE. 

IN NO EVENT SHALL CISCO OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, SPECIAL, CONSEQUENTIAL, OR INCIDENTAL DAMAGES, INCLUDING, WITHOUT LIMITATION, LOST PROFITS OR LOSS OR DAMAGE TO DATA ARISING OUT OF THE USE OR INABILITY TO USE THIS MANUAL, EVEN IF CISCO OR ITS SUPPLIERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

Any Internet Protocol (IP) addresses and phone numbers used in this document are not intended to be actual addresses and phone numbers. Any examples, command display output, network topology diagrams, and other figures included in the document are shown for illustrative purposes only. Any use of actual IP addresses or phone numbers in illustrative content is unintentional and coincidental. 

All printed copies and duplicate soft copies are considered un-Controlled copies and the original on-line version should be referred to for latest version. 

Cisco has more than 200 offices worldwide. Addresses, phone numbers, and fax numbers are listed on the Cisco website at www.cisco.com/go/offices.

Cisco and the Cisco logo are trademarks or registered trademarks of Cisco and/or its affiliates in the U.S. and other countries. To view a list of Cisco trademarks, go to this URL: www.cisco.com/go/trademarks. Third-party trademarks mentioned are the property of their respective owners. The use of the word partner does not imply a partnership relationship between Cisco and any other company. (1110R)
