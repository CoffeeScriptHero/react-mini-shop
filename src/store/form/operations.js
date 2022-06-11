import actions from "./actions";

const setValues = (obj) => (dispatch, getState) => {
  dispatch(actions.getValues(obj));
};

const setFormStatus = (status) => (dispatch, getState) => {
  dispatch(actions.updateFormStatus(status));
};

const operationsObj = { setValues, setFormStatus };

export default operationsObj;
