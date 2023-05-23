const robot = require("robotjs");
const { sleep } = require("./sleep");

function checkInitialClickColor(x, y) {
  const activeClickColor = ["ff0000"];

  robot.moveMouseSmooth(x, y);
  robot.mouseClick();
  robot.mouseClick();

  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var samePixel = img.colorAt(x, y);

  if (activeClickColor.includes(samePixel)) {
    console.log("Active fishing spot found on samePixel check");
    return true;
  } else {
    console.log("no red here.");
    return false;
  }
}

function checkNextClickColor(x, y) {
  const activeClickColor = ["ff0000"];
  robot.mouseClick();
  robot.mouseClick();

  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var samePixel = img.colorAt(x, y);

  if (activeClickColor.includes(samePixel)) {
    console.log("Still an active fishing spot.");
    return true;
  } else {
    console.log("This fishing spot is no longer active.");
    checkFishingSpot();
  }
}
const checkFishingSpot = () => {
  const firstSpot = checkInitialClickColor(975, 678);

  if (firstSpot === false) {
    const secondSpot = checkInitialClickColor(850, 685);

    if (secondSpot === true) {
      sleep(10000);
      robot.moveMouseSmooth(950, 670);
      let mouse = robot.getMousePos();
      sleep(1000);
      checkNextClickColor(mouse.x, mouse.y);
      sleep(10000);
      checkNextClickColor(mouse.x, mouse.y);
      sleep(10000);
      checkNextClickColor(mouse.x, mouse.y);
      sleep(10000);
      checkNextClickColor(mouse.x, mouse.y);
      sleep(10000);
      robot.moveMouseSmooth(1050, 580);
      robot.mouseClick();
      sleep(2000);
      console.log("Have left the checkFishingSpot function.");
    }

    if (secondSpot === false) {
      sleep(2000);
      robot.moveMouseSmooth(1050, 590);
      robot.mouseClick();
      sleep(2000);

      const thirdSpot = checkInitialClickColor(1200, 515);
      sleep(2000);

      if (thirdSpot === true) {
        sleep(10000);
        robot.moveMouseSmooth(1070, 593);
        sleep(1000);
        let mouse = robot.getMousePos();
        checkNextClickColor(mouse.x, mouse.y);
        sleep(10000);
        checkNextClickColor(mouse.x, mouse.y);
        sleep(10000);
        checkNextClickColor(mouse.x, mouse.y);
        sleep(10000);
        checkNextClickColor(mouse.x, mouse.y);
        sleep(10000);
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        console.log("Have left the checkFishingSpot function.");
      }

      if (thirdSpot === false) {
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        console.log("Have left the checkFishingSpot function.");
      }
    }
  } else {
    sleep(10000);
    let mouse = robot.getMousePos();
    checkNextClickColor(mouse.x, mouse.y);
    sleep(10000);
    checkNextClickColor(mouse.x, mouse.y);
    sleep(10000);
    checkNextClickColor(mouse.x, mouse.y);
    sleep(10000);
    checkNextClickColor(mouse.x, mouse.y);
    sleep(10000);
    console.log("Have left the checkFishingSpot function ...");
  }
};

module.exports = {
  checkInitialClickColor,
  checkFishingSpot,
  checkNextClickColor,
};
