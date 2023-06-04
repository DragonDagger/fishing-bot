var robot = require("robotjs");
const { checkFishingSpotV2 } = require("../functions/checkFishingSpotV2");
const { sleep } = require("../functions/sleep");
const { moveToBank } = require("../functions/moveToBank");

const draynorFishingSpot = () => {
  console.log("Script warming up");

  sleep(1000);
  console.log("3");
  sleep(1000);
  console.log("2");
  sleep(1000);
  console.log("1");

  let counter = 0;
  // infinite loop
  while (true) {
    robot.setMouseDelay(2);

    // the amount of function calls needed here will change depending on fishing level (this is because: chance of successful catch increases the higher your level is.)
    checkFishingSpotV2();
    checkFishingSpotV2();
    checkFishingSpotV2();
    moveToBank();

    counter++;

    console.log(`Loop Iterated ${counter} times`);
  }
};

module.exports = { draynorFishingSpot };
