import { Component, OnInit } from '@angular/core';
import { QuemSomosService } from '../services/quem-somos.service'


@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css'],
  
})
export class QuemSomosComponent implements OnInit {
  membroSelecionado: any;
  currentIndex: number = 0;
  constructor(private quemSomosService: QuemSomosService) { }

  equipe: any[] = [];


  firstText = `A Vivo acredita que a revolução tecnológica deve ser parte da vida de todas e todos 
  e não um privilégio de poucos. Queremos que as oportunidades que o mundo digital oferece sejam 
  universais contribuindo como uma força positiva para transformação individual, das empresas e da sociedade.`;

  secondText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  thidText = `Em um mundo de mudanças constantes e uma sociedade cada vez mais digital, buscamos 
  estratégias para gerar impacto socioambiental positivo e cirar conexões mais próximas e sustentáveis`;

  buscarColaboradores() {
    this.quemSomosService.buscarColaboradoresReceita().subscribe(
      (resultados) => {
        this.equipe = resultados || [];
        console.log(resultados);
        
      },
      (erro) => {
        console.error('Erro ao buscar colaboradores', erro);
      }
    )
    
  }

  ngOnInit() {
    this.atualizarMembroSelecionado();
    this.buscarColaboradores();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.equipe.length;
      this.atualizarMembroSelecionado();
    }, 6000);
  }
  private atualizarMembroSelecionado() {
    this.membroSelecionado = this.equipe[this.currentIndex] || {};
  }
  
}
