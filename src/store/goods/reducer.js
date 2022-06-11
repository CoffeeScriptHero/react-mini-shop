import types from "./types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case types.SAVE_GOODS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
