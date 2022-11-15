
## Use case: Custom calendaring / booking

The Cisco Room Navigator comes with a great booking user interface, but if you have specific needs, you can also create your own booking web app on the Navigator.

<img src="/docs/images/usecases/navigator.webp" />

**Relevant APIs:**

* [xConfiguration UserInterface HomeScreen Peripherals WebApp URL](/xapi/Configuration.UserInterface.HomeScreen.Peripherals.WebApp.URL/) - Configure the web app URL
* [xConfiguration WebEngine Features Xapi Peripherals AllowedHosts Hosts](/xapi/Configuration.WebEngine.Features.Xapi.Peripherals.AllowedHosts.Hosts/) - Set the list of allowed hosts
* [xConfiguration Security Xapi WebSocket ApiKey Allowed](/xapi/Configuration.Security.Xapi.WebSocket.ApiKey.Allowed/) - Allow the web app to access parts of the xAPI (for LED control etc)

See [Configure a persistent web app](https://help.webex.com/en-us/article/ohq3u6/Configure-a-persistent-web-app-on-Webex-Room-Navigator) for more details.