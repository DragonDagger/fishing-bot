var robot = require("robotjs");
const { emptyInventory } = require("../functions/emptyInventory");
const { checkFishingSpot } = require("../functions/checkFishingSpot");
const { sleep } = require("../functions/sleep");

const lumbridgeFishingSpot = () => {
  console.log("Script warming up");

  sleep(1000);
  console.log("3");
  sleep(1000);
  console.log("2");
  sleep(1000);
  console.log("1");

  let counter = 0;
  // infinite loop
  while (true) {
    // stop holding down shift key when not emptying inventory
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(2);

    // the amount of function calls needed here will change depending on fishing level (this is because: chance of successful catch increases the higher your level is.)
    checkFishingSpot();
    checkFishingSpot();
    checkFishingSpot();

    // start holding down shift key, empty the inventory
    robot.keyToggle("shift", "down");
    emptyInventory();

    counter++;

    console.log(`Loop Iterated ${counter} times`);
  }
};

module.exports = { lumbridgeFishingSpot };
