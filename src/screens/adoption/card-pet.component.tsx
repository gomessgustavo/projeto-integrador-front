import styled from "styled-components";
import { PetModel } from "../../api/model/pet.model";
import { InfoPet, PetImage, PropsCardModal } from "./adoption.styles";
import { Button } from "../../components/button/button.component";

interface PropCardPet {
  pet: PetModel;
  openModal: (pet: PetModel) => void;
  modalOpened: boolean;
}

const Card = styled.li<PropsCardModal>`
  display: flex;
  height: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px;
  margin-right: auto;
  background: #00000013;
  border-radius: 5px;
  width: ${(props) => (props.$modalOpened ? "90%" : "45%")};

  @media (max-width: 1250px) {
    width: 90%;
  }
`;

export const CardPet = ({ pet, openModal, modalOpened }: PropCardPet) => {
  return (
    <Card $modalOpened={modalOpened}>
      <PetImage src={pet.azureUrls[0]} />
      <InfoPet>
        <h1>{pet.nome}</h1>
        <p>
          <b>Idade: </b>
          {pet.idade}
        </p>
        <p>
          <b>Porte: </b>
          {pet.porte}
        </p>
        <p>
          <b>Sexo: </b>
          {pet.sexo}
        </p>
        <p>
          <b>Idade: </b>
          {pet.idade}
        </p>
        <Button name="Ver Mais" onClick={() => openModal(pet)} color="" />
      </InfoPet>
    </Card>
  );
};
