import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoConnectionGuard } from 'src/app/guard/no-connection.guard';
import { InscriptionComponent } from './view/inscription/inscription.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  canActivate:[NoConnectionGuard]
},
{
  path: 'signup',
  component: InscriptionComponent,
  canActivate:[NoConnectionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
