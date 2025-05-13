<!-- Copy / paste from API command reference CE 9.14 PDF -->
# The xAPI

This guide describes the xAPI by showing examples using the command line. The concepts described here applies to all other integration types too such as macros, HTTP, web sockets, RS232 etc.

### Getting started

Connect to your video device by opening a terminal window and type `ssh admin@<mydevice>`. Replace `admin` and `<mydevice>` with the values for you device. If you have a device in personal mode and don't have your own admin user, see [Creating a local user](./LocalAdminUser.md) for instructions.

### Help

To get a list of all supported top level commands you can type ? or help after connecting to the device using RS-232,Telnet or SSH (Example 1).

### Bye
Typing the bye command closes the command line interface.

### Example 1

```
?
 - User Commands -
help      xcommand      xconfiguration  xevent  xfeedback
xgetxml   xpreferences  xstatus         bye     echo
log       systemtools
OK
```

## API commands

### xConfiguration

Configurations are device settings, such as device name and network settings. These are persistent across boots.

### xCommand

Commands instruct the device to execute actions, such as to dial a number or to search the phone book.

### xStatus

A status contains the current state of the device, such as connected calls, the status of the gatekeeper registration, connected inputs and output sources.

### xFeedback

The Feedback commands are used to specify what parts of the configuration and status hierarchies to monitor. Feedback is only issued on the RS-232, Telnet or SSH session for which it is specified. If you are connecting to the device with multiple sessions, you have to define feedback individually for each session.

### xPreferences

The xPreferences command is used to set preferences for the RS-232, Telnet and SSH sessions.

### Echo \<on/off\>

If echo is set to On the key inputs are displayed when entering text in a command line interface. If echo is set to Off user input is not displayed when entering text in a command line interface.

### xEvent

The xEvent command returns information on which events are available for feedback.

### xGetxml

The xGetxml request returns an XML document based on the location parameter attached to the request. The elements (or a complete document) matching the expression will be returned. Refer to

## Other commands

### Systemtools

The systemtools commands are a set of command line tools for administrative control and diagnostics. The commands can be used for advanced troubleshooting together with Cisco technical support. Systemtools are not a part of the programming API.

### Log

The log command is used to enable advanced logs. It is only used for debugging the device.

## Command line shortcuts

If your client supports it, there are some timesaving shortcuts
you can use:

* Tab-completion to complete the commands and
arguments.
* Arrow up and arrow down keys to navigate your
command history.
* CTRL-a: Jump to the beginning of the line.
* CTRL-e: Jump to the end of the line.
* CTRL-r: Incremental command history search.
* CTRL-w: Erase the current line.


## Searching

You can use // to search for elements anywhere in the status
or configuration hierarchy (Example 1).

You can also combine multiple //’s (Example 2).

**NOTE:** The search shortcuts work well for inspecting the
API, but should not be used in applications. We recommend
that you always use the complete paths to avoid command
ambiguity when upgrading to newer firmware releases.

### Example 1:

List all configurations that include words that starts with OUT
and HDMI:
```
xconfiguration //out//hdmi
*c xConfiguration Audio Output HDMI 1 Level: 0
*c xConfiguration Audio Output HDMI 1 Mode: On
*c xConfiguration Audio Output HDMI 2 Level: 0
*c xConfiguration Audio Output HDMI 2 Mode: Off
** end
```

### Example 2:

Get the resolution width of all connected sources for both
inputs and outputs:

```
xStatus //vid//res//wid
*s Video Input Source 1 Resolution Width: 1920
*s Video Input Source 2 Resolution Width: 0
*s Video Input Source 3 Resolution Width: 0
*s Video Input Source 4 Resolution Width: 0
*s Video Output Connector 1 Resolution Width: 1920
*s Video Output Connector 2 Resolution Width: 1280
*s Video Output Connector 3 Resolution Width: 1280
** end
```

## Value types and formats

The device supports the following value types:

* Integer values: \<x..y\>
Defines the valid range for an integer input. x = min value, y = max value.
* Literal values: \<X/Y/../Z\>
Defines the possible values for a given configuration.
* String values: \<S: x, y\>
Defines that the valid input for this configuration is a
string with minimum length of x and maximum length of
y characters. Strings can have rules that further specify
their format and length.

### Input values that contain spaces need to be quoted

Any values for configurations and commands containing
spaces must be enclosed in quotes. Quotes are not necessary for values without spaces.

### Example:

Correct: `xCommand dial number: “my number
contains spaces”`

Correct: `xCommand dial number: 12345`

Incorrect: `xCommand dial number: my number
contains spaces`

### Case sensitivity

All commands are case-insensitive. All of the following
commands will work.

```
XCOMMAND DIAL NUMBER: foo@bar.org
xcommand dial number: foo@bar.org
xCommand Dial Number: foo@bar.org
```

## Commands

Commands instruct the device to execute actions, such as
to dial a number or to search the phone book. All commands
start with the prefix xCommand followed by a command path.
Writing `xCommand ?` on the command line will list all the top
level commands.

To view the complete list of commands and their parameters,
write `xCommand ??` on the command line.

Command arguments are key-value pairs.

When issuing an xCommand, the command consists of one
argument and one required parameter. In this document the
command usage is described for all xCommands, with both
required and optional parameters. The optional parameters
are in brackets.

### Example:

```
xCommand Dial Number: 123
```

xCommand is the command prefix. The command to be
executed is Dial.

The example contains one argument, Number: 123. Number
is the key and 123 is its value. The key/value pair is separated
with ‘:’.

## Configurations

Configurations are device settings that are persistent across
boots. Like commands, also configurations are structured in
a hierarchy.

Writing `xConfiguration ?` on the command line lists all the top
level configurations.

Writing `xConfiguration ??` lists all configurations and their
value spaces.

Writing `xConfiguration` lists all configurations and their current
values. To list out only some of the configurations, write
xConfiguration followed by one or more parts of the configuration paths.

### Example: Set the H323 Alias ID

Type:

```
xConfiguration H323 Profile 1 H323Alias ID: “changed@company.com”
```

### Example: Get the H323 Alias ID

Type:
```
xConfiguration H323 Profile 1 H323Alias ID
Result:
*c xConfiguration H323 Profile 1 H323Alias ID:
“changed@company.com”
**end
```

### Status

A status contains the current state of the device, such as
connected calls, the status of the gatekeeper registration,
connected inputs and output sources.

Writing `xStatus ?` on the command line lists all top level
statuses.

Writing `xStatus` lists all statuses and their current values.

To list out only some of the statuses, write xstatus followed by
the relevant part of the status path (address expression):

```
xStatus <address expression>
```

## Multiline commands

Multiline commands support larger amounts of data as input
than the single line commands. Some examples of use
are input of in-room control definitions, branding images
(base64 encoded), macros, welcome banners, and security
certificates.

Multiline command syntax:

```
xCommand <command path> <enter>
<payload> <enter>
.<enter>
```

You enter a multiline command just like any other xAPI
command. However, the command waits for you to supply
the command payload as input before executing. The format
of the payload depends on the command. It can include line
breaks.

The command is executed when you enter a separate line
containing just a period followed by a line break.

The result returned is OK or ERROR depending on the
command being executed successfully or not.

The multiline commands are marked as such in the command
descriptions in this guide.

### Example: Set up a welcome banner text

Command:

```
xCommand SystemUnit WelcomeBanner Set
Hello!
This is the second line of text.
This is the third.
Thank you!
.
Command result:
OK
*r WelcomeBannerSetResult (status=OK):
** end
```

## Synchronous API calls

The API works asynchronously. This means that there is no
guarantee that command responses arrive in the same order
as the commands were issued. The device may also respond
with feedback between your request and the response, in
form of status changes or events, due to changes on the
device.

For some applications it might be crucial to match requests
with responses. The API therefore supports a response tagging mechanism.

This mechanism works with all command types: xcommand,
xconfiguration, and xstatus. A typical use of this would be
to create a command queue in your application and assign
unique IDs to every command sent to the device. A listener
then listens to all feedback from the device and matches
the ID on the response with the corresponding ID in the
command queue. This enables matching the original request
with the specific response.

Example:
```
xcommand Video Layout Add | resultId=”mytag _ 1”
OK
*r VideoLayoutAddResult (status=OK):
LayoutId: 1
** resultId: “mytag _ 1”
** end
```

In XML mode the resultId is added as an attribute to the top-level XmlDoc tag:

```
xgetxml /Configuration/Video/Layout/Scaling | resultId=”mytag _ 2”
<XmlDoc resultId=”mytag _ 2”>
<Configuration item=”1”>
 <Video item=”1”>
 <Layout item=”1”>
 <Scaling item=”1” valueSpaceRef=”...”>Off</Scaling>
 </Layout>
 </Video>
</Configuration>
</XmlDoc>
```

## Events

Event returns information about the events that are available
for feedback. This overview presents examples of some the
events that are available on the API.

To get an overview of the supported events:

* xEvent - Lists the top level events
* xEvent \<top level category\> - List all of the available
events in that category
* xEvent * - Lists all available events on that device

The result for events depends on the state of the device.

```
Example 1: Outgoing Call Indication
Outgoing Call Indication is an event reported when an
outgoing call is about to be dialled. Returns the CallId the
call has been assigned.
  *e OutgoingCallIndication CallId: x
  ** end

Example 2: Call Disconnect
Call Disconnect is an event reported when a call is disconnected. Returns the CallId of the disconnected call and
reason for the call’s disconnection.
  *e CallDisconnect CallId: x CauseValue: 0
  CauseString: “” CauseType: LocalDisconnect
  OrigCallDirection: “outgoing”
  ** end

Example 3: Call Successful
Call Successful is an event reported when a call is
connected successfully, that is when all channels are up
and established.
  *e CallSuccessful CallId: 132 Protocol: “h223”
  Direction: “outgoing” CallRate: 768 RemoteURI:
  “h223:integratorHQ@company.com” EncryptionIn:
  “Off” EncryptionOut: “Off”
  ** end

Example 4: FECC Action request
FECC Action request is an event reported when far end is
sending FECC commands.
  *e FeccActionInd Id: 132 Req: 1 Pan: 1 PanRight:
  1 Tilt: 0 TiltUp: 0 Zoom: 0 ZoomIn: 0 Focus: 0
  FocusIn: 0 Timeout: 300 VideoSrc: 0 m: 0
  ** end

Example 5: TString message received
TString message received is an event reported when far
end has sent a TString message.
  *e TString CallId: 132 Message: “ee”
  ** end

Example 6: SString message received
SString message received is an event reported when far
end has sent a SString message.
  *e SString String: “ee” Id: 132
  ** end
```


## Feedback mechanism

To build solutions that can reliably keep the state between
your application and the device synchronized, you can set up
a notification system to report the changes in the state of the
device.

The API supports notifications on the following:

* Configuration changes
* Status changes
* Event notifications

These notifications will not be sent unless you have explicitly
told the device to do so. You can subscribe to the feedback
by registering feedback expressions. How you register
feedback expressions varies according to the connection
method used.

When using HTTP, the method of handling feedback
differs slightly from what is presented in this section. See
Feedback from the device over HTTP for more
information.

**WARNING:** A device may give a lot of feedback,
especially when calls are connected and disconnected.
Do only subscribe to the feedback you need.
Never register for all status feedback by issuing
xFeedback register /Status. This may give the control
application too much data to handle, which may lead to
sluggish or unpredictable behavior.

### Feedback expressions

The expression used when registering for feedback is a
variant of the XPath language. The XPath language describes
a way to select nodes from an XML/JSON document. The CE
software contains three main feedback documents.

<table>
  <tr>
    <th>Document</th>
    <th>API command</th>
    <th>Path</th>
  </tr>
  <tr>
    <td>Status</td>
    <td>xStatus</td>
    <td>/Status</td>
  </tr>
  <tr>
    <td>Configuration</td>
    <td>xConfiguration</td>
    <td>/Configuration</td>
  </tr>
  <tr>
    <td>Event</td>
    <td>xEvent</td>
    <td>/Event</td>
  </tr>
</table>
The syntax for feedback registering is:

`xFeedback register <path>`

Never register for all status feedback by issuing xFeedback
register /Status.

It is safe to register for all configuration changes using
xFeedback register /Configuration, as configuration
changes will most likely not occur that often.

By going through some examples, we can see how this
information can be used to build feedback expressions. A
good way to verify the expressions is to point your browser
to `http://<ip-address>/getxml?location=path` or to execute
`xgetxml <path>` from the terminal, and check that the output
matches the nodes you want feedback on.

```
Example 1: Microphones Mute status

Terminal query
  xStatus Audio Microphones Mute
  *s Audio Microphones Mute: Off
  ** end

Equivalent feedback expression
  xFeedback register /Status/Audio/Microphones/Mute

Example 2: Name of all video input connectors

Terminal query
  xConfiguration Video Input Connector Name
  *c xConfiguration Video Input Connector 1 Name: “NameA”
  *c xConfiguration Video Input Connector 2 Name: “NameB”
  *c xConfiguration Video Input Connector 3 Name: “NameC”
  *c xConfiguration Video Input Connector 4 Name: “NameD”
  *c xConfiguration Video Input Connector 5 Name: “NameE”
  ** end

Equivalent feedback expression
  xFeedback register /Configuration/Video/Input/ Connector/Name

Example 3: Name of video input connector 3

Terminal query
  xConfiguration Video Input Connector 3 Name
  *c xConfiguration Video Input Connector 3 Name:“NameC”
  ** end

Equivalent feedback expression
  xFeedback register /Configuration/Video/Input/Connector[@item=’3’]/Name
```

## Ghost events

Whenever an object that existed in an xAPI list is removed, a "ghost" feedback occurs. This helps you detect when things are removed,
without you having to keep track of lists and do diffing between them yourself. You get these ghost feedbacks for paths that you subscribe to,
they will either be xConfigurations or xStatuses.

For example, if you set up a listener for calls, and the call is ended:
```
xfeedback register status/call

# Call is connected
*s Call 2 CallbackNumber: "spark:macro@polo.com"
*s Call 2 DisplayName: "Macro Polo's Personal Room"
*s Call 2 RemoteNumber: "33a6e2d1-0000-36d4-bd2b-e97cf2c5b639"

# Call ends
*s Call 2 (ghost=True):
** end
```

In this case, you know that the call with CallId 2 was removed.

In a macro / JSXAPI-based integration, you will get an object with an attribute called "ghost" equal to "True":

```js
{"ghost":"True","id":"3"}
```

## Terminal connections

### Managing feedback subscriptions

To register, list and deregister feedback expressions you
use the command xFeedback and its corresponding sub
commands.

The registered expressions are only valid for the currently
active connection. If you open two Telnet sessions and
register to get feedback in one session, you do not receive
feedback in the other session. This also means that if you
disconnect from a session, you have to re-register all expressions after reconnecting.
You can register up to 38 expressions.

### Feedback output

The feedback output is exactly the same as you get when
querying the device using the xConfiguration and xStatus
commands. E.g., if you issue the command xStatus Standby
Active on the command line the result is:

```
*s Standby Active: On
** end
```

If you have registered for feedback on status changes the
feedback you get when the device goes to standby-mode
will be exactly the same:

```
*s Standby Active: On
** end
```

This means that when you are programming against the
device you only need to handle one format.

```
Example: Managing feedback subscriptions

A: Register feedback expressions.
Write in: xFeedback register /Status/Audio
Result: ** end
OK
Write in: xFeedback register /Event/CallDisconnect
Result: ** end
OK
Write in: xFeedback register /Configuration/Video/
MainVideoSource
Result: ** end
OK

B: List out currently registered expressions.
Write in: xFeedback list
Result: /Configuration/Video/MainVideoSource
/Event/CallDisconnect
/Status/Audio
** end
OK

C: Deregister feedback expressions.
Write in: xFeedback deregister /Event/CallDisconnect
Result: ** end
OK
Write in: xFeedback deregister /Status/Audio
Result: ** end
OK

D: List the new feedback expressions.
Write in: xFeedback list
Result: /Configuration/Video/MainVideoSource
** end
OK
```
