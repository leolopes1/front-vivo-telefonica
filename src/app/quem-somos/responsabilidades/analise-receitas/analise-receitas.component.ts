import { Component } from '@angular/core';

@Component({
  selector: 'app-analise-receitas',
  templateUrl: './analise-receitas.component.html',
  styleUrls: ['./analise-receitas.component.css']
})
export class AnaliseReceitasComponent {

  lista = 
    [
      'Garantir a integridade e prover a validação da consistência das Receitas para governança e interfaces contábeis',
      'Prover o suporte de variação da receita à Contabilidade e Planejamento',
      'Gerenciar o comportamento do negócio e a interação na receita',
      'Prover as provisões de realização de receita do mês',
      'Prover a validação da Receita para governança do resultado',
      'Prover a validação dos impostos provisionados e os realizados',
      'Prover a validação dos impostos provisionados e os realizados',
      'Garantir os controles de SOX'
    ]
  ;

  missao = `Garantir a integridade e consistência das interfaces contábeis, bem como, prover o cálculo das
  estimativas para o ajuste de competência e com isso gerenciar o comportamento do negócio
  através de análise de variações e controles SOX.`

}
