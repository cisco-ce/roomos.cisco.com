# Space management

Monitor how and when your spaces are being used to optimize your office resources

<img src="/doc/images/usecases/quiet-rooms.png" />

The Cisco collaboration devices contain a lot of sensors and APIs to give you insight into how your meeting rooms are being used, including:

* Call state
* Presentation status
* People presence detector
* People count detector

<img src="/doc/images/usecases/utilization.png" />

**Relevant APIs:**

* [xStatus RoomAnalytics PeoplePresence](/xapi/Status.RoomAnalytics.PeoplePresence/) - Is there people detected in the room?
* [xStatus RoomAnalytics PeopleCount Current](/xapi/Status.RoomAnalytics.PeopleCount.Current/) - How many people (faces) are detected
* [xStatus RoomAnalytics PeopleCount Capacity](/xapi/Status.RoomAnalytics.PeopleCount.Capacity/) - What's the room's max capacity (configurable in Control Hub)
* [xConfiguration RoomAnalytics PeoplePresenceDetector](/xapi/Configuration.RoomAnalytics.PeoplePresenceDetector/?) - Enable the ultrasound-based detector
* [xConfiguration RoomAnalytics PeopleCountOutOfCall](/xapi/Configuration.RoomAnalytics.PeopleCountOutOfCall/) - Enable head detection also when the room is not in a video call
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby
* [HttpClient](/xapi/search?search=httpclient) - These APIs can be used to send data from the device to external web services

**Device support:** All (Desk series, Room series, Board series)