var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");

// next goal: depending on pixel color at certain co-ordinates, click or move on to the next position. 4 if statements??

const automation = () => {
  console.log("Script begins");

  sleep(1000);
  console.log("3");
  sleep(1000);
  console.log("2");
  sleep(1000);
  console.log("1");

  // infinite loop
  while (true) {
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(1);

    // You will need to change this mouse movement depending on initial click.
    robot.moveMouseSmooth(1080, 590);
    robot.mouseClick();
    sleep(10000);

    // after sleep, empty inventory
    robot.keyToggle("shift", "down");
    emptyInventory.dropShrimp1();
    emptyInventory.dropShrimp2();
    emptyInventory.dropShrimp3();
    emptyInventory.dropShrimp4();
    emptyInventory.dropShrimp5();
    emptyInventory.dropShrimp6();
    emptyInventory.dropShrimp7();

    console.log("Loop Iterated.");
  }
};

const checkFishingSpot = () => {
  sleep(4000);
  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  robot.mouseClick();
  var img = robot.screen.capture();
  var hex = img.colorAt(974, 680.1);

  if (hex !== "ff0000") {
    console.log("no fishing spot here");
    robot.moveMouseSmooth(850, 685);
    robot.mouseClick();
    robot.mouseClick();
    var img = robot.screen.capture();
    var hex = img.colorAt(849, 687.1);
    console.log(hex);
  } else {
    console.log("it worked!");
    sleep(60000);
    console.log("finished sleeping...");
  }
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

// automation();
checkFishingSpot();
