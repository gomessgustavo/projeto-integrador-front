import { DEFAULT_GREEN, RED_ERROR } from "../../../utils/css.constants";
import { Button } from "../../button/button.component";
import { ColumnDiv, RowDiv } from "../../utils";

export interface IDeletePetProp {
  onConfirm: () => Promise<void>;
  onDecline: () => void;
}

export const DeletePet = (props: IDeletePetProp) => {
  return (
    <ColumnDiv
      $height="100px"
      $width="350px"
      $justifyContent="center"
      $alignItems="center"
    >
      <span>Você tem certeza que deseja excluir?</span>
      <RowDiv $justifyContent="space-around" $margin="10px 0">
        <Button
          color={DEFAULT_GREEN}
          name="Sim"
          onClick={props.onConfirm}
        ></Button>
        <Button color={RED_ERROR} name="Não" onClick={props.onDecline}></Button>
      </RowDiv>
    </ColumnDiv>
  );
};
