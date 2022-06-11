import { CartProduct } from "./CartProduct.js";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { modalOperations } from "../../store/modal/index.js";
import types from "../../store/modal/types.js";

const middlewars = [thunk];
const mockStore = configureStore(middlewars);
const store = mockStore({});
const modalContent = [
  false,
  "Вы уверены?",
  "delete_modal",
  "#fff",
  "#B20000",
  "Вы хотите удалить товар в из корзины?",
];

const modalDispatch = (arg) => {
  return store.dispatch(
    modalOperations.saveModalSettings({
      showModal: true,
      settings: arg,
    })
  );
};

const modalSuccess = () => {
  return {
    type: types.CUSTOMIZE_MODAL,
    payload: { showModal: true, settings: modalContent },
  };
};

describe("CartProduct tests", () => {
  const settings = {
    card: {
      src: "#",
    },
    id: 1,
  };

  test("Delete btn click test", () => {
    const saveModalSettingsMock = jest.fn();
    const { getByTestId } = render(
      <CartProduct
        id={settings.id}
        card={settings.card}
        saveModalSettings={saveModalSettingsMock}
      />
    );
    const deleteBtn = getByTestId("deleteBtn");
    userEvent.click(deleteBtn);
    expect(saveModalSettingsMock).toBeCalledTimes(1);
  });
  test("Modal shows after button click test", () => {
    const { getByTestId } = render(
      <CartProduct
        id={settings.id}
        card={settings.card}
        deleteModalContent={modalContent}
        saveModalSettings={modalDispatch}
      />
    );
    const actions = store.getActions();
    const deleteBtn = getByTestId("deleteBtn");
    userEvent.click(deleteBtn);
    expect(actions[0]).toEqual(modalSuccess());
  });
});
