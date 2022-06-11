import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart/Cart.js";
import Favorites from "../pages/Favorites/Favorites.js";
import GoodsList from "../components/GoodsList/GoodsList.js";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GoodsList />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
