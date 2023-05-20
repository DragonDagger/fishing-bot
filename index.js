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
  robot.setMouseDelay(1);
  robot.moveMouse(0, 0);
  sleep(1000);
  console.log("Done.");
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

automation();
