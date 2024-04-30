function add(a, b, c) {
  console.log("A", a, "b", b, "c", c);
  return a + b + c;
}

function curry(fn) {
  return function currying(...args) {
    console.log("args", args);
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newVal) {
        return currying(...args, ...newVal);
      };
    }
  };
}
const curried = curry(add);

console.log("val", curried(3, 4)(3));
