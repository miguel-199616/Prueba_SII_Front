import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoDTO } from 'src/app/model/empleadoDTO';
import { GenericoDataDTO } from 'src/app/model/genericoDataDTO';
import { GenericoListaRsDTO } from 'src/app/model/genericoListaRsDTO';
import { ObjetoString } from 'src/app/model/objetoString';
import { ResponseMenuDTO } from 'src/app/model/responseMenuDTO';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private API_EMPLEADOS = 'http://localhost:8183/';
  private OPER_EMPLEADOS = 'empleados/';
  private CONSULTAR_EMPLEADOS = 'consultar-empleados';
  private headers = {'accept': 'application/json', 'content-type':'application/json'}

  constructor(private http:HttpClient) { }

  consultarEmpleados(idEmpleado:ObjetoString): Observable<GenericoDataDTO<ResponseMenuDTO>>{
    const body = JSON.stringify(idEmpleado);
    return this.http.post<GenericoDataDTO<ResponseMenuDTO>>(
      `${this.API_EMPLEADOS}${this.OPER_EMPLEADOS}${this.CONSULTAR_EMPLEADOS}`, body, {headers:this.headers}
    );
  }
}
