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
  equipe: any[] = [
    {
      "id":2,
      "nome": "Jaqueline Nogueira de Almeida", 
      "cargo": "Dir. de Contabilidade e Proj. Receitas", 
      "imagem": "/assets/fotos/JaquelineNogueiraDeAlmeida.jpg"
    },
    {
      "id":3,
      "nome": "Alexandre Von Helde dos Santos", 
      "cargo": "Ger. SR Controle Operações Fin.", 
      "imagem": "/assets/fotos/AlexandreVonHeldeDosSantos.png"
    },
    {
      "id":4,
      "nome": "Tatiana Bernardo Lopes", 
      "cargo": "Gerente Contabilidade", 
      "imagem": "/assets/fotos/TatianaBernardoLopes.jpg"
    }
  ];
  usuarioReceitas: any[] = [
    {
      "id":1,
      "nome":"Vivian",
      "frase":"Não desista dos seus sonhos",
      "funcao":"Consultor Planej. e Controle",
      "email":"",
      "url":"/assets/fotos/Vivian.jpg",
      "atribuicao":["Forecast Fixa","Contabilização da Fixa: Next, Kenan"]
    },
    {
      "id":2,
      "nome":"Cleia Alcântara",
      "frase":"Bazinga!",
      "funcao":"Analista Contr. Oper. Fin. SR",
      "email":"cleia.silva@telefonica.com",
      "url":"/assets/fotos/Cleia.jpg",
      "atribuicao":["Forecast Móvel ","Contabilização: Pré Pago/ Controle/ Controle N/Easy/MVNO","Indicador móvel","Validação Receita Móvel (Pré Pago/ Controle/ Controle N/Easy/MVNO)","Validação de Impostos"] 
    },
    {
      "id":3,
      "nome":"Adriana Simões",
      "frase":"Em cada desafio, eu vejo uma oportunidade de vencer.",
      "funcao":"Consultor Contr Oper. Fin.",
      "email":"adriana.simoes@telefonica.com",
      "url":"/assets/fotos/Adriana.jpg",
      "atribuicao":["Apoio Técnico Receita","Validação e liberação contabilização Next","Validação Receita Next","Elaboração indicador a faturar x faturado","Composição e análise do a faturar","Análise e liberação da apresentação Receita"]
    },
    
    
    {
      "id":6,
      "nome":"Ian Victor",
      "frase":"Custe o que custar, faça o que for preciso",
      "funcao":"Estagiário",
      "email":"ian.alencar@telefonica.com",
      "url":"/assets/fotos/Ian.jpg",
      "atribuicao":["Serviços Financeiros","Cobilling Sainte Pré e Pós","Advertising","Cobilling Entrante Pós"]
    },
    {
      "id":7,
      "nome":"Keren Zagarra",
      "frase":"Não esqueça quem você é, nem seu propósito de vida.",
      "funcao":"Analista Contr. Oper. Fin. SR",
      "email":"keren.zegarra@telefonica.com",
      "url":"/assets/fotos/Keren.jpg",
      "atribuicao":["Forecast móvel","Contabilização: Atlys móvel TBRA/TERRA ","Next Móvel TBRA/TERRA","Indicador móvel","Validação de Impostos e validação forecast ","Demais demandas relacionadas"]
    },
    {
      "id":8,
      "nome":"Lucas",
      "frase":"Você não é derrotado quando perde. Você é derrotado quando desiste",
      "funcao":"Estagiário",
      "email":"",
      "url":"/assets/fotos/Lucas.jpg",
      "atribuicao":["Automação e Digitalização de Processos"]
    },
    {
      "id":9,
      "nome":"Luiz Gustavo",
      "frase":"Histórias, nossas histórias, dias de luta, dias de glória",
      "funcao":"Analista Contr. Oper. Fin. PL",
      "email":"luiz.baesso@telefonica.com",
      "url":"/assets/fotos/LuizGustavo.jpg",
      "atribuicao":["Contabilização da Fixa: Cso,Fatcob"]
    }
  ];
  usuarioProjetos: any[] = [
    {
      "id":1,
      "nome":"Erika",
      "frase":"Todos os dias temos a oportunidade de aprender ou ensinar...",
      "funcao":"Consultor Contabilidade",
      "email":"erika.alice@telefonica.com",
      "url":"/assets/fotos/Erika.jpg",
      "atribuicao":["Projetos Estruturantes","Comitê de Ofertas","Demandas PPs","Demandas Internas - PPs","NP&S","Fluxo P&S"]
    },
    {
      "id":2,
      "nome":"Valeria",
      "frase":"Quem elegeu a busca, não pode recusar a travessia",
      "funcao":"Analista Contábil Sr",
      "email":"valeria.oliveira@telefonica.com",
      "url":"/assets/fotos/Valeria.jpg",
      "atribuicao":["P&S","Comitê de Ofertas","NP&S","Demandas Internas - PPs"]
      
    },
    {
      "id":3,
      "nome":"Shayenne de Sousa",
      "frase":"A humildade antecede a honra",
      "funcao":"Consultora Contabilidade",
      "email":"shayenne.silva@telefonica.com",
      "url":"/assets/fotos/Shayenne.jpg",
      "atribuicao":["Projetos Estruturantes","Demandas Internas", "Parametrização Next","Fluxo P&S"]
    },
    {
      "id":4,
      "nome":"Raisa Carvalho",
      "frase":"Seja sempre a sua melhor versão.",
      "funcao":"Analista Contábil Pleno",
      "email":"raisa.conegundes@telefonica.com",
      "url":"/assets/fotos/Raisa.jpg",
      "atribuicao":["Contabilização","Móvel - Cloud e IOT","Dados - TBRA, Cloud e IOT","Esteira Digital - TBRA e Cloud"]
    },
    {
      "id":5,
      "nome":"Fabiana",
      "frase":"Viva a Vida Plena",
      "funcao":"Consultor Contabilidade",
      "email":"fabianag.santos@telefonica.com",
      "url":"/assets/fotos/Fabiana.jpg",
      "atribuicao":["Projetos Estruturantes","Fluxo P&S"]
    
    }
  ];

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
        this.currentIndexProjetos = (this.currentIndexProjetos) % this.usuarioProjetos.length;
        this.atualizarMembroSelecionadoProjetos();
        this.currentIndexProjetos++ ;
      }
    }, 9000);
  }

  private atualizarMembroSelecionadoReceitas() {
    this.membroSelecionadoReceitas = this.usuarioReceitas[this.currentIndexReceitas] || {};
  }

  private atualizarMembroSelecionadoProjetos() {
    this.membroSelecionadoProjetos = this.usuarioProjetos[this.currentIndexProjetos] || {};
  }
}