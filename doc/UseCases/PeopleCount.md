## Hot desking

<img src="/docs/images/meetingroom2.jpg" />

*What:* Use the sensors of the video device to device if there are people in the room, and how many. This can be used for:

* Space management
* Hot desking
* Spatial analytics

The video devices provide two different methods of measuring people:

* Ultra-sound (~radar) to detect motion, using microphones. This is a either or value, not countint the number of people
* Head detection, using the cameras. This can give an estimate of the actual number of people

**Relevant APIs:**

* [xStatus RoomAnalytics PeoplePresence](/xapi/Status.RoomAnalytics.PeoplePresence/) - Is there people detected in the room?
* [xStatus RoomAnalytics PeopleCount Current](/xapi/Status.RoomAnalytics.PeopleCount.Current/) - How many people (faces) are detected
* [xStatus RoomAnalytics PeopleCount Capacity](/xapi/Status.RoomAnalytics.PeopleCount.Capacity/) - What's the room's max capacity (configurable in Control Hub)
* [xConfiguration RoomAnalytics PeoplePresenceDetector](/xapi/Configuration.RoomAnalytics.PeoplePresenceDetector/?) - Enable the ultrasound-based detector
* [xConfiguration RoomAnalytics PeopleCountOutOfCall](/xapi/Configuration.RoomAnalytics.PeopleCountOutOfCall/) - Enable head detection also when the room is not in a video call
* [xConfiguration Standby WakeupOnMotionDetection](https://roomos.cisco.com/xapi/Configuration.Standby.WakeupOnMotionDetection) - Make the device automatically wake up when someone is nearby
* [HttpClient](/xapi/search?search=httpclient) - These APIs can be used to send data from the device to external web services

**Device support:** All (Desk series, Room series, Board series)