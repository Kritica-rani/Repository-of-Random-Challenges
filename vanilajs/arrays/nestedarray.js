const arr = [1, 2, [3, 4, [5], [6], [7, 8, [9]]]];

const flattenArray = (arr) => {
  let res = [];
  function flat(subarr) {
    const result = subarr.map((item) => {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        res.push(item);
      }
    });
  }
  flat(arr);
  return res;
};
console.log("flattten", flattenArray(arr));
