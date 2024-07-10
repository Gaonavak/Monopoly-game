"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useToggle = (initState) => {
  const state = common_vendor.ref(initState);
  const toggle = () => {
    state.value = !state.value;
  };
  return [state, toggle];
};
exports.useToggle = useToggle;
