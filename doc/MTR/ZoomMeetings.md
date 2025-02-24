# Join Zoom Meetings with One Button To Push 

When a scheduled Zoom meeting includes a video device, a Join button appears on the home screen right before the meeting begins. 
Cisco devices will recognize Zoom meetings from the schedule and launch the Cisco's custom Zoom interface, bringing better quality and richer functionalities.

<img src="/doc/images/MTR/Zoom_OBTP.png" style="width: 600px" />

## Prerequisites


* Register your device to Control Hub.
  
* Enable third party join in the device **Settings**.

1. Tap **More** on the home screen and select **Settings**
2. Choose **Device settings**
3. Tap **Teams admin settings**
4. On the meetings menu, navigate to **Allow joining third-party meetings**
5. Toggle on **Zoom**

<img src="/doc/images/MTR/ThirdPartyMeetings.png" style="width: 600px" />

## How to schedule

Launching Cisco's custom Zoom interface requires that the [hybrid calendar](https://help.webex.com/en-us/article/n6cwujdb/Deployment-guide-for-Hybrid-Calendar) is enabled for the Workspace in Control Hub. You need to enter the calendar provider, resource group, and email address.

<img src="/doc/images/MTR/Hybrid_Calendar.png" style="width: 600px" />


## How to join

When users schedule Zoom meetings and include devices, a join button appears on the device right before the meeting begins. Simply tap the **Join** button on the home screen. The button appears right before the meeting begins.

## During the meeting

Your device will automatically detect it's a Zoom call and switch to Cisco's custom Zoom UI. This ensures a consistent experience every time you join a Zoom call, no matter how you dial in.

Read more about the in-meeting controls [here](https://help.webex.com/en-us/article/0lobg6/Join-Zoom-Meetings-on-Board,-Desk,-and-Room-Series).

## Note

If you want to disable this feature and keep the current experience (using WebRTC), you can use the following configuration:

xConfiguration MicrosoftTeams Zoom CrossLaunch : Disabled.

