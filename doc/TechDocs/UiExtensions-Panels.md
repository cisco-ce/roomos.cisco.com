
# Widgets and panels

UI panels and widgets allows you to create custom user interfaces, for example to:

* Control other equipment in the room such as lights, blinds, temperature, projectors, etc
* Create automated tasks for tasks you do often with the video device
* Give instructions and info to first-time users

The user interface works on all Cisco devices, such as the touch controllers (Room series etc.) and touch screens (Desk and Board series).

## Event model

UI Extensions provide general user interface elements such as buttons and sliders. When the user interacts with those,
evens are created. It is then up to you to create actions associated with those events, such as controlling the lights, sending data to the cloud,
turning on screens etc. You can listen to these events and react internally with macros, or with external integrations such as virtual servers and Raspberry Pis.

The API for UI extensions are fully bi-directional, so you can update the widgets when eg someone turns off the light with a physical light switch.

This guide describes the widghet that are available, and the API to listen to and control them.

To quickly see and learn the events that are generaeted, you can log on to the device with TShell and type:

```
xFeedback Register event/userinterface/extensions/*
```

Now, everytime you press a button or move a slider, the command line will show you the evens in real time.

## Widgets

Widget behavior is programmed through the API or
through XML. Details for this are described with emphasis on:

* Commands that change the value of the widget
* Events that are sent (pressed, changed, released,
clicked) and which actions trigger these events
* Examples of commands and events in macros,
terminal output mode, or XML output mode.

You can use the API through the terminal, XML, JSON, or
the Macro Editor.

## Widget ids

All widgets on a panel need a unique identifier, a
Widget ID. The Widget ID may either be defined by you, or
assigned automatically. The Widget ID can be any name
or number. We recommend using a descriptive name
without special characters. The maximum number of
characters is 255.

The Widget ID is the programming link between the user
interface, the video device, and the control system. The
Widget ID will be included in all events that are associated
with a widget. You must use the same identifier when you
send commands to that widget via the code.

## Events and Commands

Events are notifications about things that have happened
(e.g., "the light switch has been turned off").

Commands are requests for things to happen (e.g., "turn
off the lights").

If the status of any UI extension is changed (i.e., On/Off),
an event will be sent. You can register to receive these
events and then send commands based on your desires.

For example, if you create a switch to control the room
lighting, then you need to detect if someone changes the
switch from On to Off, or vice versa.

When you get the event that the light switch is changed,
you then send a command to turn the physical lights on
or off.

Similarly, if a light is turned on/off through some other
control mechanism, you should detect this status change
and then change the way the switch looks on the panel.
This is done through the SetValue command, which sets
the value of a widget.

## Push buttons

<img src="/doc/images/uiextensions/variation-pushbuttons.png" />

A push button can be used to perform an action, such as call someone, or to indicate that
something is on or off.

For the second use, you will need to send a command to change the button value to
"active" or "inactive" and this will change its color as well. Then, you must remember to
turn it back to "inactive" if the user presses it again.

Buttons with custom text come in different sizes. The size determines the maximum number of characters you can
add. Text does not wrap to a new line.

You cannot use the SetValue command to change the text dynamically.

If you want to have the buttons linked so that only one can be selected at a time (e.g.,
radio buttons), consider to use group buttons.

Note: These are different from action buttons, described in the Action Buttons section.
Different commands are used to monitor and change these.

### Button events

```javascript
*e UserInterface Extensions Widget Action WidgetId: "ExampleButton"
*e UserInterface Extensions Widget Action Type: "pressed"

*e UserInterface Extensions Widget Action WidgetId: "ExampleButton"
*e UserInterface Extensions Widget Action Type: "released"

*e UserInterface Extensions Widget Action WidgetId: "ExampleButton"
*e UserInterface Extensions Widget Action Type: "clicked"
```

### Button commands

To set the button as active:

```javascript
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExampleButton" Value: "active" | "inactive"
```

## Switches

<img src="/doc/images/uiextensions/switches.png" />


A switch is a two-state control which indicates either on or off.

**Example of use:** Anything that can be turned on or off (e.g., lights, fan, projector).

You can also use it as a toggle button together with a slider for lights to be dimmed

### Switch events

The following events are generated when a user interacts with the switch:

```javascript
// when user toggles it:
*e UserInterface Extensions Widget Action WidgetId: "ExampleSwitch"
*e UserInterface Extensions Widget Action Type: "changed"
*e UserInterface Extensions Widget Action Value: "on" | "off"
```

### Switch commands


```javascript
// To turn on / off a switch programatically:
xCommand UserInterface Extensions Widget SetValue WidgetId: "myswitch" Value: "on" | "off"
```

## Sliders

<img src="/doc/images/uiextensions/variation-sliders.png" />

A slider selects values within a set range.

The minimum value is represented by 0, and the maximum value is represented by
255. When the slider is being pressed and moved, events are sent maximum 5 times a
second.

When you tap the bar, the slider is immediately moved to that new position.

Example of use: Dimmable lights, volume control.

### Slider events

Note that even though slider values have to be numbers, they are represented by strings in the general widget APIs, so you may need to convert to numbers in your code.

```javascript
// when pressing down
*e UserInterface Extensions Widget Action WidgetId: "ExampleSlider"
*e UserInterface Extensions Widget Action Type: "pressed"
*e UserInterface Extensions Widget Action Value: "122"

// when dragging slider
*e UserInterface Extensions Widget Action WidgetId: "ExampleSlider"
*e UserInterface Extensions Widget Action Type: "changed"
*e UserInterface Extensions Widget Action Value: "127"

// when releasing
*e UserInterface Extensions Widget Action WidgetId: "ExampleSlider"
*e UserInterface Extensions Widget Action Type: "released"
*e UserInterface Extensions Widget Action Value: "129"

```

The change events from the slider are throttled, so you won't get several hundreds if the user moves the slider fast from min to max.

### Slider commands

```javascript
// set a slider value
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExampleSlider" Value: "58"
```

## Group Buttons

<img src="/doc/images/uiextensions/variation-groupbuttons.png" />

Group buttons are linked so that only one can be selected at a time.

Group buttons are ideal when you want buttons to be linked, so that only one can be
selected at a time (e.g., room presets). When individual buttons in a group are too small
to contain the descriptive text, you can use a text widget for the description.

Group buttons may be made as a matrix or as a line. You are not confined to a maximum
of 4 buttons. A matrix consists of up to 4 columns and as many rows as you need.

You start by defining how many columns your matrix should contain (e.g., 1, 2, 3, or 4).
This is a global setting applying to the entire matrix (i.e., all the rows) and it defines the
maximum number of buttons per row.

However, a row may contain fewer buttons than this maximum number. Button autosizing will then take place— the buttons will always fill the space available.

Example: Assume that you have defined the matrix to consist of 3 columns and you
need 7 buttons (i.e., 3 rows). The system will then put 3 buttons in the first row and 3
buttons in the second row, and the last button in the third row. The single button in the
third row will be auto-sized to fill the space (spanning all 3 columns).

The size of a button determines the maximum number of characters you can add. Text
does not wrap to a new line, but will be truncated, whenever needed.

You cannot change the text of a button dynamically.

Example of use: Room presets that are mutually excluding, such as room presets where
you can choose between Dark, Cool, and Bright. Remember to deselect (release) the
preset if it is no longer valid (e.g., when changing the lights with a wall control).

Another example of use: Changing to a different UI language

### Group button events

```javascript
// when pressing a group button
*e UserInterface Extensions Widget Action WidgetId: "ExampleGroup"
*e UserInterface Extensions Widget Action Type: "pressed"
*e UserInterface Extensions Widget Action Value: "mexican"

// when releasing a group button
*e UserInterface Extensions Widget Action WidgetId: "ExampleGroup"
*e UserInterface Extensions Widget Action Type: "released"
*e UserInterface Extensions Widget Action Value: "french"
```

Note that the event value is the id for the group button that was pressed.

### Group button commands

Note that when a user selects a group button, the widget value is automatically set to match the id of that button.

If you want to let a user deselect a button, you need to program that yourself.

```javascript
// To select a specific group button
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExampleGroup" Value: "english"

// To deselect all buttons
xCommand UserInterface Extensions Widget UnsetValue WidgetId: "ExampleGroup"
```

## Icon Buttons

<img src="/doc/images/uiextensions/variation-iconbuttons.png" />

Icon buttons share behavior with other buttons, but they have an icon with a user selected color or image.

An icon button has two states: active and inactive. You do not have to set the button in
active state when someone taps it; the button can be used to just send a signal without
changing its visual state.

Example of use: Controls for a media player, or other devices that can start, stop,
pause.

### Events and commands

The events and commands are exactly the same as for the push buttons above.

## Spinners

<img src="/doc/images/uiextensions/variation-spinners.png" />

A spinner is used to step through a list of values. You may use the two buttons to
increment or decrement a number, or to step through a list of options.

The text that is displayed on the panel initially is "Value", so you might send a command
to initialize the text when you open the panel.

Example of use: Set the desired temperature in the room.

### Spinner events

Note that there is no automatic updating of the widget value when a user interacts with a spinner, if you want to eg increase/decrease a number, you need to implement this yourself.

```javascript
// when pressing spinner button
*e UserInterface Extensions Widget Action WidgetId: "ExampleSpinner"
*e UserInterface Extensions Widget Action Type: "pressed"
*e UserInterface Extensions Widget Action Value: "increment" | "decrement"

// when releasing spinner button
*e UserInterface Extensions Widget Action WidgetId: "ExampleSpinner"
*e UserInterface Extensions Widget Action Type: "released"
*e UserInterface Extensions Widget Action Value: "increment" | "decrement"

// when clicking spinner button
*e UserInterface Extensions Widget Action WidgetId: "ExampleSpinner"
*e UserInterface Extensions Widget Action Type: "clicked"
*e UserInterface Extensions Widget Action Value: "increment" | "decrement"
```

### Spinner commands

You can set the text inside of a spinner button, this is important to show the user the value they are setting.

```javascript
// To select a specific group button
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExampleSpinner" Value: "Temp: 22deg"
```


## Directional Pad

<img src="/doc/images/uiextensions/directionalpad2.png" />

The directional pad can be regarded as a set of five buttons: the four directional buttons and
the center button.

The directional pad is used for controlling the movement of a device in two axes, such as moving a camera or navigating a TV menu.

### Directional pad events

```javascript
// when pressing a button
*e UserInterface Extensions Widget Action WidgetId: "ExamplePad"
*e UserInterface Extensions Widget Action Type: "pressed"
*e UserInterface Extensions Widget Action Value: "up" | "down" | "right" | "left" | "center"

// when releasing a button
*e UserInterface Extensions Widget Action WidgetId: "ExamplePad"
*e UserInterface Extensions Widget Action Type: "released"
*e UserInterface Extensions Widget Action Value: "up" | "down" | "right" | "left" | "center"

// when clicking a button
*e UserInterface Extensions Widget Action WidgetId: "ExamplePad"
*e UserInterface Extensions Widget Action Type: "clicked"
*e UserInterface Extensions Widget Action Value: "up" | "down" | "right" | "left" | "center"
```

### Directional pad commands

You can set the text on the center button to what you want, but it only has room for approx 5 characters. Typical examples are Enter, OK, Set, Go etc.

```javascript
// To set the center text
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExamplePad" Value: "Enter"
```

## Text

<img src="/doc/images/uiextensions/text2.png" />

A text widget is used to place text on the display. The user does not interact with it.

Text widgets come in different sizes. They have up to two lines of text and the text
automatically wraps to the new line.

A small text widget with larger font size and no line wrap is also available.

You can define the initial text for the text widget in the editor, and later on use the SetValue
command to enter text dynamically.

Example of use: Help text, instructions, explanation of what different presets mean, or
informative text from the control system, such as "The projector is warming up".

The text box with larger font size is primarily meant for status values, such as the current
temperature in the room.

When individual buttons in a group are too small to contain the descriptive text, you can usea
text widget for the description.

### Text commands

You can update the text dynamically by setting the value of the text widget.

```javascript
// Change the text:
xCommand UserInterface Extensions Widget SetValue WidgetId: "ExampleText" Value: "Room Temperature: 23 Deg C"
```


## Spacers

<img src="/doc/images/uiextensions/spacer2.png" />

The spacer lets you add space between or after widgets. It's basically just a layout tool.

The width of the spacer is adjustable (1–4). If you set it to maximum, it will occupy its own
line, making it usable as a vertical spacer, as well. It can typically be useful if you are making compact tables and hiding the row names, yet still want some labelling.

There are no APIs associated with the spacer widget.
