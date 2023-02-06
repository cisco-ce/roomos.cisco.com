# Universal Room Controls

<img src="/doc/images/usecases/ui-extensions.png" />

*What:* With custom user interface extensions, macros and the ability to call other HTTP services directly, the video devices can act as a powerful universal remote control in the meeting room, for example to control lights and shades without additional touch panels or hardware boxes in the room. And if the external equipment does not support HTTP APIs, you can easily connect Crestron controllers etc to the video device.

Example of use cases:
* Controlling lights (manually or automatically based on in-call state, presentation state etc)
* Report technical issues in the room
* Temperature control
* Music players
* Shades and blinds
* Media devices such as Bluray players, DVD players and setop boxes
* Projectors and projector canvas
* Order food and refreshments

**Relevant APIs:**

* [UserInterface Extensions](/xapi/search?search=userinterface+extensions) - UI extensions APIs
* [UserInterface Message](/xapi/search?search=userinterface+message) - UI alerts and input dialogs
* [HttpClient](xapi/search?search=httpclient) - APIs for calling external web services


For more info about UI extensions and macro programming, see [Intro to UI extensions](/docs/UiExtensions) and [Intro to macros](/docs/Macro/Introduction).