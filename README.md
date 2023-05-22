# RobotJS - OSRS Shrimp Bot 🦐

This repository uses [Robot.js](https://robotjs.io/) to automate mouse and keyboard inputs ( [Node.js](https://nodejs.org/en) is used as a run-time. )

- `npm install` to install the required packages
- `npm start` will run the script in `index.js`

**Important:**

- This has been tested on the standard OSRS client ( Not RuneLite. ) on a 1920 x 1080 Display.
- If using Mac, you may have to update system preferences to allow the script to run.

## Prereqs:

- start by standing at the fishing spot, south of lumbridge.
- face the camera north by clicking the compass icon.
- Make sure camera zoom is set to exactly halfway (this can be set and locked, in settings)
- Set display to `Resizable - Classic layout`
- In your settings, allow click+shift to drop items

### Current flow of the bot

1. The mouse will hover over and click the **first** fishing spot.
2. Detect if the color around the click pixels is red `#ff0000`. ( _red means there is an active fishing spot here._ )
3. If color is red, camp at spot for 50 seconds.
4. If color was not red, move to the **second** spot and repeat the process.
5. If color was still not detected, move to the **third** spot and repeat the process.
6. Catch all, Move's back to first spot, ready for the next loop iteration.
7. When time is up and function has been called 3-4 times, assumes inventory is full and then empty it one by one.
8. Loop currently repeats infinitely.

### Future Goals for the bot

1. Ability to empty inventory more efficiently, currently this is the highest priority.
2. More random variations between inputs/movements so its harder to pickup that it's a bot.
3. An alternate script that walks shrimp to the bank and returns to fishing spot.

**Inspired by:** Learncodebygaming's [woodcutting bot](https://github.com/learncodebygaming/woodcutter).
