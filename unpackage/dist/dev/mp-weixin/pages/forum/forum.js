"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnTabsItem + TnTabs + TnGraphicCard)();
}
const TnGraphicCard = () => "../../node-modules/tnuiv3p-tn-graphic-card/index.js";
const TnTabs = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs.js";
const TnTabsItem = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.js";
const _sfc_main = {
  __name: "forum",
  setup(__props) {
    const graphicData = {
      id: 1,
      avatar: "https://resource.tuniaokj.com/images/album/xiong1.jpg",
      title: "文章标题",
      description: "2023年6月30日",
      tags: ["标签1", "标签2"],
      content: "看看打开打开年份记得当年开始放假哦额外欺骗人u饿哦漂亮放佛怕打雷舒服呢我脾气破费了发多少呢；否，可能打飞机哦喷泉哦怕可能地方打开螺丝粉年份的肌肤看能否。",
      images: [
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg"
      ],
      viewCount: 100,
      commentCount: 101,
      likeCount: 102,
      viewUserAvatars: [
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg"
      ]
    };
    const currentTabIndex = common_vendor.ref(0);
    const tabsData = common_vendor.ref([
      {
        text: "关注"
      },
      {
        text: "推荐"
      },
      {
        text: "热榜"
      },
      {
        text: "搞笑"
      },
      {
        text: "视频"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabsData.value, (item, index, i0) => {
          return {
            a: index,
            b: "aeadbf01-1-" + i0 + ",aeadbf01-0",
            c: common_vendor.p({
              title: item.text
            })
          };
        }),
        b: common_vendor.o(($event) => currentTabIndex.value = $event),
        c: common_vendor.p({
          scroll: false,
          modelValue: currentTabIndex.value
        }),
        d: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: i,
            b: "aeadbf01-2-" + i0
          };
        }),
        e: common_vendor.p({
          avatar: graphicData.avatar,
          title: graphicData.title,
          description: graphicData.description,
          tags: graphicData.tags,
          content: graphicData.content,
          images: graphicData.images,
          ["view-count"]: graphicData.viewCount,
          ["comment-count"]: graphicData.commentCount,
          ["like-count"]: graphicData.likeCount,
          ["view-user-avatars"]: graphicData.viewUserAvatars
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aeadbf01"]]);
wx.createPage(MiniProgramPage);
