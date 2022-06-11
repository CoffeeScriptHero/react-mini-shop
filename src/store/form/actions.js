import types from "./types";

const getValues = (obj) => ({
  type: types.GET_VALUES,
  payload: obj,
});

const updateFormStatus = (status) => ({
  type: types.UPDATE_FORM_STATUS,
  payload: status,
});

const actionsObj = { getValues, updateFormStatus };

export default actionsObj;
