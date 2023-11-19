import styled from "styled-components";
import { PetModel } from "../../api/model/pet.model";
import { InfoPet, PetImage, PropsCardModal } from "./home.styles";
import { Button } from "../../components/button/button.component";
import { RowDiv } from "../../components/utils";
import { RED_ERROR } from "../../utils/css.constants";

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
      <PetImage>
        <img src={pet.azureUrls[0]} alt={`Foto de ${pet.nome}`} />
      </PetImage>
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
        <RowDiv
          $width="100%"
          $alignItems="center"
          $justifyContent="space-evenly"
          $padding="0 10px"
        >
          <Button name="Editar" onClick={() => openModal(pet)} />
          <Button
            name="Apagar"
            onClick={() => openModal(pet)}
            color={RED_ERROR}
          />
        </RowDiv>
      </InfoPet>
    </Card>
  );
};
