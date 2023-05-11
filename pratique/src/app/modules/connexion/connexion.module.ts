import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { InscriptionComponent } from './view/inscription/inscription.component';
import { LoginComponent } from './view/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InscriptionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConnexionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConnexionModule { }
