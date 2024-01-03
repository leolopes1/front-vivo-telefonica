import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuemSomosService {
  constructor(private http: HttpClient) {}

  buscarColaboradoresReceita(): Observable<any[]> {
    
    const url = `http://localhost:3000/colaboradores-receitas`;
    return this.http.get<any[]>(url);
  }
  buscarColaboradoresProjeto(): Observable<any[]> {
    
    const url = `http://localhost:3000/colaboradores-projetos`;
    return this.http.get<any[]>(url);
  }

  
}
