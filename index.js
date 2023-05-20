var robot = require("robotjs");

// main function where automation occurs
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
    // change this mouse movement depending on initial click.
    robot.moveMouseSmooth(1080, 590);
    robot.mouseClick();
    sleep(10000);
    // after sleep, empty inventory
    robot.keyToggle("shift", "down");
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1864, 984);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1814, 981);
    robot.mouseClick();
    robot.setMouseDelay(5);
    robot.moveMouseSmooth(1776, 986);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1735, 986);
    robot.mouseClick();
    robot.setMouseDelay(7);
    robot.moveMouseSmooth(1865, 948);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1813, 947);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1775, 947);
    robot.mouseClick();
    robot.setMouseDelay(8);
    robot.moveMouseSmooth(1734, 946);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1864, 909);
    robot.mouseClick();
    robot.setMouseDelay(9);
    robot.moveMouseSmooth(1813, 908);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1774, 908);
    robot.mouseClick();
    robot.setMouseDelay(9);
    robot.moveMouseSmooth(1736, 907);
    robot.mouseClick();
    robot.setMouseDelay(8);
    robot.moveMouseSmooth(1864, 874);
    robot.mouseClick();
    robot.setMouseDelay(8);
    robot.moveMouseSmooth(1815, 874);
    robot.mouseClick();
    robot.setMouseDelay(9);
    robot.moveMouseSmooth(1775, 873);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1735, 872);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1867, 839);
    robot.mouseClick();
    robot.setMouseDelay(9);
    robot.moveMouseSmooth(1819, 839);
    robot.mouseClick();
    robot.setMouseDelay(7);
    robot.moveMouseSmooth(1773, 837);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1736, 804);
    robot.mouseClick();
    robot.setMouseDelay(9);
    robot.moveMouseSmooth(1867, 803);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1819, 804);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1773, 805);
    robot.mouseClick();
    robot.setMouseDelay(5);
    robot.moveMouseSmooth(1736, 805);
    robot.mouseClick();
    robot.setMouseDelay(4);
    robot.moveMouseSmooth(1866, 764);
    robot.mouseClick();
    robot.setMouseDelay(6);
    robot.moveMouseSmooth(1820, 766);
    robot.mouseClick();
    robot.setMouseDelay(8);
    robot.moveMouseSmooth(1773, 766);
    robot.mouseClick();
    console.log("Loop Iterated.");
  }
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

automation();
