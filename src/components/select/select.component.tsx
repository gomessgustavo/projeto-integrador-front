import { LabelInput, PropStyles, SelectStyled, TextInput } from "../utils";
import styled from "styled-components";

const ContainerInput = styled.div<PropStyles>`
  width: ${(props) => props.$width || "auto"};
  margin: ${(props) => props.$margin || "0"};
  height: auto;
  display: flex;
  flex-direction: column;
`;

interface IOptions {
  value: string;
  label: string;
  id: string;
}

interface PropInputLabel {
  label: string;
  value: string;
  onChange: (event: any) => void;
  name: string;
  width?: string;
  margin?: string;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
  required?: boolean;
  options: IOptions[];
}

export const Select = (props: PropInputLabel) => {
  return (
    <ContainerInput $width={props.width} $margin={props.margin}>
      <LabelInput>{props.label}</LabelInput>
      <SelectStyled name={props.name} onChange={props.onChange}>
        {props.options.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </SelectStyled>
    </ContainerInput>
  );
};
