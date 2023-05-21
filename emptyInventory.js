var robot = require("robotjs");

// randomly select between two numbers, to slightly change clicking coordinates between mouse movements inside the inventory. Also used to change mouse delay between inputs.
const numberBetween = (min, max) => {
  const x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
};

const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

// Empty inventory functions

const dropShrimp1 = () => {
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(981, 987));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(981, 987));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(981, 987));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(981, 987));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};
const dropShrimp2 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(950, 940));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(950, 940));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(950, 940));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(950, 940));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

const dropShrimp3 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(910, 900));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(910, 900));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(910, 900));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(910, 900));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

const dropShrimp4 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(880, 870));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(880, 870));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(880, 870));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(880, 870));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

const dropShrimp5 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(840, 830));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(840, 830));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(840, 830));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(840, 830));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

const dropShrimp6 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(800, 809));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(800, 809));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(800, 809));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1730, 1740), numberBetween(800, 809));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

const dropShrimp7 = () => {
  robot.moveMouseSmooth(numberBetween(1861, 1869), numberBetween(760, 770));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1810, 1819), numberBetween(760, 770));
  robot.mouseClick();
  sleep(numberBetween(140, 310));
  robot.moveMouseSmooth(numberBetween(1770, 1780), numberBetween(760, 770));
  robot.mouseClick();
};

module.exports = {
  dropShrimp1,
  dropShrimp2,
  dropShrimp3,
  dropShrimp4,
  dropShrimp5,
  dropShrimp6,
  dropShrimp7,
  numberBetween,
};
