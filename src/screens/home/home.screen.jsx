import { useEffect } from "react";
import { Header } from "../../components/header/header.component";
import { RowDiv } from "../../components/utils";
import { LeftSide, RightSide } from "./home.styles";
import { AdocaoApi } from "../../api/Adocao.api";

export const Home = (props) => {
  const api = AdocaoApi();

  useEffect(() => {
    const getPet = async () => {
      const res = await api.getPets();
      console.log(res);
    };

    getPet();
  });

  return (
    <div>
      <Header />
      <RowDiv>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </RowDiv>
    </div>
  );
};
