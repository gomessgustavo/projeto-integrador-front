import styled from "styled-components";

export interface PropStyles {
  $width?: string;
  $padding?: string;
  $justifyContent?: string;
  $height?: string;
  $margin?: string;
  $alignItems?: string;
}

export const RowDiv = styled.div<PropStyles>`
  width: 100%;
  height: ${(prop) => prop.$height || "100vh"};
  display: flex;
  flex-direction: row;
  justify-content: ${(prop) => prop.$justifyContent || "center"};
  align-items: ${(prop) => prop.$alignItems || "normal"};
  padding: ${(prop) => prop.$padding || "0"};
  margin: ${(prop) => prop.$margin || "0"};
`;

export const ColumnDiv = styled.div<PropStyles>`
  display: flex;
  width: ${(prop) => prop.$width || "100%"};
  height: ${(prop) => prop.$height || "auto"};
  margin: ${(prop) => prop.$margin || "0"};
  padding: ${(prop) => prop.$padding || "0"};
  justify-content: ${(prop) => prop.$justifyContent || "center"};
  align-items: ${(prop) => prop.$alignItems || "normal"};
  flex-direction: column;

  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const TextInput = styled.input<PropStyles>`
  border: 2px solid;
  border-radius: 5px;
  width: ${(prop) => prop.width || "auto"};
  font-size: 13px;
  padding: ${(prop) => prop.$padding || "8px"};
  background: #f5f5f5;
  border: 0;
  border-bottom: 2px solid;
  transition: 0.15s ease-in;

  &&:focus {
    border: 0;
    border-bottom: 2px solid;
    scale: 101%;
    outline: none;
  }
`;

export const LabelInput = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

export const SelectStyled = styled.select<PropStyles>`
  padding: 8px;
  width: ${(prop) => prop.$width || "auto"};
  margin: ${(prop) => prop.$margin || "0"};
`;

export const FormTextArea = styled.textarea`
  height: 80px;
  width: 100%;
  resize: none;
`;
