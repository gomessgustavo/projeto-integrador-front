import { useEffect, useRef, useState } from "react";
import { AdocaoApi } from "../../api/Adocao.api";
import { PetModel } from "../../api/model/pet.model";
import { CardPet } from "./card-pet.component";
import {
  AdoptionContainer,
  AdoptionFormText,
  AdoptionInfo,
  AdoptionInfoContainer,
  AdoptionInfoSide,
  AdoptionLista,
} from "./adoption.styles";
import { ColumnDiv, RowDiv } from "../../components/utils";
import ReactImageGallery from "react-image-gallery";
import { IconButton } from "../../components/icon-button/icon-button.component";
import { AiOutlineClose } from "react-icons/ai";
import { FormValues } from "../../types/adoption/FormValues";
import { init } from "../../utils/init-classes";
import { InputLabel } from "../../components/input-label/input-label.component";
import { Button } from "../../components/button/button.component";

export const Adoption = () => {
  const api = AdocaoApi();
  const [pets, setPets] = useState<PetModel[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetModel>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [values, setValues] = useState<FormValues>(init(FormValues));
  const listInnerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const getPets = async () => {
      const response = await api.getPets(page);
      if (response.data.length < 10) {
        setLastPage(true);
      }
      setPets([...pets, ...response.data]);
    };

    getPets();
  }, [page]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight && !lastPage) {
        changePage();
      }
    }
  };

  const openModal = (pet: PetModel) => {
    setSelectedPet(pet);
  };

  const changePage = () => {
    setPage((value) => value + 1);
  };

  const handleChange = (event: any) => {
    console.log(event);
    const { value, name } = event.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  return (
    <AdoptionContainer>
      <AdoptionLista
        onScroll={onScroll}
        ref={listInnerRef}
        modalOpened={!!selectedPet}
      >
        {pets.map((pet) => (
          <CardPet
            key={pet.id}
            pet={pet}
            openModal={openModal}
            modalOpened={!!selectedPet}
          />
        ))}
      </AdoptionLista>
      {selectedPet && (
        <AdoptionInfoContainer>
          <AdoptionInfo>
            <AdoptionInfoSide>
              <ReactImageGallery
                items={selectedPet.azureUrls.map((url) => ({
                  original: url,
                  thumbnail: url,
                }))}
                showThumbnails={false}
                showPlayButton={false}
                showBullets={false}
                showIndex
              />
              <ColumnDiv>
                <RowDiv
                  style={{ justifyContent: "space-between", height: "auto" }}
                >
                  <h2>{selectedPet.nome}</h2>
                  <IconButton
                    onClick={() => setSelectedPet(undefined)}
                    icon={<AiOutlineClose width="100%" />}
                    color="#E5141E"
                  />
                </RowDiv>
                <p>{selectedPet.descricao}</p>
              </ColumnDiv>
            </AdoptionInfoSide>

            <h2>Contato</h2>
            <p>
              Em caso de interesse, logo abaixo você pode preencher o formulário
              e enviar para entrarmos em contato.
            </p>
            <form>
              <ColumnDiv>
                <InputLabel
                  label="Nome"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                />
                <InputLabel
                  label="Telefone"
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                />
                <InputLabel
                  label="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  name="phone"
                />
              </ColumnDiv>
              <AdoptionFormText />
              <Button name="Enviar" onClick={() => console.log("a")} />
            </form>
          </AdoptionInfo>
        </AdoptionInfoContainer>
      )}
    </AdoptionContainer>
  );
};
