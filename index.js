var robot = require("robotjs");
const emptyInventory = require("./functions/emptyInventory");
const { checkFishingSpot } = require("./functions/checkFishingSpot");

// Goal: Change function recursivness or make inventory empty occur more frequently.

const automation = () => {
  console.log("Script warming up");

  sleep(1000);
  console.log("ready...");
  sleep(1000);
  console.log("set...");
  sleep(1000);
  console.log("go...");

  let counter = 0;
  // infinite loop
  while (true) {
    // stop holding down shift key
    robot.keyToggle("shift", "up");

    // for some reason, changing the MouseDelay below 2 breaks the function that checks the click color.
    robot.setMouseDelay(2);

    checkFishingSpot();
    checkFishingSpot();
    checkFishingSpot();
    // may remove this 4th call, depending on if its too much or not
    checkFishingSpot();

    // start holding down shift key, empty the inventory
    robot.keyToggle("shift", "down");
    emptyInventory.dropShrimp1();
    emptyInventory.dropShrimp2();
    emptyInventory.dropShrimp3();
    emptyInventory.dropShrimp4();
    emptyInventory.dropShrimp5();
    emptyInventory.dropShrimp6();
    emptyInventory.dropShrimp7();

    counter++;

    console.log(`Loop Iterated ${counter} times`);
  }
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

automation();
