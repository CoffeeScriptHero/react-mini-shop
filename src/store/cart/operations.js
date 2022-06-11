import actions from "./actions";

const setCart = (cartValue) => (dispatch, getState) => {
  dispatch(actions.updateCart(cartValue));
};

const deleteCards = () => (dispatch, getState) => {
  localStorage.removeItem("Cart");
  dispatch(actions.clearCart());
};

const setButtonStatus = (status) => (dispatch, getState) => {
  dispatch(actions.clickPurchaseButton(status));
};

const operationsObj = { setCart, deleteCards, setButtonStatus };

export default operationsObj;
