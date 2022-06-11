import types from "./types";

const initialState = {
  storage: JSON.parse(localStorage.getItem("Cart")) || [],
  buttonClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART: {
      return {
        ...state,
        storage: action.payload,
      };
    }
    case types.CLEAR_CART: {
      return { ...state, storage: [] };
    }
    case types.CLICK_PURCHASE_BUTTON: {
      return { ...state, buttonClicked: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
