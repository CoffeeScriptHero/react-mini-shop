import { combineReducers } from "redux";

import goods from "./goods";
import cart from "./cart";
import favorites from "./favorites";
import modal from "./modal";
import form from "./form";

const reducer = combineReducers({
  goods,
  cart,
  favorites,
  modal,
  form,
});

export default reducer;
