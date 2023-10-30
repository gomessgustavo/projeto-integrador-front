import styled from "styled-components";
import { DEFAULT_GREEN, WHITE_COLOR } from "../../utils/css.constants";

export const BaseDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
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
  height: 20vh;
  background: ${DEFAULT_GREEN};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BaseContent = styled.div`
  width: 100%;
  height: 70vh;
  padding: 10px 0;
  scroll-behavior: auto;
`;
