const robot = require("robotjs");

function checkInitialClickColor(x, y) {
  const activeClickColor = ["ff0000"];

  robot.moveMouseSmooth(x, y);
  robot.mouseClick();
  robot.mouseClick();

  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var samePixel = img.colorAt(x, y);

  if (activeClickColor.includes(samePixel)) {
    console.log("Active fishing spot found on samePixel check.");
    return true;
  } else {
    console.log("no active fishing spot here.");
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
    console.log("Still an active fishing spot...");
    return true;
  } else {
    console.log("This fishing spot is no longer active.");
    return false;
  }
}

module.exports = { checkInitialClickColor, checkNextClickColor };
