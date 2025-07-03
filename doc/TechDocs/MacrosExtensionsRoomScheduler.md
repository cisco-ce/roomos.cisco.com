# Macros and extensions for Room Scheduler
The Room Scheduler device User Interface (UI) Extensions let you design new panels and action buttons. This custom functionality will appear as additional buttons on the Room Scheduler dashboard, and users can interact with them. This customization can simplify a workflow, automate tasks on the video device, or assist with other tasks such as posting to third-party meeting services or triggering bespoke actions.

A UI extension is a user interface component with no built-in control logic. When users interact with these UI elements, they trigger events that developers can monitor and respond to, either by employing macros or integrating external functionalities, for example through JSXAPI. This flexibility empowers developers to design UIs capable of diverse actions, such as controlling meeting room lighting, sending messages upon detecting a specific number of individuals in a meeting room, or starting the coffee machine – all according to individual requirements. You can program UI Extensions like buttons and panels in an infinite number of ways.
See [User Interface Extensions](/doc/techdocs/uiextensions) for more details.

You can also add web apps to the Room Scheduler dashboard.
## Creating UI extensions
To access the UI Extensions Editor, sign-in to the video device's web interface with Administrator, RoomControl, or Integrator credentials. Then navigate to **Customization > UI Extensions Editor**. The extensions can also be provisioned from tools such as Control Hub.

Click **New**. The **Add a new extension** dialog box will appear. You’ll see the following options:
* **Panel**. Create custom panels with widgets (sliders, switches, buttons) to control your video device or other peripherals in the room. See [Widgets and Panels](doc/techdocs/uiextensions-panels) for more details.
*  **Action Button**. Simple buttons that execute a command when pressed (like dial a number).
*  **Web App**. For devices with a Web Engine. A button launches a web view in full screen or modal mode on the user interface.
Each of these adds a new button to the user interface. Only a few buttons will be added to the dashboard before it runs out of space. To access the overflow buttons, swipe from right to left in the button area.

**NOTE:** this applies to standalone navigator setup. You may see different options on paired devices. Web Widgets are not supported and cannot be added in Room Scheduler mode.
### Action buttons
Creating an action button adds a button to the dashboard, programmed with an xapi command. Actions are simple to create using the **Macro Editor**. See this [Macro tutorial](doc/techdocs/macrotutorial) for more information. 
#### Example - creating an action button ####
To create an action button that displays a message when clicked:
1. Create an action button with id: hello1_button
2. Click **Export** to export your button to the video device.
   Check the user interface. You should see the new action button, but nothing will happen if you press it yet.
3. Set up a command to run when a user presses the button.
   Open the **Macro Editor** and click **Create new macro**. The text editor will open. Add the following script after the import:
  
    ```
     xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if (event.PanelId === 'hello1_button') {
    xapi.command('UserInterface Message Prompt Display', { Title: 'Hello!', text: 'Have a great day!'} );
    }
    ```
  4.	**Save** with ctrl + s (or cmd + s on Mac).
  6. Enable the macro.

  Test the button on your Room Scheduler. You should see a pop-up with your custom message.

 ### Using the xAPI in TShell
 You can use TShell to create custom or web app UI Extensions. For room scheduler, you must specify the location as RoomScheduler.
 
 #### Example - creating a custom button ####
 
 To create a custom action button that displays a message, run the following command:
 
  ```xCommand UserInterface Extensions Panel Save PanelId: hello1_button
<Extensions><Panel>
<PanelId>hello1_button</PanelId>
<ActivityType>Custom</ActivityType>
<Name>Hello</Name>
<Icon>Info</Icon>
<Location>RoomScheduler</Location>
</Panel></Extensions>
.
  ```
Specify an icon to use from this list: *Briefing, Camera, Concierge, Disc, Handset, Help, Helpdesk, Home, Hvac, Info, Input, Language, Laptop, Lightbulb, Media, Microphone, Power, Proximity, Record, Spark, Tv, Webex, General, Custom*

Just like in the web interface instructions, you should now see the action button on the user interface, still inactive. Program the button’s action in the **Macro Editor** or directly in the device’s */config/macros* directory:
1.	Create a file in */config/macros* named hello1_button.json and insert:
   
    ```
      {  
          "active": "true"
       }
     ```
2. Create another file in */config/macros/* hello1_button.js and add your macro script:

     ```import xapi from 'xapi';
    xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if (event.PanelId === 'hello1_button') {
     xapi.command('UserInterface Message Rating Display', { Title: 'Hello!', text: 'Have a great day!'} );
   }
   });
     ```
5. Run *systemctl restart macros*

*xCommand UserInterface Extensions Set* can also be used to bulk add UI extensions.

#### Example - creating a web app button ####

**NOTE:** before you can add and see a web app launcher button, WebEngine mode must be enabled.

To create a button that will launch a web app run either one of the following commands:

  ```
    xCommand UserInterface Extensions WebApp Save PanelId: webapp1_button Name: "Web App" Location: RoomScheduler Url: "url" Mode: Modal
 ```

OR

  ```xCommand UserInterface Extensions Panel Save PanelId: webapp1_button
<Extensions><Panel>
<PanelId>webapp1_button</PanelId>
<ActivityType>WebApp</ActivityType>
<ActivityData>example url</ActivityData>
<Name>Web App</Name>
<Location>RoomScheduler</Location>
<Mode>Modal</Mode>
</Panel></Extensions>
.
  ```

**Mode** is only available on Room Scheduler and the options include **Fullscreen** or **Modal**. If you don’t specify a mode, the default is Fullscreen.

You should now see a web app button that will open your web app in Modal mode.

## Sending UI messages
Standalone Room Schedulers now support sending various UI messages, including **Prompt**, **TextLine**, **TextInput**, and **Rating** for use with background macros. 
## Enhanced UI Extensions Control with Targeted Device Parameters for Room Schedulers
With the introduction of UI Extensions for paired Room Schedulers, you can control where specific UI elements are displayed: either on the scheduler or solely on the codec. To support this functionality, these optional parameters have been added to the xAPI: **Target**, **Source**, and **PeripheralId**. These parameters let developers specify which device should perform an action or report an interaction.
Key parameters:
* **Target**. Specifies the device on which the action should occur (OSD or RoomScheduler).
* **PeripheralId**. Identifies a specific device using its MAC address.
* **Source**. Indicates the originating device for events such as user interactions.
  
**NOTE:** **Target** and **PeripheralId** are mutually exclusive.

#### Examples - using the parameters ####

*xCommand UserInterface Message * Display PeripheralId: <macAddress> Target: <OSD, RoomScheduler>*

*xCommand UserInterface Extensions Panel Open/Close PeripheralId: <macAddress> Target: <OSD, RoomScheduler>*

### Source-based commands
For user interactions such as clicking a button or opening a page, the **Source** identifies the originating device. These commands do not include a **Target**, since actions like "clicked all RoomSchedulers" are not meaningful in this context.

*xCommand UserInterface Extensions Panel Clicked Source: <macAddress>*

*xCommand UserInterface Extensions Page Opened/Closed Source: <macAddress>*

*xCommand UserInterface Extensions Widget Action Source: <macAddress>*
## Integrator web views
Integrator Web Views provide a way to programmatically display a web view using the *xCommand UserInterface WebView Display* command. These web views are of type Integration, as indicated by the status output:

*xStatus UserInterface WebView 15 Type: Integration*

This feature is supported on most devices and is used to dynamically display web content. The web view can also be triggered from a macro by calling the xCommand. A common use case involves opening an Integrator Web View via a UI Extension of type **Action Button**. In this scenario, a macro listens for the action button press and triggers the *xCommand UserInterface WebView Display* to open the web view.

Key characteristics:
* **Not Related to Web Apps**. Integrator Web Views are distinct from the concept of Web Apps. They are not UI Extensions and do not correlate with the Web Apps framework.
* **No Persistence**. The *xCommand UserInterface WebView Display* command opens a web view which remains active until closed. It does not persist across sessions.
* **Triggering Options**. Web views can be triggered directly through macros or programmatically via xAPI.

**NOTE:** Before you can use this feature WebEngine mode must be enabled.
#### Example: using xCommands ####
To display an integrator web view in a modal view, use the following command:

*xCommand UserInterface WebView Display Url: your url Mode: Modal Target: RoomScheduler*

Using UI Extensions in combination with macros achieves the same result. By creating a UI Extension (e.g., an Action Button) and linking it to a macro you can trigger the *xCommand UserInterface WebView Display* when a user presses the button. 

Refer to **Creating UI Extensions** in this article for guidance on setting up the UI Extension.

Below is an example macro script:

```import xapi from 'xapi';
  xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if (event.PanelId === 'panelId') {
      xapi.command('UserInterface WebView Display', { Url: 'example url', Mode: 'Modal', Location: 'RoomScheduler' } );
  }
  });
```











