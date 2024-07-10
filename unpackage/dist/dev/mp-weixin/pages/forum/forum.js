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
      // tags: ['标签1', '标签2'],
      content: "小时候养老院里有一家的爷爷和奶奶。那个奶奶是个特别泼辣和急脾气的人，那个爷爷性子很慢，整天乐呵呵的。他俩出去遛弯，就只能听到那个奶奶不停的说话，那爷爷听着。前段时间，那个爷爷突发心脏病去世了。那个奶奶说了句，死老头子，磨磨蹭蹭一辈子，就这件事干的这么利索。说完沉默了一下就哭了。",
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
            a: "aeadbf01-2-" + i0,
            b: i
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
