## Registering devices to Control Hub after the initial setup

If you didn't register your Cisco devices with Microsoft Teams Rooms to Control Hub during the initial setup, you can do it later. Then you have two options; in both cases you have to create activation codes on Control Hub first.

1. On each device, open the [local device web interface](https://roomos.cisco.com/doc/MTR/DeviceWebInterface) and find the *Register Device* card on the *Home* page. Click **Register to Webex** and follow the instructions.

2. To programmatically register devices to Control Hub, you can directly call the device's API over HTTP POST. This simplifies bulk provisioning. The command has the same parameters as `xCommand Webex Registration Start`, find documentation [here](https://roomos.cisco.com/xapi/Command.Webex.Registration.Start/).  

**Example for option 2 using curl:**  
`curl -u username:password https://ip-address/api/webex/register --data '{"activationCode": "activationcode", "registrationType": "Personalization", "securityAction": "Harden"}'` 
