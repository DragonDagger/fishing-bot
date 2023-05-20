var robot = require("robotjs");
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
    sleep(60000);

    // after sleep, empty inventory
    robot.keyToggle("shift", "down");
    dropShrimp1();
    dropShrimp2();
    dropShrimp3();
    dropShrimp4();
    dropShrimp5();
    dropShrimp6();
    dropShrimp7();
    console.log("Loop Iterated.");
  }
};

// Empty inventory functions
const dropShrimp1 = () => {
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(981, 987));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(981, 987));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(981, 987));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(981, 987));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};
const dropShrimp2 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(950, 940));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(950, 940));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(950, 940));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(950, 940));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};

const dropShrimp3 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(910, 900));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(910, 900));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(910, 900));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(910, 900));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};

const dropShrimp4 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(880, 870));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(880, 870));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(880, 870));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(880, 870));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};

const dropShrimp5 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(840, 830));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(840, 830));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(840, 830));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(840, 830));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};

const dropShrimp6 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(800, 809));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(800, 809));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(800, 809));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(800, 809));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
};

const dropShrimp7 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(760, 770));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(760, 770));
  robot.mouseClick();
  robot.setMouseDelay(numberBetween(300, 750));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(760, 770));
  robot.mouseClick();
};

// randomly select between two numbers, to slightly change clicking coordinates between mouse movements inside the inventory. Also used to change mouse delay between inputs.
const numberBetween = (min, max) => {
  const x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

automation();
