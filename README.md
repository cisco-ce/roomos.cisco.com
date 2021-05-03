# roomos.cisco.com

Public assets (xapi schemas, markdown articles) for roomos.cisco.com

This is a data repository for all data used by roomos.cisco.com, including:
* xAPI schemas
* Docs
* The docs menu structure

roomos.cisco.com fetches data from this repo on page load and populates the site automatically. This means it fast and simple for Cisco employees to quickly update and maintain the site, using Git or even the built-in editor on Github.

Update process:
- Update the documents in the master branch (commit and push)
- Reload roomos.cisco.com (NOTE: It might take a few minutes as Github likes to cache a bit)

**DO NOT EVER PUSH SCHEMAS WITH PUBLIC APIS!**
