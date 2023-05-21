var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");

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
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(2);

    rotateFishingSpot();
    rotateFishingSpot();
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
  //
  sleep(3000);
  robot.moveMouseSmooth(975, 678, 0.8);
  robot.mouseClick();
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  //
  console.log("rotate to next spot...");
  //
  robot.moveMouseSmooth(850, 685);
  robot.mouseClick();
  robot.mouseClick();
  sleep(1000);
  robot.moveMouseSmooth(950, 650);
  sleep(10000);
  robot.mouseClick();
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.mouseClick();
  sleep(10000);
  robot.moveMouseSmooth(1060, 650, 0.8);
  sleep(1000);
  robot.mouseClick();
  robot.mouseClick();
  sleep(1000);
  //
};

automation();
