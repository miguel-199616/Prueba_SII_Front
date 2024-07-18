import { NgModule } from "@angular/core";
import { BienvenidaComponent } from "./bienvenida.component";
import { BienvenidaRoutingModule } from "./bienvenida-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        BienvenidaComponent
    ],
    imports:[
        CommonModule,
        BienvenidaRoutingModule
    ]
})
export class BienvenidaModule {}