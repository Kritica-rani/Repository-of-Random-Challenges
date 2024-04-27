const obj = {
  name: "kritica",
  age: 25,
};
function getAdress(city, state) {
  console.log("consoling value", this.name, "is from ", city, state);
}
//Pollyfill for call
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    return console.log("error");
  }
  context.fn = this;
  context.fn([args]);
};
getAdress.myCall(obj, "dbg", "bihar");
