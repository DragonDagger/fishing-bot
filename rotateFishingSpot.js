var robot = require("robotjs");

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
  robot.moveMouseSmooth(850, 684);
  sleep(1000);
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

module.exports = { rotateFishingSpot };
