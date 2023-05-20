# RobotJS - OSRS Shrimp Bot 🦐

This repository uses [Robot.js](https://robotjs.io/) to automate mouse and keyboard inputs (Node.js is used as a run-time).

- `npm install` to install the required packages
- `npm start` will run the script in `index.js`

**Note:** you may have to update system preferences to allow the script to run.

## Prereqs:

- start by standing next to fishing instructor south of lumby
- face the camera north by clicking the compass.
- Make sure zoom is set to exactly halfway and display is set to `Resizable - Classic layout`
- This has been tested on the standard OSRS client (Not RuneLite.)

### Aim of this bot, step by step flow

1. The mouse will move/alternate between the different fishing zones.
2. Once it detects color change in top left corner gold (highlighting that we are currently hovering over a active fishing spot) it will click and wait for a specified time.
3. When inventory is full then empty it one by one.
4. An alternate script that walks shrimp to the bank and returns to fishing spot.

### Current flow of the bot

1. The mouse will click a single fishing spot.
2. Script waits/sleeps for a specified time.
3. When time is up, assumes inventory is full and then empty it one by one.
4. Loop repeats infinitely.
