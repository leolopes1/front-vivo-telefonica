import { Component, OnInit } from '@angular/core';
import {    } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent {

  usuarios: User[] = [];
  dataSource = this.usuarios;
  displayedColumns: string[] = ['email', 'nome', 'perfil', 'area', 'resetSenha','editar','ativar','excluir'];


  ngOnInit() {
    this.buscarUsuario();
  }

  constructor(private userService: UserService) {
  }
  buscarUsuario() {
    this.userService.buscarUsuario().subscribe(
      (resultados:User[]) => {
        this.usuarios = resultados;
        this.dataSource = this.usuarios;
      },
      (erro) => {
        console.error('Erro ao buscar projetos:', erro);
      }
    );
  }
  
  
}

