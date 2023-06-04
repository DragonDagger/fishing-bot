const robot = require("robotjs");
const { sleep } = require("./sleep");
const {
  checkInitialClickColor,
  checkNextClickColor,
} = require("./checkClickColors");

// draynor village fishing spots, face east using the compass  ( see screenshot image for starting point. )
// only start using this fishing spot if combat level is 15+, this is because the dark wizards will attack you if you have a lower combat level.
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
