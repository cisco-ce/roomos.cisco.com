# Hot desking

A Desk device in hot desking is by default in shared mode. When a user sits down in front of it and plug in their laptop, the device will talk to the Webex app and automatically log the user in. The user will now get personal features as One Button To Push to join their scheduled meetings etc.

The device will clearly indicate with bright red/green colors on screen so employees can see from far away whether a desk is available or not.

<img src="/doc/images/usecases/hotdesking.jpg" />

**Relevant APIs:**

* [xCommand Webex Hotdesking SetSupport](/xapi/Command.Webex.Hotdesking.SetSupport/) - Configure whether the system supports hot desking
* [xConfiguration Webex Hotdesking DefaultBookingEndTime](https://roomos.cisco.com/xapi/Configuration.Webex.Hotdesking.DefaultBookingEndTime/) - Configure the default end of day time
* [xCommand Webex Registration Logout](https://roomos.cisco.com/xapi/Command.Webex.Registration.Logout/) - programatically end a hot desking session

**Device support:** Desk series