import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../../services/projetos.service';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from '../../shared/model/projeto';

@Component({
  selector: 'app-projetos-detalhe',
  templateUrl: './projetos-detalhe.component.html',
  styleUrls: ['./projetos-detalhe.component.css']
})
export class ProjetosDetalheComponent implements OnInit {
  projeto: Projeto = {
    id: '',
    nome: ''
  } ;

  constructor(
    private route: ActivatedRoute,
    private projetoService: ProjetosService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projetoId = params.get('id');
      if (projetoId) {
        this.projetoService.buscarProjetosPorId(projetoId).subscribe(projeto => {
          this.projeto = projeto;
        });
      }
    });
  }
}