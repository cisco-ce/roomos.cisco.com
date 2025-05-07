# Classroom camera mode

## Set up classroom on Room Series

The classroom setup makes it easy to set up, manage, and use a room to deliver training and education sessions to groups of people. Whether the presenter is in the room or calling in from a remote location, participants receive a good and engaging experience. 

The classroom setup has the following predefined room modes that accommodate different scenarios.

### Local presenter mode
*	The presenter is in the room. This mode also covers the case when someone in the local audience asks a question (Q&A).
*	If automatic switching is enabled (default), the device switches to this mode when the presenter camera detects a presenter in the room.
*	Sends video from the presenter camera to the far end. In the Q&A case: Sends split-screen video from the presenter camera and the person asking the question (audience camera) to the far end.

### Remote presenter mode
*	The presenter is calling in.
*	If automatic switching is enabled (default), the room device switches to this mode when the presenter camera doesn't detect a presenter in the room.
*	Sends video from the audience camera to the far end.

### Discussion mode
*	For discussions between different sites. A local presenter is in the room.
*	Always use the touch controller to activate this mode.
*	Sends video from the audience camera to the far end.

The classroom setup is available as a room type template. When you set up a room using a template, a set of configurations is pushed automatically to the device. It is important that the room is set up correctly, and that the cameras are connected exactly as specified. Otherwise, the configurations will not match the room.

## Required equipment

### One of the following devices:
*	Board Pro G2
*	Room Kit EQ (Codec EQ), Room Kit EQX
*	Room Kit Pro (Codec Pro)
*	Room Bar Pro

### Screens:
*	You can use one or more screens (the maximum number of screens depends on your device).
*	For most setups, we recommend that you use two or more screens. Place the main screen at the front of the room. Place a second screen on the side or at the back, so that a local presenter can see the remote audience.

### Two cameras:
*	Audience camera: Use the integrated camera for devices that have that. For other devices, we recommend the Quad Camera or SpeakerTrack 60 camera. We recommend a camera that supports speaker tracking, but it is also possible to use a camera without speaker tracking capabilities.
*	Presenter camera: A PTZ 4K or Precision 60 camera with presenter tracking enabled.

### Microphones:

We recommend a Cisco Ceiling Microphone Pro for good coverage of the room. Also other microphone solutions can be used.

### Speakers:

Use the integrated speakers for devices that have that. For other devices, we recommend good quality stereo speakers placed next to the main screen at the front of the room.
Cisco touch controller

## Classroom setup limitations

The classroom setup doesn't support this functionality:
*	Directional audio
*	Snap to whiteboard

## Room arrangement examples

These diagrams show examples of how to arrange screens, cameras, and microphones, and where to place people for the best experience.

<img src="/doc/images/MTR/classroom-example1.jpg" style="width: 400px"  />

<img src="/doc/images/MTR/classroom-example2.jpg" style="width: 400px" />
 
## Connect cables

Connect the cameras to the device as shown in the diagrams. Following the diagram ensures that the configurations that are automatically pushed to the device when you select the classroom room type template, match your actual room setup.

### Board Pro G2

<img src="/doc/images/MTR/classroom-BoardProG2.jpg" style="width: 700px" />
 
The device's integrated camera is the audience camera.

### Codec EQ

<img src="/doc/images/MTR/classroom-EQ.jpg" style="width: 700px"  />

### Room Kit EQX

 <img src="/doc/images/MTR/classroom-EQX.jpg" style="width: 700px"  />
 
Keep all cables connected as described in the Room Kit EQX installation guide. This includes the cables for the integrated camera and screens. You only have to connect external cameras and screens: the presenter camera and the third screen.
*	HDMI outputs 1 and 2 are for the integrated screens. An external screen may be connected to HDMI output 3.
*	The audience camera on HDMI input 1 is the integrated camera.
 

### Codec Pro

<img src="/doc/images/MTR/classroom-CodecPro.jpg" style="width: 700px"  />
 
If the audience camera is a SpeakerTrack 60 camera, then it uses two HDMI inputs. 

<img src="/doc/images/MTR/classroom-CodecProST60.jpg" style="width: 700px"  />

### Room Bar Pro

 <img src="/doc/images/MTR/classroom-RoomBarPro.jpg" style="width: 700px"  />
 
The device's integrated camera is the audience camera.

## Configure the device

We recommend you to be in the same room when setting up classroom. Otherwise, it is difficult to set up PresenterTrack properly.

1.	Use the touch controller to stop sharing the video from the presenter camera. It is important that video from the presenter camera is not displayed on any screen while setting up classroom.

2.	Access the device web interface: Open a web browser and type in http(s):// *device ip or hostname*.

3.	Go to **Settings**, open the **Configurations** tab, and navigate to the **Video > Input > Connector n** section and set the following (n is the number of the Connector where the presenter camera is connected):
    - InputSourceType: camera
    - PresentationSelection: Manual
    - Quality: Motion
    - Visibility: Never
    - CameraControlMode: On

Click **Save** for the changes to take effect.

4.	Go to **Settings**, open the **Audio and Video** tab, and click **Presenter Track**. Then, follow the instructions on the web page to set up the PresenterTrack feature for the presenter camera. This feature enables the camera to follow a presenter that is moving about on stage.

5.	Go to **Settings**, open the **Configurations** tab, and navigate to **Cameras > PresenterTrack > PresenterDetectedStatus**. Then, choose whether to enable (default) or disable automatic switching between local presenter and remote presenter modes. Regardless of this setting, the room mode will not change automatically when in discussion mode. 

Click **Save** for the changes to take effect.

6.	If the default screen and layout behavior doesn't suit your setup, you must configure the screens and layouts using the following settings:
    - **Video > Monitors**: Defines the number of different layouts in your room setup.
    - **Video > Output > Connector n > MonitorRole**: Defines which layout each screen gets. Screens with different monitor roles get different layouts. 

7.	Go to **Settings**, open the **Room Types** tab, and click the **Classroom** thumbnail to push the corresponding configuration to the device.

## Switching between room modes

Switching between room modes can be done in two ways: 
*	Manual: Using the buttons on the touch controller.
*	Automatic: Based on who is speaking and whether a local presenter is present on stage. Automatic switching is only between the *local presenter* and *remote presenter* modes. Automatic switching is not available if the current mode is *discussion*.

Automatic switching is supported only when the PresenterTrack feature is enabled. Set the configuration **Cameras PresenterTrack Enabled** to **True**. If you want to disable it, set the configuration to **False**.

With automatic switching:
*	The device switches to the *local presenter* mode when a person is detected in the PresenterTrack trigger zone.
*	The device switches to the *remote presenter* mode when the local presenter, who is tracked, leaves the stage.
*	If someone in the local audience asks a question when the device is in *local presenter* mode, the device sends split-screen video showing both the presenter and the person asking the question. This behavior requires a Quad Camera or SpeakerTrack 60 camera as audience camera, and that *speaker tracking* is switched on.

## Using the classroom mode

The classroom setup is designed for easy use of rooms where you deliver training and education sessions. The setup helps bringing together groups from different sites. Whether the presenter is in the room or calling in from a remote location, participants receive a good and engaging experience.

### Change room mode during a meeting

Your administrator may or may not have set up the room to switch between the local presenter and remote presenter modes automatically. If automatic switching is not enabled, use the touch controller to switch between room modes manually.

With automatic switching:

* Local presenter mode is used when a presenter is detected on the local stage.
* Remote presenter mode is used when no presenter is detected on the local stage.

Always use the touch controller to choose discussion mode.

#### Switch between room modes manually

1. On the touch controller, swipe open the side control panel and tap **Classroom**.
   <img src="/doc/images/MTR/classroom-sidepanel.png" style="width: 400px"  />
2. Tap the mode that you want to change to: **Local Presenter**, **Remote Presenter**, or **Discussion**. The current mode is highlighted.

**NOTE:** If your administrator hasn't disabled automatic switching, the room mode will continue to change according to the automatic switching rules listed above.
