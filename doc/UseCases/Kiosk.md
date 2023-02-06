# Virtual Receptionist

<img src="/doc/images/kiosk/overview.png" />

*What:* Provide a Webex Desk in the reception, where visitors can walk up and start a conversation with a remote receptionist, if there is no one physically avaiable, or they are already occupied with another customer.

**Relevant APIs:**

* [xConfiguration UserInterface Kiosk](/xapi/search?search=userinterface+kiosk) - Set the URL for the web kiosk
* [xConfiguration UserInterface Features](/xapi/search?search=userinterface+features) - Hide share button, whiteboard app, phonebook button etc from home screen
* [xCommand UserInterface Branding](/xapi/search?search=userinterface+branding&Type=Command) - Set custom wallpaper and branding logo to style the kiosk according to your company's visual identity
* [xConfiguration WebEngine Features SipUrlHandler](/xapi/Configuration.WebEngine.Features.SipUrlHandler/) - Allow the web kiosk to provide links to place calls
* [xConfiguration Standby](/xapi/search?search=standby&Type=Configuration) - Configure the standby timeout, to keep the device on at office hours
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby

*Device support:* Typically Desk series (Desk Pro, Desk or Desk Mini).

**Examples:**

* [Webex Bank Kiosk](https://cisco-ce.github.io/roomos-samples/kiosk-example/)
