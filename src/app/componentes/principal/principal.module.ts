import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { BienvenidaModule } from './../bienvenida/bienvenida.module';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
    declarations:[
        PrincipalComponent
    ], imports:[
        CommonModule,     
        PrincipalRoutingModule,
        SharedModule,   
        BienvenidaModule,
        MaterialModule
    ]
})
export class PrincipalModule{}