# Building a hotdesking workspace integration

## Overview
This guide provides instructions for creating a workspace integration that interacts with RoomOS hotdesking features.

RoomOS hotdesking allows Webex users to pair to a device with a QR code or manual pairing. Then they can sign in on the paired device, making it a personal device while they are using it. All personal sign ins must correspond to a booking for the management of the personal account. That is, the signed in user's email must match the organizer email on the booking to be confirmed. 

Bookings can be created remotely using the hybrid calendar (for example, through Outlook) or with xAPI booking. It's also possible to create an ad hoc booking at the time of signing in, if ad hoc booking is enabled. The user is signed out at the end of their booking, or if the booking is removed. If the user signs out early, the booking is removed to allow a new user.

## Requirements
* A supported Desk or Board series RoomOS device 
* Hotdesking enabled in the workspace
* User email address matches Webex account email address
##  Bookings workspace integration
A hotdesking workspace integration is a type of bookings workspace integration. See [Building a bookings workspace integration - external](/doc/techdocs/bookingsworkspaceintegration) for information on the common bookings workspace integration elements in addition to the hotdesking specific information in this article.

##  Hotdesking workspace integration
An example manifest file for a hotdesking integration is [provided for reference here](https://confluence-eng-gpk2.cisco.com/conf/download/attachments/655262014/ex_hotdesk_manifest.json?version=1&modificationDate=1744230150448&api=v2).

##  xAPIs
The xAPIs listed here are required in addition to the xAPIs provided in [Building a bookings workspace integration - external](/doc/techdocs/bookingsworkspaceintegration). 

You can find [full xAPI documentation here](https://developer.webex.com/docs/api/v1/xapi).

*xStatus.Webex.DevicePersonalization.Personalized* indicates whether a Webex Personal account is present on the device.

*xCommand.Webex.Registration.Logout* logs out a signed in personal account, removing the account and ending all account activities.

## Sample integration
A sample integration is in progress and will be made available as a public GitHub repository.

## Interaction flows
### Ad hoc sign in and book
A user can sign in to a workspace device without creating a booking first, if an admin has enabled ad hoc booking for the workspace.

The sign in occurs prior to the booking creation. Upon signing in, the user is prompted to create a booking for their sign in. They can either select a time for the booking and book, or cancel and sign out. 

In this flow, the user continues with creating the booking for their sign in.

As the sign in occurs prior to the booking, the integration will first be notified of the sign in through the update to the *xStatus.Webex.DevicePersonalization.Personalized*. The booking creation follows the **Creating a booking** flow in the [Building a bookings workspace integration - external](/doc/techdocs/bookingsworkspaceintegration) guide. 

If the integration rejects the booking, the user will be signed out.

#### Local calendar
<img src="/doc/images/integrations/adhoc_sign_in_and_book.png" style="width: 800px" />

#### Hybrid calendar
<img src="/doc/images/integrations/adhoc_sign_in_and_book.png" style="width: 800px" />

### Ad hoc sign in and cancel
When a user signs in and is prompted to create a booking, they can instead cancel and sign out. In that case, no booking will be created.

<img src="/doc/images/integrations/adhoc_sign_in_and_cancel.png" style="width: 600px" />

### User sign in to booking
When a hostdesk booking has already been remotely created, either through xAPI or hybrid calendar, the corresponding user may sign into that booking once it's active.
<img src="/doc/images/integrations/user_sign_in_to_booking_success.png" style="width: 600px" />

### User sign in fails
When a valid user attempts to sign in to their booking but the sign in fails, they can reattempt the sign in.
<img src="/doc/images/integrations/user_sign_in_fails.png" style="width: 500px" />

### Wrong user sign in
If user A attempts to sign into user B's booking, user A will be signed out without affecting user B's booking.
<img src="/doc/images/integrations/user_sign_in_to_booking_wrong_user.png" style="width: 600px" />

### Booking ends while signed in
Signed in users are automatically signed out at the end of their booking. If the user is in a call as the booking ends, they will remain signed in until the call ends.
<img src="/doc/images/integrations/booking_deleted_while_signed_in.png" style="width: 600px" />

### Booking moved while signed in
When a booking is moved - for example, there's an update to the start time and/or end time of the booking - while a user is signed into the booking, the device will determine if the booking is still active. If the booking isn't active, the device will sign the user out. 

If the booking is active and the user is in a call at the time of the update, they will remain signed in until the call ends.
<img src="/doc/images/integrations/booking_moved_while_signed_in.png" style="width: 600px" />

### Local user sign out
A user can sign out from the device before their booking ends. In that case the booking will be removed as a part of the sign out process, and leave the space available for subsequent users.

<img src="/doc/images/integrations/local_sign_out.png" style="width: 600px" />

### Remote sign out
An integration may sign out a signed in user through xCommand.Webex.Registration.Logout. This sign out is immediate and does will end any ongoing calls for the signed-in account. As a part of the sign out the associated booking will be removed.

<img src="/doc/images/integrations/remote_sign_out.png" style="width: 600px" />

### Booking deleted when organizer not in organization
When a booking starts the device will check if the organizer belongs to the same organization as the device. If the organizer does not exist within the device's organization, the booking is deleted.

<img src="/doc/images/integrations/booking_deleted_when_organizer_not_in_org.png" style="width: 500px" />






























