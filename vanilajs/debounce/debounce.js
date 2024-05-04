//debounce
function callData() {
  console.log("Hello");
}
const debounce = (fn) => {
  let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, 1000);
  };
};
const db = debounce(callData);

console.log("Calling debounced function");
db(); // This call should be debounced
db(); // This call should be ignored
db();
