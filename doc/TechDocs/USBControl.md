# Third-party USB control devices
This feature lets you use a third-party USB input device to control certain functions and behavior on a video device. Examples of such devices could be a Bluetooth® remote control (with a USB dongle) or a USB keyboard.

**Note**: To make this work you must define and implement any action the use of such input devices is meant to cause — there is no such as a library of actions readily available to pick actions from. 

This feature is not meant to replace the touch screen, but it may complement parts of their functionalities, wherever convenient.

## Why this feature?

Examples of applications for this feature will typically be:
- In classrooms and during lectures, a small remote control can be used to wake up systems from standby mode and select which input source to present.
- Control of pan, tilt and zoom of a camera in situations where the touch controller is an inconvenient alternative or not allowed to be used (for instance in operating rooms in hospitals combined with tele-medicine).

## Input device requirements

The input device must advertise itself as a USB keyboard. The term keyboard should not necessarily be understood literally here — a Bluetooth remote control with a USB dongle will do the trick.

## Functional overview

Pressing a button on the USB input device will generate an event in the API. Macros or third-party control devices can listen for such events and respond to them. This is similar to the buttons on the touch controller user interface. It is also possible to listen for the events via webhooks, directly in an SSH session. You must implement the actions to be taken as response to these events. For example:
- Increase the volume of the video device when the *Volume Up* key is pressed.
- Put the video device in Standby Mode when the *Sleep* key is pressed.

**Note**: The support for third-party USB input devices is disabled by default. This means that you must explicitly enable it. Set the *Peripherals > InputDevice > Mode* to *On*.

Pressing and releasing a button will generate a `Pressed` and `Released` events, like this:

```
*e UserInterface InputDevice Key Action Key: <Name of key>
*e UserInterface InputDevice Key Action Code: <Id of key>
*e UserInterface InputDevice Key Action Type: Pressed
** end
  
*e UserInterface InputDevice Key Action Key: <Name of key>
*e UserInterface InputDevice Key Action Code: <Id of key>
*e UserInterface InputDevice Key Action Type: Released
** end
```

To listen for events, you must register feedback from the `InputDevice` events:
```
xFeedback Register /event/UserInterface/Inputdevice
** end
```
When the input device is detected by the video device, it shows up in the *UserInterface > Peripherals > ConnectedDevice* status. Note that the input device may be reported as multiple devices.

## Example use of a Third-Party USB input device

This example shows how to use the keys of a third-party USB input device (e.g., a remote control). You can control the standby function, increase and decrease the volume, and control the camera. The macro created will listen for relevant events and carry out the associated actions using the API of the room or desk device.
Note: In the command examples below, the text in normal font is entered by you and the text in italics is the response received from the device.

1. Sign in to the room or desk device on SSH. You need a local admin user.
2. Configure the device to allow the use of a third-party USB remote control.
   
```
xConfiguration Peripherals InputDevice Mode: On
** end
OK
```

Note: You can check if the configuration is *On* or *Off* by using this command:

```
xConfiguration Peripherals InputDevice Mode
*c xConfiguration Peripherals InputDevice Mode: On
** end
OK
```

3. Register for feedback, so that we are notified when the remote control buttons are pressed and released.
   
```
xFeedback Register /event/userinterface/inputdevice
** end
OK
```

Note: You can check which feedbacks the device is registered for, using this command:

```
xFeedback list
/event/userinterface/inputdevice
** end
OK
```

4. Press and release a button on the remote control to check that feedback registration works.
This generates two different events: `Pressed` and `Released`. If you press and hold a button, you see the `Pressed` event until you release the button. Then the `Released` event is generated.

These are the events issued when pressing and releasing the `Enter` key:

```
*e UserInterface InputDevice Key Action Key: KEY _ ENTER
*e UserInterface InputDevice Key Action Code: 28
*e UserInterface InputDevice Key Action Type: Pressed
** end
```

6. Write a macro that listens for the relevant *InputDevice* events and carries out the associated actions using the API of the device (this is shown in the next section).

   1. Bring the standby, volume up and volume down buttons to life.
When the macro sees an event containing `KEY _ VOLUMEUP`, `KEY _ VOLUMEDOWN`, or `KEY _ SLEEP` it executes the related commands.

   2. Create a camera control function for the arrow keys. We want to keep moving the camera as long as the button is pressed. When the button is released, the camera movement should stop. When the macro sees an event containing `KEY _ LEFT`, `KEY _ RIGHT`, `KEY _ UP`, or `KEY _ DOWN`, it executes the related commands.
      

## Example use related to the camera control function

```javascript
const xapi = require('xapi');

function com(command, args = '') {
xapi.command(command, args);
log(command + ' ' + JSON.stringify(args));
}

function log(event) {
console.log(event);
}

function notify(message) {
xapi.command('UserInterface Message TextLine Display', {
Text: message,
duration: 3
});
}

function cameraControl(motor, direction, cameraId='1') {
com('Camera Ramp', { 'CameraId': cameraId, [motor]: direction });
}

function init() {
let standbyState;
xapi.status.get('Standby').then((state) => {
standbyState = state.State === 'Off' ? false : true;
});

xapi.status.on('Standby', state => {
standbyState = state.State === 'Off' ? false : true;
});

xapi.event.on('UserInterface InputDevice Key Action', press => {
if (press.Type == "Pressed") {
switch (press.Key) {
case "KEY _ LEFT":
cameraControl('Pan', 'Left');
break;
case "KEY _ RIGHT":
cameraControl('Pan', 'Right');
break;
case "KEY _ UP":
cameraControl('Tilt', 'Up');
break;
case "KEY _ DOWN":
cameraControl('Tilt', 'Down');
break;
default:
break;
}

} else if (press.Type == "Released") {
switch (press.Key) {
case "KEY _ LEFT":
cameraControl('Pan', 'Stop');
break;
case "KEY _ RIGHT":
cameraControl('Pan', 'Stop');
break;
case "KEY _ UP":
cameraControl('Tilt', 'Stop');
break;
case "KEY _ DOWN":
cameraControl('Tilt', 'Stop');
break;
case 'KEY _ VOLUMEUP':
com('Audio Volume Increase');
break;
case 'KEY _ VOLUMEDOWN':
com('Audio Volume Decrease');
break;
case 'KEY _ SLEEP':
com(standbyState ? 'StandbyDeactivate' : 'Standby Activate');
break;
default:
break;
}
}
});
}

init();
```
