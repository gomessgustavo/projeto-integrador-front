import { useEffect, useRef, useState } from "react";
import { AdocaoApi } from "../../api/Adocao.api";
import { PetModel } from "../../api/model/pet.model";
import { CardPet } from "./card-pet.component";
import {
  AdoptionContainer,
  AdoptionInfo,
  AdoptionInfoSide,
  AdoptionLista,
  InfoPet,
} from "./adoption.styles";
import { Carousel } from "react-responsive-carousel";
import ImageGallery from "react-image-gallery";
import { Button } from "../../components/button/button.component";

export const Adoption = () => {
  const api = AdocaoApi();
  const [pets, setPets] = useState<PetModel[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetModel>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
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

  return (
    <AdoptionContainer>
      <AdoptionLista onScroll={onScroll} ref={listInnerRef}>
        {pets.map((pet) => (
          <CardPet key={pet.id} pet={pet} openModal={openModal} />
        ))}
      </AdoptionLista>
      {selectedPet && (
        <AdoptionInfo>
          <AdoptionInfoSide>
            <ImageGallery
              items={selectedPet.azureUrls.map((url) => ({
                original: url,
                thumbnail: url,
              }))}
              autoPlay
              showThumbnails={false}
              showPlayButton={false}
              showBullets={false}
              showNav={false}
              showIndex
            />
            <InfoPet>
              <Button
                name="Fechar"
                onClick={() => setSelectedPet(undefined)}
                color="#E5141E"
                width="100px"
              />
              <h1>{selectedPet.nome}</h1>
              <p>
                <b>Idade: </b>
                {selectedPet.idade}
              </p>
              <p>
                <b>Porte: </b>
                {selectedPet.porte}
              </p>
              <p>
                <b>Sexo: </b>
                {selectedPet.sexo}
              </p>
              <p>
                <b>Idade: </b>
                {selectedPet.idade}
              </p>
            </InfoPet>
          </AdoptionInfoSide>
          <h2>Descrição</h2>
          <p>{selectedPet.descricao}</p>
          <h2>Contato</h2>
          <p>
            Em caso de interesse, logo abaixo você pode preencher o formulário e
            enviar para entrarmos em contato.
          </p>
          {/* TO-DO: Criar formulário aqui */}
        </AdoptionInfo>
      )}
    </AdoptionContainer>
  );
};
