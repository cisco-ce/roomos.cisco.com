# Building a bookings workspace integration

## Overview

This guide provides instructions for creating a workspace integration to seamlessly manage bookings on RoomOS devices.

## Workspace integrations
To begin creating your workspace integration we recommend referencing the [workspace-integrations](https://github.com/cisco-ce/workspace-integrations) public GitHub repository for guides and workspace-integration tooling.

Further workspace integration details are available in the [workspace integrations overview documentation](https://developer.webex.com/create/docs/workspace-integrations) and [workspace integrations technical details](https://developer.webex.com/create/docs/workspace-integration-technical-details). When defining xAPI permissions for your integration, reference the required xAPIs below.
## Calendar types

The xAPI interactions between the workspace integration and the RoomOS devices will vary depending on the workspace calendar setups. While much of the xAPI interaction is shared, depending on the workspace environments you may need to account for one or both calendar types.

### Local calendar

In a local calendar workspace bookings are stored locally on devices and the integration will update the device's local calendars directly through the cloud REST xAPI service. The devices will notify the integration of device driven changes through cloud xAPI updates. When multiple devices are registered to a workspace (Companion mode), their calendars automatically sync across all devices.

### Hybrid calendar - Exchange/O365/Google

In a hybrid calendar workspace, bookings are stored on an associated calendar backend. The integration will send commands to devices through the cloud REST xAPI. The devices will follow these requests and in turn initiate requests to the workspace calendar backend to update the calendar. Calendar updates from the backend are propagated from the devices to the integration through cloud xAPI updates. Update success and delay time on sending xAPI commands is dependent on external factors such as cloud connectivity, network traffic to the calendar backend, and so on.

## xAPIs
[You can find full xAPI documentation here](https://developer.webex.com/docs/api/v1/xapi). Quick reference for relevent xAPIs to the workspace integration are provided below.

*xEvent.Bookings.SyncRequired* Indicates the integration must call *Bookings.List* to fetch an up-to-date bookings list.

*xEvent.Bookings.BookingRequested* Indicates a new booking is in the process of being created and is not yet confirmed. This event's *BookingRequestUUID* will match the corresponding ID from the subsequent *BookingCreated* or *BookingFailed* events.

*xEvent.Bookings.BookingCreated* Indicates a booking was successfully created. Corresponds to a *BookingRequested* event with matching *BookingRequestUUID*.

*xEvent.Bookings.BookingFailed* Indicates an attempt to create a given booking failed. Corresponds to a *BookingRequested* event with matching *BookingRequestUUID*.

*xEvent.Bookings.Start* Indicates a booking has begun.

*xEvent.Bookings.End* Indicates a booking has ended.

*xEvent.Bookings.Deleted* Indicates a booking was deleted.

*xEvent.Bookings.ExtensionRequested* Indicates an extension was requested for a booking. A successful extension will notify with *Bookings.BookingMoved*.

*xEvent.Bookings.EditRequested* Indicates an edit was requested for booking. A successful edit will notify with *Bookings.BookingMoved*.

*xEvent.Bookings.BookingMoved* Indicates an update to the start and/or end time of a booking.

*xEvent.Bookings.EditFailed* Indicates a failed booking edit.

*xEvent.Bookings.ExtensionFailed* Indicates a failed booking extension.

*xCommand.Bookings.Book* Requests creation of a new booking with provided arguments.

*xCommand.Bookings.Edit* Requests edit of an existing booking.

*xCommand.Bookings.Delete* Requests deletion of a booking.

*xCommand.Bookings.List* Provides a list of the shared (device or scheduling account) bookings.

*xCommand.Bookings.Extend* Requests extension of a booking. Recommend to use *Bookings.Edit* for updates to booking times for better support across deployments.

## Interaction flows

Each calendar event will contain a unique identifier for correlating *xEvent* updates and *xCommand* executions specific to that calendar event. This identifier is the BookingRequestUUID while the booking request is in progress, and switches to the MeetingId once the booking is confirmed.

See **Creating a booking** in this article.

## Synchronizing calendar data

You can retrieve the calendar data for a device with *xCommand.Bookings.List*.

If the known calendar data is invalidated by a device reboot or the loss of network connectivity, the device will notify the integration that the data must be re-synced with *xEvent.Bookings.SyncRequired*.

<img src="/doc/images/integrations/sync_calendar.png" style="width: 600px" />

## Booking start and end

Devices will notify bookings starting and ending with *xEvent.Bookings.Start* and *xEvent.Bookings.End*.
<img src="/doc/images/integrations/booking_start.png" style="width: 400px" />

<img src="/doc/images/integrations/booking_end.png" style="width: 400px" />

## Creating a booking
### Book at device - ad hoc booking
Users can create bookings at a device through its UI if an admin has enabled ad hoc booking for the device's workspace.

#### Local calendar

With a local calendar configuration the device will immediately report both *xEvent.Bookings.BookingRequested* and *xEvent.Bookings.BookingCreated* when a user creates a booking.

The integration may reject the booking by issuing a *Bookings.Delete*, which will then remove the booking from the calendar. The *MeetingId* reported from *Bookings.BookingCreated* must be used to associate future events and commands with the booking.

<img src="/doc/images/integrations/adhoc_book_at_device.png" style="width: 800px" />

#### Hybrid calendar

With a hybrid calendar configuration, when a user creates an ad hoc booking on a device, the device sends a request to create the booking on the calendar backend. A *Bookings.BookingRequested* xevent is sent upon creation of the request. This event contains the request *BookingRequestUUID*, which is used to correlate with the subsequent success or failure events for the request. The device will update with *Bookings.BookingCreated* upon confirmation from the calendar backend, with both the *BookingRequestUUID* for the associated request and the *MeetingId* for continued use in identifying the calendar event. The device will update with *Bookings.BookingFailed* with the associated *BookingRequestUUID* if the request fails.

<img src="/doc/images/integrations/adhoc_book_at_device.png" style="width: 800px" />

### Book from Workspace wntegration
#### Local calendar
With a local calendar configuration, when the integration creates a booking it provides the *BookingRequestUUID* for correlating with the subsequent *Bookings.BookingCreated* or *Bookings.BookingFailed* events.
<img src="/doc/images/integrations/book_from_integration.png" style="width: 800px" />

#### Hybrid calendar
Creating a booking from the integration with a hybrid calendar configured workspace is similar to the device-driven ad hoc booking with hybrid calendar. In this case, the integration supplies the *BookingRequestUUID* for correlating with subsequent updates.

<img src="/doc/images/integrations/book_from_integration.png" style="width: 800px" />

### Book from hybrid calendar

When a user creates a booking through the hybrid calendar, for example by scheduling a meeting on the workspace calendar through Outlook/O365, the device will update the integration with *xEvent.Bookings.BookingCreated*.

<img src="/doc/images/integrations/book_from_hybrid_calendar.png" style="width: 800px" />

## Deleting a booking

When a booking is deleted the device will notify the integration with *xEvent Bookings.Deleted*.

### Delete at device
#### Local calendar

<img src="/doc/images/integrations/booking_delete_at_device.png" style="width: 800px" />

#### Hybrid calendar
When a *Bookings.Delete* is requested with a hybrid calendar configuration the subsequent *Bookings.Deleted* event will only be sent once the hybrid calendar confirms the deletion.

<img src="/doc/images/integrations/booking_delete_at_device.png" style="width: 800px" />

### Delete from workspace integration
#### Local calendar

<img src="/doc/images/integrations/booking_delete_from_integration.png" style="width: 800px" />

#### Hybrid calendar

When a *Bookings.Delete* is requested with a hybrid calendar configuration, the subsequent *Bookings.Deleted* event will only be sent once the hybrid calendar confirmst the deletion.

<img src="/doc/images/integrations/booking_delete_from_integration.png" style="width: 800px" />

### Delete from hybrid calendar
<img src="/doc/images/integrations/booking_delete_from_hybrid_calendar.png" style="width: 800px" />

## Moving/editing a booking

When the time information for a booking is updated, the device notifies the integration with *Bookings.BookingMoved*. The event will contain the new time information.

### Edit at device
When a user edits the booking time information at the device, the integration may reject the new time. If the integration rejects the new booking time, it may apply a *Bookings.Edit* to return the booking to the original values.

See **Edit from workspace integration**, below.

#### Local calendar

<img src="/doc/images/integrations/edit_booking_at_device.png" style="width: 700px" />

#### Hybrid calendar

<img src="/doc/images/integrations/edit_booking_at_device.png" style="width: 700px" />

### Edit from workspace integration
#### Local calendar

<img src="/doc/images/integrations/edit-from-ws-integration-local.png" style="width: 800px" />

#### Hybrid calendar

<img src="/doc/images/integrations/edit-from-ws-integration-hybrid.png" style="width: 800px" />

### Edit/move from hybrid calendar

<img src="/doc/images/integrations/booking_moved_from_hybrid_calendar.png" style="width: 800px" />

### Extended booking
A user may extend the booking at the device. Upon confirmation of the extension the device will update with the *Bookings.BookingMoved* event. If the integration rejects the extension it may issue a *Bookings.Edit* to return the booking to the original values.

No examples for extending a booking are provided here, since we recommend using *Bookings.Edit* for better support across deployments.

#### Local calendar

<img src="/doc/images/integrations/extend_booking_at_device.png" style="width: 700px" />


#### Hybrid calendar

<img src="/doc/images/integrations/booking_extend_at_device.png" style="width: 800px" />








































