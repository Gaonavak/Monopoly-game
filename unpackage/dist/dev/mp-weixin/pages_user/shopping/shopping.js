"use strict";
const common_vendor = require("../../common/vendor.js");
const data_pageShopping = require("../../data/page-shopping.js");
if (!Array) {
  const _easycom_my_product_card2 = common_vendor.resolveComponent("my-product-card");
  _easycom_my_product_card2();
}
const _easycom_my_product_card = () => "../../components/my-product-card/my-product-card.js";
if (!Math) {
  (TnSearchBox + TnTabsItem + TnTabs + _easycom_my_product_card)();
}
const TnSearchBox = () => "../../uni_modules/tuniaoui-vue3/components/search-box/src/search-box.js";
const TnTabs = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs.js";
const TnTabsItem = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.js";
const _sfc_main = {
  __name: "shopping",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const searchBtnClickEvent = () => {
      common_vendor.index.showToast({
        title: "你搜索了" + searchValue.value,
        icon: "none"
      });
    };
    const currentTabIndex = common_vendor.ref(0);
    const tabsData = [{
      text: "全部"
    }, {
      text: "待付款"
    }, {
      text: "待发货"
    }, {
      text: "待收货"
    }, {
      text: "待评价"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(searchBtnClickEvent),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          modelValue: searchValue.value
        }),
        d: common_vendor.f(tabsData, (item, index, i0) => {
          return {
            a: index,
            b: "169904d9-2-" + i0 + ",169904d9-1",
            c: common_vendor.p({
              title: item.text
            })
          };
        }),
        e: common_vendor.o(($event) => currentTabIndex.value = $event),
        f: common_vendor.p({
          scroll: false,
          ["bg-color"]: "#F0F4F9",
          modelValue: currentTabIndex.value
        }),
        g: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: common_vendor.f(common_vendor.unref(data_pageShopping.products), (product, k1, i1) => {
              return {
                a: product.id,
                b: "169904d9-3-" + i0 + "-" + i1,
                c: common_vendor.p({
                  product
                })
              };
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-169904d9"]]);
wx.createPage(MiniProgramPage);
