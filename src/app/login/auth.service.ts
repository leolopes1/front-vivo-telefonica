import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario): Observable<any> {
    if (usuario.nome === 'Adm' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      // Redirecione o usuário para a página inicial ou outra página após o login bem-sucedido
      this.router.navigate(['/homepage']); 
      
      // Emite um valor usando o operador 'of' para criar um Observable
      return of({ sucesso: true });
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

      // Emite um valor usando o operador 'of' para criar um Observable
      return of({ sucesso: false });
    }
  }

  usuarioIsAutenticado() {
    return this.usuarioAutenticado;
  }
}