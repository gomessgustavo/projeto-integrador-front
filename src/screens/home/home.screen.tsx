import { Header } from "../../components/header/header.component";
import { RowDiv } from "../../components/utils";
import {
  ImageHome,
  LeftSide,
  Logo,
  LogosFooter,
  InfosHome,
  RightSide,
} from "./home.styles";
import Cachorro from "../../assets/img/cachorro.png";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import LogoPref from "../../assets/img/logopref.png";
import LogoUni from "../../assets/img/logouni.png";

export const Home = () => {
  const navigate = useNavigate();

  const goToAdote = () => {
    navigate("/adocao");
  };

  return (
    <div>
      <Header />
      <RowDiv>
        <LeftSide>
          <InfosHome>
            <h1>Adoção consciente</h1>
            <h2>Sistema de adoção público da Cidade de Canoas</h2>
            <Button onClick={goToAdote} name="Adote" />
          </InfosHome>
          <LogosFooter>
            <Logo src={LogoPref} />
            <Logo src={LogoUni} />
          </LogosFooter>
        </LeftSide>
        <RightSide>
          <ImageHome src={Cachorro} />
        </RightSide>
      </RowDiv>
    </div>
  );
};
