# Add in-product help using macros

You can add in-product help to your device to help users get familiar with the basic use of Cisco devices for Microsoft Team Rooms.

## Add the in-product help macro on an individual device 

By deploying this macro, a Learn extension is added to the side control panel of a Room Navigator. It opens a webview which contains short help videos that present basic steps for:

*   Scheduling meetings
*   Joining meetings
*   Sharing content

[Download](https://cdn.bfldr.com/YM20Y3NQ/as/8tz3fg355f5k5txg8x36cmn/MTR_Control_Panel_Adoption) and watch how to use this macro on your device.

You can [customize which videos are available](#customize-which-videos-your-users-can-see) to match your deployment. 

The videos are available [here](https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator/?theme=dark). 

**Note:**
*   Only available on Room Navigator.
*   You need to enable the macro on each device individually.
*   Requires Control Hub registration.
*   Enable macros for devices in your organization. In Control Hub, go to **Devices** > **Settings** > **Macros**, and toggle on **Allow Control Hub to manage macros**.



```javascript
import xapi from 'xapi';

//This macro will create a learn button for MTR if a Cisco Navigator is attached to the device

xapi.Event.UserInterface.Extensions.Panel.Clicked.on(event => {
  if (event.PanelId === 'learn') {
    xapi.Command.UserInterface.WebView.Display({Target: 'Controller', Url: 'https://roomos.cisco.com/videos/mtr/navigator'});
  }
});

xapi.Command.Peripherals.List({Connected: true, Type: "TouchPanel" }).then((peripherals) => {
  if (peripherals.Device) {
    xapi.Command.UserInterface.Extensions.Panel.Save({PanelId: 'learn'}, `
    <Extensions>
      <Version>1.11</Version>
      <Panel>
        <Order>1</Order>
        <PanelId>learn</PanelId>
        <Origin>local</Origin>
        <Location>ControlPanel</Location>
        <Icon>Lightbulb</Icon>
        <Name>Learn</Name>
        <ActivityType>Custom</ActivityType>
      </Panel>
    </Extensions>
    `)
  }
});
```

1. Save this [JavaScript file](https://cdn.bfldr.com/YM20Y3NQ/at/qjgzt72r9x7fgbv3twn4xtsr/In-product_help_Cisco_devices_for_Microsoft_Teams_Rooms_with_Navigator1js.zip) to your computer. The file will initially be downloaded as a ZIP folder. Be sure to extract its contents. Keep the same file name.
2. From Control Hub, under the Devices section, select the device you want to enable the macro on. On the device details page, go to the Configurations card and click **Macros**.

<img src="/doc/images/MTR/helpVideo2.png/" style="width: 500px">
    
4. Click **Add macro**. Upload the saved JavaScript file with the filename: "Macro deployment for touch panel.js”.

<img src="/doc/images/MTR/helpVideo3.png/" style="width: 500px">
    
6. Click **Next** and **Save**.

<img src="/doc/images/MTR/helpVideo4.png/" style="width: 500px">
    
8. Click **Save** again when you’re ready.

<img src="/doc/images/MTR/helpVideo6.png/" style="width: 500px"> 
    

You should now have a new button in the extensions section of the side control panel on the Room Navigator connected to your device.

## Customize which videos your users can see

By adding specific tags to the website link, you can choose the videos to show or hide from your users on the tutorials page based on what’s relevant to your organization and its use cases.

### Hide videos

To hide PowerPoint Live, AirPlay, or Miracast videos:

Add `?hide=powerpoint` or `?hide=airplay` or `?hide=miracast` to the end of your link. 

Example:

*   `https://roomos.cisco.com/videos/mtr/navigator?hide=powerpoint`
*   `https://roomos.cisco.com/videos/mtr/navigator?hide=airplay`
*   `https://roomos.cisco.com/videos/mtr/navigator?hide=miracast`

To hide all at once:

Add `?hide=powerpoint,airplay,miracast`

Example:

*   `https://roomos.cisco.com/videos/mtr/navigator?hide=powerpoint,airplay,miracast`

**Note:** If you use commas, browsers may change them to `%2C`. This is normal. The filter will still work.
So, `?hide=powerpoint,airplay,miracast` may show as `?hide=powerpoint%2Cairplay%2Cmiracast`

You can combine these hiding tags with other settings:

Example: `https://roomos.cisco.com/videos/mtr/navigator?hide=powerpoint,airplay,miracast&theme=classic&qr=false`

Tags you can use to hide content:

*   `powerpoint` = PowerPoint Live sharing videos
*   `airplay` = AirPlay sharing videos
*   `miracast` = Miracast wireless sharing videos
*   `wired` = Wired connection sharing videos
*   `wirelessShare` = General wireless sharing videos
*   `qr` = QR code join videos

### Filter by software version

To show videos for a specific software version:

Add `?version=RoomOS 11`

Example:

*   `https://roomos.cisco.com/videos/mtr/navigator?version=RoomOS 11`

To show videos from all versions:

Add `?version=all`

Example:

*   `https://roomos.cisco.com/videos/mtr/navigator?version=all`

No version tag:

If you don’t add a version, the site shows only the default (usually latest) videos.

You can mix version and hide tags:

Example:

*   `https://roomos.cisco.com/videos/mtr/navigator?version=RoomOS 11&hide=powerpoint`

### Check your changes:

*   The videos you hid will not show up for your users.
*   If all videos in a section are hidden, that section goes away.
*   Other sections have not changed.
*   Version filtering only shows videos for the version you picked.
