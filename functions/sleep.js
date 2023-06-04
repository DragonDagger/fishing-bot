// Sleep function that waits for a specified amount of time in milliseconds, before continuing on to next steps.
const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

module.exports = { sleep };
