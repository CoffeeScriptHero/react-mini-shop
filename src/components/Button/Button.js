import React from "react";
import { StyledButton } from "./Button-styles.js";

const Button = ({ text, handleClick, className, id, type, ...rest }) => {
  return (
    <StyledButton
      className={className}
      id={id}
      type={type}
      {...rest}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
