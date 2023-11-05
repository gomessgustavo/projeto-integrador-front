import styled from "styled-components";
import { DEFAULT_YELLOW } from "../../utils/css.constants";

interface PropStyledButton {
  $bgColor?: string;
  margin?: string;
}

const StyledButton = styled.button<PropStyledButton>`
  padding: 10px 5px;
  color: white;
  border-radius: 50px;
  border: 0;
  font-weight: 600;
  font-family: "Poppins";
  margin: ${(props) => props.margin || "0"};
  font-size: 15px;
  letter-spacing: 1.5px;
  background: ${(props) => props.$bgColor || DEFAULT_YELLOW};
  cursor: pointer;
  height: 45px;
  transition: 0.15s;
  &&:hover {
    filter: brightness(0.85);
  }
`;

interface PropButton {
  name: string;
  onClick?: () => void;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
  margin?: string;
}

export const Button = (props: PropButton) => {
  return (
    <StyledButton
      onClick={props.onClick}
      $bgColor={props.color}
      type={props.type}
      style={{ width: props.width || "150px" }}
      margin={props.margin}
    >
      {props.name}
    </StyledButton>
  );
};
