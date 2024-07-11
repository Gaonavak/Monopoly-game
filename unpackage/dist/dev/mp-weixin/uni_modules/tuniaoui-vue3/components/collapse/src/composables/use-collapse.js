"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_tokens_collapse = require("../../../../tokens/collapse.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../../libs/lodash/is-number.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useCollapse = (props, emits) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren();
  const activeUid = common_vendor.ref([]);
  const currentActiveIndex = common_vendor.ref();
  const updateActiveUIDWithModelValue = (val) => {
    common_vendor.nextTick$1(() => {
      let activeIndex;
      if (val === void 0 || val === -1) {
        activeIndex = [];
      } else if (uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val)) {
        activeIndex = [val];
      } else {
        activeIndex = [...val];
      }
      activeUid.value = items.value.filter((uid, index) => activeIndex.includes(index)).map((item) => item.uid);
    });
  };
  let innerUpdate = false;
  common_vendor.watch(
    () => props.modelValue,
    (val) => {
      if (innerUpdate) {
        innerUpdate = false;
        return;
      }
      currentActiveIndex.value = val;
      updateActiveUIDWithModelValue(val);
    },
    {
      immediate: true
    }
  );
  const handleItemClick = (uid) => {
    const { accordion } = props;
    const uidIndex = items.value.findIndex((item) => item.uid === uid);
    const isActive = activeUid.value.includes(uid);
    let value;
    if (accordion) {
      if (isActive) {
        value = -1;
      } else {
        value = uidIndex;
      }
    } else {
      if (isActive) {
        value = currentActiveIndex.value.filter(
          (item) => item !== uidIndex
        );
      } else {
        if (currentActiveIndex.value && common_vendor.isArray(currentActiveIndex.value)) {
          value = [...currentActiveIndex.value, uidIndex];
        } else {
          value = !currentActiveIndex.value ? [uidIndex] : [currentActiveIndex.value, uidIndex];
        }
      }
    }
    innerUpdate = true;
    currentActiveIndex.value = value;
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    updateActiveUIDWithModelValue(value);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
    });
  };
  common_vendor.provide(
    uni_modules_tuniaouiVue3_tokens_collapse.collapseContextKey,
    common_vendor.reactive({
      ...common_vendor.toRefs(props),
      items,
      addItem,
      removeItem,
      activeUid,
      handleItemClick
    })
  );
};
exports.useCollapse = useCollapse;
