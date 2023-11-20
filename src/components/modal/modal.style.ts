import styled from "styled-components";

export interface IModalContainerProp {
  $isOpen?: boolean;
}

export const ModalContainer = styled.div<IModalContainerProp>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  top: 20%;
  width: auto;
  height: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  border: solid 2px;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;

  div {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
