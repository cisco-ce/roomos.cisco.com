## Use case: Environmental sensors

<img src="/docs/images/usecases/environmental-sensors.png" />

Many of the devices now includes environmental sensors, including temperature, humidity, CO2 levels and ambient noise. These can be used to for example:

* Warn individuals about poor working conditions, either in the home office or in meeting rooms
* Provide statistics to facility managers

**Relevant APIs:**

* [xStatus RoomAnalytics AmbientTemperature](xapi/Status.RoomAnalytics.AmbientTemperature/) - Air temperature in the room
* [xStatus RoomAnalytics RelativeHumidity](/xapi/Status.RoomAnalytics.RelativeHumidity/) - Level of percentage humidity in the air
* [xStatus RoomAnalytics AmbientNoise Level](/xapi/Status.RoomAnalytics.AmbientNoise.Level.A/) - Overall noise level in the room, in decibels
* [xStatus Peripherals ConnectedDevice RoomAnalytics AirQuality](/xapi/Status.Peripherals.ConnectedDevice[n].RoomAnalytics.AirQuality.Index/) - Level of CO2 in the air. **Note**: Requires a Room Navigator
* [xConfiguration RoomAnalytics AmbientNoiseEstimation Mode](xapi/Configuration.RoomAnalytics.AmbientNoiseEstimation.Mode/) - Enable ambient noise estimation