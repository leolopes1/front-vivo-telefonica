import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-historico-release',
  templateUrl: './historico-release.component.html',
  styleUrls: ['./historico-release.component.css']
})
export class HistoricoReleaseComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  
  itos = [
    { tema: 'Release Fevereiro', versao:'10/02/2022'},
    { tema: 'Release Maio', versao:'12/05/2022'},
    { tema: 'Release Agosto', versao:'20/08/2022'},
    

     
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
