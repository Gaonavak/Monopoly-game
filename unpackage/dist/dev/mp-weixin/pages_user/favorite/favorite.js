"use strict";
const common_vendor = require("../../common/vendor.js");
const data_pageFavorite = require("../../data/page-favorite.js");
if (!Math) {
  (TnSearchBox + MyFavoriteCard)();
}
const TnSearchBox = () => "../../uni_modules/tuniaoui-vue3/components/search-box/src/search-box.js";
const MyFavoriteCard = () => "../../components/my-favorite-card/my-favorite-card.js";
const _sfc_main = {
  __name: "favorite",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const searchBtnClickEvent = () => {
      common_vendor.index.showToast({
        title: "你搜索了" + searchValue.value,
        icon: "none"
      });
    };
    const handleFavoriteUpdate = (index, favoriteStatus) => {
      if (data_pageFavorite.places.value[index]) {
        data_pageFavorite.places.value[index].isFavorite = favoriteStatus;
      }
    };
    const handleCheckIn = (index) => {
      if (data_pageFavorite.places.value[index]) {
        common_vendor.index.showToast({
          title: data_pageFavorite.places.value[index].title
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(searchBtnClickEvent),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          modelValue: searchValue.value
        }),
        d: common_vendor.f(common_vendor.unref(data_pageFavorite.places), (place, index, i0) => {
          return {
            a: common_vendor.o(($event) => handleFavoriteUpdate(index, $event), index),
            b: common_vendor.o(($event) => handleCheckIn(index), index),
            c: "735006f0-1-" + i0,
            d: common_vendor.p({
              place
            }),
            e: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-735006f0"]]);
wx.createPage(MiniProgramPage);
