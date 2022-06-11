import styled from "styled-components";

export const Card = styled.li`
  width: calc(1000px - 350px);
  list-style: none;
  display: flex;
  border: 1px solid #e9e5e3;
  margin-bottom: 10px;
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const DefaultLink = styled.a.attrs(() => ({ href: "#" }))``;

export const CardName = styled(DefaultLink)`
  color: #333;
  font-size: 18px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const CardPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
