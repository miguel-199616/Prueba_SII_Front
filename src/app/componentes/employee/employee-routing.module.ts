import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Constantes } from "src/app/utils/constantes";
import { ConstantesRoutes } from "src/app/utils/constantesRoutes";
import { ConsultarComponent } from "./consultar/consultar.component";

const routes: Routes = [
  {
    path:ConstantesRoutes.RUTA_VACIA,
    data:{
      breadcrumb:Constantes.BREADCRUMB_EMPLEADOS
    },
    children:[
      {
        path:ConstantesRoutes.RUTA_CONSULTA_EMPLEADOS,
        data:{
          breadcrumb:Constantes.BREADCRUMB_CONSULTA_EMPLEADOS
        },
        component:ConsultarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }