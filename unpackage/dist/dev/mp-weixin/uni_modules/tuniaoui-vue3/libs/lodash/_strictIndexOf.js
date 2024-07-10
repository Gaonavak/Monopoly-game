"use strict";
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1;
  const length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
exports.strictIndexOf = strictIndexOf;
