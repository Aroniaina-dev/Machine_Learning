import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoConnectionGuard } from 'src/app/guard/no-connection.guard';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[NoConnectionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebServiceRoutingModule { }
