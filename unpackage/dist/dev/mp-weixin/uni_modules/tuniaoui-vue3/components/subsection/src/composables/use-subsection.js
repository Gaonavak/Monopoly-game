"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_subsection = require("../../../../tokens/subsection.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useSubsection = (props, emits) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSubsection", "请在 setup 中使用 useSubsection");
  }
  const {
    children: items,
    addChild,
    removeChild: removeItem
  } = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren();
  const componentId = `ts-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const { getSelectorNodeInfo } = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance);
  const activeUid = common_vendor.ref(0);
  const currentActiveIndex = common_vendor.ref(0);
  const addItem = (item) => {
    if (props.modelValue !== void 0) {
      if (props.modelValue === items.value.length) {
        currentActiveIndex.value = props.modelValue;
        activeUid.value = item.uid;
        common_vendor.nextTick$1(() => {
          updateSliderRectInfo(item);
        });
      }
    }
    addChild(item);
  };
  const updateActiveUidWithIndex = () => {
    common_vendor.nextTick$1(() => {
      const item = items.value[currentActiveIndex.value];
      if (item) {
        activeUid.value = item.uid;
        updateSliderRectInfo(item);
      }
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
      if (val === void 0 || val > items.value.length - 1) {
        currentActiveIndex.value = 0;
      } else {
        currentActiveIndex.value = val;
      }
      updateActiveUidWithIndex();
    }
  );
  let componentLeft = 0;
  let initCount = 0;
  const getComponentRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      initCount = 0;
      componentLeft = rectInfo.left || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnSubsection", `获取组件节点信息失败: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getComponentRectInfo();
      }, 150);
    }
  };
  const setActiveItem = (uid) => {
    const index = items.value.findIndex((item) => item.uid === uid);
    if (index !== -1) {
      innerUpdate = true;
      activeUid.value = uid;
      currentActiveIndex.value = index;
      updateSliderRectInfo(items.value[index]);
      emits("update:modelValue", index);
      common_vendor.nextTick$1(() => {
        emits("change", index);
      });
    }
  };
  const activeColor = common_vendor.ref("");
  const sliderRectInfo = common_vendor.ref({
    left: 0,
    width: 0
  });
  const updateSliderRectInfo = (item) => {
    if (!item)
      return;
    sliderRectInfo.value.left = item.element.left - componentLeft;
    sliderRectInfo.value.width = item.element.width;
    if (props.mode === "default") {
      sliderRectInfo.value.left -= 1;
      if (props.modelValue === items.value.length - 1) {
        sliderRectInfo.value.width += 2;
      }
    }
    activeColor.value = uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(
      item.activeColor,
      props.activeColor,
      ""
    );
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getComponentRectInfo();
    });
  });
  common_vendor.provide(
    uni_modules_tuniaouiVue3_tokens_subsection.subsectionContextKey,
    common_vendor.reactive({
      ...common_vendor.toRefs(props),
      items,
      addItem,
      removeItem,
      activeUid,
      setActiveItem
    })
  );
  return {
    componentId,
    activeColor,
    sliderRectInfo
  };
};
exports.useSubsection = useSubsection;
