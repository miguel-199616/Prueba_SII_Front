import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  readonly TITULO_BIENVENIDA = Constantes.TITULO_BIENVENIDA;
  

  constructor() { }

  ngOnInit(): void {
  }

}
