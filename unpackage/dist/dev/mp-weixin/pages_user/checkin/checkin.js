"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnCountScroll + TnCircleProgress + TnIcon + TnCollapseItem + TnCollapse)();
}
const TnIcon = () => "../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
const TnCircleProgress = () => "../../uni_modules/tuniaoui-vue3/components/circle-progress/src/circle-progress.js";
const TnCollapse = () => "../../uni_modules/tuniaoui-vue3/components/collapse/src/collapse.js";
const TnCollapseItem = () => "../../uni_modules/tuniaoui-vue3/components/collapse/src/collapse-item.js";
const TnCountScroll = () => "../../uni_modules/tuniaoui-vue3/components/count-scroll/src/count-scroll.js";
const _sfc_main = {
  __name: "checkin",
  setup(__props) {
    const anime_duration = common_vendor.ref(1500);
    const progressPercent = common_vendor.ref(30);
    const point = common_vendor.ref(100);
    const count_finished = common_vendor.ref(13);
    const count_todo = common_vendor.ref(5);
    const currentCollapse = common_vendor.ref(-1);
    const collapseData = [{
      title: "总积分",
      icon: "star",
      count: point.value,
      content: ""
    }, {
      title: "已打卡",
      icon: "success-circle",
      count: count_finished.value,
      content: "广东、南昌、西安、武汉、浙江"
    }, {
      title: "未打卡",
      icon: "close-circle",
      count: count_todo.value,
      content: "秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          value: progressPercent.value,
          ["font-size"]: "100rpx",
          ["text-color"]: "#01BEFF",
          duration: anime_duration.value
        }),
        b: common_vendor.p({
          percent: progressPercent.value,
          ["show-percent"]: true,
          radius: 160,
          ["ring-width"]: 30,
          duration: anime_duration.value
        }),
        c: common_vendor.f(collapseData, (item, index, i0) => {
          return common_vendor.e({
            a: "915d845d-4-" + i0 + "," + ("915d845d-3-" + i0),
            b: common_vendor.p({
              name: item.icon,
              size: "40rpx"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.count),
            e: item.content
          }, item.content ? {
            f: common_vendor.t(item.content)
          } : {}, {
            g: index,
            h: "915d845d-3-" + i0 + ",915d845d-2",
            i: common_vendor.p({
              title: item.title
            })
          });
        }),
        d: common_vendor.o(($event) => currentCollapse.value = $event),
        e: common_vendor.p({
          modelValue: currentCollapse.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-915d845d"], ["__file", "D:/Work/小程序开发工具/G/pages_user/checkin/checkin.vue"]]);
wx.createPage(MiniProgramPage);
