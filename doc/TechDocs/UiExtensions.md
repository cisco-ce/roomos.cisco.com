# User Interface Extensions

The Board, Desk, and Room series devices feature User Interface (UI) Extensions that enable you to design new panels and action buttons for creating custom functionalities. The extensions appear as additional buttons on the home screen, call controls, or in the control panel, and users can interact with them. This can be used to simplify the workflow, automate tasks on the video device, or control entirely different devices in the room, such as lights, blinds, air condition, etc.

A UI extension is a user interface component with no built-in control logic. When users interact with these UI elements, they trigger events that developers can monitor and respond to, either by employing macros or integrating external functionalities, such as through JSXAPI. This flexibility empowers developers to design UIs capable of diverse actions, like controlling meeting room lighting, sending messages upon detecting a specific number of individuals in a meeting room, or starting the coffee machine, according to their requirements. 

In addition, you can add web apps to the home screen. Web apps are covered separately in the [web engine](./WebEngine.md) section of this site.

## The UI Extension Editor

The simple drag-and-drop editor offers a library of user interface elements, referred to as widgets. You can use these widgets to create your own control panels.

<img src="/doc/images/uiextensions/ui-custom-panel.png" />

UI Extensions, such as buttons and panels, can be programmed in an infinite number of ways. You could program the system to control the flashing of a light, as shown here. 

<img src="/doc/images/uiextensions/ui-custom-panel-2.png"/>


### Creating UI Extensions 

To access the UI Extensions Editor, sign-in to the video device's web interface with Administrator, RoomControl, or Integrator credentials and navigate to Customization > UI Extensions Editor. The extensions can also be provisioned from tools such as Control Hub. You can also try the editor here and export your configuration:

<a class="button" href="https://custom-collab.cisco.com/uieditor/">Try editor</a>

Click **New** and the **Add a new extension** dialog box will appear. 
You will be presented with the following options:

<img src="/doc/images/uiextensions/uiextens-configuration.png" />


1. UI panels allow you to create custom panels with widgets (e.g., sliders, switches, buttons) to control your video device or other peripherals in the room. [See more details](./UiExtensions-Panels.md).
2. Action buttons are simple buttons that execute a command when pressed (e.g., dial a number).
3. Web Apps are for video devices with a Web Engine: a button launches a web view in full screen on the user interface.
4. Web widgets appear on the home screen of your Cisco device. This is particularly useful for company announcements, displaying QR codes, room information, and more. 

Each of these will add a new button to the user interface. Only a few buttons will be added to the main page before it runs out of space. To access the overflow buttons, swipe from right to left in the screen area where the icons are displayed.

UI panels, action buttons, and web apps can also be added in the **control panel**, as shown in the picture below. Web widgets are **only** displayed on the home screen and can't be added in the control panel.

<img src="/doc/images/uiextensions/home-screen.jpg" />


### A Tour of the UI Extensions Editor 

To get started, create a new panel and drag some widgets into the panel. 
You can change the default names by double-clicking on them and entering new text. Press **Enter** to apply the change.
When you are ready to see your changes on the device, click the **Export** button.

<img src="/doc/images/uiextensions/uiextns-editor.png"/>
Pre-existing extensions will be shown in the left pane. To edit an existing extension, just click on its name.

<img src="/doc/images/uiextensions/uiextns-editor-3.png"/>

You can access the properties of a panel or widget by clicking on its title. 
A yellow frame will be displayed around the item to indicate that it is selected and the **Properties** pane will display the settings.

<img src="/doc/images/uiextensions/uiextns-editor-2.png"/>

Choose where you want the button to be displayed. You can have it on the home screen, call controls, or control panel.

There are several buttons in the header area of the Editor:

- **Export** your changes to the user interface.
- **Show a preview** of your changes.
- **Undo** and **redo** changes. 
- **Show additional options**.
To exit, click the Cisco logo in the top left corner.

<img src="/doc/images/uiextensions/uiextns-editor-4.png"/>

  
The **More options** icon in the top-right corner of the UI Extensions Editor shows several important options.
- *Export to video system*: Export the UI extensions from the editor to the user interface. This will overwrite the existing custom extensions on the video device. This is the same behavior as when you click the  button.
- *Export to file*: Export the UI Extensions from the editor to an XML file.
- *Export current panel to file*: Export only the configuration for the currently selected panel to an XML file.
- *Import from video system*: Get the configuration for the user interface of the video device and apply it to the editor. If you have unsaved changes in your editor, these will be erased.
- *Import from file*: Import an offline configuration as an XML file. If you have unsaved changes in your editor, these will be erased.
- *Merge from file*: Import an offline configuration as an XML file and append it to the current configuration in the editor. Note that any panels with the same name will then be overwritten.
- *User manual*: Open a web page with links to several versions of the user documentation.
- *News*: See information about changes from recent releases.
- *Keyboard shortcuts*: See a list of the commonly used keyboard shortcuts for use with the editor. For Mac users, replace `Ctrl` with `Cmd`.
  
  - **Ctrl-Enter**: Export configuration to video system
  - **Ctrl-Space**: Preview current configuration
  - **Ctrl-S**: Save configuration to file
  - **Ctrl-O**: Open configuration from file
  - **Ctrl-Z**: Undo last action
  - **Ctrl-Shift-Z**: Redo last action
  - **Ctrl-Shift-C**: Copy selected component
  - **Ctrl-Shift-X**: Cut selected component
  - **Ctrl-Shift-V**: Paste selected component
  - **Ctrl-D**: Duplicate selected component
  - **Backspace / Delete**: Delete selected component

- *Remove all UI extensions*: This will clear the editor, but not the video device. To undo this change, select *Import from video system*. To push this change to the video system, select *Export to video system*. To close the menu, click the **More options** icon again.

You may preview your configurations to verify them before deploying them.

<img src="/doc/images/uiextensions/uiextns-editor-5.png"/>

### Action buttons

If you choose to create an action button, you will be adding a button to the user interface. When the user presses the button, a single action will be performed (e.g., dialing a number).
You must program this action by using a API command. It is simple to create this program by using the Macro Editor. See the [Macro tutorial chapter](./MacroTutorial.md) for more information.

<img src="/doc/images/uiextensions/create-action-button.png"/>

You have the option to choose both the color and image for the icon, along with its placement on the screen. Click the **Export** button to export your button and view it on the user interface.

### Example of an action button

The following steps will create an action button that displays a message:

1. Create an action button with id of "hello1_button" (without the quotation marks). 
2. Click the **Export** button to export your action button to the video device. 
Look at the user interface. You should now see the action button. Nothing will happen if you press it, because we have not programmed the button yet.
3. You will need to set up a command to run when the button is pressed. 
Open the **Macro Editor** and click *Create new macro*. The text editor will open. Add the following script after the inital text:

```javascript
xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
  if (event.PanelId === 'hello1_button') {
    xapi.command('UserInterface Message Prompt Display', { Title: 'Hello!', text: 'Have a great day!'} );
  }
});`
```
4. Type `Ctrl+s` to save the macro.
5. Enable the macro. This is done by setting the corresponding switch to on <img src="/doc/images/uiextensions/togglebutton2.png" style="display: inline;
    vertical-align: middle; width: 50px; height: 22px"/>.

Now, on the video device, test the button. It should show you a friendly message.


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

