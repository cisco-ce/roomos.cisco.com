# User Interface Extensions

The Webex series video devices include User Interface (UI) Extensions that allow you to expand the tools on the touch screen of your video conferencing device. The extensions appear as additional activities on the home screen, where users can interact with them. UI Extensions allow you to create new panels and action buttons on the Webex devices to create custom behaviour. This can be used to simplify the workflow, automate tasks on the video device, or control entirely different devices in the room, such as lights, blinds, air condition, etc.

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

