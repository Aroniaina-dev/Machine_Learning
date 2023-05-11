import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web_service', pathMatch: 'full'},
  {
    path: 'web_service',
    loadChildren: () => import('./modules/web-service/web-service.module').then(m => m.WebServiceModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/connexion/connexion.module').then(m => m.ConnexionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
