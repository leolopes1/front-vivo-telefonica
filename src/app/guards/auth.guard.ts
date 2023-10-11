import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.usuarioIsAutenticado()) {
      return true; // Permite a navegação
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login
      return false; // Impede a navegação
    }
  }
}
