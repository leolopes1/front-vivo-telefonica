import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';
import { QuemSomosService } from 'src/app/services/quem-somos.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  membroSelecionadoReceitas: any;
  membroSelecionadoProjetos: any;
  currentIndexReceitas: number = 0;
  currentIndexProjetos: number = 0;
  equipe: any[] = [];
  usuarioReceitas: any[] = [];
  usuarioProjetos: any[] = [];

  constructor(private equipeService: EquipeService, private quemSomosService: QuemSomosService) {}

  buscarColaboradores() {
    this.equipeService.getEquipe().subscribe(
      (resultados) => {
        this.equipe = resultados || [];
      },
      (erro) => {
        console.error('Erro ao buscar colaboradores', erro);
      }
    );
  }

  buscarUsuarioReceita() {
    this.quemSomosService.buscarColaboradoresReceita().subscribe(
      (resultados) => {
        this.usuarioReceitas = resultados || [];
      },
      (erro) => {
        console.error('Erro ao buscar colaboradores de receitas', erro);
      }
    );
  }

  buscarUsuarioProjeto() {
    this.quemSomosService.buscarColaboradoresProjeto().subscribe(
      (resultados) => {
        this.usuarioProjetos = resultados || [];
      },
      (erro) => {
        console.error('Erro ao buscar colaboradores de projetos', erro);
      }
    );
  }

  ngOnInit() {
    this.buscarColaboradores();
    this.buscarUsuarioReceita();
    this.buscarUsuarioProjeto();

    this.atualizarMembroSelecionadoReceitas();
    this.atualizarMembroSelecionadoProjetos();
    this.iniciarAtualizacaoAutomatica();
  }

  private iniciarAtualizacaoAutomatica() {
    setInterval(() => {
      if (this.usuarioReceitas.length > 0) {
        this.currentIndexReceitas = (this.currentIndexReceitas + 1) % this.usuarioReceitas.length;
        this.atualizarMembroSelecionadoReceitas();
      }

      if (this.usuarioProjetos.length > 0) {
        this.currentIndexProjetos = (this.currentIndexProjetos + 1) % this.usuarioProjetos.length;
        this.atualizarMembroSelecionadoProjetos();
      }
    }, 6000);
  }

  private atualizarMembroSelecionadoReceitas() {
    this.membroSelecionadoReceitas = this.usuarioReceitas[this.currentIndexReceitas] || {};
  }

  private atualizarMembroSelecionadoProjetos() {
    this.membroSelecionadoProjetos = this.usuarioProjetos[this.currentIndexProjetos] || {};
  }
}