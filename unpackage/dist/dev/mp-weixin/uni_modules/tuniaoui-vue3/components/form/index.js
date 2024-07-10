"use strict";
const uni_modules_tuniaouiVue3_utils_vue_install = require("../../utils/vue/install.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../tokens/form.js");
const uni_modules_tuniaouiVue3_components_form_src_form = require("./src/form.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_formCustom = require("./src/composables/form-custom.js");
require("../../hooks/use-z-index/index.js");
require("../../libs/async-validator/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useForm = require("./src/composables/use-form.js");
const uni_modules_tuniaouiVue3_components_form_src_formItem = require("./src/form-item.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_formItemCustom = require("./src/composables/form-item-custom.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("./src/composables/use-form-common-props.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItemOperation = require("./src/composables/use-form-item-operation.js");
const _sfc_main$1 = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "form",
  props: uni_modules_tuniaouiVue3_components_form_src_form.formProps,
  emits: uni_modules_tuniaouiVue3_components_form_src_form.formEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { formClass } = uni_modules_tuniaouiVue3_components_form_src_composables_formCustom.useFormCustomStyle();
    const {
      addField,
      removeField,
      resetFields,
      clearValidate,
      validate,
      validateField
    } = uni_modules_tuniaouiVue3_components_form_src_composables_useForm.useForm(props);
    common_vendor.watch(
      () => props.rules,
      () => {
        if (props.validateOnRuleChange)
          validate();
      },
      {
        deep: true
      }
    );
    common_vendor.provide(
      uni_modules_tuniaouiVue3_tokens_form.formContextKey,
      common_vendor.reactive({
        ...common_vendor.toRefs(props),
        emits,
        resetFields,
        clearValidate,
        validateField,
        addField,
        removeField
      })
    );
    __expose({
      /**
       * @description 对整个表单的内容进行验证。 接收一个回调函数或返回Promise
       */
      validate,
      /**
       * @description 验证具体的某个字段
       */
      validateField,
      /**
       * @description 重置表单
       */
      resetFields,
      /**
       * @description 清除表单验证
       */
      clearValidate
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(formClass))
      };
    };
  }
});
const Form = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-ebf51555"]]);
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "form-item",
  props: uni_modules_tuniaouiVue3_components_form_src_formItem.formItemProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = common_vendor.useSlots();
    const {
      formContext,
      validateState,
      validateMessage,
      hasLabel,
      currentLabel,
      shouldShowError,
      isRequired,
      resetField,
      clearValidate,
      validate,
      initFieldValue
    } = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItemOperation.useFormItemOperation(props, slots);
    const {
      ns: formItemNs,
      labelId,
      formItemClass,
      formItemLabelClass,
      formItemLabelStyle,
      formItemErrorMessageStyle,
      initLabelContainerWidth
    } = uni_modules_tuniaouiVue3_components_form_src_composables_formItemCustom.useFormItemCustomStyle(props, hasLabel, isRequired);
    const _size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(void 0, { formItem: false });
    const context = common_vendor.reactive({
      ...common_vendor.toRefs(props),
      size: _size,
      validateState,
      hasLabel,
      resetField,
      clearValidate,
      validate
    });
    common_vendor.onMounted(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initFieldValue();
      }
      common_vendor.nextTick$1(() => {
        initLabelContainerWidth();
      });
    });
    common_vendor.onBeforeUnmount(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    common_vendor.provide(uni_modules_tuniaouiVue3_tokens_form.formItemContextKey, context);
    __expose({
      /**
       * @description 表单尺寸
       */
      size: _size,
      /**
       * @description 校验信息
       */
      validateMessage,
      /**
       * @description 校验状态
       */
      validateState,
      /**
       * @description 对表单Item的内容进行验证。 接收一个回调函数或返回Promise
       */
      validate,
      /**
       * @description 重置当前字段信息
       */
      resetField,
      /**
       * @description 清除表单字段验证
       */
      clearValidate
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(hasLabel)
      }, common_vendor.unref(hasLabel) ? {
        b: common_vendor.t(common_vendor.unref(currentLabel)),
        c: common_vendor.unref(labelId),
        d: common_vendor.n(common_vendor.unref(formItemLabelClass)),
        e: common_vendor.s(common_vendor.unref(formItemLabelStyle))
      } : {}, {
        f: common_vendor.n(common_vendor.unref(formItemNs).e("content")),
        g: common_vendor.n(common_vendor.unref(formItemNs).e("wrapper")),
        h: common_vendor.unref(shouldShowError)
      }, common_vendor.unref(shouldShowError) ? {
        i: common_vendor.t(common_vendor.unref(validateMessage)),
        j: common_vendor.n(common_vendor.unref(formItemNs).e("error-message")),
        k: common_vendor.s(common_vendor.unref(formItemErrorMessageStyle))
      } : {}, {
        l: common_vendor.n(common_vendor.unref(formItemClass))
      });
    };
  }
});
const FormItem = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9bb1a075"]]);
uni_modules_tuniaouiVue3_utils_vue_install.withInstall(Form, {
  FormItem
});
uni_modules_tuniaouiVue3_utils_vue_install.withNoopInstall(FormItem);
