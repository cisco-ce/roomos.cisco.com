# Use of a Video Switch

## Using a third-party video switch to extend the number of video sources available

The **UI Extensions Editor** can configure your system to show video sources from a third-party external video switch in the normal *Share Tray* view.
The sources will appear, and behave, as any other video source connected directly to the video device. For the user, this will be perceived as completely transparent and no video switch will seem to be involved.

<img src="/doc/images/video-switch.png" />

## API Commands and Events

The video switch feature requires a third-party control system. The control system will use the API to synchronize the source states between the video switch and your
system's user interface using a set of API events and commands. In order to make this work when the user selects a video source, the video device must be set to issue a corresponding event. This, in turn, shall cause the controller to send appropriate commands to the video switch and the video device. This event will be issued only if the controller has registered to the video device upon connection, requesting the following from the video device:

`xFeedback register Event/UserInterface/Presentation/ExternalSource`

The event issued will be as follows:

```
*e UserInterface Presentation ExternalSource Selected SourceIdentifier:
"XXXX"
```
Where "XXXX" is a unique string ID used to identify this source when selecting or setting state.

There are six commands available to control the system:
- **Add**: Adds video source identifiers, including ID of connector, the name to appear on the screen, a unique string ID to identify a source when selecting or setting state,
and what type of icon to display on the screen for each source.
- **List**: Returns the current list of external sources.
- **Remove**: Removes a source from the list.
- **RemoveAll**: Removes all of the sources from the list.
- **Select**: Selects a specific source.
- **State Set**: Changes the state of a source.

See the next section for more details.

## UserInterface Presentation ExternalSource API Commands

### UserInterface Presentation ExternalSource Add

This command establishes and defines an input source.

```
xcommand UserInterface Presentation ExternalSource Add ConnectorId:
ConnectorId Name: Name SourceIdentifier: SourceIdentifier Type: Type
```
Arguments:
- *<ins>ConnectorId</ins>*: The ID of the video device connector to which the external switch is
connected
- *<ins>Name</ins>*: Name displayed on the screen
- *<ins>SourceIdentifier</ins>*: A unique string ID used to identify this source when selecting or setting state
- *<ins>Type</ins>*: Decides what icon is displayed on the screen, choose between: <pc/camera/
desktop/document_camera/mediaplayer/other/whiteboard>

Example:

```
xcommand UserInterface Presentation ExternalSource Add ConnectorId: 3
Name: "Blu-ray"
SourceIdentifier: bluray Type: mediaplayer
```

### UserInterface Presentation ExternalSource List

This command returns the current list of external sources.
`xcommand UserInterface Presentation ExternalSource List`

### UserInterface Presentation ExternalSource Remove

This command removes a source from the list.

```
xcommand UserInterface Presentation ExternalSource Remove SourceIdentifier:
SourceIdentifier
```

Arguments:
- *<ins>SourceIdentifier</ins>* is a unique string ID used to identify this source when selecting or setting state.

### UserInterface Presentation ExternalSource RemoveAll

This command removes all sources from the list.
`xcommand UserInterface Presentation ExternalSource RemoveAll`

### UserInterface Presentation ExternalSource Select

Starts to present the selected source if it is in ready state and has a valid ConnectorId.
Also shows the item in the share tray as "Presenting".

```
xcommand UserInterface Presentation ExternalSource Select SourceIdentifier:
SourceIdentifier
```

Arguments:
- *<ins>SourceIdentifier</ins>* is a unique string ID used to identify this source when selecting or setting state.

### UserInterface Presentation ExternalSource State Set

Used to change state of the source with SourceIdentifier.

```
xcommand UserInterface Presentation ExternalSource State Set
SourceIdentifier: SourceIdentifier State: State [ErrorReason: ErrorReason]
```

Arguments:
- *<ins>SourceIdentifier</ins>* is a unique string ID used to identify this source when selecting or setting state
- *<ins>State</ins>*: <Error/Hidden/NotReady/Ready> Ready is the only presentable state, hidden exists in the list but does not show in the share tray.
- *<ins>ErrorReason</ins>*: Optional. Displays in the share tray if the state is set to `Error`

## Video Switch Example

Controller sending:

```
xcommand UserInterface Presentation ExternalSource Add ConnectorId: 3
Name: "Blu-ray" SourceIdentifier: bluray Type: mediaplayer
xcommand UserInterface Presentation ExternalSource Add ConnectorId: 3
Name: "Apple TV" SourceIdentifier: appletv Type: mediaplayer
xcommand UserInterface Presentation ExternalSource Add ConnectorId: 3
Name: "TV" SourceIdentifier: tv Type: mediaplayer
```

The default state is `NotReady` (Fig. 1)
So, the next step for an integrator would be to set them to ready (Fig. 2).

```
xcommand UserInterface Presentation ExternalSource State Set State: Ready
SourceIdentifier: bluray
xcommand UserInterface Presentation ExternalSource State Set State: Ready
SourceIdentifier: appletv
xcommand UserInterface Presentation ExternalSource State Set State: Ready
SourceIdentifier: tv
```

If one of the sources is selected on the video switch the controller should send a command accordingly:

```
xcommand UserInterface Presentation ExternalSource Select
SourceIdentifier: tv
```

If the switch is connected on the chosen connector, it will start to present (Fig. 3).
When a user selects another source by clicking the other source item in the share tray, the video device will send the following event:

```
*e UserInterface Presentation ExternalSource Selected SourceIdentifier:
"appletv"
```

The Controller should listen to this event and display the selected source.

**Note**: The presentation will not start if the below setting has been set to `Manual`:

```
xconfiguration Video Input Connector [x]
PresentationSelection: <AutoShare, Desktop, Manual, OnConnect>
```

<img src="/doc/images/video-switch-2.png" />

Fig. 1 Default state is not ready.

<img src="/doc/images/video-switch-3.png" />

Fig. 2 When Input sources have been set to Ready.

<img src="/doc/images/video-switch.png" />

Fig. 3 If the switch is connected on the chosen connector it will start to present.
