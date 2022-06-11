import React, { useEffect } from "react";
import "../Button/Button.js";
import Button from "../Button/Button.js";
import {
  ModalHeader,
  ModalContent,
  ModalText,
  ModalWrapper,
  ModalTitle,
} from "./Modal-styles.js";

const Modal = ({
  title = "Подтверждение",
  text = "Вы хотите добавить товар в корзину?",
  handleClick,
  bgHeaderColor,
  closeBtn,
  btns,
  id,
  bgColor,
}) => {
  useEffect(() => {
    document.addEventListener("click", modalHandler);
    return () => {
      const currentCard = document.querySelector(".activeCard");
      if (currentCard) {
        currentCard.classList.remove("activeCard");
      }
      document.removeEventListener("click", modalHandler);
    };
  });

  const modalHandler = (e) => {
    const modal = document.getElementById(`${id}`);
    if (
      modal !== null &&
      !modal.contains(e.target) &&
      !e.target.classList.contains("purchaseBtn")
    ) {
      handleClick();
    }
  };

  return (
    <ModalWrapper data-testid={id}>
      <ModalContent id={id} bgColor={bgColor}>
        <ModalHeader bgHeaderColor={bgHeaderColor}>
          <ModalTitle>{title}</ModalTitle>
          {closeBtn && (
            <Button
              bgColor={"transparent"}
              text={"Х"}
              fontSize={"19px"}
              handleClick={handleClick}
            ></Button>
          )}
        </ModalHeader>
        <ModalText>{text}</ModalText>
        {btns}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
