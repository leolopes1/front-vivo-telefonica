import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calendario-receitas',
  templateUrl: './calendario-receitas.component.html',
  styleUrls: ['./calendario-receitas.component.css']
})
export class CalendarioReceitasComponent implements AfterViewInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  
  itos = [
    { tema: 'Indicadores a faturar', data:'01/12/2023'},
    { tema: 'Apresentação diretoria', data:'06/12/2023'},
    { tema: 'Primeiro Forecast', data:'7/12/2023'},
    { tema: 'Auditoria Sox', data:'26/12/2023'},
    { tema: 'Envio das provisões/ Faturamento (Data limite)', data:'27/12/2023'},
    { tema: 'Comitê de Ingressos', data:'28/12/2023'},
    { tema: 'Validação da receita/ Impostos/ Forecast/ Envio dos prints', data:'29/12/2023'},
  ]

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
