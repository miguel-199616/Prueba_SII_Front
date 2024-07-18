import { EmpleadoDTO } from "./empleadoDTO";

export class ResponseMenuDTO {
    status!:string;
    data!:EmpleadoDTO|EmpleadoDTO[];
}