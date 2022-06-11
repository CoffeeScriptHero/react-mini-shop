import { Product } from "./Product.js";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { modalOperations } from "../../store/modal/index.js";
import { favoritesOperations } from "../../store/favorites/index.js";
import modalTypes from "../../store/modal/types.js";
import favoritesTypes from "../../store/favorites/types.js";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const modalContent = [
  false,
  "Подтверждение",
  "purchase_modal",
  "#fff",
  "#6666ff",
  "Вы хотите добавить товар в корзину?",
];

const modalDispatch = (arr) => {
  return store.dispatch(
    modalOperations.saveModalSettings({
      showModal: true,
      settings: arr,
    })
  );
};

const favoritesDispatch = (arr) => {
  return store.dispatch(
    favoritesOperations.setFavorites({
      storage: arr,
    })
  );
};

const modalSuccess = () => {
  return {
    type: modalTypes.CUSTOMIZE_MODAL,
    payload: { showModal: true, settings: modalContent },
  };
};

const favoritesSuccess = () => {
  return {
    type: favoritesTypes.UPDATE_FAVORITES,
    payload: { storage: [6, 2, 10, 1] },
  };
};

const settings = {
  id: 1,
  cart: [2, 5, 7],
  favorites: [6, 2, 10],
  product: {
    src: "#",
  },
};

describe("Product tests", () => {
  test("Purchase btn click test", () => {
    const saveModalSettingsMock = jest.fn();
    const setFavoritesMock = jest.fn();
    const { getByTestId } = render(
      <Product
        favorites={settings.favorites}
        cart={settings.cart}
        product={settings.product}
        setFavorites={setFavoritesMock}
        saveModalSettings={saveModalSettingsMock}
        id={settings.id}
      />
    );
    const purchaseBtn = getByTestId("purchaseBtn");
    userEvent.click(purchaseBtn);
    expect(saveModalSettingsMock).toBeCalledTimes(1);
  });

  test("Modal shows after btn click test", () => {
    const setFavoritesMock = jest.fn();
    const { getByTestId } = render(
      <Product
        favorites={settings.favorites}
        cart={settings.cart}
        product={settings.product}
        setFavorites={setFavoritesMock}
        purchaseModalContent={modalContent}
        saveModalSettings={modalDispatch}
        id={settings.id}
      />
    );
    const actions = store.getActions();
    const purchaseBtn = getByTestId("purchaseBtn");
    userEvent.click(purchaseBtn);
    expect(actions[0]).toEqual(modalSuccess());
  });
  test("Add to favorites click test", () => {
    const saveModalSettingsMock = jest.fn();
    const { getByTestId } = render(
      <Product
        favorites={settings.favorites}
        cart={settings.cart}
        product={settings.product}
        setFavorites={favoritesDispatch}
        saveModalSettings={saveModalSettingsMock}
        id={settings.id}
      />
    );
    const actions = store.getActions();
    const svg = getByTestId("svg");
    userEvent.click(svg);
    expect(actions[1]).toEqual(favoritesSuccess());
  });
});
