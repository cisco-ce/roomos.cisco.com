<img src="/doc/images/releases/Cisco_Logo_no_TM_Midnight_Blue-RGB.png" style="border: none; height: 100px; width: 200px;"><br><br>
# RoomOS 26
# Release notes
---
D15563.01 - March 2026

## Document revision history

<table class=''>
	<tr>
		<th>Revision</th>
		<th>Date</th> 
		<th>Description</th>
	</tr>
	<tr>
		<td>01</td> 
		<td>March 13, 2026</td> 
		<td>
			Release of <a href='#26.2' title='Jump to section'>RoomOS 26.2.2.2</a>, Major<br>
		</td>
	</tr>
</table>

## Introduction to Cisco RoomOS 26 <a name='intro'></a>

This release note describes new software features and capabilities included in RoomOS 26 for **on-premises deployment**. RoomOS 26 is supported by the following Cisco collaboration devices:

<table width="100%">
	<tr>
		<th>
			<b>Cisco Room Series</b>
		</th>
	</tr>
	<tr>
		<td>
			Cisco Room Kit Pro, Room Kit EQ, Room Kit EQX, Room Bar, Room Bar Pro<br> 
			Cisco Codec Pro, Codec EQ<br>
			Cisco Room 70 G2 (Single/Dual)<br>
			Cisco Room Panorama, Room 70 Panorama<br>
			Cisco Room Navigator (Wall and Table Standalone)
		</td>
	</tr>
	<tr>
		<th>
			<b>Cisco Board Series</b>
		</th>
	</tr>
	<tr>
		<td>
			Cisco Board Pro 55 and 75<br>
			Cisco Board Pro 55 and 75 G2
		</td>
	</tr>
	<tr>
		<th>
			<b>Cisco Desk Series</b>
		</th>
	</tr>
	<tr>
		<td>
			Cisco Desk, Desk Pro, Desk Mini
		</td>
	</tr>
</table>

Note: If you attempt to upgrade an unsupported device to RoomOS 26.x.x.x, it will not damage the device, but the upgrade will fail. 

The software described in this document is released to [https://www.cisco.com](https://software.cisco.com) for on-premises deployment. If you register a Cisco Room Device to Webex or another supported cloud service, you will be upgraded to the latest available RoomOS cloud version for that service. RoomOS cloud software is not supported for on-premises deployment unless you are linked to **Webex Edge for Devices with Cloud Software Management enabled**.

You can tell the difference between a cloud and on-premises RoomOS version by looking at the third version number. For example: 

* 26.X.**1**.x = Cloud 
* 26.X.**X > 1**.x = On-premises 

26.2.**1**.x = Cloud
26.2.**4**.x = On-premises

**RoomOS 26 is based on RoomOS 11 but has major changes**

This means that the first release of RoomOS 26 inherits most of the same underlying features and functionality as seen in RoomOS 11. The big difference is that RoomOS 26 comes with changes to the user interface and is only supported by newer hardware. 

RoomOS 26 can be downloaded [here](https://software.cisco.com).

## General notes and warnings for RoomOS 26
Please read this before upgrading to RoomOS 26.

**Provisioning Mode "VCS" is obsolete**<br>
The setting "xConfiguration Provisioning Mode: VCS" is deprecated in RoomOS 26 

**Tips button is removed**<br>
The feature providing the Tips button has been removed and deprecated. 

**Several hardware products do not support RoomOS 26 and require RoomOS 11**<br>
Any device running s53200 software, such as Cisco Room Kit, Room Kit Plus, Room Kit Mini, Room 55, Room 55 Dual, Room 70 (Single and Dual), Board 55/70, Board 55S/70S/85S, and Room USB.

It is important to note that previously supported hardware combinations involving peripherals and cameras, such as Touch 10 and SpeakerTrack 60 / Precision 60 together with Cisco Room Kit Pro, Room 70 G2, Room Panorama, or Room 70 Panorama, are not supported in standard RoomOS 26.  
You can continue to use these setups on RoomOS 11. However, to upgrade to RoomOS 26, you need a supported peripheral combination (Cisco Room Navigator instead of Touch 10, and Cisco Quad Camera or Webex PTZ 4K instead of SpeakerTrack 60 / Precision 60).  
Note: SpeakerTrack 60 has limited support in Microsoft Teams Rooms (MTR) scenarios on RoomOS 26.

For more information about End of Life of Cisco RoomOS Devices, please find a detailed overview here: [End of Support for RoomOS Devices](https://help.webex.com/en-us/article/n9qmylfb/End-of-support-for-RoomOS-devices)

<br><br>  

<a name='26.2'></a>

# Release summary for RoomOS 26.2

## Notes and warnings for this software release

### RoomOS 26.2

This release builds on the previous major version of RoomOS (RoomOS 11). For features released in earlier RoomOS versions, refer to the respective release notes. RoomOS 26 inherits the same core feature set as RoomOS 11 and continues that software stream with major UI and hardware support changes. 

<a name="limitations-roomos26"></a>

**Current known limitations**

No noteworthy limitations to mention at this time.

## RoomOS 26.2.2.2

* [RoomOS 26 Visual Changes](#26222-1)
* [Side panel design changes](#26222-2)
* [Meeting Zone - Improvements](#26222-3)
* [Grouping of whiteboard content](#26222-4)
* [Display ultrasound signal levels in the VuMeter](#26222-5)
* [Force Active Pen to always draw](#26222-6)
* [Deep sleep mode for Cisco Board Pro](#26222-7)
* [Wireless Touch Redirect for Miracast](#26222-8)
* [Dynamic Camera Mode](#26222-9)
* [DHCP sub options support for SCEP](#26222-10)
* [Support for 21:9 aspect ratio](#26222-11)
* [Auto-Lower a raised hand](#26222-12)
* [Support for Greek Language and text input](#26222-13)
* [Cameras Calibration Diagnostics tool for the cinematic view](#26222-14)
* [Desk Specific ULP Model](#26222-15)
* [Audio Exclusion Zone](#26222-16)

* <b>Bug fixes</b>
    * [Click here for a list of resolved defects in RoomOS 26.2.2.2](https://bst.cloudapps.cisco.com/bugsearch?pf=prdNm&kw=*&rls=26.2.2&bt=custV&sts=fd&sb=fr)

<br><br>

# RoomOS 26.2.2.2 feature descriptions 

<a name='26222-1'></a>

## RoomOS 26 Visual Changes

RoomOS 26 introduces a refreshed visual identity across the user interface. The update modernizes the look and feel while preserving familiar workflows.

<a name='26222-2'></a>

## Side panel design changes

The side panel has been redesigned on both Navigator and Desk/Board devices. The new design improves visual consistency and makes common controls easier to find and use.

<a name='26222-3'></a>

## Meeting Zone - Improvements

Meeting Zone setup has been improved with a more flexible configuration experience. Administrators can now show or hide the Meeting Zone overlay on the room display, zoom in and out during setup, and update the room layout shape more easily.

<a name='26222-4'></a>

## Grouping of whiteboard content

Whiteboarding now supports intuitive grouping behavior when objects are placed on top of each other. This makes it easier to move or delete related content as a group and improves editing efficiency on complex canvases.

<a name='26222-5'></a>

## Display ultrasound signal levels in the VuMeter

The VuMeter in the web interface can now be used to inspect ultrasound signal levels in addition to regular audio levels. This is useful for diagnostics, especially when troubleshooting ultrasound sources that do not originate from the codec.

<a name='26222-6'></a>

## Force Active Pen to always draw

With Active Pen Always Draw enabled, the active pen is prioritized for inking while finger-touch input is used for selection. This makes whiteboarding interactions more predictable and reduces accidental mode switching during annotation.

<a name='26222-7'></a>

## Deep sleep mode for Cisco Board Pro

Cisco Board Pro introduces a new Deep Sleep standby mode focused on improved power savings. This mode is designed to reduce energy consumption when the device is idle. 

<a name='26222-8'></a>

## Wireless Touch Redirect for Miracast

Wireless Touch Redirect for Miracast allows users to control a Miracast sender device from the RoomOS touch display. The feature uses Wi-Fi Display UIBC (User Input Back Channel) to send touch input back to supported sender devices.

<a name='26222-9'></a>

## Dynamic Camera Mode

Dynamic Camera Mode extends framing behavior to better support larger in-room groups. The feature adapts framing across one or two rows, for example one row for smaller groups and two rows for larger groups.

<a name='26222-10'></a>

## DHCP sub options support for SCEP

RoomOS now supports SCEP profiles delivered through DHCP sub-options, providing the same deployment method as PhoneOS for consistent zero-touch provisioning across phones and room devices. Sub-options 11, 12, 13, and 14 are used for simple SCEP enrollment, and when 802.1X is enabled, the required Ethernet settings are applied automatically after reboot.

<a name='26222-11'></a>

## Support for 21:9 aspect ratio

RoomOS now supports 21:9 output resolution in single-screen room scenarios. Application-level behavior may vary until each app fully adopts the additional display area, and mixed-screen combinations are not part of this release scope.

<a name='26222-12'></a>

## Auto-Lower a raised hand

Auto-Lower a Raised Hand helps keep meeting controls accurate by reducing stale raised-hand states after participants have contributed. This improves meeting flow for hosts and participants by minimizing manual clean-up of hand status.

<a name='26222-13'></a>

## Support for Greek Language and text input

RoomOS now includes support for Greek as a user interface language and for Greek text input. This improves localization support for Greek-speaking users and deployments.

<a name='26222-14'></a>

## Cameras Calibration Diagnostics tool for the cinematic view

This release adds a Cameras Calibration Diagnostics tool for cinematic view scenarios. The tool helps administrators validate camera calibration behavior and troubleshoot setup issues more efficiently.

<a name='26222-15'></a>

## Desk Specific ULP Model

This update introduces a Desk-specific ULP model to improve noise reduction behavior on Desk series devices. The result is cleaner audio pickup in typical desk and personal workspace conditions.

<a name='26222-16'></a>

## Audio Exclusion Zone

Audio Exclusion Zone enables administrators to attenuate pickup from selected areas outside the intended meeting space. This improves clarity and privacy by reducing distracting background audio; initial availability is targeted for Ceiling Microphone Pro deployments.

<br><br>
<a name='software-upgrade'></a>

# Software upgrade and downgrade

## Upgrading software on a Cisco Room Device 

Before performing an upgrade or downgrade, verify product compatibility and minimum supported software for your device. Use the compatibility matrices in this document as reference.

RoomOS 26 software packages use `.k4.cop.sha512` signatures. For older step-upgrade scenarios, the same package handling rules introduced in RoomOS 11 still apply:

* For upgrades using TMS, xAPI (SSH), or the device web interface, the endpoint itself must be able to unpack the `.k4.cop.sha512` package.
* For very old starting points, a step upgrade to RoomOS 10.15.x or later may still be required before proceeding. Please refer to previous documentation for the respective versions. 
* UCM can still be used as a bridging path because UCM handles package unpacking before distribution.

To illustrate the upgrade pattern:

<table  width="100%">
	<tr>
		<th><b>From</b></th>
		<th><b>To</b></th>
		<th><b>UCM</b></th>
		<th><b>TMS</b></th>
		<th><b>Web</b></th>
		<th><b>SSH</b></th>
	</tr>
	<tr>
		<td><b>11.x</b></td> 
		<td><b>26.x</b></td> 
		<td><b>YES</b></td>
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
	</tr>
	<tr>
		<td><b>>=10.15.x</b></td> 
		<td><b>26.x (step upgrade may be required)</b></td> 
		<td><b>YES</b></td>
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
	</tr>
	<tr>
		<td><b><=10.11.x</b></td> 
		<td><b>26.x (step upgrade required)</b></td> 
		<td><b>YES</b></td>
		<td><b>NO</b></td> 
		<td><b>NO</b></td> 
		<td><b>NO</b></td> 
	</tr>
</table>

Before you start, make sure you download software for the correct platform.

<table  width="100%">
	<tr>
		<th><b>Device</b></th><th><b>Software platform identifier</b></th> <th><b>Latest available RoomOS 26 software</b></th>
	</tr>
	<tr>
		<td>Cisco Room Kit Pro, Room Kit EQ, Room Kit EQX, Room Bar, Room Bar Pro, Codec Pro, Codec EQ, Room 70 G2, Room Panorama, Room 70 Panorama, Desk, Desk Pro, Desk Mini, Cisco Board Pro 55 and 75, Cisco Board Pro 55 and 75 G2</td> <td><b>s53300</b></td> <td><b>cmterm-s53300ce26_2_2_2.k4.cop.sha512</b>*<br><b>cmterm-s53300-mtr-ce26_2_2_2.k4.cop.sha512</b>***</td>
	</tr>
	<tr>
		<td>Cisco Room Navigator (standalone)</td> <td><b>s53350</b></td> <td><b>s53350ce26_2_2_2.pkg</b><br><b>cmterm-s53350-mtp-ce26_2_2_2.k4.cop.sha512</b></td>
	</tr>
	<tr>
		<td>All RoomOS 26-supported products</td> <td><b>N/A</b></td> <td><b>cmterm-ce26_2_2_2.k4.cop.sha512</b></td>
	</tr>
	<tr>
		<th colspan="3"><a href="https://software.cisco.com/download/home/283611944?catid=280789323" target="_blank">Follow this link</a> to find and download software for the device you are about to upgrade.</th>
	</tr>
</table>

*** Contains the MTR module, you can upgrade using this package in order to get the option to select between RoomOS and MTR

## MTR version contained in the MTR cop file

### RoomOS 26.2
cmterm-s53300-mtr-ce26_2_2_2.k4.cop.sha512
- MTR: 1449/1.0.96.2025341701
cmterm-s53350-mtp-ce26_2_2_2.k4.cop.sha512
- MTP: 1449/1.0.97.2025364207

The "All products" cop file (super cop) must only be installed to a Unified CM. This package provides software to all supported video models and peripherals, so you only have to install one cop file if you have multiple products. 

**WARNING: Do not delete ".pkg" files that are stated to be "Not in use" on Unified CM. The devices may be pointed to a loads file that tells it what package to use for the different peripherals. UCM is not aware that the ".pkg" is in use. By deleting peripheral or device software the device will fail to upgrade or fail to upgrade its peripherals.**

### Software integrity verification after download

To verify the integrity of the software image you have downloaded from cisco.com, you can calculate a SHA512 checksum and verify that it matches with the one listed on the software download page. To find the checksum, hover the mouse pointer over the software image you have downloaded. 
 
At the bottom you find the SHA512 checksum, if you do not see the whole checksum you can expand it by pressing the "..." at the end. 
To calculate a SHA512 checksum on your local desktop please see below.

#### SHA512 checksum calculation command examples	

**Microsoft Windows**

Open a command line window and type the following command:
```
> certutil.exe -hashfile filename.k4.cop.sha512 SHA512
```

**macOS**	

Open a terminal window and type the following command:
```
$ shasum -a 512 filename.k4.cop.sha512
```

**Linux**	

Open a terminal window and type the following command:
```
$ sha512sum filename.k4.cop.sha512
Or
$ shasum -a 512 filename.k4.cop.sha512
```

If the SHA512 checksum matches, there is a high level of certainty that no one has tampered with the software image or the image has not been corrupted during download. 

If the SHA512 checksum does not match, we advise you to not attempt upgrading any systems with the software image. Download the software again and verify the SHA512 checksum again. If there is a constant mismatch, please open a case with the Cisco Technical Assistance Center.

Note:
You should always use the `.cop` file when upgrading the devices listed above. Upgrading using `.pkg` on these devices can leave the device unable to upgrade peripherals, and you may see software mismatch errors after upgrade. If this happens, run the upgrade again using the `.cop` file. Cisco releases `.cop` files for RoomOS 11 and later, including RoomOS 26. 

**Upgrade using the web interface**

Access the web interface of the device on: 

`https://codecIP/web/software`

Upload the correct software package by following the instructions on the web page. The upgrade will start, and the device will reboot with the new software. 

**If you are on an older software version such as RoomOS 10.1.x or below, refer to the [RoomOS 10 release note](https://roomos.cisco.com/print/WhatsNew/ReleaseNotesRoomOS_10) for step-upgrade guidance before proceeding toward RoomOS 26.** 

**Upgrade using UCM**

Install the appropriate “xx.k4.cop.sha512” file containing the software for the device platform you wish to upgrade according to the cop installation process on UCM. 

Go into the device default loads on the UCM administration page and make sure the platform has populated the correct filename. 

For Cisco Room devices on s53300, the load file name should not contain any extension at all, for example:

Platform-specific packages:<br>
s53300ce26_X_X_X.pkg (**wrong**)<br>
s53300ce26_X_X_X (**correct**)

All products (containing software for all supported products):<br>
ce26_X_X_X (**correct**)

**Upgrade using TMS**

Upload the software to TMS according to the TMS instructions of software upgrade. 

Note: There is a known limitation with older TMS versions. The affected versions do not accept the sha512 extension of the RoomOS software. Please upgrade to the latest TMS software version or refer to the TMS documentation for information about the minimum version you need to use.

Also note that devices may need to run RoomOS 10.15.x or above as an intermediate step for successful upgrades via TMS when starting from very old versions. Refer to documentation for the version in question. 

**Upgrade using the xAPI**
 
If none of the above methods are applicable, you can use an existing HTTP server or setup a HTTP server that is reachable by the device(s) you want to upgrade. 

Log into the xAPI CLI using SSH or Serial. Type the following command to initiate the upgrade:

```
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourHTTPserver/path/to/file
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourUCMserver:6970/file
xCommand SystemUnit SoftwareUpgrade URL: http(s)://yourTMSserver/public/path/to/file
```

/path/to/file is replaced with the location of the xx.k4.cop.sha512 file. 

The device will download the software package and upgrade without warning. If you want the user to be warned and postpone the upgrade, add the parameter: `“Forced: False”` to the command as the default is `“Forced: True”`.

If you are upgrading to RoomOS 26 using this method from a very old starting point, make sure the device is on RoomOS 11.17.x or later as an intermediate step first. 

### Downgrading

Downgrading is performed the same way as upgrading, using a software version lower than the one currently running. Not all products are compatible with all software versions. Verify the minimum supported software in the [compatibility matrix](#cisco-room-series-software-compatibility-matrix) before downgrading or upgrading your product. 

If you plan to downgrade across major versions (for example from RoomOS 26 to RoomOS 11), verify in the target release note that your device compatibility level is supported in that version. This information can often be found in the respective version release notes. 

<a name="deferral-notes"></a>

## Software deferral policy 

A software version is deferred when we find critical issues within the software. This is to prevent users from downloading and installing affected software versions. Replacement software will always be in place before a software version is deferred.

Older software versions will be deferred on a regular basis from the download section on https://www.cisco.com to avoid providing potentially vulnerable software after security fixes. As a general rule, you will be able to download the latest release and the version before it. Older software versions will be removed from cisco.com regularly. Cisco always recommends using the latest available software. 

**Example:**

**RoomOS 26.X.Y.z = Major.Minor.Patch.Buildnumber**

For RoomOS versions provided by the Webex cloud, "Y" will always be 1 (26.X.**1**.z), while a RoomOS version released to cisco.com will have a number higher than 1 and increment by one for each patch release. 

If, for example, RoomOS 26.1.2.x and RoomOS 26.2.2.x are released and RoomOS 26.3.2.x becomes available, RoomOS 26.1.2.x may be removed as part of the deferral policy. A minor software version is typically supported for two release cycles (6-9 months).

Cisco supports the latest minor release (for example, RoomOS 26.3.1.x) and the previous minor release (for example, RoomOS 26.2.2.x) per product as a general rule. 

Exceptions are made if supported hardware or particular feature deployments are depending on a major release. Deferral of older maintenance releases still applies. 

The RoomOS major version will follow the year (RoomOS 26 equals Year 20**26**) and will change each year going forward. 

## Deferred RoomOS 26 software
<table width="100%">
	<tr>
		<th style="background-color: gray;"><b>Deferral date</b></th>
		<th style="background-color: gray;"><b>Versions</b></th>
		<th style="background-color: gray;"><b>Note</b></th>
	</tr>
	<tr>
		<td>N/A</td>
		<td>None</td>
		<td>No RoomOS 26 software versions have been deferred yet.</td>
	</tr>
</table>

## Open and resolved caveats in RoomOS 26 <a name='defects'></a>

### Using the Bug Search Tool

You can use the Bug Search Tool to find information about caveats (bugs) for this release, including a description of the problems and available workarounds. The Bug Search Tool lists both open and resolved caveats. No subset of open or resolved bugs will be listed in the release notes unless deemed relevant for a particular software version. 

A pre-defined link will provide the correct list of all open or resolved bugs. Please note that the "Series/Model" listed in the pre-defined search is universal and will list all relevant bugs relating to all products that runs RoomOS Software.

Please refer to the release summary for a link to open and resolved bugs under the specific release.

To use the Bug Search Tool, follow these steps:

* **Step 1** Access the Bug Search Tool by navigating to https://bst.cloudapps.cisco.com/bugsearch/
* **Step 2** Log in with your Cisco.com user ID and password
* **Step 3** To look for information about a specific problem, enter the bug ID number in the ‘Search for bug ID’ field, then click ‘Go’

## Known limitations and advisories for RoomOS 26

### Resource consumption

**Extended Logging**

Extended logging is a troubleshooting feature that consumes significant system resources when enabled. In production environments, this can impact call quality and, in rare cases, lead to instability. Enable this only for short troubleshooting windows, for example when reproducing issues together with Cisco TAC.

**Note on IP Filtering Capabilities**

Room devices support IP filtering for SSH, HTTP, and HTTPS to improve administrative access control. Other services, such as SIP and H.323, do not support IP filtering. We recommend deploying these services in secure network environments and using external security controls as needed to reduce exposure to denial-of-service (DoS) attacks.

**Network Congestion**

Anything that degrades network performance can affect voice and video quality and, in some cases, can cause a call to drop. Sources of network degradation can include, but are not limited to, the following activities:

* Administrative tasks such as an internal port scan or security scan
* Attacks that occur on your network, such as a denial-of-service attack

To reduce or eliminate any adverse effects to conferences, schedule any administrative network tasks during a time when the Cisco Room Device is not being used, or exclude the Cisco Room systems from the testing.

### Wi-Fi connection

Due to compliance regulations, 802.11d must be enabled on access points for the product to operate properly within 5725 MHz - 5875 MHz. Wi-Fi can be used as a flexible option, but Ethernet is always preferred for high performance.

**WPA-EAP**<br>
There is currently no diagnostic message for expired certificates

**CA Certificates**<br>
CA certificates must be uploaded per endpoint. You can use xAPI to perform manual or automated mass distribution of certificates to devices. Note that the endpoint must be connected to a wired or WPA2-PSK wireless network to upload a certificate before attempting to connect to a WPA-EAP-enabled network that requires a CA certificate.

**Web Engine**<br>

Web Engine supports 1080p and above. Full-screen web views at 720p are not supported.

**Network-paired Cisco Room Navigator is not supported when the video system is connected through Wi-Fi**<br>
Even if this connectivity works, operational issues may occur if Wi-Fi connectivity is lost, for example when the Wi-Fi password changes. To reconfigure Wi-Fi, you may need direct pairing between the video system and the Cisco Room Navigator before reconnecting the Navigator over the network. When the video system uses Wi-Fi connectivity, Cisco recommends direct pairing of the Room Navigator.  

### Cisco Webex and Cisco Webex Edge for Devices 

**Pairing Cisco Room Navigator**<br>
To activate a device on Webex with a LAN-paired Cisco Room Navigator panel, pair the panel before activating the system on Webex.

If the device is already registered to Webex and local device user accounts are locked, you can initiate PIN pairing of the panel from Control Hub.

We always recommend that you upgrade to the latest available RoomOS version before activating your device on Webex. 

**Encryption is required to activate a Room Device on Webex**<br>
A Room Device with hardware encryption support is required to activate the device on Webex and Webex Edge for Devices. Cisco Room Devices with the K7 flag in the device part number (visible through xStatus) do not support encryption and cannot be registered or linked to Webex. Encryption support is hardware-based and not controlled through software option keys.

Devices flagged with K9 in the part number support encryption.

You can verify encryption capability in the web interface under option keys. This capability cannot be added or removed because it is tied to the hardware model (K7: no crypto, K9: crypto).

### Peripherals

<table width="100%">
	<tr>
		<th><b>Feature / equipment</b></th>
		<th><b>Limitations and advisories</b></th>
	</tr>
	<tr>
		<td>Unified CM</td> 
		<td>
			<b>H.323 and SIP consideration when provisioned by UCM</b><br>
When using UCM provisioning, the endpoint cannot register to a VCS (SIP or H.323) at the same time. This use case is not supported. When UCM provisioning is active, H.323 mode is disabled. We recommend migrating from H.323 to SIP.
Please note that being registered to UCM without having provisioning mode set to “CUCM” is not a supported scenario. 
<br><br>	
<b>NTP</b><br>
The collaboration endpoints do not support broadcast NTP servers from UCM, unicast only. 
		</td> 
	</tr>
	<tr>
		<td>SIP / H323</td>
		<td>
			<b>SIP Listen Port diagnostics warning</b><br>
			When registered to a SIP proxy and SIP Listen Port is enabled, a diagnostic warning is displayed in the web interface: “SIPListenPortAndRegistration”. We recommend that SIP Listen Port is turned off when registered to a SIP proxy.<br><br>
			<b>Dual protocol enablement for SIP and H323 is not supported</b><br>
			Having SIP and H323 enabled at the same time will generate a warning message on-screen indicating that having both protocols enabled (SIP and H323) is not supported. This message cannot be removed unless you disable one of the protocols. Having both protocols enabled and using them at the same time in different scenarios may introduce unexpected behavior. TAC will not support call scenarios where both protocols are enabled. 
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
		<td>SNMP</td> <td>The collaboration endpoint software is configured with default SNMP community strings. SNMP community strings should be treated as credentials and must be changed after initial configuration. RoomOS 26 provides basic support for SNMPv2 and SNMPv3 with default MIB only.</td>
	</tr>
	<tr>
		<td>Security</td> <td>Set a passphrase during initial device setup. On first login, you are also prompted to change the password. <b>Note:</b> This can affect automated provisioning workflows that rely on immediate login and configuration push, so automation should handle the password-change step explicitly.</td>
	</tr>
	<tr>
		<td>Startup Wizard</td> <td>While Startup Wizard is active, the system runs with Do Not Disturb (DND) enabled by design. DND cannot be turned off until Startup Wizard is completed. To remove Startup Wizard, complete it normally or set <code>RunStartupWizard</code> to <code>False</code>. If Startup Wizard is active, a diagnostics message appears in the web interface with a shortcut to that configuration.</td>
	</tr>
	<tr>
		<td>Layout controls in Webex meetings</td> <td>
<b>Layout control for on-premises devices in Webex Calls</b><br>
On-premises devices that are calling into Webex meetings will currently not have the same control options of the meeting that a Webex registered / linked device have. There are still some actions that are available through DTMF tones. Please visit https://help.webex.com/en-us/nli1uz4/DTMF-Commands-for-Video-Device-Enabled-Cisco-Webex-Meetings for a list of valid DTMF tones that can be sent to the Webex meeting to invoke certain actions. 
		</td>
		</tr>
	<tr>
		<td>Cisco Room Panorama</td> <td>
<b>Cisco Precision 60 camera</b><br>
Cisco Room Panorama does not support Precision 60 cameras. Please note this when upgrading a Room 70 into a Room 70 Panorama, in case you have one connected and want to keep using it.
		</td>
	</tr>
		<tr>
		<td>Encryption and Ciphers</td> <td>
<b>Supported Ciphers</b><br>
You can check which ciphers that the device supports for its different services (HTTPS Server, SIP TLS, Syslog TLS, HTTPS Client) by typing [xCommand Security Ciphers List](https://roomos.cisco.com/xapi/Command.Security.Ciphers.List/) in the xAPI. The supported ciphers may change between versions. 
		</td>
	</tr>	
</table>


## Interoperability for RoomOS 26
The interoperability section describes the equipment and software revisions that have been tested for interoperability with this release. Please note: The absence of a device or revision from this section does not imply a lack of interoperability.

<table  width="100%">
	<tr>
		<th><b>H323 gatekeepers / traversal servers</b></th><th><b>Minimum software</b></th>
		</tr>
	<tr>
		<td>Cisco Expressway C / E (VCS)</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<th colspan="2"><b>SIP registrars / proxy servers</b></th>
	</tr>
	<tr>
		<td>Cisco Expressway C / E (VCS)</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<td>Unified CM</td> <td><b>Latest version available</b><br>For device support, make sure you have the latest UCM device pack for your version installed.</td>
	</tr>
	<tr>
		<th colspan="2"><b>Conference bridge interoperability</b></th>
	</tr>
	<tr>
		<td>Cisco Meeting Server (CMS)</td> <td><b>Latest version available</b><br>For the latest conferencing features in CMS, the latest available software is always recommended.</td>
	</tr>
	<tr>
		<th colspan="2"><b>Management server interoperability</b></th>
	</tr>
	<tr>
		<td>TelePresence Management Suite</td> <td><b>Latest version available</b><br>Older versions of TMS do not support uploading software files for device upgrades.</td>	
	</tr>
</table>

## Camera firmware and support

Note: Camera firmware has parity with the version installed on the Room Device. Camera software for Cisco Quad Camera is automatically updated when the Room Device is upgraded or downgraded. Camera firmware should share the same hash as the software currently installed on the Room Device. 

<table  width="100%">
	<tr>
		<th><b>Room Device</b></th><th><b>Camera</b></th><th><b>Comments</b></th>
	</tr>
	<tr>
		<td rowspan="3" style="border-bottom: 1px solid black;">Cisco Codec Pro</td> <td>Cisco Quad Camera</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Webex PTZ 4K</td> <td>Full support</td> 
	</tr>
	<tr>
		<td style="border-bottom: 1px solid black;">Sony SRG-120DH<br>Sony EVI-120DH<br></td> 
		<td style="border-bottom: 1px solid black;">Pairing over IP and basic usage with pan, tilt, and zoom functionality are supported. Camera firmware updates are not supported.</td> 
	</tr>
	<tr>
		<td rowspan="3">Cisco Room Codec EQ</td> <td>Webex PTZ 4K</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Sony SRG-120DH<br>Sony EVI-120DH</td> <td>Pairing over IP and basic usage with pan, tilt, and zoom functionality are supported. Camera firmware updates are not supported.</td> 
	</tr>
	<tr>
		<td>Cisco Quad Camera</td> <td>Full support</td> 
	</tr>
</table>

**Third party cameras**

Third-party and older cameras may work with our integration room devices, but this is not tested and functionality cannot be guaranteed. TAC support may be rejected or limited. 

## Cisco collaboration certification program

Cisco collaboration devices partner ecosystem is built on our certification program to ensure that customers get the best experience out of their Cisco collaboration devices and make integration as seamless as possible when integrating with third-party technology.

[For more information, click here](https://help.webex.com/en-us/article/7sw4gab/Cisco-collaboration-devices-certification-program)

**HDMI Cable quality**<br>
Cisco recommends use of high-quality HDMI 2.0 certified cables. Lower quality cables may work but may also have an impact on the image quality. 

If you experience problems and do not have access to high-quality cables, try using shorter HDMI cables.

## xAPI Changes 
We recommend endpoint configuration through the web interface and not from the xAPI command line.

The admin user has access to only a subset of relevant commands and configuration from the xAPI. The admin user can fully manage the system from the web interface, where all configurations are available. The `remotesupport` user has access to the full list of xAPI commands when utilized (requires TAC engagement). 

Specific xAPI changes are not published in the release notes. Please refer to the Cisco API Reference Guides for the integrator products at the following locations:

Cisco Room Series: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html

Cisco Boards: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-board/products-command-reference-list.html

Please also visit https://roomos.cisco.com for a great overview of the xAPI and other resources. 

## Hardware revision and software dependencies

Due to occasional updates to hardware components, there can be constraints on running older software on newly manufactured Room Devices.

To identify a Room Device compatibility level, access the Room Device web interface and click Settings > Statuses. Scroll down to the compatibility level on this page. The tables below can be used to identify software constraints based on the compatibility level of your endpoint.  
Downgrading to an unsupported software version will fail. 
The latest software release is backward compatible with previous hardware revisions.

Note: RoomOS 26 currently supports all hardware revisions for the listed products.
Devices flagged with "NR" (No Radio) do not have Wi-Fi capability.

## Cisco Room Series software compatibility matrix

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 26</th>
	</tr>
	<tr>
		<td>Cisco Room Kit Pro</td>
		<td>All revisions</td> <td>26.2.2.2</td> 
	</tr>
	<tr>
		<td>Cisco Room Kit EQ</td> 
		<td>All revisions</td> <td>26.2.2.2</td> 
	</tr>
	<tr>
		<td>Cisco Room Kit EQX</td> 
		<td>All revisions</td> <td>26.2.2.2</td> 
	</tr>
	<tr>
		<td>Cisco Room Bar</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Room Bar Pro</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Room Navigator (Wall and Table Standalone)</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Codec Pro</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Codec EQ</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Room 70 G2 (Single/Dual)</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Room Panorama</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Room 70 Panorama</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
</table>

## Cisco Board Series Software Compatibility Matrix 

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 26</th>
	</tr>
	<tr>
		<td>Cisco Board Pro 55</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Board Pro 75</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Board Pro 55 and 75 G2</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
</table>

## Cisco Desk Series Software Compatibility Matrix <a name="compatibility-desk"></a>

<table width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 26</th>
	</tr>
	<tr>
		<td>Cisco Desk Pro</td> 
		<td>All revisions</td> <td>26.2.2.2</td> 
	</tr>
	<tr>
		<td>Cisco Desk</td> 
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
	<tr>
		<td>Cisco Desk Mini</td>
		<td>All revisions</td> <td>26.2.2.2</td>
	</tr>
</table>

## Cisco Peripheral Software Compatibility Matrix 

Cisco peripheral software compatibility refers to touch devices and cameras requesting software from the Room Device. Some peripherals may require a higher software version than the Room Device is currently running. 

**Touch devices**

If you see an error on the touch screen about the software not being compatible with the current software, please upgrade the Room Device software to the latest available version and try again.

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 26</th>
	</tr>
	<tr>
		<td>Cisco Room Navigator</td> 
		<td>All revisions</td> <td>26.2.2.2</td> 
	</tr>
</table>

## Cisco Terms of Service

Your use of Cisco software and cloud services are subject to these [terms and conditions](https://www.cisco.com/c/en/us/about/legal/cloud-and-software.html)

Your use of Cisco APIs is subject to the [Cisco Webex Developer Terms of Service](https://developer.webex.com/terms-of-service)

## Permitted Commercial Use for Scheduled Meeting Join Experience
The following use case requires separate permission for commercial use:

Providing a scheduled meeting join experience such as one button to push.

This includes use of any API that updates the device with calendar data from an external source to provide this functionality, including `xCommand Bookings Put` or previous private APIs such as `bookingsputxml`. In addition, using other APIs to accomplish the same functionality also requires permission for commercial use.

If you are providing a Scheduled Meeting Join Experience, you must either comply with the permitted commercial use terms below or use it only for non-commercial use. Non-commercial use is defined as use solely for your internal business operations and not for activities that involve using the API as part of, or in furtherance of, an income-generating service or product, whether directly or indirectly.

Any use to provide a Scheduled Meeting Join Experience that does not qualify under non-commercial use requires separate permission from Cisco. 
Cisco reserves the right to revoke your license to use our API if, in our sole discretion, we deem that your use is for unauthorized commercial purposes or otherwise violates the Webex Developer Terms of Service. 

Please contact us at <a mailto="devsupport@webex.com">devsupport@webex.com</a> if you have any questions about whether your intended use of the API is permitted, or to inquire about obtaining permission.  

## Webex Certified and Webex Compatible vendors 

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
