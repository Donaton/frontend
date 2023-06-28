import { Donacion} from "./donacion.interface";

export interface Caso {
  idCasos: number;
  nombres: string;
  descripcion: string;
  montoLimite: number;
  fecha: string;
  ciudad: string;
  damnificado: Damnificado;
  donaciones: Donacion[];
}

export interface Damnificado {
  // Agrega las propiedades necesarias para el damnificado
}
