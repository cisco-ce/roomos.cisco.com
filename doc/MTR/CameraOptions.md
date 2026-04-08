#  Camera Features and Options

##  Overview of camera settings and capabilities

###  Access different camera modes

You can select a camera mode that ensures the best view for your meeting and device. The camera can switch from one speaker to the next, automatically adjust so that you are always centered, group participants together, or you can choose to adjust it manually. 

By selecting an automatic camera mode you'll get the best view for your device and meeting, without having to manually control the cameras yourself during meetings. You can change camera modes whether you're in a call or not. 

Depending on the device you're using, there are a few different modes to choose from:


* **Group**: The camera will adjust to show everyone. 
* **Frames**: The camera will zoom and show people individually or in smaller groups. Note that on Room Bar Pro, Frames mode will use just one of the device's cameras at a time.
*	**Speaker**: The camera will follow the person speaking. The maximum distance for speaker tracking to work is 7.5 meters.
*	**Best view**. The camera will adjust automatically so you are always in the center of the frame.

#### Select a camera mode

1.	Swipe from the right on the home screen or on the Room Navigator. Tap **Camera**. 
2.	If the camera modes are not visible, Tap **Camera mode** and then **Auto**. 
3.	Choose a mode. You can choose between **Group**, **Frames**, or **Speaker**.

<img src="/doc/images/MTR/CameraModeAuto.png" style="width: 200px" />

On Board Pro and Desk Pro, you can choose **Best view**. 

<img src="/doc/images/MTR/CameraModeAuto2.jpg" style="width: 200px" />

4.	You can also tap **Manual** and adjust the camera yourself.

<img src="/doc/images/MTR/CameraModeManual.png" style="width: 200px" />

Note: You can also access and adjust the camera controls in or out of call by tapping the camera button on your self-view.


### Save camera presets  

You can create custom views with predefined zoom and camera direction using manual camera control. For example, you can save a zoomed out preset for meetings with multiple participants, and a zoomed in preset for smaller meetings. The presets will be available in the camera control screen and you can easily switch between them for different types of meetings. 

1. Swipe from the right on the home screen. Tap **Camera**.
2. Select **Manual** and choose the camera you want to adjust.

If the device is using more than one camera, you see them under the **Manual** button.

<img src="/doc/images/MTR/CameraModeManual2.jpg" style="width: 300px" />

3. Use the camera controls to adjust pan, tilt, and zoom. When you're all set, tap **Save camera view**. Name and **Save** the preset.

It will appear under **Saved camera views**.

<img src="/doc/images/MTR/CameraModeManual3.jpg" style="width: 300px" />

To edit or delete an existing preset, select the preset under the **Saved camera views** list. Adjust and save the preset again, or delete it. 


### Access and adjust self-view 

Your self-view shows what others see from your device in a call. You can use it to confirm that they see what you want them to see.  
You may want to have your self-view activated during the meeting to ensure that you remain seen on the screen. 

If you find the current position of the self-view blocks important parts of the image on your screen, you can move it around.  

To check your self-view at any time, swipe from the right side of your device's home screen. If your camera is on, you'll see your self-view in the control panel. 

Tap **Fullscreen** if you want to see your self-view in full. To exit full screen, open the control panel and tap **Fullscreen** again.   

Tap **Selfview** in the control panel to set the self-view visibility to **Hide**, **Show in call**, or **Always show**. To close the control panel, tap anywhere else on the screen.   

To open and change the location of your self-view on the screen during a call:  

1. If it's not already visible, tap the screen or the Room Navigator to open the self-view up on top of the call.   

2. Tap the button on the self-view’s right corner to change the visibility to **Hide**, **Show in call**, or **Always show**. Even when you select to hide it in a call, your self-view will still appear to you in the control panel.  

3. Press the self-view and drag and drop it to change the location. It will snap to pre-defined locations as you drag.  

## Cisco Camera Modes in Microsoft Teams Rooms and Microsoft IntelliFrame 

You can select your preferred camera mode directly from the Microsoft Teams Rooms on Cisco devices. 
This update brings the familiar Cisco camera experiences into Microsoft Teams Rooms, using Microsoft’s naming conventions for seamless integration. Additionally, Microsoft Cloud IntelliFrame, a cloud-based video intelligence feature, is now available.

### New Camera Mode Menu Options

The following camera modes are available in the Microsoft Teams Rooms on Cisco devices:

   * IntelliFrame: Microsoft’s cloud-based smart video feeds zoom into the faces of in-room participants, minimizing distractions.
   * Room: Displays a view of the entire room, powered by Cisco’s Group framing technology.
   * Active Speaker: Uses Cisco’s on-device speaker tracking technology to focus on the active speaker in the room.
   * Composite: Employs Cisco’s AI-powered Frames technology to zoom, crop, and frame individuals and groups in a single view,
     eliminating unused space while preserving meeting context.
   <img src="/doc/images/MTR/ciscoCameraModesInMTR.jpg" style="width: 700px"/>  
     
Learn more about Microsoft Cloud IntelliFrame here: [Microsoft Cloud IntelliFrame](https://learn.microsoft.com/en-us/microsoftteams/devices/cloud-intelliframe)

> **_NOTE:_**  Dynamic Mode remains the default camera experience and there is no change to the side swipe menu.

When a smart camera setting is selected through the Microsoft Teams Rooms (MTR) user interface (UI), the following mappings are applied to RoomOS speakertrack:
 
  * **composite-people-feed** → Frames
  * **active-speaker** → Speaker (Closeup)
  * **Room (auto framing)** → Group (Best-overview)
  * **Intelliframe** → Manual
  * If enhanced framing is off, the mode defaults to Manual


When a smart camera setting is selected through the RoomOS UI, the following mappings determine what is displayed in the MTR UI:

* **Frames** → composite-people-feed
* **Dynamic** → composite-people-feed
* **Group-and-speaker** → composite-people-feed
* **Speaker (Closeup)** → active-speaker
* **Group (Best-overview)** → Room (auto-framing)

## USB camera support

RoomOS devices support USB cameras, allowing any USB 2.0 camera that supports the MJPEG format to function effectively. This feature is available in both Microsoft Teams Rooms and Webex mode, applicable during and outside of meetings. Users can select the content camera from the share source using the RoomOS user interface or through the Microsoft Teams Rooms application interface. This functionality is compatible with the current portfolio of devices, including the Room Series (Bar, Bar Pro, Kit EQ/EQX, Kit Pro), Board Series (Pro and Pro G2), and Desk Pro. USB cameras are compatible for both content sharing and as the main video source.

No configuration is required when using a content camera. Simply plug the camera into the Type A input on the product. Currently, we support up to two USB input sources, allowing for the connection of two USB cameras. However, the Codec Pro is limited to supporting only one USB camera.

### USB camera for content sharing
### RoomOS

Sharing a USB camera content from the navigator when not in a call.

<img src="/doc/images/MTR/USBContentCamera2.png" style="width: 500px"/>

Sharing a USB camera content from your computer when in a call.

<img src="/doc/images/MTR/USBContentCamera3.png" style="width: 500px"/>

Sharing USB camera content from the navigator when in a call.

<img src="/doc/images/MTR/USBContentCamera4.png" style="width: 500px"/>

 
### Microsoft Teams Rooms

You can use Microsoft Teams Rooms settings menu to select content camera source.

<img src="/doc/images/MTR/USBContentCamera5.png" style="width: 500px"/>

Sharing a USB camera content in a Microsoft Teams Rooms meeting.

<img src="/doc/images/MTR/USBContentCamera6.png" style="width: 500px"/>

Alternatively a USB camera can be selected as a share source from the side bar, allowing it to be shared with the share button.

<img src="/doc/images/MTR/USBContentCamera7.png" style="width: 500px"/>

### Supported RoomOS devices 

|Device Type |Connector Ids/New Inputs |Max Quaility |USB Ports |
|:------------- |:------------- |:------------- |:------------- |
|Desk Pro|	4,5	|USB 2.0 Max	|USB 2.0 Type A|
|Room Bar Pro|	4,5	|USB 2.0 Max|USB 2.0 Type A|
|Room Bar|	4,5	|USB 2.0 Max	|USB 2.0 Type A|
|Board Pro|	4,5	|USB 2.0 Max	|USB 2.0 Type A|
|Board Pro G2|	4,5	|USB 2.0 Max|USB 2.0 Type A|
|Codec Pro|	7	|USB 2.0 Max|USB 2.0 Type A|
|Room Kit EQ/X|	5,6	|4k@60|USB 3.0 Type A|
> **_NOTE:_**  "4K" refers to a resolution of 3840 x 2160 pixels, not 4096 x 2160 pixels, when describing the signal.
"USB 2.0 Max" is 4k@30 with a Cisco 4k desk camera but most cameras will instead be using a lower resolution likely 1080p.


### Limitations for USB cameras
   
  * **Snapshot support**: Navigator previews require cameras that support snapshots. Note that the Logitech Scribe is known not to support this feature.
  * **Device misidentification**: Some USB cameras may be incorrectly flagged as headsets, which can affect their functionality.
  * **Audio interference**: When a USB camera is connected to the USB port under the Deskpro, there may be interference with the aux jack audio. To avoid this, connect the USB camera to the ports located at the back.
  * **Power requirements**: If the USB cable connecting the camera is significantly long, external power may be necessary to ensure proper operation.

### USB camera as main video source

### RoomOS

To use the USB camera as the main video source, set the InputSourceType to 'camera' on the device web interface or Control Hub.

``` xConfiguration Video Input Connector <ID> InputSourceType: camera ```

<img src="/doc/images/MTR/USBMainVideo1.png" style="width: 500px"/>

#### Selecting USB camera as main video on a touch screen

<img src="/doc/images/MTR/USBMainVideo2.png" style="width: 500px"/>

Open the sidebar and select "Camera".

<img src="/doc/images/MTR/USBMainVideo3.png" style="width: 500px"/>

Select "Manual" and then the USB Camera in the dropdown. The camera can be rotated 180 degrees.

#### Selecting USB camera as main video on a navigator

<img src="/doc/images/MTR/USBMainVideo4.png" style="width: 500px"/>

<img src="/doc/images/MTR/USBMainVideo5.png" style="width: 500px"/>

Open control panel on navigator and select "Camera" then select "Manual".

<img src="/doc/images/MTR/USBMainVideo6.png" style="width: 500px"/>

<img src="/doc/images/MTR/USBMainVideo7.png" style="width: 500px"/>

Select the USB Camera on the left. The camera can be rotated 180 degrees.

Alternatively, use the following command to select the USB camera as main video:

``` xCommand Video Input SetMainVideoSource SourceId: <ID> ```

### Microsoft Teams Rooms

You can follow the same steps as RoomOS outlined above using the sidebar and navigator settings to select camera options on the Microsoft Teams Rooms.

Alternatively you can use the following xcommand to set the USB camera as main video on the Microsoft Teams Rooms:

``` xCommand Video Input SetMainVideoSource SourceId: <ID> ``` 

#### Limitations for USB cameras as main video source

* **Manual operation only** : When used as the main video source, automatic options are disabled; only manual operation is supported.
* **People count**: This feature is not functional.
* **Self-view background options** : Although available, these options do not function.
* **Built-in camera shutter** : Closing the shutter of the built-in camera will mute the video from the USB camera if it is used as the main video source.
* **PTZ support** : Pan-Tilt-Zoom (PTZ) options are not supported for USB cameras.


