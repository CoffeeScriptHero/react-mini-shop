import React from "react";
import Product from "../../components/Product/Product.js";
import {
  FavoritesWrapper,
  FavoritesMessage,
  FavoritesList,
} from "./Favorites-styles";
import { connect } from "react-redux";

export const Favorites = ({ goods, favorites }) => {
  const favoritesArr = [];

  goods.forEach((f) => {
    if (favorites.includes(f.id)) {
      favoritesArr.push(f);
    }
  });

  const favoritesList = favoritesArr.map((f) => (
    <Product id={f.id} key={f.id} product={f} />
  ));

  return (
    <FavoritesWrapper>
      {favorites.length === 0 && (
        <FavoritesMessage>
          Вы пока не добавили ничего в избранное
        </FavoritesMessage>
      )}
      {favorites.length !== 0 && <FavoritesList>{favoritesList}</FavoritesList>}
    </FavoritesWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods.data,
    favorites: state.favorites.storage,
  };
};

export default connect(mapStateToProps)(Favorites);
