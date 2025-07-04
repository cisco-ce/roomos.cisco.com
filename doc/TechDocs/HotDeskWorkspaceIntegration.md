# Building a hotdesking workspace integration - external

## Overview
This guide introduces how to create a workspace integration interacting with RoomOS hot desking.

The RoomOS hot desking feature allows a webex user to pair to a device (such as with a QR code or with manual pairing) and then "sign in", making it a personal device for the duration of their usage. All personal sign-ins must correspond to a booking for the management of the personal account (email of the signed in user must match organizer email in the booking to be confirmed). Bookings may be created remotely through Hybrid Calendar (such as through Outlook) or with xAPI booking, or ad hoc at the time of sign-in (if ad hoc booking is enabled). A user is signed out at the end of their booking or if the booking is removed. A user may also choose to sign out early, in which case the booking is removed to allow use by a subsequent user.

## Requirements
* A supported RoomOS device (Desk series or Board series)
* Hot Desking enabled in the workspace
* User email address must match webex account email address
##  Bookings Workspace Integration
A hot desking workspace integration is a form of a bookings workspace integration. Reference Building a bookings workspace integration (external) for information on the common bookings workspace integration elements alongside the hot desking specific information below.

##  Hot Desking Workspace Integration
An example manifest file for a hot desking integration is [provided for reference here](https://confluence-eng-gpk2.cisco.com/conf/download/attachments/655262014/ex_hotdesk_manifest.json?version=1&modificationDate=1744230150448&api=v2).

##  xAPIs
The following xAPI's are required in addition to the xAPIs provided in [Building a bookings workspace integration - external](/doc/techdocs/bookingsworkspaceintegration). You can find [full xAPI documentation here](https://developer.webex.com/docs/api/v1/xapi).

*xStatus.Webex.DevicePersonalization.Personalized* indicates whether a Webex Personal account is present on device.

*xCommand.Webex.Registration.Logout* logs out a signed-in personal account, removing the personal account and ending all personal account activities.

## Sample integration
A sample integration is in progress and will be made available as a public GitHub repository.

## Interaction Flows
### Ad hoc Sign In and Book
A user may sign-in to a workspace device without previously creating a booking if an admin has enabled ad hoc booking for the workspace.

The sign in occurs prior to the booking creation. Upon signing in the user is prompted to create a booking for their sign-in. They may either select a time for the booking and book, or cancel and sign out. In this flow the user continues with creating the booking for their sign in.

As the sign in occurs prior to the booking the integration will first be notified of the sign in through the update to the xStatus.Webex.DevicePersonalization.Personalized. The creation of the booking follows the "Creating a Booking" flow in the [Building a bookings workspace integration - external](/doc/techdocs/bookingsworkspaceintegration) guide. If the integration chooses to reject the booking the user will be signed out.

#### Local calendar
<img src="/doc/images/integrations/adhoc_sign_in_and_book.png" style="width: 600px" />

#### Hybrid calendar
<img src="/doc/images/integrations/adhoc_sign_in_and_book.png" style="width: 600px" />

### Ad hoc Sign In and Cancel
When a user signs in and is prompted to create a booking for the sign in they may instead choose to cancel and sign out. If they choose to cancel and sign out no booking will be created.
<img src="/doc/images/integrations/adhoc_sign_in_and_cancel.png" style="width: 600px" />

### User Sign In to Booking
When a booking has already been created for hot desking remotely, either through xAPI or Hybrid Calendar, the corresponding user may sign into the booking once the booking is active.
<img src="/doc/images/integrations/user_sign_in_to_booking_success.png" style="width: 600px" />

### User Sign In Fails
When a valid user attempts to sign into their booking but the sign in fails the user may continue to reattempt the sign in.
<img src="/doc/images/integrations/user_sign_in_fails.png" style="width: 600px" />

### Wrong User Sign In
When user A attempts to sign into user B's booking user A will be signed out without affecting user B's booking.
<img src="/doc/images/integrations/user_sign_in_to_booking_wrong_user.png" style="width: 600px" />

### Booking Ends While Signed In
When a user is signed in at the end of their booking they will automatically be signed out. If the user is in a call as the booking ends they will be permitted to remain signed in until the call ends.
<img src="/doc/images/integrations/booking_deleted_while_signed_in.png" style="width: 600px" />

### Booking Moved While Signed In
When a booking is moved (an update to the start time and/or end time of the booking) while a user is signed into the booking the device will determine if the booking is still active (current time within the start and end time of the booking) and sign out the user if the booking is not. If the user is in a call at the time of the update they will be permitted to remain signed in until the call ends.
<img src="/doc/images/integrations/booking_moved_while_signed_in.png" style="width: 600px" />

### Local User Sign Out
A user may choose to sign out from the device before the end of their booking. When they sign out before the booking ends the booking will be removed as a part of the sign out process, allowing the space to be available for subsequent users.
<img src="/doc/images/integrations/local_sign_out.png" style="width: 600px" />
### Remote Sign Out
An integration may sign out a signed in user through xCommand.Webex.Registration.Logout. This sign out is immediate and does will end any ongoing calls for the signed-in account. As a part of the sign out the associated booking will be removed.
<img src="/doc/images/integrations/remote_sign_out.png" style="width: 600px" />

### Booking Deleted When Organizer Not In Organization
When a booking starts the device will perform a lookup for the organizer of the booking to determine whether the organizer belongs to the same organization as the device. If the organizer does not exist within the organization the booking is deleted.
<img src="/doc/images/integrations/booking_deleted_when_organizer_not_in_org.png" style="width: 600px" />






























