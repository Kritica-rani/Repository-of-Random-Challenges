const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((item, i) => (arr[i] = item * 2));
console.log("Arrrrr", arr);
