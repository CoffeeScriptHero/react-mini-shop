import styled from "styled-components";

export const ProductItem = styled.li`
  color: white;
  width: 200px;
  border: 1px solid grey;
`;

export const Img = styled.img`
  src: ${({ src }) => src || "#"};
  width: 150px;
  max-heigth: 150px;
`;

export const Header = styled.div`
  text-align: right;
`;

export const DefaultLink = styled.a.attrs(() => ({ href: "#" }))``;

export const TextLink = styled(DefaultLink)`
  color: #333;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Color = styled.p`
  text-align: left;
  color: #000;
  margin: 15px 0 15px 9px;
  font-weight: 600;
`;

export const Price = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const PurchaseWrapper = styled.div`
  margin: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
`;

export const linkStyles = {
  textDecoration: "none",
  fontWeight: "600",
  color: "green",
  fontSize: "20px",
  margin: "0px 5px 0 0 ",
  borderBottom: "1px dotted green",
};

export const Body = styled.div``;
export const Footer = styled.div``;
