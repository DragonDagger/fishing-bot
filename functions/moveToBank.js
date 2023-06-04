const robot = require("robotjs");
const { sleep } = require("./sleep");

const moveToBank = () => {
  sleep(3000);
  robot.moveMouse(1776, 87);
  sleep(1000);
  robot.mouseClick();
  sleep(25000);
  robot.moveMouseSmooth(978, 536, 0.5);
  sleep(1000);
  robot.mouseClick();
  sleep(2000);
  robot.moveMouseSmooth(1021, 825, 0.5);
  sleep(1000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouse(663, 142);
  sleep(1000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouseSmooth(1909, 120, 0.5);
  sleep(1000);
  robot.mouseClick();
  sleep(25000);
  robot.moveMouseSmooth(850, 945, 0.5);
  sleep(1000);
  robot.mouseClick();
  sleep(8000);
};

module.exports = { moveToBank };
