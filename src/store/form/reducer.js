import types from "./types";

const initialState = {
  values: null,
  formValidated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VALUES: {
      return { ...state, values: action.payload };
    }
    case types.UPDATE_FORM_STATUS: {
      return { ...state, formValidated: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
