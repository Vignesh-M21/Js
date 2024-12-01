/**
 * Find the value in a array
 * @param {Function} callback
 */
Array.prototype.biSearchFind = function (callback) {
  let count = length - 1;
  const self = this;
  const length = self.length;

  if (typeof callback !== "function") {
    throw new TypeError("The callback is not a function");
  }
  b;
  if (length === 0) return null;
  if (count === 0) {
    return callback(self[0]) ? self[0] : null;
  }
  for (let i = 0; i < length; i++) {
    if (count < i) return null;
    if (callback(self[i])) return self[i];
    if (callback(self[count])) return self[count];
    count--;
  }
  return null;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value = arr.biSearchFind((e) => {
  return e === 5;
});
const value1 = arr.find((e) => {
  return e.toString();
});

console.log(value, value1);
