import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { DialogoService } from '../dialogo.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  mostrarMenu: boolean = false;
  usuario: string = "Leonardo";

  constructor(private authService:AuthService, private dialogoService: DialogoService ){

  }
  abrirFormulario(): void {
    this.dialogoService.abrirFormulario();
  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    ); 

  }
}
