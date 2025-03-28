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

``` xConfiguration Video Input Connector <5> InputSourceType: camera ```

<img src="/doc/images/MTR/USBMainVideo1.png" style="width: 500px"/>
