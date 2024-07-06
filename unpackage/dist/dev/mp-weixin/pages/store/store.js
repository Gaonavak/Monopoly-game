"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_search_bar + product)();
}
const product = () => "../../components/product/product.js";
const _sfc_main = {
  __name: "store",
  setup(__props) {
    function search(input) {
      common_vendor.index.showToast({
        title: "搜索: " + input.value,
        icon: "none"
      });
    }
    const selectedIndex = common_vendor.ref(0);
    common_vendor.ref(0);
    common_vendor.ref([]);
    const rightScrollIndex = common_vendor.ref(0);
    const rightHeights = common_vendor.ref([]);
    function selectItem(index) {
      selectedIndex.value = index;
      rightScrollIndex.value = rightHeights.value[index];
    }
    function getHeightArr() {
      let selectorQuery = common_vendor.index.createSelectorQuery();
      selectorQuery.selectAll(".productView").boundingClientRect((rects) => {
        let heights = [];
        let accumulatedHeight = 5;
        rects.forEach((rect, index) => {
          heights[index] = accumulatedHeight;
          accumulatedHeight += rect.height + 11;
        });
        rightHeights.value = heights;
      }).exec();
    }
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        getHeightArr();
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.p({
          focus: true,
          bgColor: "#fff"
        }),
        c: common_vendor.f(10, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: item,
            c: selectedIndex.value === index ? 1 : "",
            d: common_vendor.o(($event) => selectItem(index), item)
          };
        }),
        d: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: common_vendor.t(i),
            b: common_vendor.f(5, (item, k1, i1) => {
              return {
                a: "c1a2745a-1-" + i0 + "-" + i1,
                b: item
              };
            }),
            c: i
          };
        }),
        e: common_vendor.p({
          src: "http://nanaodao.org/data/upload/201602/f_8c0babc7d916d7caee1c4d6d27317336.jpg"
        }),
        f: rightScrollIndex.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c1a2745a"]]);
wx.createPage(MiniProgramPage);
