"use strict";
function castArray(value) {
  if (!value || Array.isArray(value) && !value.length) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
exports.castArray = castArray;
