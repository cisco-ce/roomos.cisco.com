# User Interface Extensions

The Board, Desk, and Room series devices feature User Interface (UI) Extensions that enable you to design new panels and action buttons for creating custom functionalities. The extensions appear as additional activities on the home screen, and users can interact with them. This can be used to simplify the workflow, automate tasks on the video device, or control entirely different devices in the room, such as lights, blinds, air condition, etc.

In addition, you can add web apps to the home screen. Web apps are covered separately in the web engine section of this site.

## Extension types

<img src="/doc/images/uiextensions/overview.png" />

1. UI panels allow you to create custom panels with widgets to control your video device or other peripherals in the room. [See more details](./UiExtensions-Panels.md)

2. Action buttons are buttons on the home screen that triggers an action when pressed.

3. Web Apps are buttons that can be programmed to launch a web page in full screen.

## The UI Extension Editor

A UI extension is a pure user interface without any control logic built-in. When the user interacts with the UI elements, events are generated that you as a developer can listen and react to, either with macros or external integrations using eg JSXAPI. This means that you can create a UI that does anything you want, from controlling the lights in the meeting room to sending a message when more than a certain number of people have been detected in an office, to starting your coffee machine.



The extensions can be created and added with the UI Extensions editor, but also provisioned from tools such as Control Hub. The editor is available on the local web interface on each device, but you can also try the editor here and export your configuration, if you wish:

<a class="button" href="https://custom-collab.cisco.com/uieditor/">Try editor</a>

<a href="https://custom-collab.cisco.com/uieditor/" target="_blank">
  <img src="/doc/images/ui-extensions-editor.png" />
</a>

## The UI Extensions simulator

<a href="https://cs.co/room-simulator/" target="_blank">
  <img src="/doc/images/uiextensions/ui-simulator.png" />
</a>

To quickly test or demo UI extensions, you can use the [UI Extensions Room Simulator](https://cs.co/room-simulator). This is a web based simulator that you can connect to your video device. You can then install a couple of sample panels, and the simulator will listen to events on your device's UI extensions and turn on lights, move curtains, turn on projectors etc.

From the Cisco device's point of view, the simulator is no different from a real room integration. The simulator connects and uses exactly the same APIs as a real integration would.

How to use:

* Head over to cs.co/room-simulator
* Make sure you accept your Cisco device's certificate first by logging in to the web interface of your device
* Tap "Connect" in the simulator
* Enter IP address, username and password
* When you are connected, tap "Connected" and choose "Install UI Extensions"
* The UI panels should now appear on your collab device
* Turn on lights, projectors etc from your device and watch the simulator update
* You can also turn on lights etc by tapping in the simulator, and notice that the UI extensions are updated accordingly (bi-directional APIs)
* When you are done, be sure to remove the UI extensions again from the Connect menu

