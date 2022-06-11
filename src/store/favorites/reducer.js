import types from "./types";

const initialState = {
  storage: JSON.parse(localStorage.getItem("Favorites")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FAVORITES: {
      return {
        ...state,
        storage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
