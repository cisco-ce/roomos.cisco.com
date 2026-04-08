# Settings menu

Tap **More** on the home screen or Room Navigator and select **Settings**. Choose **Device settings**. Once in the settings menu, you can open the device settings where you can change the accessibility, the network settings, the issues and diagnostics, Bluetooth, the language, and time zone. In the device settings, you can also access the Teams access settings protected by the admin password. 

<img src="/doc/images/MTR/Settings2.png" style="width: 500px" />

**Accessibility**: Tap Accessibility to change the text size on your device, enable color correction, screen reader, and high contrast. To change the text size, tap text size and choose between Small, Normal, Large, and Extra Large. To enable high contrast, just toggle High contrast **on**. To enable color correction, toggle it **on**. When enabled, you can choose between Protanopia (red-green), Deuteranopia (green -red), Tritanopia (blue-yellow), and Greyscale. Finally, you can enable Screen reader by toggling it **on**. When the feature is on, you can tap on any text on the screen to have it read out loud. If you select a graphical user interface (GUI) item, such as a checkbox, it will first read out the option, and then you need to double-tap it to perform the action, like checking the box.

**Bluetooth**&reg;: Tap Bluetooth to enable or disable Bluetooth. 

**Connections**: Select Connections to check the Inputs and Outputs connected to your device.  

**Issues and diagnostics**: Tap Issues and diagnostics to see if there are any issues with your device. 

**Language**: Tap Language to change the language on your device.  

When you change the language settings, the soft keyboard on your device reflects that change. This means that you can use the alphabet of your preferred language when you use the keyboard, for example when you search in the directory. 

The devices support the following languages: English (US), English (UK), French (France), French (Canada), German, Spanish (Spain), Spanish (Latin America), Catalan, Arabic, Czech, Danish, Finnish, Greek, Hebrew, Hungarian, Italian, Japanese, Korean, Dutch, Norwegian, Polish, Portuguese (Portugal), Portuguese (Brazil), Russian, Swedish, Turkish, Chinese (Simplified), Chinese (Traditional). 

**Network connection**: Tap Network connection to check the Wi-Fi or Ethernet connection and network status. You can also access Advanced network settings to set up a proxy, change IP settings, and domain name. 

**Time Zone**: Tap Time zone to change the Time Zone on your device. 

## Teams admin settings

Tap **Teams admin settings** to access the calling, general, and meetings menu. 

On the **calling menu**, you can change the ringtones for the calls for you, forwarded calls, and delegated calls. You can also decide if you want to block calls with no caller ID by enabling it. Finally, you can enable voice quality recording by turning it on. This will attach a recording of the call when you report a problem to Teams. 

On the **general menu**, you can change your wallpaper for the home screen. Tap wallpaper and choose a new image. 

On the **meetings menu**, you can enable and disable the following functionalities: 

* Show meeting names 

* Show chat bubbles 

* Allow Bluetooth beaconing 

* Allow room to initiate Whiteboard 

* Extend room reservation 

* Allow joining third-party meetings 

## Wi-Fi settings

### Use Wi-Fi 

You can choose to use either a wired or a Wi-Fi connection. 
When wireless connection is enabled for a device, you can change between wired and Wi-Fi connection on the menu. To use the Wi-Fi, disconnect the Ethernet cable first.
You can connect to Wi-Fi if your network uses one of these authentication types:
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

### Best practices: Setting up a Wi-Fi connection

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
