import types from "./types";

const updateFavorites = (favoritesValue) => ({
  type: types.UPDATE_FAVORITES,
  payload: favoritesValue,
});

const actionsObj = { updateFavorites };

export default actionsObj;
