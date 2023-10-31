import { Component } from '@angular/core';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.css']
})
export class FiquePorDentroComponent {
  firstimage = "https://s3-alpha-sig.figma.com/img/3eee/b493/b4e248b34c403c5fbc09321120e12f1e?Expires=1699228800&Signature=nro3EsdHjB83jWlRoGj2rzGvHlzDSgS8pMIOZUZi06kWOgkuWTL8yrmMXptzGpd2D~rLmeW2a5aIaOGir0FgqIKPJbmDb5zvDVZlDTMMXVnRmaiUlsNLXLLtCL6TAl9DREfIWUNZZYTMQ2I~8Ib91dZggtMS2BtXZIADsR0wd96tAw5huykONXcivd8jR45i12uwdvC9DZEMeT-FduM58EBaoEIb2RYSgPwe3Z5coF9hBbfw3PVdL6-SjXDIVZteUK9im~Q~Bfd2phj9htfESnnWsWacymJfhIJFG3ve15s90g4e2gnFmHZDzjNTett-O-cK86gevSFJxrBLf1P8Xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  
slides = [
    { image: this.firstimage, description: 'Descrição do Slide 1' },
    { image: this.firstimage, description: 'Descrição do Slide 2' },
    // Adicione mais slides conforme necessário
  ];

}
