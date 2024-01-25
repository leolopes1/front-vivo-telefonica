import { Injectable } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  constructor(private dialog: MatDialog) {}

  abrirFormulario(): void {
    this.dialog.open(ChatComponent, {
      width: '800px', // Defina o tamanho conforme necessário
      height:'500px',
      panelClass: 'sem-rolagem'
    });
  }
}
