# RobotJS - OSRS Shrimp Bot 🦐

This repository uses [Robot.js](https://robotjs.io/) to automate mouse and keyboard inputs ( [Node.js](https://nodejs.org/en) is used as a run-time. )

- `npm install` to install the required packages
- `npm start` will run the script in `index.js`

**Important:**

- This has been tested on the standard OSRS client ( **Not RuneLite.** ) on a 1920 x 1080 Resolution Display.
- If using Mac, you may have to update system preferences to allow the script to run.

## Prereqs:

- start by standing at the fishing spot, south of lumbridge.
- face the camera north by clicking the compass icon.
- Make sure camera zoom is set to exactly halfway (this can be set and locked, in settings)
- Set display to `Resizable - Classic layout` ( The Windows task bar takes up space in the display, so account for this. )
- In your settings, allow click+shift to drop items

<details>

  <summary>Bot Flow Video</summary>

https://github.com/DragonDagger/robotjs-shrimp/assets/101432646/f6bbcfc1-028a-4f10-a019-cd39a245930b

</details>

### Current flow of the bot

1. The mouse will hover over and click the **first** fishing spot.
2. Detect if the color around the click pixels is red `#ff0000`. ( _red means there is an active fishing spot here._ )
3. If color is red, camp at spot for 10 seconds then check the color on click again, 4 times.
4. If color was not red, move to the **second** spot and repeat the process.
5. If color was still not detected, move to the **third** spot and repeat the process.
6. Catch all, Move's back to first spot, ready for the next loop iteration.
7. When time is up and function has been called 3-4 times, assumes inventory is full and then empty it one by one.
8. Loop currently repeats infinitely.
9. XP per hour: TBD.

### Future Goals for the bot

1. Ability to empty inventory more efficiently.
2. More random variations between inputs/movements so its harder to pickup that it's a bot.
3. An alternate script that walks shrimp to the bank and returns to fishing spot.
4. An alternate script that cooks shrimp before dropping them.

---

- **Disclaimer:** No Runescape economies were harmed in the making of this bot 😉
- **Inspired by:** Learncodebygaming's [woodcutting bot](https://github.com/learncodebygaming/woodcutter).
