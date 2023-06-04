const robot = require("robotjs");
const { sleep } = require("./sleep");

// face camera north using the compass, cooks food then brings it back to the bank in Al Kharid ( see screenshot image for starting point. )
const cookFood = () => {
  sleep(3000);
  robot.moveMouse(850, 504);
  sleep(1000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouseSmooth(711, 143, 0.5);
  sleep(1000);
  robot.mouseClick(["right"]);
  sleep(1000);
  robot.moveMouseSmooth(695, 230, 0.5);
  sleep(500);
  robot.mouseClick();
  sleep(500);
  robot.moveMouseSmooth(1854, 61, 0.5);
  sleep(500);
  robot.mouseClick();
  sleep(15000);
  robot.moveMouseSmooth(565, 580, 0.5);
  sleep(500);
  robot.mouseClick();
  sleep(5000);
  robot.keyTap("space");
  sleep(10000);
  robot.moveMouseSmooth(840, 520, 0.5);
  sleep(500);
  robot.mouseClick();
  sleep(1000);
  robot.keyTap("space");
  sleep(10000);
  robot.mouseClick();
  sleep(1000);
  robot.keyTap("space");
  sleep(10000);
  robot.mouseClick();
  sleep(1000);
  robot.keyTap("space");
  sleep(10000);
  robot.mouseClick();
  sleep(1000);
  robot.keyTap("space");
  sleep(10000);
  robot.moveMouseSmooth(1825, 152, 0.5);
  sleep(500);
  robot.mouseClick();
  sleep(16000);
  robot.moveMouse(850, 504);
  sleep(1000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouse(1020, 825);
  sleep(1000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouse(1062, 65);
  sleep(500);
  robot.mouseClick();
  sleep(3000);
};

const cookingFood = () => {
  console.log("3");
  sleep(1000);
  console.log("2");
  sleep(1000);
  console.log("1");
  sleep(1000);
  while (true) {
    cookFood();
  }
};

cookingFood();
