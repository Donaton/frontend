import {Caso} from "./caso.interface";

export interface Donacion {
  idDonacion: number;
  monto: string;
  donante: Donante;
  caso: Caso | null;
}

export interface Donante {
  ID_donante: number;
  nombre: string;
  ciudad: string;
  email: string;
  telefono: string;
}

