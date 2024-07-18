import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantesRoutes } from './utils/constantesRoutes';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:ConstantesRoutes.RUTA_PRINCIPAL,
    loadChildren: () => import('./componentes/principal/principal.module').then((x) => x.PrincipalModule)
  },
  {
    path:ConstantesRoutes.RUTA_VACIA, 
    pathMatch:ConstantesRoutes.RUTA_FULL,
    redirectTo:ConstantesRoutes.RUTA_PRINCIPAL
  },
  {
    path:ConstantesRoutes.RUTA_NOT_FOUND,
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
