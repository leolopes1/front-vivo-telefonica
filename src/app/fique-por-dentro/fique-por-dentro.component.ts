import { Component } from '@angular/core';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.css']
})
export class FiquePorDentroComponent {
  firstimage = "https://s3-alpha-sig.figma.com/img/3eee/b493/b4e248b34c403c5fbc09321120e12f1e?Expires=1699228800&Signature=nro3EsdHjB83jWlRoGj2rzGvHlzDSgS8pMIOZUZi06kWOgkuWTL8yrmMXptzGpd2D~rLmeW2a5aIaOGir0FgqIKPJbmDb5zvDVZlDTMMXVnRmaiUlsNLXLLtCL6TAl9DREfIWUNZZYTMQ2I~8Ib91dZggtMS2BtXZIADsR0wd96tAw5huykONXcivd8jR45i12uwdvC9DZEMeT-FduM58EBaoEIb2RYSgPwe3Z5coF9hBbfw3PVdL6-SjXDIVZteUK9im~Q~Bfd2phj9htfESnnWsWacymJfhIJFG3ve15s90g4e2gnFmHZDzjNTett-O-cK86gevSFJxrBLf1P8Xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  secondimage = "https://s3-alpha-sig.figma.com/img/bec9/168c/f04366d6395512a1e25a296a20f252e4?Expires=1700438400&Signature=mgzhJI6hc6sA9xwUTCZfc8Yx7Cp~fFnziY7Ml5kFx2hGeA6WvrSz~2OMX2ZXA9gb4if82Aft2URZswOVaMb1PmA-va-gfCSo66jMHUMIHHBxCoiGFFzRoh0ofuvLUr2Xq49DSrHfBxUMVGY1-4jb9hijAqgi65Oifk73QpYNOmPNmoJafXNIHauN1HGeRxOo~cT4aQj46jPv~sMqsVPzNxpVsYGnJCCRDZqO7jTH~d7PrrJ4L~fZ~IfLZwbbArD5lg9GFloQm4jB5jCUdwJFU2TYUdoIkkl07q2A2mhZDezbkDEWzDPVNGgR1kl14cmTPxmzUiRDy-jlKm5v1IfnhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  thirdimage = "https://s3-alpha-sig.figma.com/img/9718/527f/669a05d94e53a751e4f579a53d44ed7b?Expires=1700438400&Signature=Xu2taHjH2ODbhalhjSKq7lx4STlTYJlhO6ohRoQnxHNql3sYKg0wBAFvVmJkSy2hiW1UM6-qXyVzGZ5v8F2OTTix-W636Km0ktj1aSgv0n81Q2Gh1dY~NXSWBfNaSj9p75mYrDQy5CFY3lDBOD8BTYS6aKnS8EALznBLazkGyaGOTeG7~iSURpV-hWrz1MZdKAEDeIQ2zS7hIql3WQ3G0BGx8hbXYFIjnWE~6gzLV56Exva8po-quFApPP~P25B25gDy4IfpLY5i2AGNJa3tRVHknNhbxrvIK4BjwmFbxiuecLXbbhj~J48s6kRk1ydMdDiOqt6cZWzrSh08uhCP6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  
  imagem1 ='https://s3-alpha-sig.figma.com/img/7dfd/dbd1/34e6dc1893c73b8e513a447dd3338907?Expires=1700438400&Signature=HMrKjUVsGlnsDgxjW3-wVt6MLqSrupiljiGyvRbJObpjyg7dJYfRPAOmzNE9qaZDcKs1CmqsEt73~2AoA4Nhp6QzunjQ5QAH-M8J0uYylbroOvLHVtrRkl5bjtItTG2gr7jp9M4gqUUElRO8kndDmdlWl6r-AO-9k2jv~twK4ld4avOt1upWmhnMqKNHwMROHfGtUKzgIUSzf-A6TnzGtQ~7QML5GCxuQGYHtGhJB7RwJknIKHOmrV7qNwvctENLE6iRkmXyN5P91Rd2eOlCcVKggSqDZqO4fHoaqB~ldeobxlw6VB242OWvWAYBkbvh1f5YHKDqgNo3oRHPWj9dog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  imagem2 ='https://s3-alpha-sig.figma.com/img/48b9/cac2/c4973121778f0fa174a8d70662608697?Expires=1700438400&Signature=K16YMbHvmji5kUyL60uulhWUD8R8udOlzwYR8Ki6i8-Ce-pCRUiiftgEaMNvISZThrwvtXoVKYs3KY~y1YQ9tQ9SnlbsaxKQ3f~SzjwO8IgaP5YTEp7UWV9FZXi4AresydQquqKAHN5vUg5LPX9~jfvIp14O1RtZeEr7Fkr-GGoXcnCqLGKecSci7~vNaKqzGNLGwHJApMqFMC5Nql4pLmeyEFd7oyEg1Rv4jxo98WhCnNhRy3WaxubHVgI2YDzRTYQy0eeNIpV1~Gz2OKbwBHIQdz5-IJkysLpPDhfmiQyL~pA6j8lEmsNPLiUJFrmDPd8IDQ-nHPwywssVs~d4fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  imagem3 ='https://s3-alpha-sig.figma.com/img/388a/33db/c0fc29a2f9da58a15fd22d9e3011af56?Expires=1700438400&Signature=jV8rdaGxSTCqD7gCz1kt1eFyTc4lDiZIb7F-GpBRnESXNwQBB47u0fM5qwsFMd-DIPw6Lx2sJU0tZ6HyrpHnrwgRs9G2Aro~PKTRt730MZd2CjQLbEu~e-J23Snyy4z-AV-ogFtpAfCJ-TJxXDCQWm-hpIPNuCFVmCqGiHz~yF69hDwTbRDQu19cBXXR~aJlY~6tj~AMHMpxoeppq5QPNiqNvTMrUiV~MDt-ADfIw5ZpkZzoWd5gdDW4-6dt2atWZQrECYUhxFRR0n6hesfYcDQxTEUa11M~n-9fAROO4dfHGZpdy~KhaXwdh9tzviGIPxzvjpbgedEP4b5TE6pmAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  cards = [
    { image: this.firstimage, description: 'Parcele sua Anuidade', title:'Anuidade'},
    { image: this.secondimage, description: 'Confira os aniversariantes do mês', title:'Aniversariantes' },
    { image: this.thirdimage, description: 'Conheça mais sobre o All Hands',title:'All Hands' },
    
  ];
  noticias = [
    { image: this.imagem1, description: 'Descrição do Slide 1', title:'Esporte' },
    { image: this.imagem2, description: 'Descrição do Slide 2', title:'Vivo' },
    { image: this.imagem3, description: 'Descrição do Slide 3', title:'Escola' },
    
  ];

}
