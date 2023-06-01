const robot = require("robotjs");
const { sleep } = require("./sleep");

function checkInitialClickColor(x, y) {
  const activeClickColor = ["ff0000"];

  robot.moveMouseSmooth(x, y);
  sleep(500);
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
  sleep(500);
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

// redo the function for draynor village spots
const checkFishingSpotV2 = () => {
  const firstSpot = checkInitialClickColor(986, 685);

  if (firstSpot === false) {
    const secondSpot = checkInitialClickColor(860, 700);

    if (secondSpot === true) {
      sleep(10000);
      robot.moveMouseSmooth(950, 690);
      sleep(500);
      let mouse = robot.getMousePos();
      sleep(1000);
      if (checkNextClickColor(mouse.x, mouse.y)) {
        for (let i = 0; i < 4; i++) {
          console.log(`checked color: ${i} times!`);
          sleep(10000);
          if (checkNextClickColor(mouse.x, mouse.y)) {
            continue;
          } else {
            break;
          }
        }
        sleep(2000);
        robot.moveMouseSmooth(1070, 685);
        sleep(500);
        robot.mouseClick();
        sleep(2000);
        console.log("Leaving spot 2.");
      } else {
        robot.moveMouseSmooth(1070, 685);
        robot.mouseClick();
        sleep(2000);
        console.log("Leaving spot 2 right away.");
      }
    }

    if (secondSpot === false) {
      sleep(2000);
      robot.moveMouseSmooth(1070, 685);
      sleep(500);
      robot.mouseClick();
      sleep(2000);

      const thirdSpot = checkInitialClickColor(570, 795);
      sleep(2000);

      if (thirdSpot === true) {
        sleep(10000);
        robot.moveMouseSmooth(950, 693);
        sleep(1000);
        let mouse = robot.getMousePos();
        if (checkNextClickColor(mouse.x, mouse.y)) {
          for (let i = 0; i < 4; i++) {
            console.log(`checked color: ${i} times!`);
            sleep(10000);
            if (checkNextClickColor(mouse.x, mouse.y)) {
              continue;
            } else {
              break;
            }
          }
          sleep(2000);
          robot.moveMouseSmooth(1312, 607);
          sleep(500);
          robot.mouseClick();
          sleep(2000);
          console.log("Leaving spot 3.");
        } else {
          robot.moveMouseSmooth(1312, 607);
          sleep(500);
          robot.mouseClick();
          sleep(2000);
          console.log("Leaving spot 3 right away.");
        }
      }

      if (thirdSpot === false) {
        sleep(2000);
        robot.moveMouseSmooth(1312, 607);
        sleep(500);
        robot.mouseClick();
        sleep(2000);
        console.log("Leaving spot 3.");
      }
    }
  } else {
    sleep(10000);
    let mouse = robot.getMousePos();
    if (checkNextClickColor(mouse.x, mouse.y)) {
      for (let i = 0; i < 4; i++) {
        console.log(`checked color: ${i} times!`);
        sleep(10000);
        if (checkNextClickColor(mouse.x, mouse.y)) {
          continue;
        } else {
          break;
        }
      }
      sleep(2000);
      console.log("Resetting at spot 1.");
    }
  }
};

module.exports = {
  checkFishingSpotV2,
};
