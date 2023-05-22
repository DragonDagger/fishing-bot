var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");
const { checkFishingSpot } = require("./checkClickColor");

// next goal: set a counter, or loop so that if it enters second spot or third spot maybe 3 times in a row then leave the function or trigger the empty inventory function.
// Currently the only way out of the function is if the first fishing spot has gone through the active process 3 times.
// With the current flow, inventory could fill up earlier - wasting extra time.

// Or: simpler option could be to change function recursivness or make inventory empty occur more frequently.

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
