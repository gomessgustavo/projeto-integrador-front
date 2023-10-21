import { useEffect, useState } from "react";
import { Header } from "../../components/header/header.component";
import { RowDiv } from "../../components/utils";
import { ImageHome, LeftSide, RightSide } from "./home.styles";
import { AdocaoApi } from "../../api/Adocao.api";
import { PetModel } from "../../api/model/pet.model";
import Cachorro from "../../assets/img/cachorro.png";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

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
          <Button onClick={goToAdote} name="Adote" />
        </LeftSide>
        <RightSide>
          <ImageHome src={Cachorro} />
        </RightSide>
      </RowDiv>
    </div>
  );
};
