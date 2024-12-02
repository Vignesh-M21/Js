/**
 * Find the value in a array with match the callback function true
 * @param {Function} callback
 */
(function () {
  if (Array.prototype.biSearchFind) return;
  Array.prototype.biSearchFind = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    if (!this) {
      throw new TypeError(
        "Array.prototype.biSearchFind called on null or undefined"
      );
    }

    const array = Object(this);
    const length = array.length >>> 0;
    let count = length - 1;
    if (length === 0) return null;
    if (count === 0) {
      return callback(array[0], 0) ? array[0] : null;
    }
    for (let i = 0; i < length; i++) {
      if (count < i) return null;
      if (callback(array[i], i)) return array[i];
      if (callback(array[count], count)) return array[count];
      count--;
    }
    return null;
  };
})();
