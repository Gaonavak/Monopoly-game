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
        icon: "moments",
        data: [
          {
            date: "1",
            status: "打卡成功",
            content: "南澳岛面积达117.73平方千米，海岸线长94.3千米。",
            image: "/static/exhibit.jpg"
          },
          {
            date: "2",
            status: "打卡成功",
            content: "微信开发者工具真的难用，卡顿，恶心",
            image: "/static/exhibit.jpg"
          }
        ]
      },
      {
        month: "2023-08",
        icon: "creative",
        data: [
          {
            date: "2",
            status: "打卡成功",
            content: "南澳岛面积达117.73平方千米，海岸线长94.3千米。",
            image: ""
          },
          {
            date: "3",
            status: "打卡成功",
            content: "东南西北风，你是罗贯中。",
            image: ""
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
                c: common_vendor.t((dataItem == null ? void 0 : dataItem.status) || "")
              } : {}, {
                d: common_vendor.t(dataItem.content),
                e: dataItem.image
              }, dataItem.image ? {
                f: dataItem.image
              } : {}, {
                g: dataIndex,
                h: "14aea6d3-2-" + i0 + "-" + i1 + "," + ("14aea6d3-1-" + i0)
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
