import { useMemo } from "react";
import {
  CREATE_PET,
  DELETE_PET,
  FILENAME_PARAM,
  GET_ALL_PETS,
  GET_IMAGE,
  ID_PARAM,
  ITEMS_PER_PAGE,
  UPDATE_PET,
  UPLOAD_IMAGE,
} from "./endpoints.constants";
import { PetModel } from "./model/pet.model";
import { server } from "./server";
import { PetUpdateModel } from "./model/pet-update.model";
import { AxiosResponse } from "axios";

export const AdocaoApi = () => {
  const api = server();

  const createPets = async (body: PetModel) => {
    return await api.post(CREATE_PET, body);
  };

  const getPets = async (page: number): Promise<AxiosResponse<PetModel[]>> => {
    return await api.get(GET_ALL_PETS, {
      params: {
        pageNumber: page,
        itemsPerPage: ITEMS_PER_PAGE,
      },
    });
  };

  const deletePet = async (id: string) => {
    return await api.delete(DELETE_PET.replace(ID_PARAM, id));
  };

  const updatePet = async (id: string, body: PetUpdateModel) => {
    return await api.put(UPDATE_PET.replace(ID_PARAM, id), body);
  };

  const uploadImage = async (img: any) => {
    return await api.post(UPLOAD_IMAGE, img);
  };

  const getImage = async (filename: string) => {
    return await api.get(GET_IMAGE.replace(FILENAME_PARAM, filename));
  };

  return {
    createPets,
    getPets,
    deletePet,
    updatePet,
    uploadImage,
    getImage,
  };
};
