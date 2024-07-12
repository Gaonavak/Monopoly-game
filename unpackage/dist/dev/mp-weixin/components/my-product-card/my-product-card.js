"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnBubbleBox + TnButton)();
}
const TnBubbleBox = () => "../../uni_modules/tuniaoui-vue3/components/bubble-box/src/bubble-box.js";
const TnButton = () => "../../uni_modules/tuniaoui-vue3/components/button/src/button.js";
const _sfc_main = {
  __name: "my-product-card",
  props: ["product"],
  setup(__props) {
    const bubbleOptions = [
      {
        text: "收藏",
        icon: "star-fill"
      },
      {
        text: "分享",
        icon: "share-triangle"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: __props.product.storeThumb,
        b: common_vendor.t(__props.product.store),
        c: common_vendor.t(__props.product.status),
        d: __props.product.thumb,
        e: common_vendor.t(__props.product.name),
        f: common_vendor.t(__props.product.desc),
        g: common_vendor.t(__props.product.price),
        h: common_vendor.t(__props.product.productAmount),
        i: common_vendor.p({
          options: bubbleOptions,
          position: "right"
        }),
        j: common_vendor.p({
          ["custom-class"]: "btn"
        }),
        k: common_vendor.p({
          ["custom-class"]: "btn"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ceb0e958"]]);
wx.createComponent(Component);
