import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calendario-projetos',
  templateUrl: './calendario-projetos.component.html',
  styleUrls: ['./calendario-projetos.component.css']
})
export class CalendarioProjetosComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  
  itos = [
    { tema: 'Início janela de testes - R12 - Release Dezembro', data:'01/12/2023'},
    { tema: 'Último DUMP Journaling - R12 - Release Dezembro', data:'06/12/2023'},
    { tema: 'Fim da janela de testes - R12 - Release Dezembro', data:'07/12/2023'},
    { tema: 'Início dos testes de Regressão', data:'26/12/2023'},
    { tema: 'Fim dos testes de Regressão', data:'27/12/2023'},
    { tema: 'R12 - Entrega em Produção', data:'28/12/2023'},
    { tema: 'Último DUMP Journaling - R1 - Release Janeiro', data:'29/12/2023'},
    { tema: 'Início janela de testes - R1 - Release Janeiro', data:'21/01/2023'},
    { tema: 'Fim da janela de testes - R1 - Release Janeiro', data:'27/12/2023'},
    { tema: 'Início dos testes de Regressão', data:'08/01/2024'},
    { tema: 'Fim dos testes de Regressão', data:'12/01/2024'},
    { tema: 'R1 - Entrega em Produção', data:'14/01/2024'},

    




























    










    

     
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
