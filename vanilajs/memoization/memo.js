// //Create a cache
// //Finding Fibonacci of a number using memoization
// function add(a, b) {
//   return a + b;
// }
// const memoizedAdd = memoizeOne(add);

// memoizedAdd(1, 2);
// // add function: is called
// // [new value returned: 3]

// memoizedAdd(1, 2);
// // add function: not called
// // [cached result is returned: 3]

// memoizedAdd(2, 3);
// // add function: is called
// // [new value returned: 5]

// memoizedAdd(2, 3);
// // add function: not called
// // [cached result is returned: 5]

// memoizedAdd(1, 2);
// // add function: is called
// // [new value returned: 3]
// // 👇
// // While the result of `add(1, 2)` was previously cached
// // `(1, 2)` was not the *latest* arguments (the last call was `(2, 3)`)
// // so the previous cached result of `(1, 3)` was lost

// function add(a, b) {
//   return a + b;
// }
// function memoize(fn) {
//   let cache = {};
//   return function (...args) {
//     const arguments = args.toString();

//   };
// }
