# RobotJS Shrimp Bot

This repository uses [Robot.js](https://robotjs.io/) to automate mouse and keyboard inputs (Node.js is used as a run-time).

- `npm install` to install the required packages
- `npm start` will run the script in `index.js`

**Note:** you may have to update system preferences to allow the script to run.

## flow setup:

- start by standing next to fishing instructor south of lumby
- face the camera north by clicking the compass.
- Make sure zoom is set to exactly halfway and display is set to `Resizable - Classic layout`

### Typical scenario, step by step

mouse will move/alternate between the different fishing zones and once it detects color change in top left corner gold (highlighting that we are currently hovering over a active fishing spot) it will click and wait for a specified time and change zones or when inventory is full. When inventory is full then empty it one by one. (alternative script that walks shrimp to the bank and returns)
