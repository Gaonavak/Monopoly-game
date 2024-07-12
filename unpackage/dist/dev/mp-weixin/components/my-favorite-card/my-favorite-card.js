"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
const _sfc_main = {
  __name: "my-favorite-card",
  props: ["place"],
  emits: ["update", "checkin"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const toggleFavorite = () => {
      emit("update", !props.place.isFavorite);
    };
    const checkin = () => {
      emit("checkin");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.place.image,
        b: common_vendor.t(__props.place.title),
        c: !__props.place.isFavorite
      }, !__props.place.isFavorite ? {
        d: common_vendor.o(toggleFavorite),
        e: common_vendor.p({
          name: "star",
          size: "50rpx"
        })
      } : {
        f: common_vendor.o(toggleFavorite),
        g: common_vendor.p({
          name: "star-fill",
          size: "50rpx",
          color: "#c1ff31"
        })
      }, {
        h: common_vendor.o(checkin),
        i: common_vendor.t(__props.place.desc)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a88f4728"]]);
wx.createComponent(Component);
