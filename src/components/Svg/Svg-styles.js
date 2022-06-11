import styled from "styled-components";
import { ReactComponent as FavoriteIcon } from "./favorite.svg";

export const StyledLogo = styled(FavoriteIcon)`
  position: relative;
  margin-top: 5px;
  margin-right: 5px;
  width: 15px;
  height: 15px;
  fill: ${({ fill }) => fill || "#fff"};
  stroke: #ffa500;
  .lines {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SvgWrapper = styled.div`
  display: inline-block;
`;
