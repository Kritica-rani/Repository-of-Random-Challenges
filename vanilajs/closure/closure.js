function test(a) {
  return function test1(b) {
    return a + b;
  };
}

const val = test(2);
const res = val(3);
console.log("res", res);
