import { GenericoRsDTO } from "./genericoRsDTO";

export class GenericoDataDTO<T> extends GenericoRsDTO{
    data!:T;
}