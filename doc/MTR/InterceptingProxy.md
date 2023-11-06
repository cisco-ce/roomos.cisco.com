# Intercepting proxy Certificate Authority (CA)

An intercepting proxy is a tool that sits between a user's device and the internet, allowing the user to monitor and modify communication for tasks like security testing or debugging. It intercepts data traffic, enabling users to analyze or manipulate information exchanged between their device and web servers.

To enable the use of an intercepting proxy for a specific customer, they need to provision a CA certificate, which is then added to the Android Keystore. In the default MTR environment, the CA trusted by Android Open Source Project code (AOSP) and those added by Microsoft are stored in the Android Keystore.

Once a certificate has been uploaded through the device web interface, users have to factory reset their device to ensure that Android recognizes and incorporates the CA certificate into the Android Keystore.

## Add the CA certificate

After performing a factory reset, access to the local device controls of the device and navigate to **Security** > **Certificates** > **Custom**, and upload your CA certificate. Now, when you install MTR on your system, RoomOS will retrieve the content of the custom CA certificate and integrate it into the Android Keystore. 

<img src="/doc/images/MTR/UploadCertificates.png" style="width: 700px" />

## Limitations regarding intercepting proxy and tenant restriction 

Intercepting certain Microsoft domains disrupts the sign-in flow, as detailed in this documentation: https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/tenant-restrictions.

Microsoft TLS interception support focuses on enabling tenant restrictions, intercepting these three domains: `login.microsoftonline.com`, `login.microsoft.com`, and `login.windows.net`. If interception occurs on other domains, the disruption to the sign-in flow is minimized to around 10 minutes.

📝 As mentioned [here](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/tenant-restrictions), do not include subdomains under `*.login.microsoftonline.com` in your proxy configuration. Doing so will include `device.login.microsoftonline.com` and will interfere with Client Certificate authentication, which is used in Device Registration and Device-based Conditional Access scenarios. Configure your proxy server to exclude `device.login.microsoftonline.com` and `enterpriseregistration.windows.net` from TLS break-and-inspect and header injection.
