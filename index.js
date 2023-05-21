var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");

// next goal: more efficient camping between spots. Refine likelihood of being at a active fishing spot.

const automation = () => {
  console.log("Script begins");

  sleep(1000);
  console.log("3");
  sleep(1000);
  console.log("2");
  sleep(1000);
  console.log("1");

  let counter = 0;
  // infinite loop
  while (true) {
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(0.6);

    rotateFishingSpot();

    // after sleep, empty inventory
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

// This function rotates between two fishing spots
const rotateFishingSpot = () => {
  sleep(4000);
  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  sleep(30000);
  robot.mouseClick();
  sleep(30000);
  console.log("rotate to next spot...");
  robot.moveMouseSmooth(850, 685);
  robot.mouseClick();
  robot.moveMouseSmooth(1060, 650);
  sleep(30000);
  robot.mouseClick();
  sleep(30000);
};

automation();
