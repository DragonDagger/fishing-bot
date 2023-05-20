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

  let counter = 0;
  // infinite loop
  while (true) {
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(1);

    checkFishingSpot();
    // sleep(90000);

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

// Checks the color of mouse clicks, red means that there is a fishing spot present. If color is not red, moves mouse to next location and repeats process.
const checkFishingSpot = () => {
  const red = "ff0000";
  sleep(4000);

  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  robot.mouseClick();
  var img = robot.screen.capture();
  var color = img.colorAt(974, 680.1);

  if (color !== red) {
    robot.moveMouseSmooth(850, 685);
    robot.mouseClick();
    robot.mouseClick();
    var img = robot.screen.capture();
    var color = img.colorAt(849, 687.1);

    if (color === red) {
      sleep(90000);
      robot.moveMouseSmooth(1050, 505);
      robot.mouseClick();
      checkFishingSpot();
    }

    if (color !== red) {
      robot.moveMouseSmooth(1050, 590);
      robot.mouseClick();
      sleep(4000);
      robot.moveMouseSmooth(1200, 515);
      robot.mouseClick();
      robot.mouseClick();
      var img = robot.screen.capture();
      var color = img.colorAt(1259, 512.1);

      if (color !== red) {
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        checkFishingSpot();
      }
    }
  } else {
    console.log("color was red");
    sleep(90000);
    console.log("finished sleeping...");
  }
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

automation();
