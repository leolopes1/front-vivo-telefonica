import { Component } from '@angular/core';
import { ProjetosService } from '../../services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
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
  // buscar() {
  //   this.projetoService.buscarProjetosPorPalavra(this.nome).subscribe(
  //     (resultados) => {
  //       this.projetos = resultados;
  //     },
  //     (erro) => {
  //       console.error('Erro na busca por palavra-chave:', erro);
  //     }
  //   );
  // }
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