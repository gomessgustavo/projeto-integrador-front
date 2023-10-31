import styled from "styled-components";
import { DEFAULT_YELLOW } from "../../utils/css.constants";
import { ReactElement } from "react";

const DEFAULT_SIZE = "45px";
const DEFAULT_ICON_SIZE = "30px";

interface PropStyle {
  buttonColor?: string;
  size: string;
  iconSize: string;
}

const StyledButton = styled.button<PropStyle>`
  padding: 10px 5px;
  color: white;
  border-radius: 100%;
  border: 0;
  font-weight: 600;
  font-family: "Poppins";
  font-size: ${(props) => props.iconSize};
  letter-spacing: 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.buttonColor || DEFAULT_YELLOW};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  cursor: pointer;
  height: 45px;
  transition: 0.15s;
  &&:hover {
    filter: brightness(0.85);
  }
`;

interface PropButton {
  onClick: () => void;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  size?: string;
  icon: ReactElement;
  iconSize?: string;
}

export const IconButton = (props: PropButton) => {
  return (
    <StyledButton
      onClick={props.onClick}
      buttonColor={props.color}
      type={props.type}
      size={props.size || DEFAULT_SIZE}
      iconSize={props.iconSize || DEFAULT_ICON_SIZE}
    >
      {props.icon}
    </StyledButton>
  );
};
