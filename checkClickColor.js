// Checks the color of mouse clicks, red means that there is a fishing spot present. If color is not red, moves mouse to next location and repeats process.
// Have archived these functions for now, until I can figure out a more consistent way to capture the color, as it stands currently I can not accurately determine color at the pixel I want.

const newCheckFishingSpotColor = () => {
  let level = 0;
  const red = "ff0000";

  sleep(4000);
  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  var img = robot.screen.capture();
  var color = img.colorAt(974, 680.1);

  if (color !== red && level === 0) {
    level = 1;
    console.log("first");
  }

  if (level === 1) {
    console.log("second");
  }

  if (level === 1) {
    console.log("second");
  }

  if (color === red) {
    sleep(90000);
  }
};

const oldCheckFishingSpotColor = () => {
  const red = "ff0000";
  sleep(4000);

  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  robot.mouseClick();
  var img = robot.screen.capture();
  var color = img.colorAt(974, 679.1);
  sleep(2000);

  if (color !== red) {
    console.log(color);
    sleep(2000);
    robot.moveMouseSmooth(850, 685);
    robot.mouseClick();
    robot.mouseClick();
    var img = robot.screen.capture();
    var color = img.colorAt(849, 686.1);

    if (color === red) {
      sleep(90000);
      robot.moveMouseSmooth(1050, 505);
      robot.mouseClick();
      sleep(2000);
      checkFishingSpot();
    }

    if (color !== red) {
      console.log(color);
      robot.moveMouseSmooth(1050, 590);
      robot.mouseClick();
      sleep(4000);
      robot.moveMouseSmooth(1200, 515);
      robot.mouseClick();
      robot.mouseClick();
      var img = robot.screen.capture();
      var color = img.colorAt(1199, 516.1);

      if (color === red) {
        sleep(90000);
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        checkFishingSpot();
      }

      if (color !== red) {
        console.log(color);
        robot.moveMouseSmooth(850, 755);
        robot.mouseClick();
        sleep(2000);
        checkFishingSpot();
      }
    }
  } else {
    console.log(`color was ${color}`);
    sleep(90000);
    console.log("finished sleeping...");
  }
};

function testScreenCapture() {
  // const activeParticleColors = [
  //   "6695dc",
  //   "82afe3",
  //   "5d6c87",
  //   "f3e9f1",
  //   "99bde7",
  //   "aacaec",
  //   "bdcaec",
  //   "739bd3",
  // ];
  sleep(4000);
  robot.moveMouseSmooth(975, 678);
  robot.mouseClick();
  robot.mouseClick();
  // taking a screenshot
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var color = img.colorAt(972, 679.1);
  console.log(`the color is: ${color}`);
}
