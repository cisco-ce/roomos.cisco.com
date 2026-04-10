# Join Webex and Zoom Meetings

You can easily join Webex and Zoom meetings, as well as make Webex calls. For scheduled meetings, you can join instantly using One Button To Push (OBTP).

## Join Webex Meetings

The Join Webex button is enabled automatically when the MTR device is registered to Webex.

1. Swipe from the right on the home screen to open the control panel.
2. Tap **Webex**.

<img src="/doc/images/MTR/Webex_Zoom.png" style="width: 200px" />

3. Enter the meeting number that is listed in the Webex Meetings invite, and tap **Join** to join the meeting. When you're joining a Personal Room meeting, you can use the person's name or email address to search for their Personal Room.

Read [this article](https://help.webex.com/en-us/article/pq3vkab/Join-Webex-meetings-from-Board,-Desk,-and-Room-Series) for more information on Webex meetings.


## Place Webex Calls

This feature allows you to access the RoomOS calling features. You can also place SIP calls through Webex.

1. Swipe from the right on the home screen to open the control panel.
2. Tap **Call**.

<img src="/doc/images/MTR/ControlPanel.png" style="width: 200px"/>
  
3. You can call someone from your Favorites, Recents or Directory list. You can also start typing the name, video address, or number of your contact in the search field. 

<img src="/doc/images/MTR/CallMenu.jpg" style="width: 600px"/>

4. Select a contact and tap the **Call** button.

<img src="/doc/images/MTR/RoomOSCall.jpg" style="width: 250px"/>


### Add a contact to your Favorites 

You can mark contacts that you call often as favorites. The contacts get added to your **Favorites** list, where you can easily find them. You can add a contact from your **Recents** or **Directory** list to your **Favorites**. Read more about it [here](https://help.webex.com/en-us/article/n1tk4q6/Edit-your-favorite-contacts-on-Board,-Desk,-and-Room-Series).

### Edit your favorite contacts

You can edit your favorite contacts in order to find them more easily. You can edit the nicknames and video addresses of your favorite contacts. Read more about it [here](https://help.webex.com/en-us/article/n1tk4q6/Edit-your-favorite-contacts-on-Board,-Desk,-and-Room-Series).


## Join Zoom Meetings

1. Swipe from the right on the home screen to open the control panel.
2. Tap **Zoom**.

<img src="/doc/images/MTR/Webex_Zoom.png" style="width: 200px" />

3. Enter the code provided in your calendar invite or at the end of the meeting link in order to join a Zoom Meeting with your device. If you're the host, toggle on I'm the host and write the host key.

Read [this article](https://help.webex.com/en-us/article/0lobg6/Join-Zoom-Meetings-on-Board,-Desk,-and-Room-Series) for more information on Zoom meetings and in-meeting controls.

### Enabling Zoom and Calling Services

In order to join Zoom meetings, you need to **Enable Zoom** in Control Hub. Read [here](https://help.webex.com/en-us/article/zai3j4/Enable-join-Zoom-meetings-on-Board,-Desk,-and-Room-Series) to follow the steps.

If your calling services are set to **None**, the calling options may appear greyed out. However, you can still use certain features:

* Calling to Webex will work even if the options are greyed out.
* Calling to Zoom will not work because you won't be able to connect through the required gateway unless calling in Webex is enabled.

To use full calling functionality, ensure that calling services are enabled in your Control Hub Settings.

## Join Meetings with One Button to Push

When a scheduled Webex or Zoom meeting includes a video device, a **Join** button appears on the home screen right before the meeting begins.

### Join Webex meetings

<img src="/doc/images/MTR/JoinWebex.png" style="width: 600px" />

**Prerequisites**     

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

**How to schedule**

Invite the Microsoft Teams resource account to the **Webex** meeting by adding the resource account's email as an attendee or forwarding the meeting to it.
The resource account is the account the Teams Rooms device logs into and is what users invite to book the Teams Room. Read more about resource accounts [here](https://learn.microsoft.com/en-us/microsoftteams/rooms/create-resource-account).

For Webex features like "Auto admit - All invited users can join the meeting" with lobby bypass, you need to enable [Hybrid Calendar](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/cloudCollaboration/spark/hybridservices/calendarservice/cmgt_b_deploy-spark-hybrid-calendar-service.html) for the invited device in Control Hub. The device must be assigned the same email address as the one associated with that resource.

**How to join**

Simply tap the **Join** button on the home screen. The button appears right before the meeting begins.

<img src="/doc/images/MTR/JoinWebex2.png" style="width: 600px" />

**During the meeting**

The call controls shown below are available during the meeting. When you're a host or a co-host of a meeting, you get more options such as recording or muting participants. You can read more about host and co-host privileges [here](https://help.webex.com/en-us/article/oprvt9/Host-and-co-host-roles-and-privileges-on-Board,-Desk,-and-Room-Series). 

<img src="/doc/images/MTR/CallControls.jpg" style="width: 600px" />


**Audio and video features** 

- [Camera options](https://roomos.cisco.com/doc/MTR/CameraOptions)
- [Presenter Track](https://help.webex.com/en-us/article/9ur0g6/Set-up-PresenterTrack-for-Board-and-Room-Series) for Room Kit Pro and Room Kit EQ

The PresenterTrack feature enables the camera to follow a presenter that is moving about on stage. The tracking stops when the presenter leaves the stage. You can set up the feature from the local device web interface or from Control Hub. 

- [Microphone options](https://roomos.cisco.com/doc/MTR/MicrophoneOptions)
- [Layouts](https://help.webex.com/en-us/article/ndhzl6j/Change-the-screen-layout-in-a-call-on-Board,-Desk,-and-Room-Series) and [People focus](https://help.webex.com/en-us/article/n997hz9/People-focus-on-Board,-Desk,-and-Room-Series)

There are several screen layout options available when you're in a meeting. Different layouts are available when content is being shared. You can change your layout by selecting another one from the Layouts menu. To change your current layout during a call, tap your device or touch controller screen and tap the **Layout** button. Choose the layout you want to use: grid, stack, prominent, or focus.

When you enable people focus, your layouts change dynamically to crop away empty background and optimize each participant’s space on the screen. When enabled, cropping is dynamic and occurs whenever it enhances your layout. People focus is turned off by default. To enable people focus on your device, tap your device or touch controller screen and tap the **Layout** button. Toggle people focus **on**.

- [Webex translation and closed captioning](https://help.webex.com/en-us/article/5geecr/Closed-captioning-on-Board,-Desk,-and-Room-Series) 

All participants can choose whether they want to have closed captioning on the screen of their own device. Tap the **Captions** button from the call controls, and toggle closed captioning on or off. 

**Sharing**

- Sharing using an HDMI
- Sharing using an USB-C 
- [Sharing using Miracast®](https://help.webex.com/en-us/article/kfdwufb/Wireless-sharing-with-Miracast%C2%AE)

For more information on sharing, read the **Content sharing** section [here](https://roomos.cisco.com/doc/MTR/GetStartedMTR#content-sharing).

**Webex Webinars**

You can join a Webex Webinar as an attendee when the device is included in the invitation. 

More information on about [Webex Webinars as an attendee](https://help.webex.com/z7jt86/).

**Webex whiteboarding**

Webex whiteboards are available in Webex meetings. You can automatically see Whiteboards shared by others in the meeting. On Devices with a touch display, you can open whiteboards in collaborative mode, and a new whiteboard can be started from a button in the in-meeting call controls.

Note that save, duplicate, and delete workflows are not offered on devices with Microsoft Teams Rooms. Whiteboards created from a device with Microsoft Teams Rooms will be automatically deleted when the meeting ends.

More information on about [the whiteboard functionality](https://help.webex.com/zfhy55/).

**Limitations**

These features are not available during the meeting: gesture recognition, Apple AirPlay, Device Assistant (wake-word based local commands, for example "Ok webex, increase my volume"), Proximity, briefing and classroom mode.  


### Join Zoom Meetings

When a scheduled Zoom meeting includes a video device, a Join button appears on the home screen right before the meeting begins. 
Cisco devices will recognize Zoom meetings from the schedule and launch the Cisco's custom Zoom interface, bringing better quality and richer functionalities.

<img src="/doc/images/MTR/Zoom_OBTP.png" style="width: 600px" />

**Prerequisites**


* Register your device to Control Hub.
  
* Enable third party join in the device **Settings**.

1. Tap **More** on the home screen and select **Settings**
2. Choose **Device settings**
3. Tap **Teams admin settings**
4. On the meetings menu, navigate to **Allow joining third-party meetings**
5. Toggle on **Zoom**

<img src="/doc/images/MTR/ThirdPartyMeetings.png" style="width: 600px" />

**How to schedule**

Launching Cisco's custom Zoom interface requires that the [hybrid calendar](https://help.webex.com/en-us/article/n6cwujdb/Deployment-guide-for-Hybrid-Calendar) is enabled for the Workspace in Control Hub. You need to enter the calendar provider, resource group, and email address.

<img src="/doc/images/MTR/Hybrid_Calendar.png" style="width: 600px" />


**How to join**

When users schedule Zoom meetings and include devices, a join button appears on the device right before the meeting begins. Simply tap the **Join** button on the home screen. The button appears right before the meeting begins.

**During the meeting**

Your device will automatically detect it's a Zoom call and switch to Cisco's custom Zoom UI. This ensures a consistent experience every time you join a Zoom call, no matter how you dial in.

Read more about the in-meeting controls [here](https://help.webex.com/en-us/article/0lobg6/Join-Zoom-Meetings-on-Board,-Desk,-and-Room-Series).

**Note**

If you want to disable this feature and keep the current experience (using WebRTC), you can use the following configuration:

`xConfiguration MicrosoftTeams Zoom CrossLaunch : Disabled.`

Zoom calls do not appear in the Recent Calls list when dialed from the touch panel or user interface. As a result, redialing these calls directly from the Recents section is not supported. This change was implemented to prevent potential exposure of sensitive information.

