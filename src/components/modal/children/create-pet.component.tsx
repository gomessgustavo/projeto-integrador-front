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

const FormCreatePet = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
`;

export const CreatePet = () => {
  const DEFAULT_MARGIN = "5px";
  const [values, setValues] = useState({
    nome: "",
    idade: "",
    porte: PortePetEnum.PEQUENO,
    sexo: SexoPetEnum.FEMEA,
    raca: "",
    descricao: "",
    images: null,
  });

  const onChangeValue = (event: any) => {
    const { value, name } = event?.target;
    console.log(event);
    setValues((oldVal) => ({
      ...oldVal,
      [name]: value,
    }));
  };

  const onChangeImages = (event: any) => {
    const { files } = event.target;
    if (files.length > 3) {
      toast.error("O máximo de arquivo para upload é 3!");
      return;
    }
    setValues((oldVal) => ({
      ...oldVal,
      images: files,
    }));
  };

  const savePet = async (event: any) => {
    event.preventDefault();
    const api = AdocaoApi();

    const petModelo = {
      nome: values.nome,
      idade: values.idade,
      porte: values.porte,
      sexo: values.sexo,
      raca: values.raca,
      descricao: values.descricao,
    } as PetModel;

    // await api.createPets(petModelo, values.images);
  };

  return (
    <FormCreatePet onSubmit={savePet}>
      <RowDiv $height="100%" $justifyContent="space-between">
        <InputLabel
          name="nome"
          onChange={onChangeValue}
          value={values.nome}
          label="Nome"
          width="70%"
          margin={DEFAULT_MARGIN}
          required
        />
        <InputLabel
          name="idade"
          onChange={onChangeValue}
          type="number"
          value={values.idade}
          label="Idade"
          width="30%"
          margin={DEFAULT_MARGIN}
          required
        />
      </RowDiv>
      <RowDiv $height="100%" $justifyContent="space-between">
        <Select
          label="Porte"
          value={values.porte}
          name="porte"
          onChange={onChangeValue}
          width="30%"
          margin={DEFAULT_MARGIN}
          options={Object.keys(PortePetEnum).map((porte) => ({
            label: PortePetEnum[porte as keyof typeof PortePetEnum],
            value: PortePetEnum[porte as keyof typeof PortePetEnum],
            id: porte,
          }))}
          required
        />
        <Select
          label="Porte"
          value={values.porte}
          name="porte"
          onChange={onChangeValue}
          width="30%"
          margin={DEFAULT_MARGIN}
          options={Object.keys(SexoPetEnum).map((sexo) => ({
            label: SexoPetEnum[sexo as keyof typeof SexoPetEnum],
            value: SexoPetEnum[sexo as keyof typeof SexoPetEnum],
            id: sexo,
          }))}
          required
        />
        <InputLabel
          name="raca"
          onChange={onChangeValue}
          value={values.raca}
          label="Raça"
          width="40%"
          margin={DEFAULT_MARGIN}
        />
      </RowDiv>
      <LabelInput style={{ textAlign: "start", width: "100%" }}>
        Descrição
      </LabelInput>
      <FormTextArea
        name="descricao"
        value={values.descricao}
        maxLength={255}
        onChange={onChangeValue}
      />
      <InputLabel
        name="images"
        onChange={onChangeImages}
        label="Imagens"
        width="100%"
        type="file"
        margin={DEFAULT_MARGIN}
        accept="image/*"
        multiple
      />
      <Button name="Salvar" type="submit" />
    </FormCreatePet>
  );
};
