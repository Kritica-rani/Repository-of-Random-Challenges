function print() {
  console.log("printing");
}

const throttle = (fn, delay) => {
  let timeout;
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    fn(...args);
  };
};

const throttledVal = throttle(print, 1000);
console.log("start");
throttledVal();
throttledVal();
throttledVal();
