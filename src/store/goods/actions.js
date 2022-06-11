import types from "./types";

const setIsLoading = (isLoading) => ({
  type: types.IS_LOADING,
  payload: isLoading,
});

const saveGoods = (goods) => ({
  type: types.SAVE_GOODS,
  payload: goods,
});

const actionsObj = { setIsLoading, saveGoods };

export default actionsObj;
