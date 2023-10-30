import styled from "styled-components";
import { PetModel } from "../../api/model/pet.model";
import { Button } from "../../components/button/button.component";
import {
  Pet,
  PetTag,
  PetTagDiv,
  PetTagImg,
  PetTagName,
} from "./adoption.styles";
import { DEFAULT_GREEN } from "../../utils/css.constants";
import BONE from "../../assets/img/tag.png";

interface PropCardPet {
  pet: PetModel;
  openModal: (pet: PetModel) => void;
}

const Card = styled.li`
  display: flex;
  width: 280px;
  height: 360px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px;
  margin-right: auto;
`;

export const CardPet = ({ pet, openModal }: PropCardPet) => {
  return (
    <Card>
      <Pet style={{ backgroundImage: `url(${pet.azureUrls[0]})` }}>
        <PetTag>
          <PetTagDiv>
            <PetTagImg src={BONE} />
            <PetTagName>{pet.nome}</PetTagName>
          </PetTagDiv>
        </PetTag>
      </Pet>
      <Button
        color={DEFAULT_GREEN}
        name="Ver Mais"
        width="100px"
        onClick={() => openModal(pet)}
      />
    </Card>
  );
};
