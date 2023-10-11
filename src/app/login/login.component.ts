import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario).subscribe(
      (response) => {
        // Login bem-sucedido
        // Realize qualquer lógica adicional necessária, como armazenar o token de autenticação
        // e, em seguida, redirecione para a página inicial
        this.router.navigate(['/homepage']);
      },
      (error) => {
        // Trate erros de login, se necessário
        alert('Dados incorretos')
      }
    );
  }
}