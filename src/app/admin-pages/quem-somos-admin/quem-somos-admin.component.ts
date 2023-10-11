import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-quem-somos-admin',
  templateUrl: './quem-somos-admin.component.html',
  styleUrls: ['./quem-somos-admin.component.css']
})
export class QuemSomosAdminComponent {
  title = 'app-material2';
  
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {
  
    this.form = fb.group({
      pmoContabilidade: [],
      missao:[],
      resposabilidade:[]
    })
  }
    
/*   get f(){
    return this.form.controls;
  } */
    
  submit(){
    console.log(this.form.value);
  }
}
