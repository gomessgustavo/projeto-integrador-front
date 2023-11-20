import { useState } from "react";
import styled from "styled-components";
import { InputLabel } from "../../input-label/input-label.component";
import { PortePetEnum } from "../../../api/model/pet-porte.enum";
import { SexoPetEnum } from "../../../api/model/pet-sexo.enum";
import { FormTextArea, LabelInput, RowDiv } from "../../utils";
import { Select } from "../../select/select.component";
import { Button } from "../../button/button.component";
import { toast } from "react-toastify";
import { AdocaoApi } from "../../../api/Adocao.api";
import { PetModel } from "../../../api/model/pet.model";
import { PetUpdateModel } from "../../../api/model/pet-update.model";
import { useNavigate } from "react-router-dom";

const FormCreatePet = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
`;

export interface IEditPetProp {
  closeModal: () => void;
  pet?: PetModel;
}

export const EditPet = (props: IEditPetProp) => {
  const DEFAULT_MARGIN = "5px";
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nome: props.pet?.nome,
    descricao: props.pet?.descricao,
  });

  const onChangeValue = (event: any) => {
    const { value, name } = event?.target;

    setValues((oldVal) => ({
      ...oldVal,
      [name]: value,
    }));
  };

  const savePet = async (event: any) => {
    event.preventDefault();
    try {
      const api = AdocaoApi();

      const petModelo = {
        nome: values.nome,
        descricao: values.descricao,
      } as PetUpdateModel;

      await api.updatePet(props.pet?.id || "", petModelo);
      navigate("/");
    } catch (e) {
      toast.error("Erro ao atualizar o pet.");
      props.closeModal();
    }
  };

  return (
    <FormCreatePet onSubmit={savePet}>
      <RowDiv $height="100%" $justifyContent="space-between">
        <InputLabel
          name="nome"
          onChange={onChangeValue}
          value={values.nome}
          label="Nome"
          width="100%"
          margin={DEFAULT_MARGIN}
          required
        />
      </RowDiv>
      <LabelInput style={{ textAlign: "start", width: "100%" }}>
        Descrição
      </LabelInput>
      <FormTextArea
        onChange={onChangeValue}
        name="descricao"
        value={values.descricao}
        maxLength={255}
      />
      <Button margin={DEFAULT_MARGIN} name="Salvar" type="submit" />
    </FormCreatePet>
  );
};
