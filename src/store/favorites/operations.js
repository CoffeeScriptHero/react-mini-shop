import actions from "./actions";

const setFavorites = (favoritesValue) => (dispatch, getState) => {
  dispatch(actions.updateFavorites(favoritesValue));
};

const operationsObj = { setFavorites };

export default operationsObj;
