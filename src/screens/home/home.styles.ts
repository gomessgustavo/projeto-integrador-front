import styled from "styled-components";

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #22c188;
  h1{
    color: white;
    font-size: 60px;
  }
  h2{
    height: 8%;
    color: white;
    font-size: 14px;
  }

`;

export const RightSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageHome = styled.img`
  height: 100vh;
`;
export const ImageLeft = styled.img`
  height: 8%;
`