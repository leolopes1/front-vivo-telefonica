import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos-detalhe',
  templateUrl: './projetos-detalhe.component.html',
  styleUrls: ['./projetos-detalhe.component.css']
})
export class ProjetosDetalheComponent implements OnInit {
  projeto: any = [];

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
          console.log(projeto[0].nome);
          
        });
      }
    });
  }
}