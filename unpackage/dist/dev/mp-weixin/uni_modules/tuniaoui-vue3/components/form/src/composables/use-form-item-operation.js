"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_index = require("../../../../libs/async-validator/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_debounce = require("../../../../libs/lodash/debounce.js");
const uni_modules_tuniaouiVue3_libs_lodash_castArray = require("../../../../libs/lodash/cast-array.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../../../tokens/form.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_utils_objects = require("../../../../utils/objects.js");
const uni_modules_tuniaouiVue3_utils_cloneDeep = require("../../../../utils/clone-deep.js");
const useFormItemOperation = (props, slots) => {
  const formContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  let initialValue = void 0;
  let isResettingField = false;
  const validateState = common_vendor.ref("");
  const validateStateDebounced = common_vendor.ref("");
  const validateMessage = common_vendor.ref("");
  const hasLabel = common_vendor.computed(() => {
    return !!(props.label || slots.label);
  });
  const currentLabel = common_vendor.computed(
    () => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`
  );
  const fieldValue = common_vendor.computed(() => {
    const model = formContext == null ? void 0 : formContext.model;
    if (!model || !props.prop) {
      return;
    }
    return uni_modules_tuniaouiVue3_utils_objects.getProp(model, props.prop).value;
  });
  const propString = common_vendor.computed(() => {
    if (!props.prop)
      return "";
    return common_vendor.isString(props.prop) ? props.prop : props.prop.join(".");
  });
  const normalizedRules = common_vendor.computed(() => {
    const rules = [];
    if (props.rules)
      rules.push(...uni_modules_tuniaouiVue3_libs_lodash_castArray.castArray(props.rules));
    const formRules = formContext == null ? void 0 : formContext.rules;
    if (formRules && props.prop) {
      const _rules = uni_modules_tuniaouiVue3_utils_objects.getProp(
        formRules,
        props.prop
      ).value;
      if (_rules)
        rules.push(...uni_modules_tuniaouiVue3_libs_lodash_castArray.castArray(_rules));
    }
    if (props.required !== void 0) {
      const requiredRules = rules.map((rule, index) => [rule, index]).filter(([rule]) => Object.keys(rule).includes("required"));
      if (requiredRules.length) {
        for (const [rule, index] of requiredRules) {
          if (rule.required === props.required)
            continue;
          rules[index] = { ...rule, required: props.required };
        }
      } else {
        rules.push({ required: props.required });
      }
    }
    return rules;
  });
  const validateEnabled = common_vendor.computed(() => normalizedRules.value.length > 0);
  const isRequired = common_vendor.computed(
    () => normalizedRules.value.some((rule) => rule.required)
  );
  const shouldShowError = common_vendor.computed(
    () => validateStateDebounced.value === "error" && props.showMessage && uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(formContext == null ? void 0 : formContext.showMessage, true)
  );
  const setValidateState = (state) => {
    validateState.value = state;
  };
  const getFilterRule = (trigger) => {
    const rules = normalizedRules.value;
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger)
        return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger);
      } else {
        return rule.trigger === trigger;
      }
    }).map(({ trigger: trigger2, ...rule }) => rule);
  };
  const onValidationFailed = (error) => {
    var _a;
    const { errors, fields } = error;
    if (!errors || !fields) {
      console.error(error);
    }
    setValidateState("error");
    validateMessage.value = errors ? uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault((_a = errors == null ? void 0 : errors[0]) == null ? void 0 : _a.message, `${props.prop} 为必填项`) : "";
    formContext == null ? void 0 : formContext.emits("validate", props.prop, false, validateMessage.value);
  };
  const onValidationSucceded = () => {
    setValidateState("success");
    validateMessage.value = "";
    formContext == null ? void 0 : formContext.emits("validate", props.prop, true, "");
  };
  const doValidate = async (rules) => {
    const modelName = propString.value;
    const validator = new uni_modules_tuniaouiVue3_libs_asyncValidator_index.Schema({
      [modelName]: rules
    });
    return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
      onValidationSucceded();
      return true;
    }).catch((err) => {
      onValidationFailed(err);
      return Promise.reject(err);
    });
  };
  const validate = async (trigger, callback) => {
    if (isResettingField || !props.prop)
      return false;
    const hasCallback = common_vendor.isFunction(callback);
    if (!validateEnabled.value) {
      callback == null ? void 0 : callback(false);
      return false;
    }
    const rules = getFilterRule(trigger);
    if (rules.length === 0) {
      callback == null ? void 0 : callback(true);
      return true;
    }
    setValidateState("validating");
    return doValidate(rules).then(() => {
      callback == null ? void 0 : callback(true);
      return true;
    }).catch((err) => {
      const { fields } = err;
      callback == null ? void 0 : callback(false, fields);
      return hasCallback ? false : Promise.reject(fields);
    });
  };
  const clearValidate = () => {
    setValidateState("");
    validateMessage.value = "";
    isResettingField = false;
  };
  const resetField = async () => {
    const model = formContext == null ? void 0 : formContext.model;
    if (!model || !props.prop)
      return;
    const computedValue = uni_modules_tuniaouiVue3_utils_objects.getProp(model, props.prop);
    isResettingField = true;
    computedValue.value = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(initialValue);
    await common_vendor.nextTick$1();
    clearValidate();
    isResettingField = false;
  };
  const initFieldValue = () => {
    initialValue = uni_modules_tuniaouiVue3_utils_cloneDeep.cloneDeep(fieldValue.value);
  };
  const validateStateDebouncedUpdater = uni_modules_tuniaouiVue3_libs_lodash_debounce.debounce(() => {
    validateStateDebounced.value = validateState.value;
  }, 100);
  common_vendor.watch(
    () => validateState.value,
    () => validateStateDebouncedUpdater()
  );
  common_vendor.watch(
    () => props.error,
    (val) => {
      validateMessage.value = val || "";
      setValidateState(val ? "error" : "");
    },
    {
      immediate: true
    }
  );
  common_vendor.watch(
    () => props.validateStatus,
    (val) => {
      setValidateState(val || "");
    }
  );
  return {
    formContext,
    hasLabel,
    currentLabel,
    validateState,
    validateMessage,
    isRequired,
    shouldShowError,
    doValidate,
    validate,
    clearValidate,
    resetField,
    initFieldValue
  };
};
exports.useFormItemOperation = useFormItemOperation;
