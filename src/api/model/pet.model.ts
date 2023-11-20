import { PortePetEnum } from "./pet-porte.enum";
import { SexoPetEnum } from "./pet-sexo.enum";

export class PetModel {
  id: string;
  nome: string;
  idade: string;
  porte: PortePetEnum;
  sexo: SexoPetEnum;
  raca: string;
  descricao: string;
  imagemBase64: string;
  azureUrls: string[];
  created_at: string;
}
