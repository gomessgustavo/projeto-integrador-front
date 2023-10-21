import { useEffect, useState } from "react";
import { Header } from "../../components/header/header.component";
import { RowDiv } from "../../components/utils";
import { ImageHome, ImageLeft, LeftSide, RightSide } from "./home.styles";
import { AdocaoApi } from "../../api/Adocao.api";
import { PetModel } from "../../api/model/pet.model";
import Cachorro from "../../assets/img/cachorro.png";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import LogoPref from "../../assets/img/logopref.png";
import LogoUni from "../../assets/img/logouni.png";


interface PropPets {
  pet: PetModel;
}

const CardPets = (prop: PropPets) => {
  return <h2 key={prop.pet.id}>{prop.pet.nome}</h2>;
};

export const Home = (props: any) => {
  const api = AdocaoApi();
  const [pets, setPets] = useState<PetModel[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const getPet = async () => {
      const res = await api.getPets();
      setPets(res.data);
    };

    getPet();
  }, []);

  const goToAdote = () => {
    navigate("/adocao");
  };

  return (
    <div>
      <Header />
      {/* {pets ? (
        pets.map((pet: PetModel) => <CardPets pet={pet} />)
      ) : (
        <span>Não há pets cadastrado na base</span>
      )} */}
      <RowDiv>
        <LeftSide>
          <h1>Adoção <br />consciente</h1>
          <h2>Sistema de adoção público da Cidade de Canoas</h2>
          <Button onClick={goToAdote} name="Adote" />
          <ImageLeft src={LogoPref} /> 
          <ImageLeft src={LogoUni} />
        </LeftSide>
        <RightSide>
          <ImageHome src={Cachorro} />
        </RightSide>
      </RowDiv>
    </div>
  );
};
