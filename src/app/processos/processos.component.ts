import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-projetos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  
  itos = [
    { tema: 'ITO Homolog Contábil Next', versao:'1.0'},
    { tema: 'Ito 2', versao:'1.5'},
    { tema: 'ITO Homolog', versao:'2.0'},
    

     
  ];

  // Use MatTableDataSource para suportar ordenação
  dataSource = new MatTableDataSource(this.itos);

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
