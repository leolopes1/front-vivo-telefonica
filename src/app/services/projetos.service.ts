import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projeto } from '../shared/model/projeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  constructor(private http: HttpClient) {}

  buscarProjetos(): Observable<any[]> {
    
    const url = `http://localhost:3000/projetos`;
    return this.http.get<any[]>(url);
  }

  buscarProjetosPorPalavra(nome: string): Observable<any[]> {
    const url = `http://localhost:3000/projetos?nome=${nome}`;
    return this.http.get<any[]>(url);
  }
  buscarProjetosPorId(id: string): Observable<Projeto> {
    const url = `http://localhost:3000/projetos/${id}`;
    return this.http.get<Projeto>(url);
  }
}