import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConstantesRoutes } from "src/app/utils/constantesRoutes";
import { BienvenidaComponent } from "./bienvenida.component";

const routes : Routes = [
    {
        path : ConstantesRoutes.RUTA_VACIA,
        component:BienvenidaComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class BienvenidaRoutingModule {}