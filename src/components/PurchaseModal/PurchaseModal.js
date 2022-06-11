import Modal from "../Modal/Modal.js";
import Button from "../Button/Button.js";
import React, { useEffect } from "react";
import { BtnsWrapper } from "./PurchaseModal-styles.js";
import { goodsOperations } from "../../store/goods/index.js";
import { modalOperations } from "../../store/modal/index.js";
import { cartOperations } from "../../store/cart/index.js";
import { connect } from "react-redux";

const PurchaseModal = ({
  getGoods,
  switchModal,
  showModal,
  settings,
  cart,
  setCart,
}) => {
  useEffect(() => {
    getGoods();
  });

  const createModal = ([closeBtn, title, id, bgColor, bgHeaderColor, text]) => {
    return (
      <Modal
        closeBtn={closeBtn}
        title={title}
        show={showModal}
        id={id}
        handleClick={switchModal}
        bgColor={bgColor}
        bgHeaderColor={bgHeaderColor}
        btns={id === "purchase_modal" ? buyBtns : delBtns}
        text={text}
      />
    );
  };

  const addToCart = () => {
    const currentCard = document.querySelector(".activeCard");
    const id = currentCard.id;

    const sameValue = cart.find((el) => el === Number(id));

    const cartValue = sameValue
      ? cart.filter((el) => el !== sameValue)
      : [...cart, Number(id)];

    setCart(cartValue);

    localStorage.setItem("Cart", JSON.stringify(cartValue));

    switchModal();
  };

  const createBtns = (
    text1,
    text2,
    bgColor1,
    bgColor2,
    padding1,
    padding2,
    handleClick1,
    handleClick2
  ) => {
    return (
      <BtnsWrapper>
        <Button
          padding={padding1}
          bgColor={bgColor1}
          margin={"0 15px 0 0"}
          id={"confirmationBtn"}
          text={text1}
          handleClick={handleClick1}
        />
        <Button
          padding={padding2}
          bgColor={bgColor2}
          id={"refusalBtn"}
          text={text2}
          handleClick={handleClick2}
        />
      </BtnsWrapper>
    );
  };

  const buyBtns = createBtns(
    "Да",
    "Нет",
    "#6666ff",
    "#ff0000",
    "11px 20px 14px",
    "11px 20px 14px",
    addToCart,
    switchModal
  );

  const delBtns = createBtns(
    "Да",
    "Нет",
    "#B20000",
    "#0039b2",
    "11px 20px 14px",
    "11px 20px 14px",
    addToCart,
    switchModal
  );

  return <>{showModal && createModal(settings)}</>;
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    settings: state.modal.settings,
    cart: state.cart.storage,
    favorites: state.favorites.storage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(goodsOperations.getGoods()),
    switchModal: () => dispatch(modalOperations.switchModal()),
    setCart: (cartValue) => dispatch(cartOperations.setCart(cartValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);
