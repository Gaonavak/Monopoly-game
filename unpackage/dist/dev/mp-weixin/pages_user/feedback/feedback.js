"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnSubsectionItem + TnSubsection + TnInput + TnPopup)();
}
const TnSubsection = () => "../../uni_modules/tuniaoui-vue3/components/subsection/src/subsection.js";
const TnSubsectionItem = () => "../../uni_modules/tuniaoui-vue3/components/subsection/src/subsection-item.js";
const TnInput = () => "../../uni_modules/tuniaoui-vue3/components/input/src/input.js";
const TnPopup = () => "../../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";
const _sfc_main = {
  __name: "feedback",
  setup(__props) {
    const subsectionValue = common_vendor.ref(0);
    const showPopup = common_vendor.ref(false);
    const popMsg = common_vendor.ref(["提交内容为空，无法提交！", "反馈提交成功！"]);
    const popMsgIndex = common_vendor.ref(0);
    const inputValue = common_vendor.ref("");
    const submit = () => {
      if (inputValue.value.trim()) {
        popMsgIndex.value = 1;
      } else {
        popMsgIndex.value = 0;
      }
      showPopup.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "界面不合理"
        }),
        b: common_vendor.p({
          title: "玩法不合理"
        }),
        c: common_vendor.p({
          title: "内容不合规"
        }),
        d: common_vendor.p({
          title: "其他"
        }),
        e: common_vendor.o(($event) => subsectionValue.value = $event),
        f: common_vendor.p({
          mode: "default",
          modelValue: subsectionValue.value
        }),
        g: common_vendor.o(($event) => inputValue.value = $event),
        h: common_vendor.p({
          type: "textarea",
          height: "500rpx",
          maxlength: "3000",
          ["active-color"]: "#01BEFF",
          placeholder: "请输入您的反馈",
          modelValue: inputValue.value
        }),
        i: common_vendor.o(submit),
        j: common_vendor.t(popMsg.value.value[popMsgIndex.value.value]),
        k: common_vendor.o(($event) => showPopup.value = $event),
        l: common_vendor.p({
          ["bg-color"]: "transparent",
          radius: "0",
          modelValue: showPopup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e17784fb"]]);
wx.createPage(MiniProgramPage);
