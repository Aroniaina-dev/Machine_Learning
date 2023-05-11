import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotLogginedGuard } from 'src/app/guard/connexion/not-loggined.guard';
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
  canActivate:[NotLogginedGuard]
},
{
  path: 'signup',
  component: InscriptionComponent,
  canActivate:[NotLogginedGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
