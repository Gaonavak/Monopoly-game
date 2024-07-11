"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index = require("../../base/composables/use-component-common-props/index.js");
const uni_modules_tuniaouiVue3_components_searchBox_src_composables_searchBoxCustom = require("./composables/search-box-custom.js");
const uni_modules_tuniaouiVue3_components_searchBox_src_composables_useSearchBox = require("./composables/use-search-box.js");
const searchBoxShape = ["square", "round"];
const searchBoxAlign = ["left", "center", "right"];
const searchBoxProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 搜索框绑定的值
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * @description 搜索框的占位符
   */
  placeholder: {
    type: String,
    default: "请输入搜索内容"
  },
  /**
   * @description 搜索框占位符旁边的图标
   */
  placeholderIcon: {
    type: String,
    default: "search"
  },
  /**
   * @description 搜索框的形状
   */
  shape: {
    type: String,
    values: searchBoxShape,
    default: "square"
  },
  /**
   * @description 搜索框的尺寸，可以设置 `sm`、`lg`、`xl`
   */
  size: uni_modules_tuniaouiVue3_components_base_composables_useComponentCommonProps_index.useComponentSizeProp,
  /**
   * @description 搜索框文字的颜色，以tn开头使用图鸟的颜色
   */
  textColor: String,
  /**
   * @description 搜索框占位文字颜色，以tn开头使用图鸟的颜色
   */
  placeholderColor: String,
  /**
   * @description 搜索框文字对齐方式
   */
  textAlign: {
    type: String,
    values: searchBoxAlign,
    default: "left"
  },
  /**
   * @description 显示边框
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @description 边框颜色
   */
  borderColor: String,
  /**
   * @description 获取搜索框焦点
   */
  focus: Boolean,
  /**
   * @description 是否禁用搜索框
   */
  disabled: Boolean,
  /**
   * @description 是否显示清除按钮
   */
  clearable: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示搜索按钮
   */
  searchButton: {
    type: Boolean,
    default: true
  },
  /**
   * @description 搜索按钮的文字
   */
  searchButtonText: {
    type: String,
    default: "搜 索"
  },
  /**
   * @description 搜索按钮字体颜色，以tn开头使用图鸟的颜色
   */
  searchButtonTextColor: String,
  /**
   * @description 搜索按钮背景颜色，以tn开头使用图鸟的颜色
   */
  searchButtonBgColor: String,
  /**
   * @description 输入是否节流
   */
  throllte: {
    type: Boolean,
    default: true
  },
  /**
   * @description 节流延迟时间，单位毫秒
   */
  throllteTime: {
    type: Number,
    default: 1e3
  }
});
const searchBoxEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => common_vendor.isString(value),
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => common_vendor.isString(value),
  /**
   * @description 搜索框输入时触发
   */
  input: (value) => common_vendor.isString(value),
  /**
   * @description 点击搜索框时触发
   */
  click: () => true,
  /**
   * @description 聚焦搜索输入框时触发
   */
  focus: () => true,
  /**
   * @description 搜索输入框失去焦点时触发
   */
  blur: () => true,
  /**
   * @description 点击搜索按钮时触发
   */
  search: (value) => common_vendor.isString(value),
  /**
   * @description 点击清除按钮时触发
   */
  clear: () => true
};
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search-box",
  props: searchBoxProps,
  emits: searchBoxEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      showPlaceholder,
      inputValue,
      inputFocus,
      searchBoxClickEvent,
      inputFocusEvent,
      inputBlurEvent,
      inputValueEvent,
      clearClickEvent,
      searchBtnClickEvent
    } = uni_modules_tuniaouiVue3_components_searchBox_src_composables_useSearchBox.useSearchBox(props, emits);
    const {
      ns,
      searchBoxClass,
      searchBoxStyle,
      placeholderClass,
      placeholderStyle,
      searchButtonClass,
      searchButtonStyle
    } = uni_modules_tuniaouiVue3_components_searchBox_src_composables_searchBoxCustom.useSearchBoxCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(showPlaceholder)
      }, common_vendor.unref(showPlaceholder) ? common_vendor.e({
        b: _ctx.placeholderIcon
      }, _ctx.placeholderIcon ? {
        c: common_vendor.p({
          name: _ctx.placeholderIcon
        }),
        d: common_vendor.n(common_vendor.unref(ns).e("placeholder-icon"))
      } : {}, {
        e: _ctx.placeholder
      }, _ctx.placeholder ? {
        f: common_vendor.t(_ctx.placeholder),
        g: common_vendor.n(common_vendor.unref(ns).e("placeholder-text"))
      } : {}, {
        h: common_vendor.n(common_vendor.unref(placeholderClass)),
        i: common_vendor.s(common_vendor.unref(placeholderStyle))
      }) : common_vendor.e({
        j: common_vendor.n(common_vendor.unref(ns).e("input")),
        k: common_vendor.n(common_vendor.unref(ns).em("input", _ctx.textAlign)),
        l: common_vendor.unref(inputFocus),
        m: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(inputFocusEvent) && common_vendor.unref(inputFocusEvent)(...args)
        ),
        n: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(inputBlurEvent) && common_vendor.unref(inputBlurEvent)(...args)
        ),
        o: common_vendor.o([
          ($event) => common_vendor.isRef(inputValue) ? inputValue.value = $event.detail.value : null,
          //@ts-ignore
          (...args) => common_vendor.unref(inputValueEvent) && common_vendor.unref(inputValueEvent)(...args)
        ]),
        p: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(searchBtnClickEvent) && common_vendor.unref(searchBtnClickEvent)(...args)
        ),
        q: common_vendor.unref(inputValue),
        r: _ctx.clearable && common_vendor.unref(inputValue)
      }, _ctx.clearable && common_vendor.unref(inputValue) ? {
        s: common_vendor.p({
          name: "close-fill"
        }),
        t: common_vendor.n(common_vendor.unref(ns).e("clear-button")),
        v: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(clearClickEvent) && common_vendor.unref(clearClickEvent)(...args)
        )
      } : {}), {
        w: common_vendor.n(common_vendor.unref(ns).e("content")),
        x: _ctx.searchButton
      }, _ctx.searchButton ? {
        y: common_vendor.t(_ctx.searchButtonText),
        z: common_vendor.n(common_vendor.unref(searchButtonClass)),
        A: common_vendor.s(common_vendor.unref(searchButtonStyle)),
        B: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(searchBtnClickEvent) && common_vendor.unref(searchBtnClickEvent)(...args)
        )
      } : {}, {
        C: common_vendor.n(common_vendor.unref(searchBoxClass)),
        D: common_vendor.s(common_vendor.unref(searchBoxStyle)),
        E: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(searchBoxClickEvent) && common_vendor.unref(searchBoxClickEvent)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d40686ce"]]);
wx.createComponent(Component);
