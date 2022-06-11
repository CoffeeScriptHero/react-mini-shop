import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import { modalOperations } from "../../store/modal";
import {
  Card,
  CardImg,
  CardName,
  CardPrice,
  DefaultLink,
  CardText,
  CardContent,
} from "./CartProduct-styles";

export const CartProduct = ({
  card,
  id,
  saveModalSettings,
  deleteModalContent,
}) => {
  return (
    <Card id={id}>
      <DefaultLink>
        <CardImg src={card.src}></CardImg>
      </DefaultLink>
      <CardContent>
        <CardText>
          <CardName>{card.name}</CardName>
          <CardPrice>{card.price}$</CardPrice>
        </CardText>
        <Button
          bgColor={"transparent"}
          color={"black"}
          margin={"0 70px 0 0"}
          text={"x"}
          fontSize={"30px"}
          data-testid="deleteBtn"
          handleClick={() => {
            saveModalSettings(deleteModalContent);
            document.getElementById(`${id}`).classList.add("activeCard");
          }}
        ></Button>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.storage,
    deleteModalContent: state.modal.deleteModalContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveModalSettings: (settings) =>
      dispatch(modalOperations.saveModalSettings(settings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
