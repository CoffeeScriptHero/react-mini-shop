import actions from "./actions";

const switchModal = () => (dispatch, getState) => {
  dispatch(actions.showModal());
};

const saveModalSettings = (arrayOfSettings) => (dispatch, getState) => {
  dispatch(actions.customizeModal(arrayOfSettings));
};

const operationsObj = { switchModal, saveModalSettings };

export default operationsObj;
