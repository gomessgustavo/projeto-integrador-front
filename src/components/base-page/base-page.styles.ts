import styled from "styled-components";
import { DEFAULT_GREEN, WHITE_COLOR } from "../../utils/css.constants";

export const BaseDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BaseHeader = styled.header`
  width: 100%;
  height: 10vh;
  padding: 15px 0;
  background: ${DEFAULT_GREEN};
  color: ${WHITE_COLOR};
  font-size: 35px;
  letter-spacing: 0.08em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BaseFooter = styled.footer`
  width: 100%;
  height: 15vh;
  background: ${DEFAULT_GREEN};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 100px;
  align-items: center;
  color: ${WHITE_COLOR};
  position: relative;
  bottom: 0pt;
  left: 0pt;
`;

export const BaseContent = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoPrefeitura = styled.img`
  width: 200px;
  height: 100px;
`;

export const FooterTitle = styled.h4`
  font-size: 13px;
  font-weight: 700;
  margin: 5px;
`;

export const LogosImg = styled.img`
  width: 125px;
`;
