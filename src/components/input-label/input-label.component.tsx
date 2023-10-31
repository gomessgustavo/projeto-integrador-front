import { TextInput } from "../utils";
import styled from "styled-components";

const ContainerInput = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const LabelInput = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

interface PropInputLabel {
  label: string;
  value: string;
  onChange: (event: any) => void;
  name: string;
}

export const InputLabel = (props: PropInputLabel) => {
  return (
    <ContainerInput>
      <LabelInput>{props.label}</LabelInput>
      <TextInput
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </ContainerInput>
  );
};
