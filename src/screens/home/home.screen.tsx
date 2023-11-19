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

export const Home = () => {
  const [pets, setPets] = useState<PetModel[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetModel>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [search, setSearch] = useState("");
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

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight && !lastPage) {
        console.log("a");
      }
    }
  };

  const openModal = (pet: PetModel) => {
    setSelectedPet(pet);
  };

  const nextPage = () => {
    setPage((value) => value + 1);
  };

  return (
    <HomeContainer>
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
          onClick={() => console.log("add")}
          color={DEFAULT_GREEN}
        />
      </RowDiv>
      <HomeLista
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
      </HomeLista>
      {selectedPet && (
        <HomeInfoContainer>
          <HomeInfo>
            <HomeInfoSide>
              <HomeCarousel>
                <ReactImageGallery
                  items={selectedPet.azureUrls.map((url: string) => ({
                    original: url,
                    thumbnail: url,
                  }))}
                  showThumbnails={false}
                  showPlayButton={false}
                  showBullets={false}
                  showIndex
                />
              </HomeCarousel>
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
            </HomeInfoSide>

            <h2>Contato</h2>
            <p>
              Em caso de interesse, logo abaixo você pode preencher o formulário
              e enviar para entrarmos em contato.
            </p>
          </HomeInfo>
        </HomeInfoContainer>
      )}
    </HomeContainer>
  );
};
