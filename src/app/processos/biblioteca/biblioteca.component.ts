import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements AfterViewInit {
  
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  
  memorandos = [
    { tema: 'Memorando direito material', data: '10/12/2022'},
    { tema: 'Memorando descontos', data: '01/01/2023' },
    { tema: 'Memorando agente e principal', data: '01/01/2024'},
  ];

  // Use MatTableDataSource para suportar ordenação
  dataSource = new MatTableDataSource(this.memorandos);

  // Defina as colunas a serem exibidas
  displayedColumns: string[] = ['tema', 'data'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filtrarProjetos() {
    // Lógica de filtragem aqui, se necessário
  }
}