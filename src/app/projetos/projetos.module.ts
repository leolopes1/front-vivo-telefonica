import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    MaterialModule,
    
    
  ]
})
export class ProjetosModule { }
