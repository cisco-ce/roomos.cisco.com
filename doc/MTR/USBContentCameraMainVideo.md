# USB Content Camera Support

RoomOS devices now support USB cameras, allowing any USB 2.0 camera that supports the MJPEG format to function effectively. This feature is available in both Microsoft Teams Rooms and Webex mode, applicable during and outside of meetings. Users can select the content camera from the share source using the RoomOS user interface or through the Microsoft Teams Rooms application interface. This functionality is compatible with the current portfolio of devices, including the Room Series (Bar, Bar Pro, Kit EQ/EQX, Kit Pro), Board Series (Pro and Pro G2), and Desk Pro. USB cameras are compatible for both content sharing and as the main video source.

No configuration is required when using a content camera. Simply plug the camera into the Type A input on the product. Currently, we support up to two USB input sources, allowing for the connection of two USB cameras.

## USB Content Camera for content sharing
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
|Desk Pro|	4,5	|4k@30	|USB 2.0 Type A|
|Room Bar Pro|	4,5	|4k@30	|USB 2.0 Type A|
|Room Bar|	4,5	|4k@30	|USB 2.0 Type A|
|Board Pro|	4,5	|4k@30	|USB 2.0 Type A|
|Board Pro G2|	4,5	|4k@30	|USB 2.0 Type A|
|Codec Pro|	7	|4k@30	|USB 2.0 Type A|
|Room Kit EQ/X|	5,6	|4k@60 & higher	|USB 3.0 Type A|

### Limitations for USB Content Cameras
   
  * **Snapshot Support**: Navigator previews require cameras that support snapshots. Note that the Logitech Scribe is known not to support this feature.
  * **Device Misidentification**: Some USB cameras may be incorrectly flagged as headsets, which can affect their functionality.
  * **Audio Interference**: When a USB camera is connected to the USB port under the Deskpro, there may be interference with the aux jack audio. To avoid this, connect the USB camera to the ports located at the back.
  * **Power Requirements**: If the USB cable connecting the camera is significantly long, external power may be necessary to ensure proper operation.

## USB Content Camera as Main Video Source

### RoomOS

To use the USB content camera as the main video source, set the InputSourceType to 'camera' on the device web interface or Control Hub.

``` xConfiguration Video Input Connector <Id> InputSourceType: camera ```

<img src="/doc/images/MTR/USBMainVideo1.png" style="width: 500px"/>

#### Selecting USB Content Camera as Main Video on a Touch Screen

<img src="/doc/images/MTR/USBMainVideo2.png" style="width: 500px"/>

Open the sidebar and select "Camera".

<img src="/doc/images/MTR/USBMainVideo3.png" style="width: 500px"/>

Select "Manual" and then the USB Camera in the dropdown. The camera can be rotated 180 degrees.

#### Selecting USB Content Camera as Main Video on a Navigator

<img src="/doc/images/MTR/USBMainVideo4.png" style="width: 500px"/>

<img src="/doc/images/MTR/USBMainVideo5.png" style="width: 500px"/>

Open control panel on navigator and select "Camera" then select "Manual".

<img src="/doc/images/MTR/USBMainVideo6.png" style="width: 500px"/>

<img src="/doc/images/MTR/USBMainVideo7.png" style="width: 500px"/>

Select the USB Camera on the left. The camera can be rotated 180 degrees.

Alternatively, use the following command to select the USB camera as main video:

``` xcommand Video Input SetMainVideoSource SourceId: <ID> ```

### Microsoft Teams Rooms

You can follow the same steps as RoomOS outlined above using the sidebar and navigator settings to select camera options on the Microsoft Teams Rooms.

Alternatively you can use the following xcommand to set the USB camera as main video on the Microsoft Teams Rooms:

``` xCommand Video Input SetMainVideoSource SourceId: <ID> ``` 

#### Limitations for USB Content Cameras as Main Video Source

* **Manual Operation Only** : When used as the main video source, automatic options are disabled; only manual operation is supported.
* **People Count**: This feature is not functional.
* **Self-view Background Options** : Although available, these options do not function.
* **Built-in Camera Shutter** : Closing the shutter of the built-in camera will mute the video from the USB camera if it is used as the main video source.
* **PTZ Support** : Pan-Tilt-Zoom (PTZ) options are not supported for USB cameras.

