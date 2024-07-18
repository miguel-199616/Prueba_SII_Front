import { GenericoRsDTO } from "./genericoRsDTO";

export class GenericoListaRsDTO<T> extends GenericoRsDTO{
    listaDatos?:T[];
}