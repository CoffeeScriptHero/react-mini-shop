import React from "react";
import Svg from "../Svg/Svg.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import { modalOperations } from "../../store/modal/index.js";
import { favoritesOperations } from "../../store/favorites/index.js";
import { connect } from "react-redux";
import {
  ProductItem,
  Img,
  DefaultLink,
  TextLink,
  Color,
  Price,
  PurchaseWrapper,
  Header,
  Body,
  Footer,
  linkStyles,
} from "./Product-styles.js";

export const Product = ({
  product,
  id,
  cart,
  favorites,
  delBtn,
  setFavorites,
  saveModalSettings,
  purchaseModalContent,
}) => {
  const fill = favorites.find((el) => el === id) ? "#ffa500" : "#fff";

  const addToFavorites = (id) => {
    const sameValue = favorites.find((el) => el === id);

    const favoriteValue = sameValue
      ? favorites.filter((el) => el !== sameValue)
      : [...favorites, Number(id)];

    setFavorites(favoriteValue);

    localStorage.setItem("Favorites", JSON.stringify(favoriteValue));
  };

  return (
    <ProductItem id={id}>
      <Header>
        <Svg
          fill={fill}
          data-testid="svg"
          onClick={() => {
            addToFavorites(id);
          }}
        />
      </Header>
      <Body>
        <DefaultLink>
          <Img src={product.src}></Img>
        </DefaultLink>
      </Body>
      <Footer>
        <TextLink>{product.name}</TextLink>
        <Color>Цвет: {product.color}</Color>
        <PurchaseWrapper>
          <Price>{product.price}$</Price>
          {/* когда товара нет в локалсторедже (страница товаров) */}
          {!cart.find((el) => el === id) && (
            <Button
              data-testid="purchaseBtn"
              padding={"10px"}
              bgColor={"#ADD8E6"}
              margin={"0 5px 0 5px"}
              text={"Купить"}
              className={`purchaseBtn`}
              handleClick={() => {
                saveModalSettings(purchaseModalContent);
                document.getElementById(`${id}`).classList.add("activeCard");
              }}
            />
          )}
          {/* когда товар в локалсторедже, показывается надпись "в корзине" для перехода в корзину (страница товаров) */}
          {cart.find((el) => el === id) && !delBtn && (
            <Link to="/cart" style={linkStyles}>
              В корзине
            </Link>
          )}
        </PurchaseWrapper>
      </Footer>
    </ProductItem>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.storage,
    favorites: state.favorites.storage,
    deleteModalContent: state.modal.deleteModalContent,
    purchaseModalContent: state.modal.purchaseModalContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveModalSettings: (settings) =>
      dispatch(modalOperations.saveModalSettings(settings)),
    setFavorites: (favoritesValue) =>
      dispatch(favoritesOperations.setFavorites(favoritesValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
