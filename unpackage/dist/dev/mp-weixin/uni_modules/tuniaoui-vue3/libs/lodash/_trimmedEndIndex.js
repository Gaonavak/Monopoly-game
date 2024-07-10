"use strict";
const reWhitespace = /\s/;
function trimmedEndIndex(string) {
  let index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
exports.trimmedEndIndex = trimmedEndIndex;
