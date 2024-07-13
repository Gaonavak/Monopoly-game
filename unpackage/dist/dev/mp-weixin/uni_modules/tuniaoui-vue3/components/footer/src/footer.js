"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_footer_src_composables_footerCustom = require("./composables/footer-custom.js");
const uni_modules_tuniaouiVue3_components_footer_src_composables_useFooter = require("./composables/use-footer.js");
const footerFixedMode = ["page", "container"];
const footerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 页脚内容
   */
  content: String,
  /**
   * @description 页脚导航信息
   */
  navigator: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => []
  },
  /**
   * @description 内容字体颜色，以tn开头使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 页脚字体尺寸大小，内置了 `sm` 、 `lg` 、 `xl` 三种尺寸，可以传递指定的尺寸设置
   */
  size: String,
  /**
   * @description 导航信息字体颜色，以tn开头使用图鸟内置的颜色
   */
  navigatorTextColor: String,
  /**
   * @description 页脚距离底部的距离，默认单位 rpx
   */
  offsetBottom: String,
  /**
   * @description 是否固定在底部
   */
  fixed: {
    type: Boolean,
    default: true
  },
  /**
   * @description 固定在底部的方式，`page`  固定在页面底部，`container`  固定在容器底部
   */
  fixedMode: {
    type: String,
    values: footerFixedMode,
    default: "container"
  },
  /**
   * @description 是否开启底部安全边距
   */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  }
});
const footerEmits = {
  /**
   * @description 点击页脚内容
   */
  click: () => true,
  /**
   * @description 点击页脚导航
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigatorClick: (navigator) => true
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "footer",
  props: footerProps,
  emits: footerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { navigatorData, footerClickEvent, navigatorClickEvent } = uni_modules_tuniaouiVue3_components_footer_src_composables_useFooter.useFooter(
      props,
      emits
    );
    const {
      ns,
      footerClass,
      footerStyle,
      contentClass,
      contentStyle,
      navigatorClass,
      navigatorStyle
    } = uni_modules_tuniaouiVue3_components_footer_src_composables_footerCustom.useFooterCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(navigatorData).length
      }, common_vendor.unref(navigatorData).length ? {
        b: common_vendor.f(common_vendor.unref(navigatorData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index,
            c: common_vendor.n(common_vendor.unref(navigatorClass)(item)),
            d: common_vendor.s(common_vendor.unref(navigatorStyle)(item)),
            e: common_vendor.o(($event) => common_vendor.unref(navigatorClickEvent)(item), index)
          };
        }),
        c: common_vendor.n(common_vendor.unref(ns).e("navigators"))
      } : {}, {
        d: _ctx.content
      }, _ctx.content ? {
        e: common_vendor.t(_ctx.content),
        f: common_vendor.n(common_vendor.unref(contentClass)),
        g: common_vendor.s(common_vendor.unref(contentStyle))
      } : {}, {
        h: common_vendor.n(common_vendor.unref(footerClass)),
        i: common_vendor.s(common_vendor.unref(footerStyle)),
        j: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(footerClickEvent) && common_vendor.unref(footerClickEvent)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7d952f2c"], ["__file", "D:/Work/小程序开发工具/G/uni_modules/tuniaoui-vue3/components/footer/src/footer.vue"]]);
wx.createComponent(Component);
