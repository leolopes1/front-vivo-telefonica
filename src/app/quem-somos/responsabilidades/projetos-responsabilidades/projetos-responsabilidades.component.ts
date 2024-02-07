import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos-responsabilidades',
  templateUrl: './projetos-responsabilidades.component.html',
  styleUrls: ['./projetos-responsabilidades.component.css']
})
export class ProjetosResponsabilidadesComponent {

  lista = [
    'Garantir a aplicação das Normas Contábeis',
    'Atuar em projetos apontando as necessidades da Dir. de Contabilidade na criação de produtos e serviços e outros projetos estruturantes.',
    'Garantir a operacionalização contábil dos novos produtos, serviços e sistemas',
    'Acompanhamento (postmortem) de novos projetos',
    'Gerenciar e buscar priorização da lista de demandas internas',
    'Garantir os controles de SOX',
    'Garantir a comunicação adequada com a Diretoria sobre novos projetos',
    'Acompanhamento da entrada de projetos x impacto na receita'
  ];
  missao = `Atuar em projetos apontando as necessidades da Diretoria de Contabilidade na criação de produtos e
  serviços e outros projetos estruturantes, em conformidade com as normas afim de garantir a
  operacionalização contábil.`

}