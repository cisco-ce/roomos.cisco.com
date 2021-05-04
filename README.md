# roomos.cisco.com

Public assets (xapi schemas, markdown articles) for roomos.cisco.com

This is a data repository for all data used by roomos.cisco.com, including:
* xAPI schemas
* Docs
* The docs menu structure

roomos.cisco.com fetches data from this repo on page load and populates the site automatically. This means it fast and simple for Cisco employees to quickly update and maintain the site, using Git or even the built-in editor on Github.

## Update process

- Clone this repo
- Make sure you are contributor to the repo
- Update the documents in the master branch (commit and push)
- Reload roomos.cisco.com (NOTE: It might take a few minutes before update is visible due to caching on the GitHub side)

There is no staging or test branch. If you need to test the changes you do on the site, you can clone the site and load the files in this repo locally. See README.md in the site repo on how to do this.


**DO NOT EVER PUSH SCHEMAS WITH INTERNAL APIS!**

## Git hooks

Please install the ./pre-commit git hook to ensure you do not accidentally push internal APIs.
