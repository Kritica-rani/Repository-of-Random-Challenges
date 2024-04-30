//flatten a deep object

const person = {
  name: "John",
  contact: {
    phone: "987-654-3210",
    email: "john123@xyz.com",
    address: {
      city: "Berlin",
      country: "Germany",
    },
  },
};
const flattenObject = (obj) => {
  let res = {};
  function flat(object, prefix = "") {
    for (let key in object) {
      const newKey = prefix === "" ? key : prefix + "." + key;
      const val = object[key];
      if (val !== null && typeof val === "object") {
        let output = flat(val, newKey);
        res = { ...res, ...output };
      } else {
        res[newKey] = val;
      }
    }
  }
  flat(obj);
  return res;
};
console.log(flattenObject(person));
