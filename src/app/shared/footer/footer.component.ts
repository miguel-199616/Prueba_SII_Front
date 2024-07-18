import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version:string=Constantes.CADENA_VACIA;

  constructor() { 
    this.version='0.0.1'
  }

  ngOnInit(): void {
  }

}
