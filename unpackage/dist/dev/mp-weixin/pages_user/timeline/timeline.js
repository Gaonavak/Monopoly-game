"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnTimeLineData + TnTimeLineItem + TnTimeLine)();
}
const TnTimeLine = () => "../../node-modules/tnuiv3p-tn-time-line/time-line.js";
const TnTimeLineItem = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-item.js";
const TnTimeLineData = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-data.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "timeline",
  setup(__props) {
    const timeLineData = [
      {
        month: "2023-07",
        icon: "/static/logo.png",
        data: [
          {
            date: "1",
            version: "1.0.0",
            content: "/static/logo.png"
          },
          {
            content: "图鸟科技，图鸟UI vue3 uniapp版本全新发布，欢迎各位开发者进行使用"
          }
        ]
      },
      {
        month: "2023-08",
        icon: "/static/logo.png",
        data: [
          {
            content: "图鸟科技，图鸟UI vue3 uniapp版本全新发布，欢迎各位开发者进行使用"
          },
          {
            date: "2",
            version: "1.0.0",
            content: "图鸟科技，图鸟UI vue3 uniapp版本全新发布，欢迎各位开发者进行使用"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(timeLineData, (item, index, i0) => {
          return {
            a: common_vendor.f(item.data, (dataItem, dataIndex, i1) => {
              return common_vendor.e({
                a: dataItem == null ? void 0 : dataItem.date
              }, (dataItem == null ? void 0 : dataItem.date) ? {
                b: common_vendor.t((dataItem == null ? void 0 : dataItem.date) || ""),
                c: common_vendor.t((dataItem == null ? void 0 : dataItem.version) || "")
              } : {}, {
                d: common_vendor.t(dataItem.content),
                e: dataIndex,
                f: "14aea6d3-2-" + i0 + "-" + i1 + "," + ("14aea6d3-1-" + i0)
              });
            }),
            b: index,
            c: "14aea6d3-1-" + i0 + ",14aea6d3-0",
            d: common_vendor.p({
              title: item.month,
              ["title-icon"]: item.icon !== void 0 ? item.icon : ""
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14aea6d3"]]);
wx.createPage(MiniProgramPage);
