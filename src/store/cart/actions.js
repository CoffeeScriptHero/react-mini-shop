import types from "./types";

const updateCart = (cartValue) => ({
  type: types.UPDATE_CART,
  payload: cartValue,
});

const clearCart = () => ({
  type: types.CLEAR_CART,
});

const clickPurchaseButton = (status) => ({
  type: types.CLICK_PURCHASE_BUTTON,
  payload: status,
});

const actionsObj = {
  updateCart,
  clearCart,
  clickPurchaseButton,
};

export default actionsObj;
