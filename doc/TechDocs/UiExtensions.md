# User Interface Extensions

The Board, Desk, and Room series devices feature User Interface (UI) Extensions that enable you to design new panels and action buttons for creating custom functionalities. The extensions appear as additional activities on the home screen, and users can interact with them. This can be used to simplify the workflow, automate tasks on the video device, or control entirely different devices in the room, such as lights, blinds, air condition, etc.

A UI extension is a user interface component with no built-in control logic. When users interact with these UI elements, they trigger events that developers can monitor and respond to, either by employing macros or integrating external functionalities, such as through JSXAPI. This flexibility empowers developers to design UIs capable of diverse actions, like controlling meeting room lighting, sending messages upon detecting a specific number of individuals in a meeting room, or starting the coffee machine, according to their requirements. 

In addition, you can add web apps to the home screen. Web apps are covered separately in the [web engine](./WebEngine.md) section of this site.

## The UI Extension Editor

The simple drag-and-drop editor offers a library of user interface elements, referred to as widgets. You can use these widgets to create your own control panels.
UI Extensions, such as buttons and panels, can be programmed in an infinite number of ways. You could program the system to control the flashing of a light, as shown here. 

### Creating UI Extensions 

To access the UI Extensions Editor, sign-in to the video device's web interface with Administrator, RoomControl, or Integrator credentials and navigate to Customization > UI Extensions Editor. The extensions can also be provisioned from tools such as Control Hub. You can also try the editor here and export your configuration:

<a class="button" href="https://custom-collab.cisco.com/uieditor/">Try editor</a>

<a href="https://custom-collab.cisco.com/uieditor/" target="_blank">
  <img src="/doc/images/ui-extensions-editor.png" />
</a>


Click **New** and the **Add a new extension** dialog box will appear. 
You will be presented with the following options:

1. UI panels allow you to create custom panels with widgets (e.g., sliders, switches, buttons) to control your video device or other peripherals in the room. [See more details](./UiExtensions-Panels.md)
2. Action buttons are simple buttons that execute a command when pressed (e.g., dial a number).
3. Web Apps are for video devices with a Web Engine -- a button launches a web view in full screen on the user interface.

Each of these will add a new button to the user interface. Only a few buttons will be added to the main page before it runs out of space. To access the overflow buttons, swipe from right to left in the screen area where the icons are displayed.


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

