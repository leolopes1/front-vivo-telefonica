import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  buscarUsuario(): Observable<any[]> {
    
    const url = `http://localhost:3000/users`;
    return this.http.get<any[]>(url);
  }


}