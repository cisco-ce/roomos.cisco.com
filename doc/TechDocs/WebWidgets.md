# Design Guidelines for Web Widgets

The web widget is a RoomOS feature that allows you to display any webpage on the home screen of Cisco devices. It can be configured from your local device controls.

It can be used to show company-wide announcements, reminders for the meeting room, tips to use the device, or any useful link (weather, stocks, news, etc.)

<img src="/doc/images/webwidgets/size.png" alt="Size info" style="max-width: 500px" />


## Which device is it available on?

The web widget can be displayed on all devices from the Desk Series (Desk Mini, Desk, Desk Pro), the Room Series (Room Kit EQ, Room Kit Pro, Room Kit Plus, Room Kit, Room Bar, Room USB), the Board Series (Cisco Board Pro).

The web widget is currently not supported on the Cisco Room Navigator touch controller.

## Recommended font sizes

For optimal readability, font size should be minimum 15px for desk devices (Desk Pro, Desk Mini), 20px for room devices (Board, OSD). We recommend writing short, concise messages.

Recommendations:

* 18-20px for body of text
* 25-40px for titles

<img src="/doc/images/webwidgets/fontsize.png" alt="Font size recommendations" style="max-width: 500px" />

## Recommended padding

Avoid white text on light background. Leave some padding around your content to not overcrowd it.

<img src="/doc/images/webwidgets/padding.png" alt="Padding tips" style="max-width: 500px" />

## General recommendations

For QR codes, we recommend making it at least 140px wide.
If you want to display a regular website (one that was not created specifically for the web widget), we advise to have at least a 125% zoom level for better readability.

<img src="/doc/images/webwidgets/general.png" alt="Qr Code info" style="max-width: 500px"/>

Since the web widget is currently non interactive, we advise to not use any UI elements that could suggest interaction : buttons, links, tabs, etc.

<img src="/doc/images/webwidgets/general2.png" alt="Avoid interative elements" style="max-width: 500px" />
