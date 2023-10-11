import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criacao-usuario',
  templateUrl: './criacao-usuario.component.html',
  styleUrls: ['./criacao-usuario.component.css']
})
export class CriacaoUsuarioComponent implements OnInit {
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
