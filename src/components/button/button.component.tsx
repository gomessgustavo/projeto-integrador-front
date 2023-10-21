import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 5px;
  color: white;
  border-radius: 50px;
  min-width: 150px;
  border: 0;
  font-weight: 600;
  font-family: "Poppins";
  font-size: 15px;
  letter-spacing: 1.5px;
  cursor: pointer;
  height: 45px;
  transition: 0.15s;
  &&:hover {
    font-size: 18px;
  }
`;

interface PropButton {
  name: string;
  onClick: () => void;
  color?: string;
}

export const Button = (props: PropButton) => {
  return (
    <StyledButton
      onClick={props.onClick}
      style={{ background: props.color || "#E9BC55" }}
    >
      {props.name}
    </StyledButton>
  );
};
