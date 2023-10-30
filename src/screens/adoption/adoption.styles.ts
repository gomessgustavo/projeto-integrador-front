import styled from "styled-components";
import { WHITE_COLOR, DEFAULT_YELLOW } from "../../utils/css.constants";

export const Pet = styled.div`
  position: relative;
  padding: 0;
  margin: 20px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 5px;
`;

export const PetTag = styled.span`
  position: absolute;
  top: -15%;
  background: none;
  display: flex;
  width: 150px;
  height: 75px;
  color: ${WHITE_COLOR};
  border-radius: 5px;
`;

export const PetTagDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PetTagImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const PetTagName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AdoptionLista = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline-start: 0;
  overflow: auto;
`;

export const AdoptionContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const AdoptionInfo = styled.div`
  height: 100%;
  width: 70vw;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  h2 {
    margin: 5px 0;
  }
  p {
    margin: 5px 0;
  }
  overflow: auto;
`;

export const InfoPet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px 5px;
  h1 {
    margin: 0;
  }
`;

export const AdoptionInfoSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
