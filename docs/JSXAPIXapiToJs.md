# Mapping from xAPI to JavaScript

Do you now how to use the command line and are familiar with the xAPI already? Below you will find examples on how to use any API type with JavaScript. They all assume that you have imported the `xapi` object.

Also remember that you can find generated code snippets for every API node in the XAPI reference.

## Configurations

Get value:

```javascript
// Command line:
xConfiguration Audio DefaultVolume

// Js:
xapi.Config.Audio.DefaultVolume.get().then(v => console.log(v))
```

Set value:

```javascript
// Command line:
xConfiguration Audio DefaultVolume: 44

// Js:
xapi.Config.Audio.DefaultVolume.set(44)
```

Register feedback:

```javascript
// Command line:
xFeedback register Configuration/Audio/DefaultVolume

// Js:
xapi.Config.Audio.DefaultVolume.on(v => console.log(v))
```

## Status

Get value:

```javascript
// Command line:
xStatus Audio Volume

// Js:
xapi.Status.Audio.Volume.get().then(v => console.log(v))
```

Register feedback:

```javascript
// Command line:
xFeedback register Status/Audio/Volume

// Js:
xapi.Status.Audio.Volume.on(v => console.log(v))
```

## Commands

Invoke command:

```javascript
// Command line:
xCommand Audio Volume Set Level: 33

// Js:
xapi.Command.Audio.Volume.Set({ Level: 24 });
```

Multi-line command:

```javascript
// Command line (with ending dot):
xCommand UserInterface Branding Upload Type: Background
data:image/png;base64,iVBORw0KGgoAAA...
.

// Js:
xapi.Command.UserInterface.Branding.Upload
    ({ Type: 'Background' }, 'data:image/png;base64,iVBORw0KGgoAAA...')
```

Multiple arguments with the same name:

```javascript
// Command line:
xCommand Presentation Start ConnectorId: 1 ConnectorId: 2

// Js:
xapi.Command.Presentation.Start({ ConnectorId: [1, 2] });
```

Use result from command:

```javascript
// Command line:
xCommand Phonebook Search PhonebookType: Local

// Js:
xapi.Command.Phonebook.Search({ PhonebookType: "Local" })
  .then((result) => console.log(result))
```

## Events

Subscribe to events:

```javascript
// Command line:
xFeedback Register Event/UserInterface/Extensions/Widget/Action

// Js:
xapi.Event.UserInterface.Extensions.Widget.Action
  .on((event) => console.log(event))
```

To stop a feedback listener for configurations, statuses or events, follow this pattern:

```javascript
// Command line:
xFeedback Register Event/Standby
...
xFeedback Deregister Event/Standby

// Js:
const stop = xapi.Event.Standby.on(event => console.log(event));
// ...
stop();
```

## Lists

Lists in the xAPI are indexed from 1. In Js, lists are indexed from 0, but the original xAPI index is also available as a property `id` on the object. In the old style JsxAPI, you can also use the 1-index system:

```javascript
// Command line:
xStatus Video Output Connector

*s Video Output Connector 1 Connected: True
*s Video Output Connector 1 Type: LCD
...
*s Video Output Connector 2 Connected: False
*s Video Output Connector 2 Type: HDMI
...

// Js (new style):
xapi.Status.Video.Output.Connector.get()
  .then(list => console.log(list[0].id)); // ==> 1

// Js (old style):
xapi.status.get('Video Output Connector 1')
  .then(connector => console.log(connector.id)); // ==> 1
```
