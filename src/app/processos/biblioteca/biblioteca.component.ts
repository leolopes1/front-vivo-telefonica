import { Component } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  memorandos = [
    { tema: 'Memorando direito material'},
    { tema: 'Memorando descontos'},
    { tema: 'Memorando agente e principal'},
    
  ];

  
  filtrarProjetos(){}

  
}
