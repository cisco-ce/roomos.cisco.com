<img src="/doc/images/releases/Cisco_Logo_no_TM_Midnight_Blue-RGB.png" style="border: none; height: 100px; width: 200px;"><br><br>
# RoomOS 11
# Release notes
---
D15504.01 - February 2023

## Document revision history

<table class=''>
	<tr>
		<th>Revision</th>
		<th>Date</th> 
		<th>Description</th>
	</tr>
	<tr>
		<td>1</td> 
		<td>February 6th 2023</td> 
		<td>
			Release of <a href='#11.1' title='Jump to section'>RoomOS 11.1.2.4</a> b7224552262, Major
		</td>
	</tr>
</table>

## Introduction to Cisco RoomOS 11 <a name='intro'></a>

This release note describes new software features and capabilities included in RoomOS 11 for **on-premises deployment**. RoomOS 11 is supported by the following Cisco collaboration devices:

<table width="100%">
	<tr>
		<th>
			<b>Cisco Room Series</b>
		</th>
	</tr>
	<tr>
		<td>
			<font color='red'><b>Cisco Room USB**</font>, Room Kit Mini, Room Kit, Room Kit EQ, Room Bar, Room 55<br> 
			Cisco Codec Plus, Codec Pro<br>
			Cisco Room 55 Dual, Room 70 (Single/Dual), Room 70 G2 (Single/Dual)<br>
			<font color='red'><b>Cisco Room Panorama**, Room 70 Panorama**</b></font>
		</td>
	</tr>
	<tr>
		<th>
			<b>Cisco Board Series</b>
		</th>
	</tr>
	<tr>
		<td>
			Cisco Board 55/55S, 70/70S and 85S<br>
			Cisco Board Pro 55 and 75
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

<font color='red'><b>** These devices are NOT supported with RoomOS 11.1.2.x.</b></font> <br>
Note: If you have upgraded an unsupported device to RoomOS 11.1.2.x it will not damage the device but it will not work as expected. If you end up in a situation where you have upgraded an unsupported device, it is possible to downgrade normally using the web interface or other methods. Support for the devices in question will be added in a future release. 

The software described in this document is released to [https://www.cisco.com](https://software.cisco.com/download/home/283611944?catid=280789323) for on-premises deployment. If you register a Room Device to Webex you will be upgraded to the latest RoomOS cloud version available. RoomOS cloud software is not supported for on-premises deployment unless you are linked to **Webex Edge for Devices with Cloud Software Management enabled**. 

You can tell the difference between a cloud and on-premises RoomOS version by looking at the third version number. For example: 

* 11.X.**1**.x = Cloud 
* 11.X.**X > 1**.x = On-premises 

**RoomOS 11 is based on RoomOS 10 but have major upgrades**

This means that the first release of RoomOS 11 inherits most of the same underlying features seen in RoomOS 10.19.4.2 as of February 2023. The big difference is that RoomOS 11 comes with a powerful new user interface known as the RoomOS 11 UI Experience. This UI could optionally be enabled on RoomOS 10 for preview. In the future, there will be a feature gap between RoomOS 10 and RoomOS 11 since RoomOS 11 will be running on newer products and get new features tailored for the new UI. 

RoomOS 11 can be downloaded [here](https://software.cisco.com/download/home/283611944?catid=280789323).

## General notes and warnings for RoomOS 11
Please read this before upgrading to RoomOS 11

NOTE: We have previously announced that SNMP would be removed from RoomOS 11. RoomOS 11 will continue to support basic SNMPv2 and SNMPv3. 

**Facility service is deprecated**<br>
Facility Service  is deprecated from RoomOS 11 software because quick dial functionality can be created using [UI Extensions and macros](https://roomos.cisco.com/macros/Speed%20Dials%20Panel). 

**Snap to whiteboard**<br>
Snap to whiteboard is not available in RoomOS 11

**Software files have changed - specific upgrade paths may be applicable**<br>
We have made a permanent change on the upgrade files that we release for our devices. This is a very important change and we recommend you to read the updated [software upgrade section](#software-upgrade) in this document. In short, we have deprecated the xx.k3.cop.sgn files by only releasing xx.k4.cop.sha512 files as these are signed with a more secure signature. This may affect your upgrade path depending on what software version you are currently upgrading from. We have released the xx.k4.cop.sha512 files for a while together with the xx.k3.cop.sgn files but the latter is now deprecated. 

<br><br>

# Release summary for RoomOS 11.1 <a name='11.1'></a>

## Notes and warnings for this software release

### RoomOS 11

RoomOS 11 has a new app based UI that is designed for multitasking and modern navigation mechanics. The RoomOS 11 UI Experience has been available for a while and you could opt in to the RoomOS 11 UI Experience from RoomOS 10 since early 2022 for cloud and for on-premises since RoomOS 10.19. By enabling RoomOS 11 UI Experience on RoomOS 10 you could unlock the new and innovative features that have been announced over the last year. With the current release of RoomOS 11, the new UI is the only available UI. 

Features that have already been announced and requires the RoomOS 11 UI is now unlocked by default on RoomOS 11. Some of these features have already been announced in the [RoomOS 10 Release notes](https://roomos.cisco.com/print/WhatsNew/ReleaseNotesRoomOS_10) and are considered released like for example AirPlay, Miracast® and more. You can find information about these features in the [RoomOS 10 release notes](https://roomos.cisco.com/print/WhatsNew/ReleaseNotesRoomOS_10). 

For a list of current limitations in RoomOS 11 compared to RoomOS 10, please see the list below. 

<a name="limitations-roomos11"></a>

**RoomOS 11 - Current known limitations compared to RoomOS 10**

<table width="100%" >
	<tr>
		<th style="border-bottom: 1px solid black;">
			<b>What</b>
		</th>
		<th style="border-bottom: 1px solid black;" colspan="2">
			<b>Description</b>
		</th>
	</tr>
	<tr>
		<td style="border-bottom: 1px solid black;">
			Current limitations with RoomOS 11 
		</td>
		<td colspan="2" style="border-bottom: 1px solid black;">
			<li>Room Panorama, Room USB, and Samsung Flip not supported yet</li>
			<li>PIP's including selfview will only be visible on the first monitor</li>
		</td>		
	</tr>
	<tr>
		<td rowspan="9" style="border-bottom: 1px solid black;">
			xAPI
		</td>
		<td>
			xCommand Video Matrix Swap
		</td>
		<td>
			Doesn't take effect before using xCommand Video Matrix Assign.​
		</td> 
	</tr>
	<tr>
		<td>
			xCommand Video Matrix Assign
		</td>
		<td>
			Screen goes black for a couple of seconds before taking effect.
		</td> 
	</tr>
	<tr>
		<td>
			xConfiguration UserInterface SettingsMenu Visibility
		</td>
		<td>
			Not supported
		</td> 
	</tr>
	<tr>
		<td style="border-bottom: 1px solid black;">
			xConfiguration Video Selfview Default OnMonitorRole
		</td>
		<td style="border-bottom: 1px solid black;">
			PIP's and selfview is only visible on output connector 1. A workaround is to use the xAPI to swap the monitor role on the output connectors. 
		</td> 
	</tr>
</table>

## RoomOS 11.1.2.4

* [RoomOS 11 UI](#11124-1)
* [Support for Room Kit EQ](#11124-2)
* [Support for AirPlay](#11124-3)
* [Native Zoom button and in-call controls](#11124-4)
* [New whiteboard version with improved usability](#11124-5)
* [Persistent camera and microphone access for Webview and WebRTC meetings](#11124-6)
* <b>Other</b>
	* [Support for a new AV Integrator option key](#av-integrator-key)
	* [Default passphrase policy updated](#default-passphrase)
* <b>Bug fixes</b>
    * [Click here for a list of resolved defects in RoomOS 11.1.2.4](https://bst.cloudapps.cisco.com/bugsearch?pf=prdNm&kw=*&rls=11.1.2.4&bt=custV&sts=fd&sb=fr)

<br><br>

# RoomOS 11.1.2.4 feature descriptions 

<a name='11124-1'></a>

## RoomOS 11 User Interface

The new RoomOS 11 UI gives the devices a modernized experience with an app centric navigation paradigm. 

Everything on the devices UI now runs as apps. This modularity simplifies navigation and task switching, making the difference between call controls, device controls and third-party applications more explicit. 

Device settings have been moved into a single location that is easy to reach in any state, just tap the configuration button in the top right or swipe from the right

**Supported products**<br>
All products 

<a name='11124-2'></a>

## Support for Cisco Room Kit EQ / Cisco Codec EQ

RoomOS 11 introduces support for the new integrator device, the Cisco Room Kit EQ. 

Cisco Room Kit EQ is a next-generation video device bundle that seamlessly integrates with up to three external displays. Power your meetings with a modular room kit that includes the AI-powered Cisco Codec EQ, the intelligent Quad Camera, an intuitive touch controller, and room peripheral options. 

For more information about this product, [please visit this link](https://www.webex.com/devices/cisco-room-kit-eq.html). 

**Supported products**<br>
Not applicable

<a name='11124-3'></a>

## Support for AirPlay

RoomOS 11 introduces support for AirPlay, offering another simple and familiar sharing experience. Connect your iPhone, iPad or Mac to effortlessly share your screen, collaborate and playback audio and video content. 

Note that there may be network constraints, preventing the device from being discoverable out of the box. Check out the network requirements before getting started. 

[Read more about setting up AirPlay here](https://help.webex.com/en-us/article/n29ja5v/Configure-wireless-sharing-with-AirPlay). 

**Supported products**<br> 
All products except Board 55 / Board 70 (first generation)<br>
Note: Board 55S and Board 70S supports AirPlay and is a newer revision of the products<br>
Note: RoomOS 11 currently do not have support for FairPlay (DRM) - which means you cannot playback copy protected content at this time

<a name='11124-4'></a>

## Native Zoom button and in-call controls

In previous versions it have been possible to join Zoom meetings as these are SIP calls. We have seen the need for a simpler way to join these meetings and are now introducing a native Zoom button that will allow you to type in the Zoom meeting ID and a passphrase for joining the meeting. 

You could create a similar user interface for joining Zoom meetings in the past using a combination of macros and UI Extensions but is now available as a native implementation in RoomOS 11. The button can be enabled using the following configuration: 

[xConfiguration UserInterface Features Call JoinZoom](https://roomos.cisco.com/xapi/Configuration.UserInterface.Features.Call.JoinZoom/)

This button is hidden by default and must be enabled, by using the above command from xAPI or setting the config from the web interface.

Once you have joined the meeting you will now also see specific Zoom in-call controls. The submenus of these controls (Layout, Host options, Participants and More) makes it easier to perform distinct actions without memorizing DTMF sequences, for example when changing layout. 

Note: The in-call controls will be displayed even though you are not the host. The controls can be pressed but will not have any effect if you are not the host. 

Note: Currently there is no "admit all" button in the participant list

When a Zoom meeting is booked on the device it will be displayed as a Zoom meeting with OBTP. 

To change the default Zoom domain you can use the following configuration:

[xConfiguration Zoom DefaultDomain](https://roomos.cisco.com/xapi/Configuration.Zoom.DefaultDomain/)

**Supported products**<br>
All products<br>
Note: Board and Desk UI do not have support for the Zoom in-call controls yet

<a name='11124-5'></a>

## New whiteboard version with improved usability

A new version of the whiteboard is implemented in RoomOS 11. This version introduces new tools and operations. 

Some of the new tools include: 

* New shapes tool
    * Create new shapes (squares, triangles or circles) with options for resizing the shapes and move them around
	* Select the shape to change color of the shape, make it transparent or delete the shape
* New selection tool
    * Drag your finger or pen over the board to select objects, drawings or sticky notes to move them to other locations
	* When selected a delete button will appear. When pressed all the selected objects will be deleted
* New eraser tool
    * In previous versions you would have to delete each pixel, the new version will delete the whole stroke object
* Change name of the whiteboard
	* By selecting the name of the whiteboard in the top left corner you will be able to name the whiteboard
* Browse your current whiteboards
	* Select the file icon in the bottom left corner to bring up the whiteboard browser 
	* Select saved whiteboards to continue working on previous whiteboards
* Magic pen tool
	* The whiteboard can recognize basic shapes like, square, circles, triangles, rectangles, arrows and curved lines as you draw them and will straighten edges and close small gaps in the outline for you. 

For more information please follow [this link](https://help.webex.com/en-us/article/zfhy55/Use-the-whiteboard-on-Board-and-Desk-Series)

<a name='11124-6'></a>

## Persistent camera and microphone access for Web View and WebRTC meetings

In previous version you had to grant camera and microphone access each time you accessed a web app that required the use of microphone or camera, for example in a WebRTC call. 

With this feature you can persistently add hostnames to a list where microphone and/or camera access should be allowed by default. This has to be performed from the xAPI using the following commands: 

```
xCommand WebEngine MediaAccess Add
Device(r)[2]: <Camera, Microphone>
Hostname(r): <S: 0, 1024>
xCommand WebEngine MediaAccess List
xCommand WebEngine MediaAccess Remove
Id(r): <0..65534>
xCommand WebEngine MediaAccess RemoveAll
```

For example, if you use a specific service for WebRTC calls you can add the host to the list to allow microphone and / or camera access when this host is accessed. 

```
xCommand WebEngine MediaAccess Add Device: Camera Device: Microphone Hostname: videoservice.domain.com
```

You can use the commands above to list the currently allowed hosts, remove a single entry or all of the entries at once. 

```
xCommand WebEngine MediaAccess List
*r MediaAccessListResult (status=OK):
*r MediaAccessListResult Host 1 Devices 1 Device: Microphone
*r MediaAccessListResult Host 1 Devices 2 Device: Camera
*r MediaAccessListResult Host 1 Hostname: videoservice.domain.com"
** end
```

**Supported products**<br>
All products

## Other 

Other minor changes to note.

<a name='av-integrator-key'></a>

## AV Integrator Option key 

A new option key that unlocks the Audio Console for products that have this option, i.e. Room Kit EQ.

<a name='default-passphrase'></a>

## Default passphrase policy updated

While the default passphrase remains unchanged, the device will not allow calling until a passphrase has been set on the device. This means that we now require a passphrase to be set on the device in order to unlock the full functionality of the device. This will be noted in a warning displayed on the screen. 

<br><br>
<a name='software-upgrade'></a>

# Software upgrade and downgrade

## Upgrading software on a Cisco Room Device 

Upgrading from any version of RoomOS 10 to RoomOS 11 directly using UCM 11.5 or above is supported. Due to the deprecations of the xx.k3.cop.sgn files for new releases, you are required to upgrade to RoomOS 10.15.x or later in order to upgrade to RoomOS 11 when using other upgrade methods. We are now only releasing xx.k4.cop.sha512 files going forward with RoomOS 11 and also lower maintenance releases. Support for upgrading devices using the cop files with the new signature from the codec itself was introduced with RoomOS 10.15.x. 

The reason for this requirement is that the device is unable to unpack the new cop files on earlier versions because it incorrectly assumes that the signature of the package is invalid. 

This limitation applies when upgrading using TMS, xAPI (SSH) or the codec web interface - because the codec will attempt to unpack the cop files in these scenarios. It does not apply when using UCM, because UCM unpacks the xx.k4.cop.sha512 before its applied to the codec. 

To avoid issues during upgrade, either upgrade using UCM or make sure the devices you are about to upgrade is running RoomOS 10.15.x or above. UCM 11.5 or higher with the latest dev pack installed is highly recommended. 

To illustrate the upgrade pattern using the files from https://www.cisco.com :

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
		<td><b>10.19.x</b></td> 
		<td><b>11.x</b></td> 
		<td><b>YES</b></td>
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
	</tr>
	<tr>
		<td><b>10.15.x</b></td> 
		<td><b>11.x</b></td> 
		<td><b>YES</b></td>
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
		<td><b>YES</b></td> 
	</tr>
	<tr>
		<td><b><=10.11.x</b></td> 
		<td><b>11.x</b></td> 
		<td><b>YES</b></td>
		<td><b>NO</b></td> 
		<td><b>NO</b></td> 
		<td><b>NO</b></td> 
	</tr>
</table>

Before you start, please make sure you have downloaded the software for the correct platform.

<table  width="100%">
	<tr>
		<th><b>Device</b></th><th><b>Software platform identifier</b></th> <th><b>Latest available RoomOS software</b></th>
	</tr>
	<tr>
		<td>Cisco Codec Plus, <s>Room USB</s>, Room Kit Mini, Room Kit, Room 55, Room 55 Dual, Room 70, Board Series (except Cisco Board Pro 55 and 75)</td> <td><b>s53200</b></td> <td><b>cmterm-s53200ce11_1_2_4.k4.cop.sha512</b>*</td> 
	</tr>
	<tr>
		<td>Cisco Codec Pro, Codec EQ, Room 70 G2, Room Bar, <s>Room 70 Panorama</s>, <s>Room Panorama</s>, Desk Series, Cisco Board Pro 55 and 75</td> <td><b>s53300</b></td> <td><b>cmterm-s53300ce11_1_2_4.k4.cop.sha512</b>*</td>
	</tr>
	<tr>
		<td>All products</td> <td><b>N/A</b></td> <td><b>cmterm-ce11_1_2_4.k4.cop.sha512</b></td>
	</tr>
	<tr>
		<th colspan="3"><a href="https://software.cisco.com/download/home/283611944?catid=280789323" target="_blank">Follow this link</a> to find and download software for the device you are about to upgrade.</th>
	</tr>
</table>

The "All products" cop file (super cop) must only be installed to a Unified CM. This package provides software to all supported video models and peripherals, so you only have to install one cop file if you have multiple products. 

**NOTE: Upgrading from the device web interface using xx.k4.cop.sha512 files is supported from RoomOS 10.15.x and above**

**WARNING: Do not delete ".pkg" files that are stated to be "Not in use" on Unified CM. The devices are pointed to a loads file that tells it what package to use for the different peripherals. UCM is not aware that the ".pkg" is in use. By deleting peripheral or device software the device will fail to upgrade or fail to upgrade its peripherals.**

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
You should always use the “.cop” file when upgrading the devices listed above. Upgrading using “.pkg” on these devices will leave the device unable to upgrade the peripherals and you may experience error messages regarding software mismatch after upgrade. Such issues could happen if you used the “.pkg” extension when upgrading the device from UCM or in other ways. To resolve this, upgrade the software again using the “.cop” file. Cisco only release “.cop” files for RoomOS 11 and above. 

**Upgrade using the web interface**

Access the web interface of the device on: 

`https://codecIP/web/software`

Upload the correct software package by following the instructions on the web page. The upgrade will start, and the device will reboot with the new software. 

**If you are on an older software version like CE9.15 or below, please refer to the [RoomOS 10 release note](https://roomos.cisco.com/print/WhatsNew/ReleaseNotesRoomOS_10) for further instructions before proceeding with the upgrade to RoomOS 11** 

**Upgrade using UCM**

Install the appropriate “xx.k4.cop.sha512” file containing the software for the device platform you wish to upgrade according to the cop installation process on UCM. 

Go into the device default loads on the UCM administration page and make sure the platform has populated the correct filename. 

For Cisco Room devices s53200 and s53300, the load file name should not contain any extension at all, for example:

Platform Specific packages:<br>
s53200ce11_X_X_X.pkg (**wrong**)<br>
s53200ce11_X_X_X (**correct**)

All products (containing all software versions for all products):<br>
ce11_X_X_X (**correct**)

**Upgrade using TMS**

Upload the software to TMS according to the TMS instructions of software upgrade. 

**Note that devices must be running RoomOS 10.15.x or above in order to do a successful upgrade to RoomOS 11 via TMS.**

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

If you are upgrading to RoomOS 11 using this method, please make sure the device is running RoomOS 10.15.x or above. 

### Downgrading

Downgrading is performed the same way as described above, using a software version lower than the one you are currently running. You can downgrade to any RoomOS 10 version from any RoomOS 11 version directly. 

<a name="deferral-notes"></a>

## Software deferral policy 

A software version is deferred when we find critical issues within the software. This is to prevent users from downloading and installing affected software versions. Replacement software will always be in place before a software version is deferred.

Older software versions will be deferred on a regular basis from the download section on https://www.cisco.com to avoid providing potential vulnerable software after security fixes. As a general rule you will be able to download the latest release and the version before. Older software versions will be removed from cisco.com regularly. Cisco always recommend using the latest available software. 

**Example:**

**RoomOS 10.X.Y.z = Major.Minor.Patch.Buildnumber**

For RoomOS versions that have been provided by the Webex cloud, "Y" will always be 1 (11.X.**1**.z) while a RoomOS version released to cisco.com the same number will always be higher than 1 and will increment by one for each patch release. 

If for example, RoomOS 11.1.2.x and RoomOS 11.3.2.x is released and RoomOS 11.6.2.x becomes available. RoomOS 11.1.2.x may be removed as part of the deferral policy for end of support. A minor software version is typically supported for two release cycles (6-9 months).

Cisco supports the latest minor release (i.e. RoomOS 11.3.1.x) and the previous minor release (i.e. RoomOS 11.1.2.x) as a general rule. 

Exceptions are made if supported hardware or particular feature deployments are depending on a major release. Deferral of older maintenance releases still applies. 

## Deferred RoomOS 11 software
<table width="100%">
	<tr>
		<th style="background-color: gray;"><b>Deferral date</b></th>
		<th style="background-color: gray;"><b>Versions</b></th>
		<th style="background-color: gray;"><b>Note</b></th>
	</tr>
	<tr>
		<td>N/A</td>
		<td>N/A</td>
		<td>N/A</td>
	</tr>
</table>

## Open and resolved caveats in RoomOS 11 <a name='defects'></a>

### Using the Bug Search Tool

You can use the Bug Search Tool to find information about caveats (bugs) for this release, including a description of the problems and available workarounds. The Bug Search Tool lists both open and resolved caveats. No subset of open or resolved bugs will be listed in the release notes unless deemed relevant for a particular software version. 

A pre-defined link will provide the correct list of all open or resolved bugs. Please note that the "Series/Model" listed in the pre-defined search is universal and will list all relevant bugs relating to all products that runs RoomOS Software.

Please refer to the release summary for a link to open and resolved bugs under the specific release.

To use the Bug Search Tool, follow these steps:

* **Step 1** Access the Bug Search Tool by navigating to https://bst.cloudapps.cisco.com/bugsearch/
* **Step 2** Log in with your Cisco.com user ID and password
* **Step 3** To look for information about a specific problem, enter the bug ID number in the ‘Search for bug ID’ field, then click ‘Go’

## Known limitations and advisories for RoomOS 11

### Resource consumption

**Extended Logging**		
Extended logging is a troubleshooting feature and will consume a high amount of resources when enabled. Enabling extended logging can generate unexpected behavior in production calls and in rare cases, cause the device to crash due to resource consumption. This feature should therefore only be enabled in short periods if higher data collection is required when reproducing issues for example, in cooperation with Cisco TAC. 

**Network Congestion**	
Anything that degrades network performance can affect voice and video quality and, in some cases, can cause a call to drop. Sources of network degradation can include, but are not limited to, the following activities:

* Administrative tasks such as an internal port scan or security scan
* Attacks that occur on your network, such as a denial-of-service attack

To reduce or eliminate any adverse effects to conferences, schedule any administrative network tasks during a time when the Cisco Room Device is not being used, or exclude the Cisco Room systems from the testing.

### Wi-Fi Connection 

Due to compliance regulations, it is required to enable 802.11d in access points for the product to operate properly within 5725 MHz – 5875 MHz. As Wi-Fi connections can be used as a flexible option, an Ethernet connection is always preferred for high performance.

**WPA-EAP**<br>
There is currently no diagnostic message for expired certificates

**CA Certificates**<br>
CA certificates must be uploaded per endpoint, it is possible to use the xAPI to perform manual or automated mass-distribution of certificates to devices. Please also note that the endpoint must be connected to a wired or WPA2-PSK wireless network in order to upload a certificate before attempting to connect to a WPA-EAP enabled network that requires a CA certificate. 

Devices flagged with "NR" (No Radio) do not have Wi-Fi capability. 

**Network paired Cisco Touch 10 / Navigator not supported when the video system is connected through Wi-Fi**<br>
Even though this connectivity works, you may end up in cumbersome scenarios if the Wi-Fi connectivity is lost for any reason, for example when the Wi-Fi password is changed. In order to reconfigure the Wi-Fi connection, you need to setup a direct pairing between the video system and the Touch 10 / Navigator before reconnecting the Cisco Touch 10 / Navigator. When the video system is using Wi-Fi connectivity Cisco recommends that you have the Touch 10 directly paired with the video system.  

### Cisco Webex and Cisco Webex Edge for Devices 

**Pairing Cisco Touch 10 or Room Navigator**<br>
To activate a device on Webex with a LAN paired Cisco Touch 10 or Cisco Room Navigator panel, you should pair the touch device before you activate the system on Webex. 

In case you have registered the device to Webex and locked the device user accounts, you can initiate pin pairing of the touch panel fro Control Hub if the device is running RoomOS 10.11 or above.

We always recommend that you upgrade to the latest available RoomOS version before activating your device on Webex. 

**Encryption is required to activate a Room Device on Webex**<br>
A Room Device with support for encryption is required to activate the device on Webex and Webex Edge for Devices. Cisco Room Devices with the K7 flag in the device part number (can be found in the xAPI by using xStatus), do not have support for encryption and cannot be registered or linked to Webex. Encryption support for Cisco Room Devices are determined by hardware and are not using encryption option keys. 

If the device do not have the encryption option, then the device is a K7 device. Devices flagged with K9 in the part number have support for encryption. 

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
			<b>H.323 and SIP consideration when provisioned by UCM</b><br>
When using UCM provisioning, the endpoint cannot register to a VCS (SIP or H.323) at the same time. This use-case is not supported. When 			UCM provisioning is active, H.323 mode is disabled. We recommend customers to migrate from H.323 to SIP. 
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
			When registered to a SIP proxy and SIP Listen Port is enabled, a diagnostics warning will be displayed in the web interface “SIPListenPortAndRegistration”. We recommend that SIP Listen Port is turned off when registered to a SIP proxy<br><br>
			<b>Dual protocol enablement for SIP and H323 is not supported</b><br>
			Having SIP and H323 enabled at the same time will generate a warning message on-screen indicating that having both protocols enabled (SIP and H323) is not supported. This message cannot be removed unless you disable one of the protocols. Having both protocols enabled and using them at the same time in different scenarios may introduce unexpected behavior. TAC will not support call scenarios where both protocols are enabled. 
		</td>
	</tr>
	<tr>
		<td>Cisco Proximity</td> 
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
	<td>SNMP</td> <td>The Collaboration Endpoint Software is configured with the default SNMP community strings. SNMP community strings should be treated as credentials, and therefore these must be changed after initial configuration. RoomOS 11 only has basic support for SNMPv2 and SNMPv3 with default MIB only.</td>
	</tr>
	<tr>
		<td>Security</td> <td>The codecs shipped with RoomOS 11 software do not meet the Cisco standard passphrase policy. Because of this, Cisco room devices requires that a passphrase is set in order to make full use of the device. Calling will be disabled when there is no passphrase set on the device (default passphrase). Once a passphrase is set the warning message will go away and calling will be unlocked.</td>
	</tr>
	<tr>
		<td>PresenterTrack</td> <td><b>PresenterTrack is disabled in MultiSite calls</b><br>
The PresenterTrack feature is not available in MultiSite calls. 
Note that PresenterTrack will work in a Dual Screen call with CMS from CE9. 
<br><br><b>Trigger zone configuration</b><br>
There is a known limitation when configuring the trigger zone through the web interface; whenever the blue square is moved around and placed the trigger zone will be saved (regardless if the "save" button is pressed or not. The blue square that is displaying in the self-view on the endpoint do not disappear until the configuration has been saved manually from web or activate the PresenterTrack preset from the Touch interface. 
		</td>
	</tr>
	<tr>
		<td>Startup Wizard</td> <td>While the Startup Wizard is active the system will have “Do Not Disturb” mode enabled by design. The DND mode cannot be turned off while the Startup Wizard is active. To remove the Startup Wizard, finish the Startup Wizard normally by following the steps or turn off the “RunStartupWizard” by setting the value to “False”. If the Startup Wizard is active, a diagnostics message will be active in the web interface with a link to the configuration to turn it off. This should only be done by advanced users that wants to configure the system manually.   </td>	
	<tr>
		<td>HDCP</td> <td>Device is not entering standby
If you connect for example, a Google Chromecast, the device will not be able to enter standby because the standby activity makes the Chromecast send “Active” signal to the codec forcing it to wake up again. 

<b>All content is considered as HDCP when enabled</b><br>
When the input has been configured to support HDCP, it will consider anything connected to this input as HDCP content, even if it´s not. This will prevent you from sharing content from this port in a call. You can share anything locally the same way as before but note that on a dual screen device you may only see content on one screen. Check if your room device have support for one or two HDCP outputs. 
		</td>
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
Cisco Room Panorama do not have support for Precision 60 cameras. Please note this when upgrading a Room 70 into a Room 70 Panorama, in case you have one connected and want to keep using it. 
		</td>
	</tr>
		<tr>
		<td>Encryption and Ciphers</td> <td>
<b>Supported Ciphers</b><br>
You can check which ciphers that the device supports for its different services (HTTPS Server, SIP TLS, Syslog TLS, HTTPS Client) by typing [xCommand Security Ciphers List](https://roomos.cisco.com/xapi/Command.Security.Ciphers.List/) in the xAPI. The supported ciphers may change between versions. 
		</td>
	</tr>
	<tr>
		<td>Upgrade and downgrade</td> <td>
<b>Upgrading from unsupported versions</b><br>
Some devices that have support for RoomOS 11 previously had support for CE9. This is no longer the case, and we have removed all CE9 software for these products and we will not release anything from CE9 to the new products. Some customers may still be running old and unsupported software. We recommend that the software is upgraded to RoomOS 10.15.x or above before upgrading to RoomOS 11. 

For Room Kit, Room Kit Mini, Codec Plus, Room 55, Room70 G1 :

Upgrading to RoomOS 11 from CE9.14.4 and below may result in error “Hardware or Operating System Failure”, which can only be fixed by downgrading to RoomOS 10.15.2 software or above, and then upgrade back to RoomOS 11.
</td>
</tr>
</table>


## Interoperability for RoomOS 11
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
	<tr>
		<td>Cisco Expressway C / E (VCS)</td> <td><b>Latest version available</b></td>
	</tr>
	<tr>
		<td>Unified CM</td> <td><b>11.5</b><br> For device support, please make sure you have the latest UCM device pack for your version installed. </td>
	</tr>
	<tr>
		<th colspan="2"><b>Conference bridge interoperability</b></th>
	</tr>
	<tr>
		<td>Cisco Meeting Server (CMS)</td> <td><b>3.5</b><br>For the latest conferencing features available in CMS, the latest available software is always recommended.</b></td>
	</tr>
	<tr>
		<th colspan="2"><b>Management server interoperability</b></th>
	</tr>
	<tr>
		<td>TelePresence Management Suite</td> <td><b>Latest version available</b></td>	
	</tr>
</table>

## Camera firmware and support

Note: The camera firmware has parity with the version installed on the Room Device. Camera software for Cisco Quad Camera, Cisco TelePresence Precision 60 and Cisco TelePresence SpeakerTrack 60 will automatically be updated when the Room Device is upgraded or downgraded. The camera firmware should share the same hash as the current software installed on the Room Device. 

<table  width="100%">
	<tr>
		<th><b>Room Device</b></th><th><b>Camera</b></th><th><b>Comments</b></th>
	</tr>
	<tr>
		<td rowspan="5" style="border-bottom: 1px solid black;">Cisco Codec Pro</td> <td>Cisco TelePresence Precision 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Cisco Quad Camera</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Cisco TelePresence SpeakerTrack 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Webex PTZ 4K</td> <td>Full support</td> 
	</tr>
	<tr>
		<td style="border-bottom: 1px solid black;">Sony SRG-120DH<br>Sony EVI-120DH<br></td> 
		<td style="border-bottom: 1px solid black;">Pairing over IP and basic usage with pan tilt and zoom functionality is supported, Camera firmware update is not supported. </td> 
	</tr>
	<tr>
		<td rowspan="5" style="border-bottom: 1px solid black;">Cisco Room Codec Plus</td> <td>Cisco TelePresence Precision 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Webex PTZ 4K</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Sony SRG-120DH<br>Sony EVI-120DH</td> <td>Pairing over IP and basic usage with pan tilt and zoom functionality is supported, Camera firmware update is not supported.</td> 
	</tr>
	<tr>
		<td>Cisco Quad Camera</td> <td>Full support</td> 
	</tr>
	<tr>
		<td style="border-bottom: 1px solid black;">Cisco TelePresence SpeakerTrack 60</td> <td style="border-bottom: 1px solid black;">Full support</td> 
	</tr>
	<tr>
		<td rowspan="4">Cisco Room Codec EQ</td> <td>Cisco TelePresence Precision 60</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Webex PTZ 4K</td> <td>Full support</td> 
	</tr>
	<tr>
		<td>Sony SRG-120DH<br>Sony EVI-120DH</td> <td>Pairing over IP and basic usage with pan tilt and zoom functionality is supported, Camera firmware update is not supported.</td> 
	</tr>
	<tr>
		<td>Cisco Quad Camera</td> <td>Full support</td> 
	</tr>
</table>

**Third party cameras**

Third-party and older cameras may work with our Integration Room Devices but this is not tested and functionality cannot be guaranteed. TAC support may be rejected or limited. 

## Cisco recommended screens for best interoperability

Cisco recommends using the following LG and Samsung Digital Signage screens together with Cisco Room Series and other room devices for the best visual experience and verified CEC 2.0 compatibility. 

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

The admin user have access to only a subset of relevant commands and configuration from the xAPI. The admin user can fully manage the system from the web interface where all the configurations are available. The "remotesupport" user have access to the full list of xAPI commands when utilized (requires TAC engagement). 

Specific xAPI changes are not published in the release notes. Please refer to the Cisco API Reference Guides for the integrator products at the following locations:

Cisco Room Series: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-room-kit-series/products-command-reference-list.html

Cisco Boards: https://www.cisco.com/c/en/us/support/collaboration-endpoints/spark-board/products-command-reference-list.html

Please also visit https://roomos.cisco.com for a great overview of the xAPI and other resources. 

## Hardware revision and software dependencies

Due to occasional updates to hardware components, there can be constraints on running older software on newly manufactured Room Devices.

To identify a Room Device compatibility level, you can access the web interface of the Room Device and click on Settings > Statuses. Scroll down to the compatibility level on this page. The below tables can be used to identify software constraints based on the compatibility level of your endpoint.  
Downgrading to an unsupported software version will fail. 
The latest software release is backward compatible with previous hardware revisions.

Note: When "all" is mentioned as the minimum version it is referring to all software versions of RoomOS 10 that is or has been released on https://www.cisco.com.

## Cisco Room Series software compatibility matrix

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 11</th>
	</tr>
	<tr>
		<td>Cisco Room Kit</td>
		<td>0-3</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Codec Plus	</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Room 55 Dual</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Room 70S/70D</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Codec Pro</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Room 70/70D G2</td> 
		<td>0-2</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Room Kit Mini</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Room USB	</td> 
		<td>0</td> <td>All</td>
	</tr>
</table>

## Cisco Board Series Software Compatibility Matrix 

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 11</th>
	</tr>
	<tr>
		<td>Cisco Board 55	</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Board 70	</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Board 55S</td> 
		<td>0</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Board 70S</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Board 85S</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Board Pro 55</td> 
		<td>0</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Board Pro 75</td> 
		<td>0</td> <td>All</td>
	</tr>
</table>

## Cisco Desk Series Software Compatibility Matrix <a name="compatibility-desk"></a>

<table width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 11</th>
	</tr>
	<tr>
		<td>Cisco Desk Pro</td> 
		<td>0-2</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Desk</td> 
		<td>0-1</td> <td>All</td>
	</tr>
	<tr>
		<td>Cisco Desk Mini</td>
		<td>0-1</td> <td>All</td>
	</tr>
</table>

## Cisco Peripheral Software Compatibility Matrix 

Cisco peripheral software compatibility refers to touch devices and cameras that are requesting software from the Room Device. Some of the peripherals may require a higher software version than the Room Device is currently running. 

**Touch devices**

If you see an error on the touch screen about the software not being compatible with the current software, please upgrade the Room Device software to the latest available version and try again.

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 11</th>
	</tr>
	<tr>
		<td>Cisco Touch 10</td> 
		<td>102300-3<br>102310-0<br>102310-1</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco Room Navigator</td> 
		<td>101864-0<br>101864-1<br></td> <td>All</td> 
	</tr>
</table>

**Cameras**

<table  width="100%">
	<tr>
		<th>Device</th> <th>Compatibility level</th> <th>Minimum version of RoomOS 11</th>
	</tr>
	<tr>
		<td>Cisco Quad Camera</td> 
		<td>73-100746-0<br>73-100746-1<br>73-100746-2<br>73-100746-3</td> <td>All</td> 
	</tr>
	<tr>
		<td>Cisco TelePresence Precision 60</td> 
		<td>2018/07 and earlier<br>2018/08 and later</td> <td>All</td> 
	</tr>	
	<tr>
		<td>Webex PTZ 4K</td> 
		<td>N/A</td> <td>All</td> 
	</tr>	
</table>

**Notes for Cisco Quad Camera**

Systems that support Quad Camera are Cisco Codec Pro, Codec Plus, Room 70 and Room 70 G2 (single / dual).
Hardware revisions of the Quad Camera can be identified using xStatus. 

**Example:**
```
xStatus: Peripherals ConnectedDevice XXXX HardwareInfo: "73-100746-1".
```
 
**Notes for Cisco TelePresence Precision 60**

Systems that support Cisco TelePresence Precision 60 with RoomOS 10 is Cisco Codec Pro, Codec Plus, Room 70 and Room 70 G2 (single / dual).

New hardware revisions of the Cisco TelePresence Precision 60 camera are identified by production date printed on a sticker underneath the base. If there no sticker is present and you still see an error message on screen about the camera not being compatible with the current software version, please upgrade the room device to the latest software. 

**Notes for Cisco PTZ 4K camera**

The camera setup switch is for selecting the video signal format to be "output" from the HDMI OUT terminal. This should always be set to 6 in order to be controlled by the Room Device. 

For more information about the Webex PTZ 4K Camera, please [follow this link](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/collaboration-peripherals/webex-ptz-4k-camera-ds.html). 

## Cisco Terms of Service

Your use of Cisco software and cloud services are subject to these [terms and conditions](https://www.cisco.com/c/en/us/about/legal/cloud-and-software.html)

Your use of Cisco APIs is subject to the [Cisco Webex Developer Terms of Service](https://developer.webex.com/terms-of-service)

## Permitted Commercial Use for Scheduled Meeting Join Experience
The following use case requires separate permission for commercial use: 

Providing a scheduled meeting join experience like one button to push. 

This includes use of any API that updates the device with calendar data from an external source to provide this functionality including ´xCommand Bookings Put´ or previous private API’s such as ´bookingsputxml´ In addition, using other APIs to accomplish the same functionality would also require permission for commercial use.

If you are providing a Scheduled Meeting Join Experience you either must comply with the below permitted commercial use terms or it must be for non-commercial use. Non-commercial use is defined as being solely for your internal business operations only and not for any activities that involve you using the API as part of or in furtherance of an income-generating service or product, whether directly or indirectly. 

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