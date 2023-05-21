var robot = require("robotjs");
const emptyInventory = require("./emptyInventory");
const { rotateFishingSpot } = require("./rotateFishingSpot");

// next goal: more efficient camping between spots. Refine likelihood of being at a active fishing spot.

const automation = () => {
  console.log("Script warming up");

  sleep(1000);
  console.log("ready...");
  sleep(1000);
  console.log("set...");
  sleep(1000);
  console.log("go...");

  let counter = 0;
  // infinite loop
  while (true) {
    // stop holding down shift key
    robot.keyToggle("shift", "up");
    robot.setMouseDelay(2);

    rotateFishingSpot();
    rotateFishingSpot();
    rotateFishingSpot();

    // start holding down shift key, empty the inventory
    robot.keyToggle("shift", "down");
    emptyInventory.dropShrimp1();
    emptyInventory.dropShrimp2();
    emptyInventory.dropShrimp3();
    emptyInventory.dropShrimp4();
    emptyInventory.dropShrimp5();
    emptyInventory.dropShrimp6();
    emptyInventory.dropShrimp7();

    counter++;

    console.log(`Loop Iterated ${counter} times`);
  }
};

// Sleep function using Atomics.wait()
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

// automation();
function testScreenCapture() {
  const activeParticleColor = ["ff0000"];
  sleep(4000);
  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  robot.mouseClick();
  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var firstcolor = img.colorAt(973, 679.1);
  var secondcolor = img.colorAt(973, 680);
  var thirdcolor = img.colorAt(975, 679.1);
  var fourthcolor = img.colorAt(974, 678);
  var fifthcolor = img.colorAt(977, 679.1);
  console.log(
    `the first color is: ${firstcolor},
  the second color is: ${secondcolor},
  the third color is: ${thirdcolor},
  the fourth color is: ${fourthcolor},
  the fifth color is: ${fifthcolor},`
  );

  if (activeParticleColor.includes(firstcolor)) {
    console.log("Active fishing spot found on first check");
  }
  if (activeParticleColor.includes(secondcolor)) {
    console.log("Active fishing spot found on second check");
  }
  if (activeParticleColor.includes(thirdcolor)) {
    console.log("Active fishing spot found on third check");
  }
  if (activeParticleColor.includes(fourthcolor)) {
    console.log("Active fishing spot found on fourth check");
  }
  if (activeParticleColor.includes(fifthcolor)) {
    console.log("Active fishing spot found on fifth check");
  } else {
    console.log("no red here sir");
  }
}
testScreenCapture();
