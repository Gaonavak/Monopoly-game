"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useCountScrollCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("count-scroll");
  const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "textColor"),
    "text"
  );
  const duration = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.duration, 1500)
  );
  const countScrollClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const countScrollStyle = common_vendor.computed(() => {
    const style = {};
    if (props.fontSize)
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.fontSize);
    if (!textColorClass.value) {
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    }
    return style;
  });
  const countScrollColumnStyle = common_vendor.computed(() => {
    return (activeIndex) => {
      const style = {};
      if (duration.value)
        style.transitionDuration = `${duration.value / 1e3}s`;
      style.transform = `translateY(-${activeIndex * 10}%)`;
      return style;
    };
  });
  return {
    ns,
    countScrollClass,
    countScrollStyle,
    countScrollColumnStyle
  };
};
exports.useCountScrollCustomStyle = useCountScrollCustomStyle;
