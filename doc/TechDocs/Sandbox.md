# Sandbox tutorial

<img src="/docs/images/sandbox/sandbox.png" />

## Introduction

The sandboxes are physical Cisco video devides (Room Kit Plus) located in a remote Cisco office, that you can book for free and try out from your laptop. It allows you to become familiar with the device's web interface, change the device settings and explore the xAPI. As a third party developer, you can also test certain features such as the Webex Assistant, or your web applications.

It requires:

1. An account at [developer.cisco.com](https://developer.cisco.com) (it's quick to create one).
2. The [AnyConnect VPN client](https://developer.cisco.com/site/devnet/sandbox/anyconnect/).
3. 5 minutes to spare, from you reserve the sandbox until it becomes available.

<!-- <img src="/docs/images/sandbox/roomkitpro.jpeg" /> -->

## Limitations

Currently, the sandbox has the following limitations:

- You access as an **integrator** user, not **admin**, so there are many settings and operations you cannot do (for example macro scripting).
- There is no way to physically touch the device or the user interface
- You can't see a screenshot of the video device

## Get started

- Open the sandbox at [cs.co/sandbox](https://cs.co/sandbox) in your web browser.
- Log in with your DevNet user.
- Tap **Reserve** in the top right corner.

<img src="/docs/images/sandbox/reserve.png" />

- Select a duration for your booking. If you are just doing a quick test, please choose a short interval so others can use it when you are done. You can easily extend the time if you want to.
- Wait for the sandbox to become ready. There is a timer in the top right corner showing the time left. Use this time to download and install AnyConnect if you don't already have it.
- When the sandbox is ready, check your email to see that you got a confirmation mail for your booking with login credentials.

**Virtual Private Network / AnyConnect**

For safety and security, the sandbox is available on a separate, virtual private network only for you. To access it, you need to log on to this network.

- Open the AnyConnect client.
- In the Connect (hostname) field, paste your site from the email, typically something like *devnetsandbox-usw1-reservation.cisco.com:21439*.
- You will be prompted for a username and a password, this is also in the confirmation email.
- When AnyConnect says **Connected**, you are good to go.
- If you have technical issues with AnyConnect, check out [this guide](https://devnetsandbox.cisco.com/Docs/VPN_Access/AnyConnect_Connection_Guide.pdf).

<img src="/docs/images/sandbox/anyconnect.png" />

You should now be connected and ready to test. Look in the top right corner of the sandbox, here you will see how much time is remaining, as well as buttons to cancel or extend your booking. Keep this tab open so it's easy to get back.

<img src="/docs/images/sandbox/booking-panel.png" />


## The web portal

<img src="/docs/images/sandbox/web-portal.png" />

The web portal is a web based admin console where you can see the status of your video device and change it's settings.

- Locate the IP address for your sandbox, it is visiible on the video device in the Network Topology view on your sandbox grid, typically something similar to *10.10.20.155*.
- Enter the IP address in your web browser.
- You should now see a page that warns you about the certificate. Since Webex devices are not permanent web sites, they provide self signed sertificates. Accept the certificate to proceed.
- Enter username and password as found in the left sidebar on the sandbox page, typically **integrator / integrator**.

You are now logged in to the device's web interface. Let's get some action.

<img src="/docs/images/sandbox/webui-call.png" />

- Go to the **Call** tab in the web UI, and let's setup a call. You need a number you can dial, for example your personal video URI (eg *myname@acme.com*).
- Type the URI in the **Search or Dial** field.
- Press **Call**.
- Accept the call from your other video client.

You will now be in a real call with your sandbox. It has a loopback cable from the monitor output back to the camera input. This means you should see your own selfview back as far-end video.

<img src="/docs/images/sandbox/selfview.png" />


- Tap the mute button in the web ui. Notice in your video window that the far end participant (sandbox) is now muted.
- End the call. You can also call the other way, by entering the SIP URI from in the email on your personal Webex client (or any video application that supports SIP calling).
- To get more aquainted with the video device, go to the **Settings** tab. Here you can change a lot of settings on the video device, as well as see status info.
- Scroll down and locate the "Time" tab in the settings. Change the time zone to match your local timezone.
- Press **Save**. You have now changed the setting on your device permanently (or rather, until your booking expires).

<img src="/docs/images/sandbox/webui-settings.png" />

<!--
TODO A few more things to test
- Mute/unmute, notice indicators
- Camera control, zoom in a bit (does this work?)
-->

## Terminal / SSH

<img src="/docs/images/sandbox/tshell.png" />

So you want to feel the matrix? With command line / SSH you can log on to the video device and use the xAPI directly.

- Open your favourite SSH client. Connect to the device with the same IP, username and password as on the web portal, eg like this:
`ssh integrator@10.10.20.155`
- Enter the password. You now have direct access to the xAPI, the video device's API.
- View a configuration, eg `xConfiguration Time`.
- This will list of all the time configs on your device. Notice that your time zones changes from above is there as well.
- Press tab for auto completion when using the shell (T-Shell), and poke around in there. Starting points are *xConfig*, *xStatus* and *xCommand*.
- To start a call, type `xCommand Dial Number: yournumber@yoursite.com`. Replace the number with your own.
- To open a web page on the device, type `xCommand UserInterface WebView Display Url: cisco.com`.
- Since the device is in call, it will automatically share the web view back to you, and you should see it appear as a presentation in the call.
- To end the call, type `xCommand Call Disconnect`.
- To learn more about the xAPI, visit [roomos.cisco.com](https://roomos.cisco.com).


<!--
## 3rd Party web developer
How to turn on remote debugging, viewing the web console
 -->

## Cleanup

That's a very quick first visit to the video device. To learn more about capabilites, tools and APIs, see [roomos.cisco.com](https://roomos.cisco.com).

The sandbox is automatically cleaned up for the next user - but if you end your session before the booking expires, please feel free to unbook it yourself from the sandbox page, so that others can use it. ❤️

