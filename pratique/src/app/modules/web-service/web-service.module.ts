import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebServiceRoutingModule } from './web-service-routing.module';
import { HomeComponent } from './view/home/home.component';
import { UpdateComponent } from './view/update/update.component';


@NgModule({
  declarations: [
    HomeComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    WebServiceRoutingModule
  ]
})
export class WebServiceModule { }
