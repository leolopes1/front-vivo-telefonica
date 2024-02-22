import { Component } from '@angular/core';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.css']
})
export class FiquePorDentroComponent {
  firstimage = "assets/homepage/comunicado-release.jpg"
  secondimage = "assets/homepage/outros.png"
  thirdimage = "assets/homepage/workplace.png"

  imagem1 = 'assets/homepage/publicacao-resultados.png'
  imagem2 = 'assets/homepage/fatosrelevantes.png'
  imagem3 = 'https://s3-alpha-sig.figma.com/img/388a/33db/c0fc29a2f9da58a15fd22d9e3011af56?Expires=1700438400&Signature=jV8rdaGxSTCqD7gCz1kt1eFyTc4lDiZIb7F-GpBRnESXNwQBB47u0fM5qwsFMd-DIPw6Lx2sJU0tZ6HyrpHnrwgRs9G2Aro~PKTRt730MZd2CjQLbEu~e-J23Snyy4z-AV-ogFtpAfCJ-TJxXDCQWm-hpIPNuCFVmCqGiHz~yF69hDwTbRDQu19cBXXR~aJlY~6tj~AMHMpxoeppq5QPNiqNvTMrUiV~MDt-ADfIw5ZpkZzoWd5gdDW4-6dt2atWZQrECYUhxFRR0n6hesfYcDQxTEUa11M~n-9fAROO4dfHGZpdy~KhaXwdh9tzviGIPxzvjpbgedEP4b5TE6pmAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  cards = [
    { image: this.firstimage, description: 'É um arquivo gerado mensalmente após a release com os projetos entregues e informações relevantes', title: 'Comunicado de Release' , url:'/release'},
    { image: this.thirdimage, description: '', title: 'Workplace', url: 'https://work.me/g/IbDLBLvIZ/KCx1ftc7' },
    { image: this.secondimage, description: 'Confira os aniversariantes do mês', title: 'Outros' },

  ];
  noticias = [
    { image: this.imagem2, description: 'Esta é uma informação pública e divulgada a cada trimestre', title: 'Fatos Relevantes', url: 'https://ri.telefonica.com.br/resultados-e-comunicados/comunicados/' },
    { image: this.imagem1, description: 'Esta é uma informação pública e divulgada a cada trimestre', title: 'Publicação de Resultados', url: 'https://ri.telefonica.com.br/resultados-e-comunicados/central-de-resultados/' },


  ];
  links = [
    { title:'CPC'  , url:'https://www.cpc.org.br/CPC', img:'/assets/computer.svg' },
    { title:'CRC'  , url:'https://online.crcsp.org.br/portal/index.asp#', img:'/assets/computer.svg'},
    { title:'Práticas Contábeis'  , url:'https://telefonicacorp.sharepoint.com/sites/PortaldePoliticasContables.OCETG/SitePages/home.aspx',img:'/assets/computer.svg'},
  ]

}
