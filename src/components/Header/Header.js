import React from "react";
import Menu from "../Menu/Menu";
import { HeaderWrapper, HeaderName } from "./Header-styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderName>Rozetk@</HeaderName>
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
