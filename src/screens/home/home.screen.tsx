import { useState, useRef, useCallback, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import {
  HomeCarousel,
  HomeContainer,
  HomeInfo,
  HomeInfoContainer,
  HomeInfoSide,
  HomeLista,
} from "./home.styles";
import { ColumnDiv, RowDiv } from "../../components/utils";
import { IconButton } from "../../components/icon-button/icon-button.component";
import { AiOutlineClose } from "react-icons/ai";
import { PetModel } from "../../api/model/pet.model";
import { AdocaoApi } from "../../api/Adocao.api";
import { CardPet } from "./card-pet.component";
import { checkArray } from "../../utils/check-array";
import { Header } from "../../components/header/header.component";
import { InputLabel } from "../../components/input-label/input-label.component";
import { Button } from "../../components/button/button.component";
import { DEFAULT_GREEN } from "../../utils/css.constants";
import { Modal } from "../../components/modal/modal.component";
import { ModalChildrenEnum } from "../../components/modal/modal-children.enum";
import { CreatePet } from "../../components/modal/children/create-pet.component";
import { DeletePet } from "../../components/modal/children/delete-pet.component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditPet } from "../../components/modal/children/edit-pet.component";

export const Home = () => {
  const [pets, setPets] = useState<PetModel[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetModel>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChild, setModalChild] = useState<ModalChildrenEnum>();
  const navigate = useNavigate();
  const listInnerRef = useRef<HTMLUListElement>(null);

  const getPets = async () => {
    const api = AdocaoApi();
    const response = await api.getPets(page);
    if (response.data.length < 10) {
      setLastPage(true);
    }
    setPets((oldState) => {
      if (!checkArray(oldState, response.data)) {
        return oldState;
      }
      return [...oldState, ...response.data];
    });
  };

  const getPetsCallback = useCallback(getPets, [page]);

  useEffect(() => {
    getPetsCallback();
  }, [getPetsCallback]);

  useEffect(() => {
    setModalOpen(!!modalChild);
  }, [modalChild]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight && !lastPage) {
        console.log("a");
      }
    }
  };

  const nextPage = () => {
    setPage((value) => value + 1);
  };

  const deletePet = async (pet: PetModel) => {
    try {
      const api = AdocaoApi();
      await api.deletePet(pet.id);
      navigate("/");
    } catch (e) {
      toast.error("Ocorreu um erro ao deletar " + pet.nome);
      onCloseModal();
    }
  };

  const onCloseModal = () => {
    setModalChild(undefined);
    setSelectedPet(undefined);
  };

  const getChildren = () => {
    let child = undefined;
    switch (modalChild) {
      case ModalChildrenEnum.CREATE_PET:
        child = <CreatePet />;
        break;
      case ModalChildrenEnum.DELETE_PET:
        child = (
          <DeletePet
            onConfirm={async () => deletePet(selectedPet as PetModel)}
            onDecline={onCloseModal}
          />
        );
        break;
      case ModalChildrenEnum.EDIT_PET:
        child = <EditPet pet={selectedPet} closeModal={onCloseModal} />;
    }

    return child;
  };

  const onActionPet = (pet: PetModel, modal: ModalChildrenEnum) => {
    setModalChild(modal);
    setSelectedPet(pet);
  };

  return (
    <HomeContainer>
      <Modal
        children={getChildren()}
        isOpen={modalOpen}
        closeModal={() => setModalChild(undefined)}
      />

      <Header />
      <RowDiv
        $height="7vh"
        $alignItems="center"
        $justifyContent="space-between"
        $padding="0 30px"
      >
        <InputLabel
          name="search"
          label="Pesquisar"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          width="45%"
        />
        <Button
          name="Adicionar pet"
          onClick={() => setModalChild(ModalChildrenEnum.CREATE_PET)}
          color={DEFAULT_GREEN}
        />
      </RowDiv>
      <HomeLista onScroll={onScroll} ref={listInnerRef}>
        {pets.map((pet) => (
          <CardPet key={pet.id} pet={pet} onAction={onActionPet} />
        ))}
      </HomeLista>
    </HomeContainer>
  );
};
