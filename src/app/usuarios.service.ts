import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiurl = 'http://localhost:3000/users'

  constructor(private httpClient:HttpClient) { }

  // list():User[]{
  //   return[
  //     { nome:'Leticia',email:'Leticia@gmail.com.br',area:'Relacionamento',perfil:'usuario'}
  //   ]
  // }
  public getCars():Observable<Response>{
    return this.httpClient.get<Response>(this.apiurl)
  }
}
