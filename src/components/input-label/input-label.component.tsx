import { LabelInput, PropStyles, TextInput } from "../utils";
import styled from "styled-components";

const ContainerInput = styled.div<PropStyles>`
  width: ${(props) => props.$width || "auto"};
  margin: ${(props) => props.$margin || "0"};
  height: auto;
  display: flex;
  flex-direction: column;
`;

interface PropInputLabel {
  label: string;
  value?: string;
  onChange: (event: any) => void;
  name: string;
  width?: string;
  margin?: string;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
}

export const InputLabel = (props: PropInputLabel) => {
  return (
    <ContainerInput $width={props.width} $margin={props.margin}>
      <LabelInput>{props.label}</LabelInput>
      <TextInput
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        maxLength={props.maxLength}
        required={props.required}
        accept={props.accept}
        multiple={props.multiple}
      />
    </ContainerInput>
  );
};
