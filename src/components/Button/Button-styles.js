import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  background-color: ${({ bgColor }) => bgColor || "lightblue"};
  border: 1px solid transparent;
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  font-family: ${({ fontFamily }) => fontFamily || "sans-serif"};
  border-radius: 3px;
  color: ${({ color }) => color || "#fff"};
  cursor: pointer;
`;
