import styled from "styled-components";
import { DEFAULT_YELLOW } from "../../utils/css.constants";

const StyledButton = styled.button`
  padding: 10px 5px;
  color: white;
  border-radius: 50px;
  border: 0;
  font-weight: 600;
  font-family: "Poppins";
  font-size: 15px;
  letter-spacing: 1.5px;
  background: ${(props) => props.color || DEFAULT_YELLOW};
  cursor: pointer;
  height: 45px;
  transition: 0.15s;
  &&:hover {
    filter: brightness(0.85);
  }
`;

interface PropButton {
  name: string;
  onClick: () => void;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
}

export const Button = (props: PropButton) => {
  return (
    <StyledButton
      onClick={props.onClick}
      color={props.color}
      type={props.type}
      style={{ width: props.width || "150px" }}
    >
      {props.name}
    </StyledButton>
  );
};
