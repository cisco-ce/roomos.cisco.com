# MTR Help Videos

![Poster image](https://ctg-tme.github.io/learn-cisco-devices/deployments/mtr-navigator/images/mtr_navigator_join_webex_zoom_id.png)

In-product help videos for MTR are [available here](https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator/?theme=dark).

Tips for adapting which videos are shown can be [found here](https://github.com/ctg-tme/learn-cisco-devices/blob/main/docs/admin-video-filtering.md).

## Overview

You can control which tutorial videos are displayed to users by adding URL parameters to hide specific content types.

## Hiding Sharing Modes

### Hide PowerPoint Live Videos
To hide PowerPoint Live sharing tutorials, add this parameter to your URL:
```
?hide=powerpoint
```

**Example:**
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?hide=powerpoint
```

### Hide Miracast Videos
To hide Miracast wireless sharing tutorials, add this parameter:
```
?hide=miracast
```

**Example:**
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?hide=miracast
```

### Hide Both PowerPoint and Miracast
To hide both sharing modes at once, separate the tags with commas:
```
?hide=powerpoint,miracast
```

**Example:**
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?hide=powerpoint,miracast
```

## URL Encoding Note
When you use commas in URLs, browsers automatically encode them as `%2C`. This is normal behavior:
- `?hide=powerpoint,miracast` becomes `?hide=powerpoint%2Cmiracast`
- The filtering still works correctly

## Combining with Other Parameters
You can combine hiding parameters with other settings:
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?hide=powerpoint,miracast&theme=classic&qr=false
```

## Available Tags
- `powerpoint` - PowerPoint Live sharing videos
- `miracast` - Miracast wireless sharing videos
- `wired` - Wired connection sharing videos
- `wirelessShare` - General wireless sharing videos
- `qr` - QR code joining videos

## Version Filtering

### Show Specific Software Version
To show videos for a specific RoomOS version:
```
?version=RoomOS 11
```

**Example:**
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?version=RoomOS 11
```

### Show All Versions
To show videos from all software versions at once:
```
?version=all
```

**Example:**
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?version=all
```

### Default Behavior
Without any version parameter, the site shows only videos marked as default (typically the latest recommended version):
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator
```

### Combining Version and Tag Filters
You can combine version filtering with tag-based hiding:
```
https://ctg-tme.github.io/learn-cisco-devices/mtr-navigator?version=RoomOS 11&hide=powerpoint
```

## Testing
After adding the URL parameters, verify that:
1. The targeted videos no longer appear in the "Share Content" section
2. If all videos in a section are hidden, the entire section disappears
3. Other sections remain unaffected
4. Version filtering shows only videos matching the specified version