### Developing Web applications on the Room Navigator
Run web applications on Room Navigator by selecting Persistent Web App mode during onboarding, enabling seamless integration of third-party solutions for room bookings and communicating workplace guidelines and information.

Steps to setup the Room Navigator to run a web app is available in [Configure a persistent web app on Room Navigator.](https://help.webex.com/en-us/article/ohq3u6/Configure-a-persistent-web-app-on-Webex-Room-Navigator)

Web apps in Persistent Web App mode can integrate directly with the paired codec by using JSXAPI to bind to the XAPI of the codec and issue commands, configs, and read status. This communication is done through an embedded JSXAPI object available to apps deployed in the web view, so no other configuration is needed.

To learn more about JSXAPI support in general, please read the [JSXAPI Introduction](https://roomos.cisco.com/docs/JSXAPI/Intro.md). The connecting logic listed in these documents is not necessary when in persistent web app mode, as the connection is done for you!

For an example of a Persistent Web App that uses JSXAPI to interact with the devices XAPI see the [sample Persistent Web App.](https://github.com/cisco-ce/roomos-samples/tree/main/navigator/navigator-webapp)

Supported XAPI's for Persistent Web App mode are listed below:

[xConfiguration SystemUnit Name](https://roomos.cisco.com/xapi/Configuration.SystemUnit.Name/)

[xStatus SystemUnit Hardware Module SerialNumber](https://roomos.cisco.com/xapi/Status.SystemUnit.Hardware.Module.SerialNumber/)

[xStatus SystemUnit Software DisplayName](https://roomos.cisco.com/xapi/Status.SystemUnit.Software.DisplayName/)

[xStatus SystemUnit ProductId](https://roomos.cisco.com/xapi/Status.SystemUnit.ProductId/)

[xCommand Bookings Book](https://roomos.cisco.com/xapi/Command.Bookings.Book/)

[xCommand Bookings Clear](https://roomos.cisco.com/xapi/Command.Bookings.Clear/)

[xCommand Bookings Delete](https://roomos.cisco.com/xapi/Command.Bookings.Delete/)

[xCommand Bookings Get](https://roomos.cisco.com/xapi/Command.Bookings.Get/)

[xCommand Bookings List](https://roomos.cisco.com/xapi/Command.Bookings.List/)

[xCommand Bookings NotificationSnooze](https://roomos.cisco.com/xapi/Command.Bookings.NotificationSnooze/)

[xCommand Bookings Put](https://roomos.cisco.com/xapi/Command.Bookings.Put/)

[xCommand Bookings Respond](https://roomos.cisco.com/xapi/Command.Bookings.Respond/)

[xStatus Bookings Availability Status](https://roomos.cisco.com/xapi/Status.Bookings.Availability.Status/)

[xStatus Bookings Availability TimeStamp](https://roomos.cisco.com/xapi/Status.Bookings.Availability.TimeStamp/)

[xStatus Bookings Current Id](https://roomos.cisco.com/xapi/Status.Bookings.Current.Id/)

[xCommand UserInterface LedControl Color Set](https://roomos.cisco.com/xapi/Command.UserInterface.LedControl.Color.Set/)

[xConfiguration UserInterface LedControl Mode](https://roomos.cisco.com/xapi/Configuration.UserInterface.LedControl.Mode/)

[xStatus UserInterface ContactInfo Name](https://roomos.cisco.com/xapi/Status.UserInterface.ContactInfo.Name/)

[xStatus Peripherals ConnectedDevice[n] RoomAnalytics AirQuality Index](https://roomos.cisco.com/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.AirQuality.Index/)

[xStatus Peripherals ConnectedDevice[n] RoomAnalytics AmbientTemperature](https://roomos.cisco.com/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.AmbientTemperature/)

[xStatus Peripherals ConnectedDevice[n] RoomAnalytics RelativeHumidity](https://roomos.cisco.com/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.RelativeHumidity/)

[xStatus Peripherals ConnectedDevice[n] RoomAnalytics AmbientTemperature](https://roomos.cisco.com/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.AmbientTemperature/)

[xStatus Peripherals ConnectedDevice[n] RoomAnalytics RelativeHumidity](https://roomos.cisco.com/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.RelativeHumidity/)

[xStatus RoomAnalytics PeopleCount Capacity](https://roomos.cisco.com/xapi/Status.RoomAnalytics.PeopleCount.Capacity/)

[xStatus RoomAnalytics PeopleCount Current](https://roomos.cisco.com/xapi/Status.RoomAnalytics.PeopleCount.Current/)

[xStatus RoomAnalytics PeoplePresence](https://roomos.cisco.com/xapi/Status.RoomAnalytics.PeoplePresence/)

[xStatus RoomAnalytics AmbientNoise Level A](https://roomos.cisco.com/xapi/Status.RoomAnalytics.AmbientNoise.Level.A/)

[xStatus RoomAnalytics ReverberationTime Middle RT60](https://roomos.cisco.com/xapi/Status.RoomAnalytics.ReverberationTime.Middle.RT60/)

[xStatus RoomAnalytics ReverberationTime LastRun](https://roomos.cisco.com/xapi/Status.RoomAnalytics.ReverberationTime.LastRun/)

[xStatus RoomAnalytics ReverberationTime Octaves[n] CenterFrequency](https://roomos.cisco.com/xapi/Status.RoomAnalytics.ReverberationTime.Octaves[n].CenterFrequency/)

[xStatus RoomAnalytics ReverberationTime Octaves[n] RT60](https://roomos.cisco.com/xapi/Status.RoomAnalytics.ReverberationTime.Octaves[n].RT60/)

[xStatus RoomAnalytics Engagement CloseProximity](https://roomos.cisco.com/xapi/Status.RoomAnalytics.Engagement.CloseProximity/)
