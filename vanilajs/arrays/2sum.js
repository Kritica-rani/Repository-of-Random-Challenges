// 2 sum problem
//const arr = [1,2,3,4,5] , target = 5, [1,2]
const arr = [1, 2, 3, 4, 5];
const findTarget = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
