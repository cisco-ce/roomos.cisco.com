# Macros

Macros are snippets of JavaScript code that run on the Webex device itself. It has access to the full device xAPI through a built-in xAPI object (which is the same as the JSXAPI).

Macros can be used to create custom user interfaces on the device, customize the behavior, automate tasks, post metrics and sensor data, and much, much more.

Here's an example of a macro that dials a specific number every week day at 10:00, eg for daily sync meeting:

```javascript
import xapi from 'xapi';

const number = 'daily-standup@acme.com';

function checkTime() {
  const now = new Date();
  const isWeekDay = now.getDay() > 0 && now.getDay() < 6;
  if (isWeekDay && now.getHours() == 10 && now.getMinutes() == 0) {
    xapi.Command.Dial({ Number: number });
  }
}

// Check every minute:
setInterval(checkTime, 60 * 1000);
```

One of the big benefits with macros is that since they run on the device itself, you do not need any additional hardware such as servers, Crestron controllers etc. It also means it's very quick to create one, just a few lines of code and you are running.

To start writing a macro, go to the Macro Editor from the device web interface.

If you are already familiar with the xAPI, see [xAPI to Javascript](/doc/TechDocs/JSXAPIXapiToJs) to quickly get on your way. If you are starting from scratch, see the full [tutorial](/doc/TechDocs/MacroTutorial).
