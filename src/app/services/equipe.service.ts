import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  apiurl = 'http://localhost:3000/equipe'

  constructor(private httpClient:HttpClient) { }

  
  public getEquipe():Observable<any>{
    return this.httpClient.get<any>(this.apiurl)
  }

  
}
