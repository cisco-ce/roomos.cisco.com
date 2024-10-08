# Join Webex meetings with One Button To Push

When a scheduled Webex meeting includes a video device, a **Join** button appears on the home screen right before the meeting begins.

<img src="/doc/images/MTR/JoinWebex.png" style="width: 600px" />

## Prerequisites     

* Enable third party join in the device **Settings**.
  
1. Tap **More** on the home screen and select **Settings**
2. Choose **Device settings**
3. Tap **Teams admin settings**
4. On the meetings menu, navigate to **Allow joining third-party meetings**
5. Toggle on **Cisco Webex**

<img src="/doc/images/MTR/ThirdPartyMeetings.png" style="width: 600px" />

* Register your device to Control Hub.

The Webex meeting is the Webex optimized experience. 

When skipping the Control Hub activation, you will only get the guest join experience. 

## How to schedule

Invite the Microsoft Teams resource account to the **Webex** meeting by adding the resource account's email as an attendee or forwarding the meeting to it.
The resource account is the account the Teams Rooms device logs into and is what users invite to book the Teams Room. Read more about resource accounts [here](https://learn.microsoft.com/en-us/microsoftteams/rooms/create-resource-account).

For Webex features like "Auto admit - All invited users can join the meeting" with lobby bypass, you need to enable [Hybrid Calendar](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt_b_deploy-spark-hybrid-calendar-service.html) for the invited device in Control Hub. The device must be assigned the same email address as the one associated with that resource.

## How to join

Simply tap the **Join** button on the home screen. The button appears right before the meeting begins.

<img src="/doc/images/MTR/JoinWebex2.png" style="width: 600px" />

## During the meeting

The call controls shown below are available during the meeting. When you're a host or a co-host of a meeting, you get more options such as recording or muting participants. You can read more about host and co-host privileges [here](https://help.webex.com/en-us/article/oprvt9/Host-and-co-host-roles-and-privileges-on-Board,-Desk,-and-Room-Series). 

<img src="/doc/images/MTR/CallControls.jpg" style="width: 600px" />


### Audio and video features 

- [Camera options](https://roomos.cisco.com/doc/MTR/CameraOptions)
- [Presenter Track](https://help.webex.com/en-us/article/9ur0g6/Set-up-PresenterTrack-for-Board-and-Room-Series) for Room Kit Pro and Room Kit EQ

The PresenterTrack feature enables the camera to follow a presenter that is moving about on stage. The tracking stops when the presenter leaves the stage. You can set up the feature from the local device web interface or from Control Hub. 

- [Microphone options](https://roomos.cisco.com/doc/MTR/MicrophoneOptions)
- [Layouts](https://help.webex.com/en-us/article/ndhzl6j/Change-the-screen-layout-in-a-call-on-Board,-Desk,-and-Room-Series) and [People focus](https://help.webex.com/en-us/article/n997hz9/People-focus-on-Board,-Desk,-and-Room-Series)

There are several screen layout options available when you're in a meeting. Different layouts are available when content is being shared. You can change your layout by selecting another one from the Layouts menu. To change your current layout during a call, tap your device or touch controller screen and tap the **Layout** button. Choose the layout you want to use: grid, stack, prominent, or focus.

When you enable people focus, your layouts change dynamically to crop away empty background and optimize each participant’s space on the screen. When enabled, cropping is dynamic and occurs whenever it enhances your layout. People focus is turned off by default. To enable people focus on your device, tap your device or touch controller screen and tap the **Layout** button. Toggle people focus **on**.

- [Webex translation and closed captioning](https://help.webex.com/en-us/article/5geecr/Closed-captioning-on-Board,-Desk,-and-Room-Series) 

All participants can choose whether they want to have closed captioning on the screen of their own device. Tap the **Captions** button from the call controls, and toggle closed captioning on or off. 

### Sharing

- Sharing using an HDMI
- Sharing using an USB-C 
- [Sharing using Miracast®](https://help.webex.com/en-us/article/kfdwufb/Wireless-sharing-with-Miracast%C2%AE)

For more information on sharing, read the **Content sharing** section [here](https://roomos.cisco.com/doc/MTR/GetStartedMTR#content-sharing).

### Webex Webinars

You can join a Webex Webinar as an attendee when the device is included in the invitation. 

More information on about [Webex Webinars as an attendee](https://help.webex.com/z7jt86/).

### Webex whiteboarding

Webex whiteboards are available in Webex meetings. You can automatically see Whiteboards shared by others in the meeting. On Devices with a touch display, you can open whiteboards in collaborative mode, and a new whiteboard can be started from a button in the in-meeting call controls.

Note that save, duplicate, and delete workflows are not offered on devices with Microsoft Teams Rooms. Whiteboards created from a device with Microsoft Teams Rooms will be automatically deleted when the meeting ends.

More information on about [the whiteboard functionality](https://help.webex.com/zfhy55/).

## Limitations

These features are not available during the meeting: gesture recognition, Apple AirPlay, Device Assistant (wake-word based local commands, for example "Ok webex, increase my volume"), Proximity, briefing and classroom mode.  
