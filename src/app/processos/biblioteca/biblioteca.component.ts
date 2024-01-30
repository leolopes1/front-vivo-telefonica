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
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  
  memorandos = [
    { tema: 'Memorando direito material', versao: '1.0'},
    { tema: 'Memorando descontos', versao: '1.0' },
    { tema: 'Memorando agente e principal', versao: '1.0'},
    { tema: 'Memorando agente e principal', versao: '1.2'},
    { tema: 'Memorando agente e principal', versao: '1.3'},
    { tema: 'Memorando agente e principal', versao: '1.4'},
    { tema: 'Memorando agente e principal', versao: '1.5'},
    { tema: 'Memorando agente e principal', versao: '1.0'},
  ];

  // Use MatTableDataSource para suportar ordenação
  dataSource = new MatTableDataSource(this.memorandos);

  // Defina as colunas a serem exibidas
  displayedColumns: string[] = ['tema', 'versao'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrarProjetos() {
    // Lógica de filtragem aqui, se necessário
  }
}