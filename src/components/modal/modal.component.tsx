import { ReactElement } from "react";
import { ModalContainer, ModalContent } from "./modal.style";
import { IconButton } from "../icon-button/icon-button.component";
import { AiOutlineClose } from "react-icons/ai";
import { RED_ERROR } from "../../utils/css.constants";

export interface IModalProp {
  children?: ReactElement;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = (props: IModalProp) => {
  return (
    <ModalContainer $isOpen={props.isOpen}>
      <ModalContent>
        <div>
          <IconButton
            style={{ position: "absolute", left: "100%", top: "-40px" }}
            icon={<AiOutlineClose />}
            color={RED_ERROR}
            onClick={props.closeModal}
          />

          {props.children}
        </div>
      </ModalContent>
    </ModalContainer>
  );
};
