import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private  apiUrl = 'usuarios';
  constructor(private http: HttpClient) { }


  get(params: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params: params });
  }

  getId(id: number): Observable<any> {
    const url = `/${id}.json`;
    return this.http.get<any>(url);
  }

  add(objetoAdd: any): Observable<any> {
    return this.http.post(this.apiUrl, objetoAdd);
  }
  update(objetoUpdate: any): Observable<any> {
    const url = `${this.apiUrl}/${objetoUpdate.id}`;
    return this.http.put(url, objetoUpdate);
  }

  remove(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}