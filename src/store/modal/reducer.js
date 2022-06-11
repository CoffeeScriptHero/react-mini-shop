import types from "./types";

const initialState = {
  showModal: false,
  settings: [],
  deleteModalContent: [
    false,
    "Вы уверены?",
    "delete_modal",
    "#fff",
    "#B20000",
    "Вы хотите удалить товар в из корзины?",
  ],
  purchaseModalContent: [
    false,
    "Подтверждение",
    "purchase_modal",
    "#fff",
    "#6666ff",
    "Вы хотите добавить товар в корзину?",
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: !state.showModal,
      };
    }
    case types.CUSTOMIZE_MODAL: {
      return {
        ...state,
        settings: action.payload,
        showModal: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
