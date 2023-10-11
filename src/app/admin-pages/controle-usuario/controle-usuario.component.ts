import { Component, OnInit } from '@angular/core';
import {    } from '@angular/forms';
import { User } from 'src/app/shared/model/user';



const users: User[] = [
  {_id:'1', nome:'Leticia',email:'Leticia@gmail.com.br',area:'Relacionamento',perfil:'usuario'},
  {_id:'2', nome:'Maria',email:'maria@gmail.com.br',area:'Contabilidade',perfil:'Administrador'}
];

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent {

  displayedColumns: string[] = ['email', 'nome', 'perfil', 'area', 'resetSenha','editar','ativar','excluir'];
  dataSource = users;


  constructor() {
  }
  
  
}

