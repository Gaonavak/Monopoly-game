"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_components_form_src_utils = require("../utils.js");
require("../../../../libs/lodash/_baseToString.js");
const useForm = (props) => {
  const fields = [];
  const addField = (field) => {
    fields.push(field);
  };
  const removeField = (field) => {
    if (field.prop) {
      fields.splice(fields.indexOf(field), 1);
    }
  };
  const resetFields = (properties = []) => {
    if (!props.model) {
      return console.warn("[TnForm] model参数未定义");
    }
    uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, properties).forEach((field) => field.resetField());
  };
  const clearValidate = (props2 = []) => {
    uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, props2).forEach((field) => field.clearValidate());
  };
  const isValidatable = common_vendor.computed(() => {
    const hasModel = !!props.model;
    if (!hasModel) {
      console.warn("[TnForm] model参数未定义");
    }
    return hasModel;
  });
  const obtainValidateFields = (props2) => {
    if (fields.length === 0)
      return [];
    const filteredFields = uni_modules_tuniaouiVue3_components_form_src_utils.filterFields(fields, props2);
    if (!filteredFields.length) {
      console.warn("[TnForm] 未找到需要校验的字段");
      return [];
    }
    return filteredFields;
  };
  const validate = async (callback) => validateField(void 0, callback);
  const doValidateField = async (props2) => {
    if (!isValidatable.value)
      return false;
    const fields2 = obtainValidateFields(props2);
    if (fields2.length === 0)
      return false;
    let validationErrors = {};
    for (const field of fields2) {
      try {
        await field.validate("");
      } catch (fields3) {
        validationErrors = {
          ...validationErrors,
          ...fields3
        };
      }
    }
    if (Object.keys(validationErrors).length === 0)
      return true;
    return Promise.reject(validationErrors);
  };
  const validateField = async (modelProps = [], callback) => {
    const shouldThrow = !common_vendor.isFunction(callback);
    try {
      const result = await doValidateField(modelProps);
      if (result === true) {
        callback == null ? void 0 : callback(true);
      }
      return result;
    } catch (e) {
      if (e instanceof Error)
        throw e;
      const invalidFields = e;
      callback == null ? void 0 : callback(false, invalidFields);
      return shouldThrow && Promise.reject(invalidFields);
    }
  };
  return {
    addField,
    removeField,
    resetFields,
    clearValidate,
    validate,
    validateField
  };
};
exports.useForm = useForm;
