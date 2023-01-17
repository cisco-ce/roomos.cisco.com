# API Styles

The new versions of the JSXAPI support a more object-oriented syntax to improve readability and work well with auto-completion tools in editors. But the old style API will continue to be supported too, in case you already have integrations using it.

You can also mix freely between the two types in the same macro / integrations. In general we recommend that you use the new style API. This is also the style used in the generated snippets in the right property bar when you browse the APIS.

## New style API

```javascript
// Set up a call
xapi.Command.Dial({ Number: 'user@example.com' });

// Fetch volume and print it
xapi.Status.Audio.Volume
  .get()
  .then((volume) => { console.log(volume); });

// Set a configuration
xapi.Config.SystemUnit.Name.set('My System');

// Subscribe to event (similar for status and configs):
xapi.Event.UserInterface.Extensions.Widget.Action.on(event => console.log(event.WidgetId));
```

## Old style API

```javascript
// Set up a call
xapi.command('Dial', { Number: 'user@example.com' });

// Fetch volume and print it
xapi.status
  .get('Audio Volume')
  .then((volume) => { console.log(volume); });

// Set a configuration
xapi.config.set('SystemUnit Name', 'My System');

// Subscribe to event (similar for status and config changes):
xapi.event.on('UserInterface Extensions Widget Action', event => console.log(event.WidgetId));
```

The old style API might prove handy if you want to test things quickly by copying paths from the command line.
