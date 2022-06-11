import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ bgHeaderColor }) => bgHeaderColor || "#d44637"};
`;

export const ModalContent = styled.div`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor || "red"};
  max-width: 525px;
  border-radius: 3px;
`;

export const ModalText = styled.p`
  padding: 38px 40px;
  line-height: 28px;
  font-size: 15px;
  color: black;
  margin: 0;
  text-align: center;
`;

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 22px;
  color: white;
  padding: 23px 120px 21px 31px;
  border-radius: 3px;
`;
