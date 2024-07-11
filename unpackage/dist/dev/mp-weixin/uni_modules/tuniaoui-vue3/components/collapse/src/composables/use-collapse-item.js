"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_collapse = require("../../../../tokens/collapse.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const useCollapseItem = (props) => {
  const instance = common_vendor.getCurrentInstance();
  if (!instance) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCollapseItem", "请在 setup 函数中使用 TnCollapseItem");
  }
  const { uid } = instance;
  const collapse = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_collapse.collapseContextKey);
  if (!collapse) {
    uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCollapseItem", "请在 TnCollapse 中使用 TnCollapseItem");
  }
  collapse == null ? void 0 : collapse.addItem({ uid });
  const componentContentId = `tcic-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const { getSelectorNodeInfo } = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery(instance);
  const isActive = common_vendor.computed(() => {
    if (!collapse)
      return false;
    return collapse.activeUid.includes(uid);
  });
  const showArrow = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(collapse == null ? void 0 : collapse.showArrow, false)
  );
  const compoenntContentDefaultHeight = common_vendor.ref(0);
  const componentTitleHeight = common_vendor.ref(common_vendor.index.upx2px(100));
  const componentHeight = common_vendor.computed(() => {
    if (!isActive.value)
      return `${componentTitleHeight.value}px`;
    else
      return `${componentTitleHeight.value + compoenntContentDefaultHeight.value}px`;
  });
  let initCount = 0;
  const getComponentContentHeight = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentContentId}`);
      initCount = 0;
      compoenntContentDefaultHeight.value = rectInfo.height || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        uni_modules_tuniaouiVue3_utils_error.debugWarn("TnCollapseItem", `获取内容高度失败: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getComponentContentHeight();
      }, 150);
    }
  };
  const collapseItemClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(uid);
  };
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      getComponentContentHeight();
    });
  });
  return {
    componentContentId,
    showArrow,
    isActive,
    componentHeight,
    collapseItemClick
  };
};
exports.useCollapseItem = useCollapseItem;
