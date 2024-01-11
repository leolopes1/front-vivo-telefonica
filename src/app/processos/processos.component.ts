import { Component } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';


@Component({
  selector: 'app-projetos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent {
  projetos: any[] = [];
  nome: string = '';

  constructor(private projetoService: ProjetosService) { }

  ngOnInit() {
    this.buscarProjetos();
  }

  buscarProjetos() {
    this.projetoService.buscarProjetos().subscribe(
      (resultados) => {
        this.projetos = resultados;
      },
      (erro) => {
        console.error('Erro ao buscar projetos:', erro);
      }
    );
  }

  filtrarProjetos() {
    if (this.nome) {
      this.projetos = this.projetos.filter(projeto =>
        projeto.nome.toLowerCase().startsWith(this.nome.toLowerCase())
      );
      console.log(this.nome);
      
    } else {
      this.buscarProjetos(); // Se o campo de busca estiver vazio, recarregue todos os projetos
    }
  }
  
}
