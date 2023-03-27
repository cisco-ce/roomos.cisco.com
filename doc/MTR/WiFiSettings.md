# Wi-Fi Settings

## Use Wi-Fi 

You can choose to use either a wired or a Wi-Fi connection. 
When wireless connection is enabled for a device, you can change between wired and Wi-Fi connection on the menu. To use the Wi-Fi, disconnect the Ethernet cable first.
You can connect to Wi-Fi if your network uses one of these supported authentication types:
* Open
* WPA-PSK (AES)
* WPA2-PSK (AES)
* WPA-EAP-PEAP MSCHAPv2
* WPA-EAP-PEAP GTC 
* WPA-EAP-TLS
* WPA-EAP-TTLS
*	WPA-EAP-FAST

The wireless network must show at least three bars on the screen, for the connection to be sufficiently stable. You can't join networks that require sign-in through a landing page. 
The system only remembers one network at a time. If you change between different networks, you must type in the passphrase again. 

1.	Tap **More** on the home screen, **settings** and select **device settings**. 
2.	Scroll to **Network** and service and tap **Network Connection**. On the next screen tap **Wi-Fi**. If Wi-Fi is off, tap the toggle to turn it on.
3.	Select the Wi-Fi you want to connect to. If the network is hidden, tap Join other network or the gear icon in the upper right corner. You can then set up the Wi-Fi manually. 
4.	Type in the username and passphrase as required. Tap Connect. 
5.	When you're finished, tap the left arrow to go back to the Settings screen, and then tap the Close button. 
Once connected, you can access the Wi-Fi settings and check the network status at any time, including during a call. Go to **Device settings > Network connection > Wi-Fi** and then tap the connected network name. On the next screen tap **Advanced Wi-Fi details** to see the network's status.

## Best Practices: Setting up a Wi-Fi Connection

To help ensure a seamless meeting experience, network administrators should follow the best practices in this article, when configuring a Wi-Fi connection. 
During calls and meetings on Board Pro and Desk Pro, you'll quickly find out that a stable internet connection greatly enhances your video and voice experience. 
We recommend that you use a wired network connection when available, for greater stability. In a home environment, consider using a powerline ethernet adapter to establish a dedicated and more reliable connection. However, if a wired connection is not practical, you can use a Wireless connection instead.
Important: when setting up a Wi-Fi network, install wireless equipment - such as access points and routers - that can handle and distribute the load across connected devices. You'll probably connect a lot of devices to a wireless network, and bandwidth is limited. 
The best practices in this article aim to improve two key metrics, thus improving the video and voice quality experienced on devices connected to a Wi-Fi network:
* Packet Loss Rate - the percent of packets that are lost during transmission, and,
*	Interarrival Jitter - the variation in arrival times of packets being received, in milliseconds.
To help ensure a seamless meeting experience, network administrators should follow these best practices when configuring a Wi-Fi connection:
*	Avoid deploying access points from different manufacturers, as this can contribute to congesting the radio-spectrum.
*	Prioritize 5 GHz coverage for devices. If 5 GHz and 2.4 GHz share the same network name (SSID), then enable band steering to ensure that 5 GHz is prioritized.
*	Wireless channel utilization should be under 50%.
*	Enable 802.11d to add a country information element to beacons, probe requests, and probe responses. If your wireless equipment does not support this, then use world safe channels 36, 40, 44, or 48.
*	Verify that the device sees an access point at -60 dBm or better (closer to zero is better).
*	Verify that an access point sees the device at -60 dBm or better (closer to zero is better).
*	The 'Signal to Noise ratio' should always be 25 dB or more.
*	Enable 'Airtime fairness’, to make sure co-existing clients have equal access to airtime.
*	Enable QoS if available. Devices tag AF41 for video and EF for voice.
Home office setups using equipment from an Internet Service Provider might not support all the configurations in the list above.
