import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-projetos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  projetos: any[] = [];
  nome: string = '';
  itos = [
    { tema: 'ITO Homolog Contábil Next', data:'22/01/23'},
    { tema: 'Ito 2', data:'22/01/23'},
    { tema: 'ITO Homolog', data:'22/01/23'},

     
  ];


  // Use MatTableDataSource para suportar ordenação
  dataSource = new MatTableDataSource(this.itos);

  // Defina as colunas a serem exibidas
  displayedColumns: string[] = ['tema', 'data'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filtrarProjetos() {
    // Lógica de filtragem aqui, se necessário
  }
  
}
