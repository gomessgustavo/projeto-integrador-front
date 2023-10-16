import { styled } from "styled-components";

export const HeaderBar = styled.header`
  background-color: none;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  padding: 5px 30px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  background: none;
  width: 100%;
  color: white;
  font-weight: bold;
`;

export const HeaderNav = styled.nav`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;
