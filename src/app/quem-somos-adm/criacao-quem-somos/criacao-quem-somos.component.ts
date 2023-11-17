import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criacao-quem-somos',
  templateUrl: './criacao-quem-somos.component.html',
  styleUrls: ['./criacao-quem-somos.component.css']
})
export class CriacaoQuemSomosComponent {
  formulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.formulario = this.fb.group({
      nome:[null],
      descricao:[null],
      
      
    })


  };
  onSubmit(){
    console.log(this.formulario.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        this.formulario.patchValue({
            imagem: file,
        });
    }
}


}
