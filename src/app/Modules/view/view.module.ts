import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    ViewComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
