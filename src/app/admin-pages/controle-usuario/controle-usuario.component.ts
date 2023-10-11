import { Component, OnInit } from '@angular/core';
import {    } from '@angular/forms';

export interface PeriodicElement {
  nome: string;
  email: string;
  perfil: string;
  area: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {email: 'Bia@gmail.com', nome: 'Bia dos Santos', perfil: 'adm', area: 'H'},
  
 
];

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent {

  displayedColumns: string[] = ['email', 'nome', 'perfil', 'area'];
  dataSource = ELEMENT_DATA;


  constructor() {
  }
  
  
}

