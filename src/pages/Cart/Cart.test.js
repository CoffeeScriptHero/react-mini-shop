import { Cart } from "./Cart.js";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Cart tests", () => {
  test("Purchase btn click test", () => {
    const settings = {
      cart: [1, 2, 3, 4],
      goods: [2, 3, 5],
    };
    const setButtonStatusMock = jest.fn();
    const setFormStatusMock = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart
          goods={settings.goods}
          cart={settings.cart}
          setButtonStatus={setButtonStatusMock}
          setFormStatus={setFormStatusMock}
        />
      </Provider>
    );
    const purchaseBtn = getByTestId("purchaseBtn");
    userEvent.click(purchaseBtn);
    expect(setButtonStatusMock).toBeCalledTimes(2);
  });
});
