"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabs = require("../../../../tokens/tabs.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_types = require("../../../../utils/types.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useTabsItem = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabsItem", "请在 setup 中使用 useTabsItem");
  }
  const { emit, uid } = instance;
  const componentId = `tti-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const tabsContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_tabs.tabsContextKey);
  const { getSelectorNodeInfo } = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance);
  const isActive = common_vendor.computed(() => (tabsContext == null ? void 0 : tabsContext.activeUid) === uid);
  const hasBadge = common_vendor.computed(() => !uni_modules_tuniaouiVue3_utils_types.isEmpty(props.badgeConfig));
  const tabsItemRect = {
    width: 0,
    height: 0,
    left: 0
  };
  let initCount = 0;
  const initTabsItemRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      tabsItemRect.width = rectInfo.width || 0;
      tabsItemRect.height = rectInfo.height || 0;
      tabsItemRect.left = rectInfo.left || 0;
      tabsContext == null ? void 0 : tabsContext.addItem({
        uid,
        elementRect: tabsItemRect,
        name: props.name
      });
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnTabsItem", `获取tabsItem节点信息失败: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        initTabsItemRectInfo();
      }, 150);
    }
  };
  const itemClickEvent = () => {
    if (props.disabled)
      return;
    emit("click");
    tabsContext == null ? void 0 : tabsContext.setActiveItem(uid);
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      setTimeout(() => {
        initTabsItemRectInfo();
      }, 200);
    });
  });
  common_vendor.onUnmounted(() => {
    tabsContext == null ? void 0 : tabsContext.removeItem(uid);
  });
  return {
    componentId,
    isActive,
    hasBadge,
    itemClickEvent
  };
};
exports.useTabsItem = useTabsItem;
