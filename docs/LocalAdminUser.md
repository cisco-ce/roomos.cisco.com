# Creating a local admin user

If you want to do fun stuff with your device, such as adding web apps, creating macros, adding your own user interface elemtents or setting custom wallpapers, you need a local admin username and password to the device.

🎉 Great news: This is possible for all cloud devices in personal mode.

This guide applies to every Webex video device in the market today, such as Desk Pro, Webex Board, Room Kit, Room 70 etc. It will only work for cloud registered systems.

This guide will show you how to factory reset your device, create a local user and register it to Webex, using only your web browser. It should take less than 10 minutes, and will give you lot's of super powers.

<div style="color: red; background: #ffe8e3">
**Warning:** Do NOT follow this procedure if your device is registered on Webex Edge.
</div>

<div style="color: red; background: #ffe8e3">
**Warning:** Please be very careful with the changes you do, and remember to tell technical support which modifications you have done if you request support later.
</div>

## First time user

If the Desk Pro is straight out of the box, you need to boot it up first and connect it to a network, and let it upgrade.

## Get the registration code

<img src="/docs/images/localadmin/registration-code.png" />

The procedure will require you to factory reset the video device, so it's important to make sure that you can create a registration code before you do that, otherwise you will be left with a useless video device.

* Go to **settings.webex.com**, log in.
* Tap **My devices > Generate Activation Code**
* Copy and save the code you got. You will need this to re-register your device.

## Factory reset your device

Go to the settings page of your device, and note down the IP address of your video endpoint now. If you are connected on WiFi, and do not know the WiFi password, your journey should stop here.

<img src="/docs/images/localadmin/factory-reset.png" />

* Find and click **Factory reset**, and wait for your device to reboot.
* Tap "Start"
* If you are on a wireless network, connect to it

```alert
DO NOT register your device yet.
```

## Create a local administrator

<img src="/docs/images/localadmin/network-settings.png" />

Now we need to create a local admin user, while the system is unlocked. Find the IP address of your system under **Settings** on your video device, and enter it in the URL bar of your web browser (accept the certificate security warnings - we are the good guys). This will take you to the local web admin interface of the video device.

<img src="/docs/images/localadmin/login-vega.png" />

* Log in as user **admin** with no password.
* Go to **Users > Create User**
* Choose a user name, make sure all the roles are selected
* Set Status **Active**
* Un-select **Require password change**
* Select a password, add it again in the **Repeat passphrase** field
* Leave **Your password** field empty
* Click **Create**. Scroll up and verify that there is a message confirming that the user was created.

<img src="/docs/images/localadmin/create-user.png" />

## Registering your device

You will now register the device, but from the web admin interface instead of on the device itself.

<img src="/docs/images/localadmin/register-webex.png" />


With the device's web interface:

* Go to **Home**
* Click **Register device**
* Uncheck **Disable local users and integrations**. This means your admin user will be still active after registering your device
* Enter the registration code you obtained earlier, and click **Register**.

Note: If your device software for some reason is older than May 2021, you may not have the **Register device menu**. In that case, you can do the following instead:

* Go to **Developer API**
* Copy and paste the following command into the text area that says **Enter commands**.

<img src="/docs/images/localadmin/register-code.png" />

```
xCommand Webex Registration Start ActivationCode: 0123456789 SecurityAction: NoAction
```

* Be sure to enter the command on **one line**.
* Replace the activation code above with the one you created. Be sure to remove any - dashes in the code if you copy and paste it.
* Click **Execute**

There should now be an answer saying "1 of 1 applied succesfully".
That means your has been registered again, and that the user you created is not disabled.

## Finish the registration on your device

Your device should now be registered, but it might still be on the network page. Click next to proceed, and select timezone. You should now be able to tap next, set timezone etc and be ready.

<img src="/docs/images/localadmin/setup-done.png" />

## Verify your admin account

On the web interface on your laptop, tap the avatar in the top right corner and log out, then back in with your new user.

🥳 Congratulations! You are now the master of your own video device. You should now be able to change wallpapers, configure advanced settings, add macros, user interface extensions, web applications, create external integrations etc. But remember, with great power comes great responsibility.
