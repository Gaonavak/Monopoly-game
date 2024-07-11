"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
require("../../../../hooks/use-z-index/index.js");
const useCircleProgress = (props) => {
  const instance = common_vendor.getCurrentInstance();
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("circle-progress");
  const radius = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.radius, 50);
  });
  const ringWidth = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.ringWidth, 14);
  });
  const circleColor = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.inactiveColor, "#e6e6e6");
  });
  const activeCircleColor = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.activeColor, "#01beff");
  });
  const duration = common_vendor.computed(() => {
    return uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(props == null ? void 0 : props.duration, 1500);
  });
  let currentPercent = 0;
  let prevPercent = 0;
  const canvasId = String(uni_modules_tuniaouiVue3_utils_rand.generateId());
  let progressCanvas = null;
  const startAngle = -90 * (Math.PI / 180);
  const drawProgressCircle = (percent) => {
    if (!progressCanvas) {
      progressCanvas = common_vendor.index.createCanvasContext(canvasId, instance);
    }
    progressCanvas.clearRect(0, 0, radius.value * 2, radius.value * 2);
    progressCanvas.beginPath();
    progressCanvas.setLineWidth(ringWidth.value);
    progressCanvas.setStrokeStyle(circleColor.value);
    progressCanvas.arc(
      radius.value,
      radius.value,
      radius.value - ringWidth.value / 2,
      startAngle,
      Math.PI * 1.5,
      false
    );
    progressCanvas.stroke();
    if (percent === 0) {
      progressCanvas.draw();
      return;
    }
    progressCanvas.beginPath();
    progressCanvas.setLineCap("round");
    progressCanvas.setLineWidth(ringWidth.value);
    progressCanvas.setStrokeStyle(activeCircleColor.value);
    const endAngle = Math.PI * 2 * percent / 100 - Math.PI / 2;
    progressCanvas.arc(
      radius.value,
      radius.value,
      radius.value - ringWidth.value / 2,
      startAngle,
      endAngle,
      false
    );
    progressCanvas.stroke();
    progressCanvas.draw();
  };
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  let startTime = null;
  const progressAnimation = () => {
    if (!startTime)
      startTime = Date.now();
    const elapsed = Date.now() - startTime;
    let percent = easeOutCubic(
      elapsed,
      prevPercent,
      currentPercent - prevPercent,
      duration.value
    );
    if (percent < 0)
      percent = 0;
    drawProgressCircle(percent);
    if (elapsed < duration.value) {
      setTimeout(progressAnimation, 16);
    }
  };
  common_vendor.watch(
    () => props.percent,
    (nVal, oVal) => {
      currentPercent = nVal > 100 ? 100 : nVal;
      prevPercent = !oVal || oVal < 0 ? 0 : oVal;
      common_vendor.nextTick$1(() => {
        startTime = null;
        progressAnimation();
      });
    },
    {
      immediate: true
    }
  );
  return {
    ns,
    canvasId,
    radius,
    activeCircleColor
  };
};
exports.useCircleProgress = useCircleProgress;
