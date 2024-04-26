const arr = [5, 6, 7, 8, 9, 10, 23];

const searchValue = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

console.log("up", searchValue(arr, 10));
