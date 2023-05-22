var robot = require("robotjs");
// Checks the color of mouse clicks, red means that there is a fishing spot present. If color is not red, moves mouse to next location and repeats process.

const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

function checkClickColor(x, y) {
  const activeClickColor = ["ff0000"];

  robot.moveMouseSmooth(x, y);
  robot.mouseClick();
  robot.mouseClick();

  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var samePixel = img.colorAt(x, y);
  var secondcolor = img.colorAt(x - 2, y + 2);
  var thirdcolor = img.colorAt(x, y + 1.1);
  var fourthcolor = img.colorAt(x - 1, y);
  var fifthcolor = img.colorAt(x + 2, y + 1.1);

  if (activeClickColor.includes(samePixel)) {
    console.log("Active fishing spot found on samePixel check");
    return true;
  }
  if (activeClickColor.includes(secondcolor)) {
    console.log("Active fishing spot found on second check");
    return true;
  }
  if (activeClickColor.includes(thirdcolor)) {
    console.log("Active fishing spot found on third check");
    return true;
  }
  if (activeClickColor.includes(fourthcolor)) {
    console.log("Active fishing spot found on fourth check");
    return true;
  }
  if (activeClickColor.includes(fifthcolor)) {
    console.log("Active fishing spot found on fifth check");
    return true;
  } else {
    console.log("no red here.");
    return false;
  }
}

const checkFishingSpot = () => {
  const firstSpot = checkClickColor(975, 678);

  if (firstSpot === false) {
    const secondSpot = checkClickColor(850, 685);

    if (secondSpot === true) {
      sleep(10000);
      robot.moveMouseSmooth(950, 670);
      sleep(1000);
      robot.mouseClick();
      sleep(10000);
      robot.mouseClick();
      sleep(10000);
      robot.mouseClick();
      sleep(10000);
      robot.mouseClick();
      sleep(10000);
      robot.moveMouseSmooth(1050, 580);
      robot.mouseClick();
      sleep(2000);
      checkFishingSpot();
    }

    if (secondSpot === false) {
      sleep(2000);
      robot.moveMouseSmooth(1050, 590);
      robot.mouseClick();
      sleep(2000);

      const thirdSpot = checkClickColor(1200, 515);
      sleep(2000);

      if (thirdSpot === true) {
        sleep(10000);
        robot.moveMouseSmooth(1070, 593);
        sleep(1000);
        robot.mouseClick();
        sleep(10000);
        robot.mouseClick();
        sleep(10000);
        robot.mouseClick();
        sleep(10000);
        robot.mouseClick();
        sleep(10000);
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        checkFishingSpot();
      }

      if (thirdSpot === false) {
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        checkFishingSpot();
      }
    }
  } else {
    console.log(`inside the else statement`);
    sleep(10000);
    robot.mouseClick();
    sleep(10000);
    robot.mouseClick();
    sleep(10000);
    robot.mouseClick();
    sleep(10000);
    robot.mouseClick();
    sleep(10000);
    console.log("finished the else statement...");
  }
};

module.exports = { checkClickColor, checkFishingSpot };
