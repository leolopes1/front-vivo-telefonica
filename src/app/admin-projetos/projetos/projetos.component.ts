import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjetosService } from '../../services/projetos.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginaAtual = 0;
  itensPorPagina = 8;
  projetos: any[] = [];
  nome: string = '';
  displayedColumns: string[] = ['nome', 'status'];
  dataSource = new MatTableDataSource();

  constructor(private projetoService: ProjetosService) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.buscarProjetos();
  }

  buscarProjetos() {
    this.projetoService.buscarProjetos().subscribe(
      (resultados) => {
        this.projetos = resultados;
        this.dataSource.data = this.projetos; // Atualize o dataSource após buscar os projetos
      },
      (erro) => {
        console.error('Erro ao buscar projetos:', erro);
      }
    );
  }

  filtrarProjetos() {
    if (this.nome) {
      const projetosFiltrados = this.projetos.filter(projeto =>
        projeto.nome.toLowerCase().startsWith(this.nome.toLowerCase())
      );
      this.dataSource.data = projetosFiltrados; // Atualize o dataSource ao filtrar
    } else {
      this.buscarProjetos();
    }
  }
}