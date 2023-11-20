import styled from "styled-components";
import { PetModel } from "../../api/model/pet.model";
import { InfoPet, PetImage } from "./home.styles";
import { Button } from "../../components/button/button.component";
import { RowDiv } from "../../components/utils";
import { RED_ERROR } from "../../utils/css.constants";
import { ModalChildrenEnum } from "../../components/modal/modal-children.enum";

interface PropCardPet {
  pet: PetModel;
  onAction: (pet: PetModel, modal: ModalChildrenEnum) => void;
}

const Card = styled.li`
  display: flex;
  height: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px;
  margin-right: auto;
  background: #f5f5f5;
  border-radius: 5px;
  width: 45%;
  @media (max-width: 1250px) {
    width: 90%;
  }
`;

export const CardPet = ({ pet, onAction }: PropCardPet) => {
  return (
    <Card>
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
          <Button
            name="Editar"
            onClick={() => onAction(pet, ModalChildrenEnum.EDIT_PET)}
          />
          <Button
            name="Apagar"
            onClick={() => onAction(pet, ModalChildrenEnum.DELETE_PET)}
            color={RED_ERROR}
          />
        </RowDiv>
      </InfoPet>
    </Card>
  );
};
