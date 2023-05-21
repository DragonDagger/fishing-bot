var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");
const { rotateFishingSpot } = require("./rotateFishingSpot");

// next goal: more efficient camping between spots. Refine likelihood of being at a active fishing spot.

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
    robot.setMouseDelay(2);

    rotateFishingSpot();
    rotateFishingSpot();
    rotateFishingSpot();

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
