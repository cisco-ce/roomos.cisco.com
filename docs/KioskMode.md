# Kiosk mode

Kiosk mode let's you replace the home screen of your Webex Device with your own custom made web application that you host and maintain yourself.

<img src="/docs/images/kiosk/overview.png" />

The typical use case is reception areas, where you want to tightly control how visitors use the Webex devices, as well as provide your own branding to the first-time experience. Setting the device in kiosk mode makes it possible to disable all non-video functions such as whiteboarding, screensharing etc and disabling users from meddling with the settings of the video device.

*Typical flow of a kiosk use case:*

<img src="/docs/images/kiosk/flow.png" />


Kiosk mode still allows you to call with the device. In call, the user experience is the same as in any call, but as soon as the call is ended, the device goes back to the kiosk web page.

Typical use cases could be:

* Virtual receptionist
* Visitor registration
* Facility overview
* Remote expert services

## Supported devices

The kiosk mode is supported on Webex devices with touch screen, such as:

* Webex Board
* Webex Desk, Pro and Mini

## Configuring it

Configurations that control kiosk mode:

```
xConfiguration UserInterface Kiosk Mode: <Off, On>
xConfiguration UserInterface Kiosk URL: <S: 0, 255>
```

Set the **URL** to the web site you want to display, then set **Mode** to **On**. The device should now immediately show the web app as your new home page. Notice that you cannot swipe or tap anywhere to exit the kiosk mode. As a kiosk admin, it's your responsibility to create a kiosk that gives the user a good user experience.

Web engine obviously need to be on as well (default):

```
xConfiguration WebEngine Mode: On
```

## Sample kiosk

To try the feature yourself, we provide a hosted sample kiosk "Webex Bank" that you can quickly configure to test or demo the feature. It looks like the kiosk shown in the screenshots in this guide.

Public URL: https://cisco-ce.github.io/roomos-samples/kiosk-example/

## Placing a call

To create buttons to start calls, you can add link on your web page using the `sip` protocol. For example:

```
<a href="sip:fireplace@ivr.vc">Call the fireplace</a>
<a href="erica.talking@ivr.vc">Call Erice</a>
```

Make sure the config for the SIP handler is turned on:

```
xConfiguration WebEngine Features SipUrlHandler: On
```

If the user taps the link, a standard Webex calling card (with avatar, if personal user) will appear, which the user can tap to start the call.

As soon as the call ends, the user is taken back to the kiosk web app.

## Accessing settings

For trouble shooting, to acccess the settings menu, use the 'secret' gestures: Tap *three* times with *three* fingers on screen.
This should open the settings menu, so you can find the IP address of the device, see diagnostic messages etc.

<img src="/docs/images/kiosk/settings.png">

Note that the secret gesture is more of a child safety mechanism to reduce the chance of the kiosk being in a bad state after some adventurous users have played with it, not a security feature.

## Recommended setup

The kiosk mode itself only replaces the standard Webex Device home screen with a web app. In most scenarios, you probably want to set these configurations as well, to prevent users from tampering (accidentally) with the devicee:

```
// Turn off ultrasound pairing, so user's cannot pair:
xConfiguration Audio Ultrasound MaxVolume: 0

// Disable voice assistant:
xConfiguration UserInterface Assistant Mode: Off
```

If you want to limit the settings menu so that even users who knows about the gesture for accessing settings, can't factory reset the device etc, you can lock it:

```
xConfiguration UserInterface SettingsMenu Mode: Locked
```

If you want to prevent the users from ending the call (only let far end do it), or disable other in-call features, you can do that by changing the [UserInterface Features configs](/xapi/search?domain=UserInterface+feat&search=userinterface+features&Type=Configuration)

You might also want to review the [Standby configurations](/xapi/search?search=standby&Type=Configuration). In kiosk mode, the system will never enter half wake state, but it will go to standby after the specified amount of minutes, just like in normal mode.

You may also want to tune the microphone and camera settings to whatever makes sense for the location and use case of your particular kiosk, for example make sure [noise reduction](/xapi/Configuration.Audio.Microphones.NoiseRemoval.Mode/?search=noise) is active, that [speaker track](/xapi/search?search=speakertrack&Type=Configuration) is off and that the camera zoomed and panned appropriately.


## Out of service mode

If the kiosk is not able to access the URL, it will display a service mode page informing the user. The page also displays the IP address of the device, and a retry button.

<img src="/docs/images/kiosk/servicemode.png" />

## Accessing the xAPI

Currently (January 2022) it is not possible for the kiosk web app to access the xAPI of the video device. That means that the only video features you can use from the kiosk is to place calls.

## Automatic reset / timeout

The kiosk web app itself is responsible for 'cleaning up' the kiosk after the user, for example after a few minutes of inactivity.

This can be done with common web patterns, such as listening for touch events on the the body element of the web page, resetting a timer each time a user touches the screen, and resetting the kiosk if the timer reaches zero.


<!--
## Integrating with macros (esp auto-call)

## Out of service mode

## Altnerative: non-web kiosk mode

-->
