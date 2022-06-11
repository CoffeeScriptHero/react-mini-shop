import React, { useEffect } from "react";
import {
  CartMessage,
  CardsList,
  CartWrapper,
  PurchaseButtonWrapper,
} from "./Cart-styles";
import CartProduct from "../../components/CartProduct/CartProduct";
import PurchaseForm from "../../components/PurchaseForm/PurchaseForm";
import { RequiredMessage } from "../../components/PurchaseForm/PurchaseForm-styles";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import { cartOperations } from "../../store/cart";
import { formOperations } from "../../store/form";

export const Cart = ({
  cart,
  goods,
  deleteCards,
  buttonClicked,
  formValidated,
  form,
  setFormStatus,
  setButtonStatus,
}) => {
  const cartArr = [];

  goods.forEach((g) => {
    if (cart.includes(g.id)) {
      cartArr.push(g);
    }
  });

  useEffect(() => {
    setButtonStatus(false);
    setFormStatus(false);
  }, [setButtonStatus, setFormStatus]);

  const cartList = cartArr.map((c) => (
    <CartProduct id={c.id} key={c.id} card={c} delBtn />
  ));

  const purchaseItems = () => {
    setButtonStatus(true);
    if (formValidated) {
      cart.forEach((c) => {
        console.log(goods[c - 1]);
      });
      for (const value in form) {
        console.log(`${value}: ${form[value]}`);
      }
      deleteCards();
    }
  };

  return (
    <>
      {cart.length === 0 && !formValidated && (
        <CartMessage>В корзине пока пусто</CartMessage>
      )}
      {cart.length === 0 && formValidated && buttonClicked && (
        <CartMessage>
          Спасибо за заказ, ожидайте звонок от оператора :)
        </CartMessage>
      )}
      {cart.length !== 0 && (
        <CartWrapper>
          {<PurchaseForm />}
          {
            <CardsList>
              {cartList}
              <PurchaseButtonWrapper>
                <Button
                  padding={"10px"}
                  margin={"0 10px 10px 0"}
                  bgColor={"#ADD8E6"}
                  text={"Купить"}
                  className={`purchaseBtn`}
                  handleClick={purchaseItems}
                  data-testid="purchaseBtn"
                />
                {!formValidated && buttonClicked && (
                  <RequiredMessage>
                    Заполните, пожалуйста, форму
                  </RequiredMessage>
                )}
              </PurchaseButtonWrapper>
            </CardsList>
          }
        </CartWrapper>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods.data,
    cart: state.cart.storage,
    buttonClicked: state.cart.buttonClicked,
    formValidated: state.form.formValidated,
    form: state.form.values,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCards: () => dispatch(cartOperations.deleteCards()),
    setButtonStatus: (status) =>
      dispatch(cartOperations.setButtonStatus(status)),
    setFormStatus: (status) => dispatch(formOperations.setFormStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
