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
