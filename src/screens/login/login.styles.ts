import styled from "styled-components";
import { DEFAULT_GREEN, DEFAULT_YELLOW } from "../../utils/css.constants";

export const LeftSide = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${DEFAULT_GREEN};
  h1 {
    color: white;
    font-size: 60px;
    margin: 0;
  }
  h2 {
    height: 8%;
    color: white;
    font-size: 14px;
  }
`;

export const RightSide = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: ${DEFAULT_YELLOW};
  padding: 20px 0;
  form {
    width: 100%;
    display: flex;
    height: 40%;
    padding: 50px;
  }

  h1 {
    margin: 5px 0;
  }
`;

export const ImageHome = styled.img`
  width: 80%;
`;
export const Logo = styled.img`
  height: auto;
  width: 20%;
  min-width: 10%;
`;

export const InfosHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogosFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 30px;
  height: 30vh;
  align-items: center;
  justify-content: space-between;
`;
