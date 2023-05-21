# RobotJS - OSRS Shrimp Bot 🦐

This repository uses [Robot.js](https://robotjs.io/) to automate mouse and keyboard inputs ( [Node.js](https://nodejs.org/en) is used as a run-time. )

- `npm install` to install the required packages
- `npm start` will run the script in `index.js`

**Note:**

- This has been tested on the standard OSRS client ( Not RuneLite. ) on a 1920 x 1080 Display.
- If using Mac, you may have to update system preferences to allow the script to run.

## Prereqs:

- start by standing at the fishing spot, south of lumbridge.
- face the camera north by clicking the compass icon.
- Make sure camera zoom is set to exactly halfway (this can be set and locked, in settings)
- Set display to `Resizable - Classic layout`
- In your settings, allow click+shift to drop items
- Check the `images` folder for more detail about these steps.

### Future Goals for the bot

1. Detect color change when hovering over or clicking an active fishing spot, then wait for a specified time.
2. An alternate script that walks shrimp to the bank and returns to fishing spot.
3. Alternate between more than 2 fishing spots at once.
4. more random variations between inputs/movements so its harder to pickup that it's a bot.

### Current flow of the bot

1. The mouse will click the first fishing spot.
2. Script waits/sleeps for a specified time.
3. Click and fish at the second spot for a specified time.
4. Move back to original spot, function repeats x3 before moving on.
5. When time is up and function has been called 3 times, assumes inventory is full and then empty it one by one.
6. Loop repeats infinitely.
