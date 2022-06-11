import types from "../modal/types";

const showModal = () => ({
  type: types.SHOW_MODAL,
});

const customizeModal = (arrayOfSettings) => ({
  type: types.CUSTOMIZE_MODAL,
  payload: arrayOfSettings,
});

const actionsObj = { showModal, customizeModal };

export default actionsObj;
