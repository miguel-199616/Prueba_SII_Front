import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public ULTIMA_HORA_INGRESO : string = Constantes.CADENA_VACIA;
  public NOMBRE_USUARIO : string = Constantes.CADENA_VACIA;

  constructor() { }

  ngOnInit(): void {
    this.obtenerNombreUsuario();
    this.obtenerUltimaHoraIngreso();
  }

  obtenerUltimaHoraIngreso(){
    const fechaIngreso = new Date();
    let anio = fechaIngreso.getFullYear();
    let mes =  this.generarValor(fechaIngreso.getMonth()+1);
    let dia = this.generarValor(fechaIngreso.getDate());
    let hora = this.generarValor(fechaIngreso.getHours());
    let minutos = this.generarValor(fechaIngreso.getMinutes());
    let segundos = this.generarValor(fechaIngreso.getSeconds());
    this.ULTIMA_HORA_INGRESO = Constantes.INICIO_ULTIMO_INGRESO_FECHA+dia+Constantes.SEPARADOR_FECHA+mes+Constantes.SEPARADOR_FECHA+anio+
                               Constantes.INICIO_ULTIMO_INGRESO_HORA+hora+Constantes.SEPARADOR_HORA+minutos+Constantes.SEPARADOR_HORA+segundos;
  }

  generarValor(valor:number): string{
    let respuesta : string = Constantes.CADENA_VACIA;
    if(valor<10){
      respuesta = '0'+valor;
    }else{
      respuesta=valor.toString();
    }
    return respuesta
  }

  obtenerNombreUsuario(){
    this.NOMBRE_USUARIO="Miguel Ángel Hernández Cubillos"
  }

}
