import React from "react";
import { StyledLogo, SvgWrapper } from "./Svg-styles.js";

const Svg = ({ ...props }) => {
  return (
    <SvgWrapper>
      <StyledLogo {...props}></StyledLogo>
    </SvgWrapper>
  );
};

export default Svg;
