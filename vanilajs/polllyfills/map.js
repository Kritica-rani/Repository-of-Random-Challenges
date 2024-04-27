//Write pollyfill for map

const arr = [1, 2, 3, 5, 6];

Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const array = cb(arr[i], i, newArr);
    newArr.push(array);
  }
  return newArr;
};

const updated = arr.myMap((item) => item * 5);
console.log("updated", updated);
