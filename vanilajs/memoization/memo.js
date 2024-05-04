function add(a, b) {
  return a + b;
}

const memoizefn = (fn) => {
  const map = new Map();
  return function (...args) {
    const keys = args.join("_");
    if (map.has(keys)) {
      console.log("from Cache");
      return map.get(keys);
    }
    const result = fn(...args);
    map.set(keys, result);
    console.log("map", map);
    return result;
  };
};

const addition = memoizefn(add);
console.log(addition(2, 3));
console.log(addition(2, 3));
