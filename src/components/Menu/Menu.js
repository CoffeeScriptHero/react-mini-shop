import React from "react";
import { MenuList, ListItem } from "./Menu-styles";
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#000",
};

const linkActive = {
  color: "#0000FF",
  borderBottom: "1px solid blue",
};

const Menu = () => {
  return (
    <MenuList>
      <ListItem>
        <NavLink exact to="/" style={linkStyle} activeStyle={linkActive}>
          Главная
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink
          exact
          to="/favorites"
          style={linkStyle}
          activeStyle={linkActive}
        >
          Избранное
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink exact to="/cart" style={linkStyle} activeStyle={linkActive}>
          Корзина
        </NavLink>
      </ListItem>
    </MenuList>
  );
};

export default Menu;
