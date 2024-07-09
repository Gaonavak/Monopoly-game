"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_tokens_tabs = require("../../../../tokens/tabs.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../../libs/lodash/is-boolean.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index = require("../../../../hooks/use-ordered-children/index.js");
const useTabs = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabs", "请在 setup 函数中使用 useTabs ");
  }
  const { emit } = instance;
  const slots = common_vendor.useSlots();
  const {
    children: items,
    addChild,
    removeChild: removeItem
  } = uni_modules_tuniaouiVue3_hooks_useOrderedChildren_index.useOrderedChildren();
  const { getSelectorNodeInfo } = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance);
  const componentId = `tt-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const barComponentId = `${componentId}-b`;
  const showBar = common_vendor.computed(() => props.bar || !!slots.bar);
  const activeUid = common_vendor.ref(-1);
  const addItem = (item) => {
    if (props.modelValue !== void 0 && activeUid.value === -1) {
      if (props.modelValue === item.name || props.modelValue === items.value.length) {
        common_vendor.nextTick$1(() => {
          updateActiveUid(item.uid);
        });
      }
    }
    addChild(item);
  };
  const tabsRect = {
    width: 0,
    height: 0,
    left: 0
  };
  const barRect = {
    width: 0,
    height: 0,
    left: 0
  };
  const barOffsetLeft = common_vendor.ref(0);
  const scrollLeft = common_vendor.ref(0);
  const updateOffsetPosition = (index) => {
    if (!props.scroll && !props.bar && !slots.bar)
      return;
    const item = items.value[index].elementRect;
    if (props.bar || slots.bar) {
      barOffsetLeft.value = item.left - tabsRect.left + (item.width - barRect.width) / 2;
    }
    if (props.scroll) {
      const scrollLeftValue = item.left - tabsRect.left - (tabsRect.width - item.width) / 2;
      scrollLeft.value = scrollLeftValue < 0 ? 0 : scrollLeftValue;
    }
  };
  const updateActiveUid = (uid, changeEmit = false) => {
    activeUid.value = uid;
    const itemIndex = items.value.findIndex((item) => item.uid === uid);
    const value = items.value[itemIndex].name ? items.value[itemIndex].name : itemIndex;
    updateOffsetPosition(itemIndex);
    emit(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, value);
    if (changeEmit) {
      emit(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, value);
    }
  };
  const setActiveItem = (uid) => {
    if (!props.beforeSwitch) {
      updateActiveUid(uid, true);
      return;
    }
    const itemIndex = items.value.findIndex((item) => item.uid === uid);
    const shouldSwitch = props.beforeSwitch(itemIndex);
    const isPromiseOrBoolean = [
      common_vendor.isPromise(shouldSwitch),
      uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(shouldSwitch)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabs", "beforeSwitch返回值必须是Promise或者Boolean");
      return;
    }
    if (common_vendor.isPromise(shouldSwitch)) {
      shouldSwitch.then((res) => {
        if (res) {
          updateActiveUid(uid, true);
        }
      }).catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabs", `执行beforeSwitch出错：${err}`);
      });
    } else {
      if (shouldSwitch) {
        updateActiveUid(uid, true);
      }
    }
  };
  const updateActiveItemByValue = (value) => {
    var _a;
    if (value === void 0) {
      updateActiveUid(items.value[0].uid);
      return;
    }
    let item;
    if (typeof value === "number") {
      item = (_a = items.value) == null ? void 0 : _a[value];
    }
    if (!item) {
      item = items.value.find((item2) => item2.name === value);
    }
    if (!item) {
      updateActiveUid(items.value[0].uid);
    } else {
      updateActiveUid(item.uid);
    }
  };
  common_vendor.watch(
    () => props.modelValue,
    (val) => {
      updateActiveItemByValue(val);
    }
  );
  let initCount = 0;
  const getTabsRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      initCount = 0;
      tabsRect.width = rectInfo.width || 0;
      tabsRect.height = rectInfo.height || 0;
      tabsRect.left = rectInfo.left || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabs", `获取Tabs容器节点信息出错: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getTabsRectInfo();
      }, 150);
    }
  };
  const getBarRectInfo = async () => {
    if (!props.bar && !slots.bar)
      return;
    try {
      const rectInfo = await getSelectorNodeInfo(`#${barComponentId}`);
      initCount = 0;
      barRect.width = rectInfo.width || 0;
      barRect.height = rectInfo.height || 0;
      barRect.left = rectInfo.left || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabs", `获取Bar滑块节点信息出错: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getBarRectInfo();
      }, 150);
    }
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getTabsRectInfo();
      getBarRectInfo();
    });
  });
  common_vendor.provide(
    uni_modules_tuniaouiVue3_tokens_tabs.tabsContextKey,
    common_vendor.reactive({
      ...common_vendor.toRefs(props),
      items,
      activeUid,
      showBar,
      addItem,
      removeItem,
      setActiveItem
    })
  );
  return {
    tabItems: items,
    componentId,
    barComponentId,
    barOffsetLeft,
    scrollLeft,
    showBar
  };
};
exports.useTabs = useTabs;
