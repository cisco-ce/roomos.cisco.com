# RoomOS WebEngine Developer Guide

<img src="/doc/images/poster.png" style="margin-left: 15%; width: 70%">

## Purpose and audience

This guide describes the feature set of RoomOS web engine for Cisco's Webex Devices. The target audience is web developers or stake holders that need a technical overview of the capabilities and limitations of the web view.

Separate documentation details how to enable the settings in Control Hub and configure the web engine, and will not be covered here.

## Short summary

Don't have time to read all the details? Summary: It is a single-tab Chromium browser with most modern web technologies available, running on an embedded device. When developing for it, use best-practise web standards and develop with a slightly older iPad web browser in mind.

Oh - and remember to test on the intended devices early!

## Which features of RoomOS uses the web engine?

* Third party web apps (Miro, Jira, Trello, Realtime Board, ...)
* Digital signage
* WebRTC third party calling (Microsoft Teams, Google, ...)
* Webex embedded apps
* Web views opened from macros and third party extensions (buidling maps, evacuation maps, instructional videos, ...)
* Enterprise Content Management (cloud documents available as integration)

<img src="/doc/images/usecases.png" style="margin-left: 10%; width: 80%">

*Some example of use cases*

## Which browser engine is used?

The web engine is based on Chromium / Qt WebEngine with V8 JavaScript. The Chromium version is upgraded every time Cisco updates the Qt version in RoomOS, meaning it will not be as up-to-date as your Chrome laptop version, but will be updated periodically. In addition, security patches are added individually more often.

You can inspect the version at any time by looking at the user agent, eg by visiting http://whatsmyuseragent.org/ on your device.

As of May 2022, the Chromium version is 87.

## Which Cisco devices are web compatible?

Any 'newer' devices, such as the Cisco Board series, the Cisco Room series and the Cisco Desk series, except the Desk Hub. The DX series and the SX series are not supported.

Both cloud and on-premise deployments are supported.

## What about devices without a touch screen?

Devices such as Room Kits that are controlled with a separate touch controller, such as a Touch 10, can still open web views programatically on the main screen, for example to show instructions, maps etc. Macros and external integrations can use the [webview xAPIS](https://roomos.cisco.com/xapi/search?search=userinterface+webview&Type=Command) to open and close desired URLs.

See also *API-driven views* below.

## When is web data stored / deleted?

Web features typically store user data in cookies, cache, local storage etc. The rules for how these data are kept/deleted is different for different features:

* Signage: the data is persisted and never deleted automatically, but can be deleted with the manual command
* Web apps: data is persisted but by default deleted once every day. This can be disabled by setting [xConfiguration RoomCleanup AutoRun ContentType WebData](https://roomos.cisco.com/xapi/Configuration.RoomCleanup.AutoRun.ContentType.WebData/) to Off. This is recommended for personal devices at home. All web apps share the same profile, so you cannot delete data for web apps individually.
* WebRTC: Data is deleted after a call ends
* Programmatic web views: Same as web apps
* Embedded apps: data is deleted after a call ends

Any web data can be deleted manually with [xCommand WebeEngine DeleteStorage](https://roomos.cisco.com/xapi/Command.WebEngine.DeleteStorage).

## Description of  web features

### Digital signage

Digital signage is used to show web content when the device is not in use, similar to a screen saver, for example showing employee information, corporate news etc.

This replaces the normal half-wake state of the device that typically says *Tap the screen to start* or similar. The admin can configure which URL will be loaded, and whether the web supports user interactions or not. The signage web view shows a footer at the bottom to inform the user about how to exit the mode.

### Web Apps

Web apps are available as activity icons on the home screen, and lets you launch interactive web apps (URLs) in a full screen view. The admin can configure a list of URLs and names. Icons are automatically fetched from the web site('favicon'), but can be manually overriden if desired.

Typical apps can be other whiteboarding services, Office 365, Trello, Wikipedia, YouTube, or company internal web pages and tools.

Web apps can also be installed by the local user, from the settings menu of the device. They are not supported on devices without touch screens.

<img src="/doc/images/webapps.png" style="margin-left: 15%; width: 70%">

<img src="/doc/images/local-web-apps.png" style="margin-left: 15%; width: 70%">


### API-driven views

Embedded web views can be opened from API such as third party integrations or macros. The integrator decides which URL to load based on external events. Examples can be to show important company alerts or emergency information. The views are fullscreen and will time out after a certain time, or by calling the API command to close the view.

`xCommand UserInterface WebView Display Url: <url>`

For systems without touch screens, this also allows basic integrations with the custom UI Extensions buttons and macros on Touch 10, for example to open and browse basic help pages or show instructional videos.

<img src="/doc/images/web-and-inroom.png" style="margin-left: 10%; width: 80%">

### Embedded apps

This is a shared feature with the Webex client. A web view can be loaded in a sidepanel and shared to all other partipants in the Webex call. Read more about this on [developer.webex.com](https://developer.webex.com/docs/embedded-apps).

<img src="/doc/images/embedded-apps.png" style="margin-left: 10%; width: 80%">

### WebRTC

The Chromium web engine supports web RTC. If a webRTC page is loaded as a normal web view / web app, the user will be requested to give access to camera and microphone, similar to how it works on a laptop.

In addition, RoomOS supports specific implementations with native behavior for vendors such such as Google, Microsoft and Zoom. In this case the user does not to give permission each time, and the video device will provide the RoomOS calling interface instead of the vendor's UI. For more information, see [help.webex.com](https://help.webex.com)

## Developer console

The remote developer console is a very important and powerful tool available to third party developers. This is the standard Chrome dev console, that you can run remotely on your own laptop to inspect what is happening in the web engine, see the log console and manipulate the content live, even inject click events, just like with local web development.

The developer console can be turned on with the following xAPI:

`xConfiguration WebEngine RemoteDebugging: On`

When enabled, all web views will display a prominent warning, to warn the user that they may be monitored, for privacy reasons. The info bar also shows the URL that you can type into your local Chrome browser to open the console (http://<codecip>:9222).

Note that the developer console can be opened with a Chrome / Chromium browser. Also note that you have to specify ip address, not hostname, and http, not https, to access it.

Be sure to disable the debug config again after use, otherwise users will get a very bad experience.

<img src="/doc/images/dev-console.png" style="margin-left: 5%; width: 90%">

## What is the performance of the web engine?

Because real-time audio/video is the main priority of the Webex devices, the web engine has lower priority than the main video features and is restricted, both in memory and CPU usage. If the web page requires more memory than allowed, Chromium will try to optimise usage with the memory pressure handler. Failing this, the web view will eventually be terminated and show an error page. The web view may also be terminated if the video system is running low on memory in general.

The exact amount of cores and memory available depends on the device type - typically newer devices offer more - as well as the current load on the system, such as a call with many participants, machine learning features etc.

These restrictions will be monitored in the field, and possibly adjusted over time to balance the need of custom web content versus the traditional video system features.

But the general advice is to test as early as possible on the hardware you are developing for - the perforamance is usually never as good as a developer expects, especially if doing initial development on a beefy laptop.

## What web features are supported / not supported?

Since the browser is based on a standard Chromium browser, most of the features you expect from a modern desktop browser is available.

Features such as HTML5 tags, EcmaScript 6, CSS3, web fonts, multi-touch, SVG, canvas, iframes, web sockets, web assembly, web workers and more are available. WebGL is turned off by default, but can be enabled with [xConfiguration WebEngine Features WebGL](https://roomos.cisco.com/xapi/Configuration.WebEngine.Features.WebGL/).

Notably, these features are not currently supported:

* PDF
* Browser extensions like password managers
* Plugins (Flash, etc)
* Downloading and uploading local files
* Notifications

## How many windows / tabs are supported?

Only one web tab / window is supported. If a web page tries to open a page in a new window or tab, it will instead replace the existing page.

## Is multimedia supported?

Standard video codes are supported, such as WebM and mpeg4, and is hardware accelerated. It is not recommended to go beyond 1080p resolution, as this may lead to choppy performance.

<img src="/doc/images/video.png" style="margin-left: 15%; width: 70%">

## What about audio volume?

The volume follows the volume setting of the video system. For digital signage, the audio is off by default to avoid unwanted noise by accident, but it can be enabled with an xAPI config:

`xConfiguration Standby Signage Audio: <on/off>`

You can of course to enforce volume and mute control on top of this by using the JavaScript audio APIs.

The standard Chrome audio policy of not playing audio until the user has interacted with the page at least once is *not* applied though - this allows for pages to display audio notifications on events, as well as auto-play video with audio on.

## What does the user agent look like?

The web view's user agent follows the same pattern as the popular browsers, and adds RoomOs and the device type.

```
Mozilla/5.0 (Linux; RoomOS; Cisco Webex Board (70) AppleWebKit/537.36(KHTML, like Gecko) QtWebEngine/5.11.2 Chrome/65.0.3325.230 Safari/537.36
```

The example above will of course vary from device to device as well as over time as the engine is upgraded.

This makes it possible to adapt your web page specifically for the Webex devices, if needed, and also to track how much of your web traffic that comes from Webex devices.

## What's the security model?

In short, the security model is similar to on Chromium. The renderer process runs in a sandbox, and all system calls are filtered. Even if a malicious site is able to exploit vulnerabilities, it should never be able to access anything outside the renderer process itself.

For root CAs, we use the same bundle as RoomOS. You can also add custom CA bundles, and disable built-in ones in the device's web portal. Chromium also uses the proxy settings of RoomOS, if the admin has enforced it.

We apply security patches regularly in addition to the full Qt upgrades.

## Are touch events supported?

Yes, the Webex board supports up to 10 simultaneous touch events.

Note that the ordering of touch events is not stable, so use the touch event `identifier` to keep track of simultaneous touches (this is standard practise).

The traditional `onclick` event is also supported.

## How to prevent the standard zoom gestures

Two finger zoom is default for accessibility and convenience, but not always wanted if zooming in on the web app does not make much sense. You can override this with `preventDefault`:

```javascript
// myCanvas is  the element you want to prevent zooming on
document.querySelector('.myCanvas').ontouchstart = (e) => {
    e.preventDefault();
    // ... my action
}
// similar for ontouchmove, ontouchend
```
Be careful doing this on the whole document though, as prevent default on for example form elements such as input fields and textareas might cause them to behave poorly, eg not being able to interact with.

## What's the viewport / screen size?

The logical viewport is 1920 pixels wide, and 1080 pixels high. This applies to both 4K screens and 1080 screens, which will then show the same amount of content. But on the 4k screen it still renders in native 4k, so fonts etc will be sharper, similar to the *Retina* mechanism on Apple devices. So you might want to provide high resolution textures for 4k as well for optimal user experience.

Developer can also modify the viewport using the viewport meta tag, eg:

`<meta name="viewport" content="width=960, initial-scale=1">`

## Are the JavaScript dialogs available?

Yes, most JavaScript dialogs such as alert, prompt and confirm work like on a desktop and is implemented using the native dialogs of the video system.

Upload and download dialogs are not supported.

## Which fonts are available?

Currently only the system font of RoomOS (sans serif). Web fonts are supported though, so third party app developers can add their own fonts as needed with CSS, eg:

```css
@font-face {
  font-family: handwriting;
  src: url(handwriting.woff);
}

div {
  font-family: handwriting;
}
```

Be aware that emoji support is currently limited (only a sub-set, and in monochrome only), this is likely to change.

## Web app icons

When adding web apps to the home screen, by default RoomOS will try to fetch the web sites icon automatically ("fav icons"). The web engine's own fav-icon mechanism is used, but the general rule is that it looks for touch icon first (<link rel="apple-touch-icon" href="..." />), then rel="icon", then finally the domain favicon, eg trello.com/favicon.ico.

If a icon url is specified in the provisioning, that one is preferred. But in all cases the icon size must be larger than 60 pixels in either direction, and less than 1200 pixels.

All major formats are supported, such as jpg, png, gif, png and svg.

## Login / authorisation

One of the most challenging aspects for a web app on a shared video device is the user login. Entering the username and password on a large-screen, soft keyboard device is both annoying and unsafe.

For shared devices, we will strive towards a solution that makes this easy and safe in the future. In the meantime, the model solution is to use a second, personal device for authentication and authorisation.

User flow:

* The user launches the web app on the video device
* The user is prompted and enters their email
* The web app sends a notification to the user's phone
* The user accepts the login on the phone
* The web app is automatically logged in on the video device

The Microsoft Authenticator for Office 365 an example of how this can be implemented in a way that is convenient, fast and safe for the user.

## Are animations supported

Both CSS transitions and web animations are supported and hardware accelerated whenever possible. This typically means the `transform` and `opacity` CSS property. Try to avoid doing animations that requires DOM or layout operations.

## Can I create offline applications?

Yes. Web workers are supported, and can be used to speed up initial loading of heavy web apps. Note that currently the web views are disabled if the device does not have network, so real offline apps are not possible.

## Keyboard input

The RoomOS soft keyboard behaves similarly to the touch keyboards on Android and iOs, and pops up any time an input field gets focus. The content also scrolls up if needed so both the input field and keyboard are visible.

It does not support specialised formats such as numeric, calendar and colour picker at the moment.

A vertical soft keyboard does not encourage a lot of text input and provides little privacy, so keep that in mind.

<img src="/doc/images/keyboard.png" style="margin-left: 15%; width: 70%">


## Internationalisation

The web engine sends the language header of the current language in each HTTP requests, eg `Accept-Language: fr` for French. A web app can then translate the content to the current language, either server side by looking at the header, or in JavaScript by querying `useragent.language` in the browser.

## Non-fullscreen windows?

Both fullscreen and non-fullscreen web views are supported througth the use of webpanels that opens the webpages in web dialogs.

## What about multiple screens?

For digital signage, content is cloned to the extra screens. A web view cannot be logically stretched across multiple screens. In other cases than signage, only the primary monitor will display the web view.

## Best practises

Writing web apps for a shared device with a large touch screen comes with its own set of challenges. Here are a couple of pointers:

* The screens are large and the user can be very close to it - choose your content based on wether you prefer interactive use (smaller font and content) or passive audience (larger font and content).
* Provide high resolution assets for crisp graphics
* Only use hardware accelerated CSS animations (transform and opacity)
* If possible, provide a second, personal device for log in such as Microsoft Authenticator
* Use local storage to store temporary user data, to prevent data loss if the web view is closed unexpectedly
* Don't rely on multiple tabs

## Style guide

<img src="/doc/images/momentum.png" style="margin-left: 15%; width: 70%">

As a third party developer you do of course have the tools and freedom to design the web content exactly as you like or to match your company's visual profile.

If you prefer something that feels native and in line with the Cisco design language, you can find everything you need at https://momentum.design/.

As well as styles and guide lines, this web site contains CSS, assets, fonts and icons and component support for popular web frameworks.

## Can the web content access the xAPI?

At the moment, not directly.

The Cisco video systems provide rich and powerful API integrations through the xAPI, such as making calls, starting presentations, counting the number of people in the room etc. Currently a web view does not have direct access to the xAPI, but it can access it the same way as other integrations, provided that credentials to the video systems are available. Alternatives include local REST APIs (on premise deployments), HTTP feedback (web hooks), cloud APIs or direct web socket communication. In all of these cases, the web view must somehow provide the credentials for the authentication.

For more info about these, see separate RoomOS developer documentation on [roomos.cisco.com](https://roomos.cisco.com). Be careful about exposing credentials in your client side code, though, and consider going through your web app's server.

## What about non-touch devices?

Webex Boards and Webex Desk series have touch screen capability, but all the new Cisco video devices such as Room Kit, Room Kit Mini, Room 55 etc also support web view. The most obvious use case is digital signage, but you can also open web views programatically through the xAPI. See the section on API-driven web views above.

# Trouble shooting

## Are logs available?

There is no specific log for web engine. In many cases the developer console will give you all the info you need.

## How to improve performance

The web engine has the difficult task of running modern, full scale web content on a high resolution screen while having lower priority than the main video features and machine learning features. This means it can sometimes struggle with heavy web sites, such as Google Maps 3D and similar.

But there are many things a developer can do to improve performance. This is worthy of its own guide, but here are a few things you can try:

* Start testing on the device early in development, if possible, or use a mobile device
* Avoid using images that are larger than needed, resize them on the server
* Reduce the number of layers with opacity
* Avoid drop shadows
* Avoid huge canvases, load content dynamically as needed instead
* Use only hardware accelerated CSS / web animations
* Skip certain features if necessary, eg animations, based on user agent
* Avoid doing much work in event handlers, delegate to async tasks
* Use `requestAnimationFrame` instead of `setInterval` if you are doing low level animations/simulations
* Move heavy calculations / algorithms to WebAssembly

Best but also most challenging: Learn the performance monitor of Chromium and use it actively.

## Why isn't the web page refreshing?

If you are doing changes to your web page, and don't see the changes in the web view (especially in signage mode), you can force a refresh by adding a random parameter eg `?dummy=123` to your signage URL.

## Why doesn't the web app display a fav icon, when I see it in my laptop browser?

Most likely, the web site is only providing icons less than 60 pixels wide/high.

## How to contact us or report issues?

Go through the normal Cisco channels, such as EFT program and partners, and TAC cases.

