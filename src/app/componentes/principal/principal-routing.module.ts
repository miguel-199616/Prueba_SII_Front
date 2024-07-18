import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./principal.component";
import { ConstantesRoutes } from "src/app/utils/constantesRoutes";
import { Constantes } from "src/app/utils/constantes";

const routes : Routes = [
    {
        path : ConstantesRoutes.RUTA_VACIA,
        component:PrincipalComponent,
        data:{
            breadcrumb : Constantes.BREADCRUMB_SII_GROUP
        },
        children:[
            {
                path : ConstantesRoutes.RUTA_BIENVENIDA,
                loadChildren:() => import('./../bienvenida/bienvenida.module').then((x) => x.BienvenidaModule)
            },
            {
                path : ConstantesRoutes.RUTA_EMPLEADOS,
                loadChildren:() => import ('./../employee/employee.module').then((x) => x.EmployeeModule)
            },
            {
                path:ConstantesRoutes.RUTA_VACIA,
                redirectTo: ConstantesRoutes.RUTA_BIENVENIDA,
                pathMatch:ConstantesRoutes.RUTA_FULL
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PrincipalRoutingModule {}