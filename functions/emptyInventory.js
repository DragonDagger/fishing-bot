const robot = require("robotjs");
const { sleep } = require("./sleep");

const numberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dropShrimp = (minimumX, maximumX, minimumY, maximumY, speed) => {
  const x = numberBetween(minimumX, maximumX);
  const y = numberBetween(minimumY, maximumY);
  robot.moveMouseSmooth(x, y, speed);
  robot.mouseClick();
  sleep(numberBetween(140, 310));
};

// drops items based on coordinates inside the inventory. If using a different resolution display then this would not work unti lthe x, y values are adjusted.
const emptyInventory = () => {
  dropShrimp(1861, 1869, 981, 987, 0.5);
  dropShrimp(1810, 1819, 981, 987, 8);
  dropShrimp(1770, 1780, 981, 987, 8);
  dropShrimp(1730, 1740, 981, 987, 8);
  dropShrimp(1861, 1869, 950, 940, 8);
  dropShrimp(1810, 1819, 950, 940, 8);
  dropShrimp(1770, 1780, 950, 940, 8);
  dropShrimp(1730, 1740, 950, 940, 8);
  dropShrimp(1861, 1869, 910, 900, 8);
  dropShrimp(1810, 1819, 910, 900, 8);
  dropShrimp(1770, 1780, 910, 900, 8);
  dropShrimp(1730, 1740, 910, 900, 8);
  dropShrimp(1861, 1869, 880, 870, 8);
  dropShrimp(1810, 1819, 880, 870, 8);
  dropShrimp(1770, 1780, 880, 870, 8);
  dropShrimp(1730, 1740, 880, 870, 8);
  dropShrimp(1861, 1869, 840, 830, 8);
  dropShrimp(1810, 1819, 840, 830, 8);
  dropShrimp(1770, 1780, 840, 830, 8);
  dropShrimp(1730, 1740, 840, 830, 8);
  dropShrimp(1861, 1869, 800, 809, 8);
  dropShrimp(1810, 1819, 800, 809, 8);
  dropShrimp(1770, 1780, 800, 809, 8);
  dropShrimp(1730, 1740, 800, 809, 8);
  dropShrimp(1861, 1869, 760, 770, 8);
  dropShrimp(1810, 1819, 760, 770, 8);
  dropShrimp(1770, 1780, 760, 770, 8);
};

module.exports = {
  emptyInventory,
};
