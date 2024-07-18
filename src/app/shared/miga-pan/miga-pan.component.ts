import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Breadcrumb, MigaPanService} from '../../servicios/migaPanService/miga-pan.service'

@Component({
  selector: 'app-miga-pan',
  templateUrl: './miga-pan.component.html',
  styleUrls: ['./miga-pan.component.scss']
})
export class MigaPanComponent implements OnInit {

  breadcrumb$:Observable<Breadcrumb[]> | undefined;

  constructor(private readonly breadcrumbService: MigaPanService) { 
    this.breadcrumb$ = this.breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
  }

}
