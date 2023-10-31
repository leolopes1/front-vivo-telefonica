import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-projeto',
  templateUrl: './criar-projeto.component.html',
  styleUrls: ['./criar-projeto.component.css']
})
export class CriarProjetoComponent {

  formulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.formulario = this.fb.group({
      nome:[null],
      area:[null],
      contato:[null],
      email:[null],
      usuario:[null],
      senha:[null],
      perfil:['usuario'],
      
    })


  };
  onSubmit(){
    console.log(this.formulario.value);
    
    
    
  }


}
