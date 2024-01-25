import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements AfterViewInit {
  
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild('paginator') paginator: MatPaginator | undefined;

  paginaAtual = 0;
  itensPorPagina = 5;
  
  memorandos = [
    { tema: 'Memorando direito material', versao: '10/12/2022'},
    { tema: 'Memorando descontos', versao: '01/01/2023' },
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
    { tema: 'Memorando agente e principal', versao: '01/01/2024'},
  ];

  // Use MatTableDataSource para suportar ordenação
  dataSource = new MatTableDataSource(this.memorandos);

  // Defina as colunas a serem exibidas
  displayedColumns: string[] = ['tema', 'versao'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filtrarProjetos() {
    // Lógica de filtragem aqui, se necessário
  }
}