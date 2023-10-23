import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent implements OnInit {
  usuarios: any[] = [];
  dataSource = new MatTableDataSource<any>(this.usuarios);
  displayedColumns: string[] = ['email', 'nome', 'perfil', 'area', 'resetSenha', 'editar', 'ativar', 'excluir'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.buscarUsuario();
  }

  buscarUsuario() {
    this.userService.buscarUsuario().subscribe(
      (resultados: any[]) => {
        this.usuarios = resultados;
        this.dataSource.data = this.usuarios; // Atualize o dataSource.data com os dados
        
        
      },
      (erro) => {
        console.error('Erro ao buscar usuários:', erro);
      }
    );
  }
}