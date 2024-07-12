"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_zIndex = require("../../../constants/z-index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_bubbleBoxCustom = require("./composables/bubble-box-custom.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleOptions = require("./composables/use-bubble-options.js");
const uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleBox = require("./composables/use-bubble-box.js");
const bubbleBoxPosition = ["top", "bottom", "left", "right"];
const bubbleBoxProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 气泡弹出框选项数据
   */
  options: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => []
  },
  /**
   * @description 气泡弹出框位置
   */
  position: {
    type: String,
    values: bubbleBoxPosition,
    default: "top"
  },
  /**
   * @description 气泡弹出框宽度，默认单位 rpx
   */
  width: String,
  /**
   * @description 气泡弹出框高度，默认单位 rpx
   */
  height: String,
  /**
   * @description 气泡弹出框背景颜色，以tn开头使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 气泡弹出框文字颜色，以tn开头使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 选项的内边距
   */
  optionItemPadding: String,
  /**
   * @description 是否禁止点击气泡弹出框选项
   */
  disabled: Boolean,
  /**
   * @description 点击选项后自动关闭气泡弹出框
   */
  autoClose: {
    type: Boolean,
    default: true
  },
  /**
   * @description ZIndex
   */
  zIndex: {
    type: Number,
    default: uni_modules_tuniaouiVue3_constants_zIndex.ZIndex.bubble
  }
});
const bubbleBoxEmits = {
  /**
   * @description 气泡框打开事件
   */
  open: () => true,
  /**
   * @description 气泡框关闭事件
   */
  close: () => true,
  /**
   * @description 气泡框选项点击事件
   */
  click: (index) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index)
};
if (!Math) {
  (TnOverlay + TnIcon)();
}
const TnOverlay = () => "../../overlay/src/overlay.js";
const TnIcon = () => "../../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "bubble-box",
  props: bubbleBoxProps,
  emits: bubbleBoxEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      showBubble,
      openBubbleOptions,
      closeBubbleOptions,
      bubbleOptionClickEvent
    } = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleBox.useBubbleBox(props, emits);
    const {
      ns,
      optionsClass,
      optionsStyle,
      optionsAuxiliaryElementClass,
      optionsAuxiliaryElementStyle,
      optionItemClass,
      optionItemStyle
    } = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_bubbleBoxCustom.useBubbleBoxCustomStyle(props, showBubble);
    const { bubbleOptions } = uni_modules_tuniaouiVue3_components_bubbleBox_src_composables_useBubbleOptions.useBubbleOptions(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(closeBubbleOptions)),
        b: common_vendor.p({
          show: common_vendor.unref(showBubble),
          opacity: 0,
          ["z-index"]: _ctx.zIndex - 1
        }),
        c: common_vendor.n(common_vendor.unref(optionsAuxiliaryElementClass)),
        d: common_vendor.s(common_vendor.unref(optionsAuxiliaryElementStyle)),
        e: common_vendor.f(common_vendor.unref(bubbleOptions), (item, index, i0) => {
          return common_vendor.e({
            a: item.icon
          }, item.icon ? {
            b: "abd23250-1-" + i0,
            c: common_vendor.p({
              name: item.icon
            })
          } : {}, {
            d: common_vendor.t(item.text),
            e: index,
            f: common_vendor.n(common_vendor.unref(optionItemClass)(item)),
            g: common_vendor.s(common_vendor.unref(optionItemStyle)(item)),
            h: common_vendor.o(($event) => common_vendor.unref(bubbleOptionClickEvent)(item, index), index)
          });
        }),
        f: common_vendor.n(common_vendor.unref(optionsClass)),
        g: common_vendor.s(common_vendor.unref(optionsStyle)),
        h: common_vendor.n(common_vendor.unref(ns).e("content")),
        i: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openBubbleOptions) && common_vendor.unref(openBubbleOptions)(...args)
        ),
        j: common_vendor.n(common_vendor.unref(ns).b())
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-abd23250"]]);
wx.createComponent(Component);
