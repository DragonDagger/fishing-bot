const robot = require("robotjs");
const { sleep } = require("./sleep");
const {
  checkInitialClickColor,
  checkNextClickColor,
} = require("./checkClickColors");

// South of Lumbridge fishing spots, face north using the compass  ( see screenshot image for starting point. ) This function works in tandem with the emptyInventory function.
const checkFishingSpot = () => {
  const firstSpot = checkInitialClickColor(975, 678);

  if (firstSpot === false) {
    const secondSpot = checkInitialClickColor(850, 685);

    if (secondSpot === true) {
      sleep(10000);
      robot.moveMouseSmooth(950, 670);
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
        robot.moveMouseSmooth(1050, 580);
        robot.mouseClick();
        sleep(2000);
        console.log("Leaving spot 2.");
      } else {
        robot.moveMouseSmooth(1050, 580);
        robot.mouseClick();
        sleep(2000);
        console.log("Leaving spot 2 right away.");
      }
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
          robot.moveMouseSmooth(850, 755);
          robot.mouseClick();
          sleep(2000);
          console.log("Leaving spot 3.");
        } else {
          robot.moveMouseSmooth(850, 755);
          robot.mouseClick();
          sleep(2000);
          console.log("Leaving spot 3 right away.");
        }
      }

      if (thirdSpot === false) {
        robot.moveMouseSmooth(850, 755);
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

module.exports = { checkFishingSpot };
