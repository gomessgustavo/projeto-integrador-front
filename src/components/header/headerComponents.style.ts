import { styled } from "styled-components";
import { DEFAULT_GREEN } from "../../utils/css.constants";

export const HeaderBar = styled.header`
  background: ${DEFAULT_GREEN};
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  padding: 5px 30px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  background: none;
  width: 100%;
  color: white;
  font-weight: bold;
`;
