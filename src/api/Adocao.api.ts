import { useMemo } from "react";
import {
  CREATE_PET,
  DELETE_PET,
  FILENAME_PARAM,
  GET_ALL_PETS,
  GET_IMAGE,
  ID_PARAM,
  UPDATE_PET,
  UPLOAD_IMAGE,
} from "./endpoints.constants";
import { PetModel } from "./model/pet.model";
import { server } from "./server";

export const AdocaoApi = () => {
  const api = server();

  const createPets = async (body: PetModel) => {
    return await api.post(CREATE_PET, body);
  };

  const getPets = async () => {
    return await api.get(GET_ALL_PETS);
  };

  const deletePet = async (id: string) => {
    return await api.delete(DELETE_PET.replace(ID_PARAM, id));
  };

  const updatePet = async (id: string) => {
    return await api.put(UPDATE_PET.replace(ID_PARAM, id));
  };

  const uploadImage = async (img: any) => {
    return await api.post(UPLOAD_IMAGE, img);
  };

  const getImage = async (filename: string) => {
    return await api.get(GET_IMAGE.replace(FILENAME_PARAM, filename));
  };

  return useMemo(
    () => ({
      createPets,
      getPets,
      deletePet,
      updatePet,
      uploadImage,
      getImage,
    }),
    []
  );
};
