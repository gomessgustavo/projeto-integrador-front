import { useEffect, useRef, useState, useCallback } from "react";
import { AdocaoApi } from "../../api/Adocao.api";
import { PetModel } from "../../api/model/pet.model";
import { CardPet } from "./card-pet.component";
import {
  AdoptionCarousel,
  AdoptionContainer,
  AdoptionFormText,
  AdoptionInfo,
  AdoptionInfoContainer,
  AdoptionInfoSide,
  AdoptionLista,
  FormContainer,
} from "./adoption.styles";
import { ColumnDiv, LabelInput, RowDiv } from "../../components/utils";
import ReactImageGallery from "react-image-gallery";
import { IconButton } from "../../components/icon-button/icon-button.component";
import { AiOutlineClose } from "react-icons/ai";
import { FormValues } from "../../types/adoption/FormValues";
import { init } from "../../utils/init-classes";
import { InputLabel } from "../../components/input-label/input-label.component";
import { Button } from "../../components/button/button.component";

export const Adoption = () => {
  const [pets, setPets] = useState<PetModel[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetModel>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [values, setValues] = useState<FormValues>(init(FormValues));
  const listInnerRef = useRef<HTMLUListElement>(null);

  const getPets = async () => {
    const api = AdocaoApi();
    const response = await api.getPets(page);
    if (response.data.length < 10) {
      setLastPage(true);
    }
    setPets((oldState) => [...oldState, ...response.data]);
  };

  const getPetsCallback = useCallback(getPets, [page]);

  useEffect(() => {
    getPetsCallback();
  }, [getPetsCallback]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight && !lastPage) {
        nextPage();
      }
    }
  };

  const openModal = (pet: PetModel) => {
    setSelectedPet(pet);
  };

  const nextPage = () => {
    setPage((value) => value + 1);
  };

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const sendEmail = () => {
    console.log("a");
  };

  return (
    <AdoptionContainer>
      <AdoptionLista
        onScroll={onScroll}
        ref={listInnerRef}
        $modalOpened={!!selectedPet}
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
              <AdoptionCarousel>
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
              </AdoptionCarousel>
              <ColumnDiv $justifyContent="flex-start">
                <RowDiv
                  $justifyContent="space-between"
                  style={{ height: "auto" }}
                >
                  <div></div>
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
            <FormContainer onSubmit={sendEmail}>
              <ColumnDiv $padding="5px" $justifyContent="flex-start">
                <InputLabel
                  label="Nome"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  width="100%"
                  margin="0 5px 0 0"
                />
                <InputLabel
                  label="Telefone"
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                  width="100%"
                />
                <InputLabel
                  label="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                />
                <ColumnDiv $height="100%" $margin="10px 0">
                  <LabelInput>
                    Nos diga por que você deseja adotar {selectedPet.nome}{" "}
                    abaixo:
                  </LabelInput>
                  <AdoptionFormText maxLength={1000} />
                </ColumnDiv>
                <Button type="submit" name="Enviar" width="100%" />
              </ColumnDiv>
            </FormContainer>
          </AdoptionInfo>
        </AdoptionInfoContainer>
      )}
    </AdoptionContainer>
  );
};
