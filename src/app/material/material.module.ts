import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';
import {  MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [],

  exports:[
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
