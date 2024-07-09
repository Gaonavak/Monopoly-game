"use strict";
const common_vendor = require("../../../../common/vendor.js");
const useOrderedChildren = () => {
  const children = {};
  const orderedChildren = common_vendor.shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value.push(child);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter(
      (child) => child.uid !== uid
    );
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
exports.useOrderedChildren = useOrderedChildren;
