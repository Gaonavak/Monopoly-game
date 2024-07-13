"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnSearchBox + TnTabsItem + TnTabs + TnGraphicCard)();
}
const TnGraphicCard = () => "../../node-modules/tnuiv3p-tn-graphic-card/index.js";
const TnTabs = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs.js";
const TnTabsItem = () => "../../uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.js";
const TnSearchBox = () => "../../uni_modules/tuniaoui-vue3/components/search-box/src/search-box.js";
const _sfc_main = {
  __name: "forum",
  setup(__props) {
    const graphicData = {
      id: 1,
      avatar: "/static/avatar.jpg",
      title: "张三",
      description: "2024年7月3日",
      // tags: ['标签1', '标签2'],
      content: "我最近去了一趟南澳旅行，那里的美景让我流连忘返。南澳的自然风光真是令人惊叹，海岸线蜿蜒曲折，碧蓝的海水与白沙滩相映成趣。早晨的日出壮丽无比，仿佛金色的光芒洒满大地，让人心旷神怡。南澳，真是一个值得一去再去的地方。",
      images: [
        "/static/1.jpg",
        "/static/2.jpg",
        "/static/3.jpg",
        "/static/4.jpg"
      ],
      viewCount: 100,
      commentCount: 101,
      likeCount: 102,
      viewUserAvatars: [
        "/static/logo.png",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "/static/avatar1.jpg",
        "/static/03-6.png",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg",
        "https://resource.tuniaokj.com/images/album/xiong1.jpg"
      ]
    };
    const searchValue = common_vendor.ref("");
    const searchBtnClickEvent = (value) => {
      common_vendor.index.showToast({
        title: "你搜索了" + searchValue.value,
        icon: "none"
      });
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
        a: common_vendor.o(searchBtnClickEvent),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          modelValue: searchValue.value
        }),
        d: common_vendor.f(tabsData.value, (item, index, i0) => {
          return {
            a: index,
            b: "aeadbf01-2-" + i0 + ",aeadbf01-1",
            c: common_vendor.p({
              title: item.text
            })
          };
        }),
        e: common_vendor.o(($event) => currentTabIndex.value = $event),
        f: common_vendor.p({
          scroll: false,
          modelValue: currentTabIndex.value
        }),
        g: common_vendor.f(6, (i, k0, i0) => {
          return {
            a: "aeadbf01-3-" + i0,
            b: i
          };
        }),
        h: common_vendor.p({
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aeadbf01"], ["__file", "D:/Work/小程序开发工具/G/pages/forum/forum.vue"]]);
wx.createPage(MiniProgramPage);
