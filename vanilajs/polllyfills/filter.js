const arr = [1, 2, 4, 6, 8, 10];

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const filtered = arr.myFilter((item) => item < 4);
console.log("filtered", filtered);
