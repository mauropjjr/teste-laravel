import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private  apiUrl = 'produtos';
  constructor(private http: HttpClient) { }


  get(params: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params: params });
  }

  getId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  save(objetoSave: any): Observable<any> {
    if(objetoSave.id && objetoSave.id > 0){
      return this.update(objetoSave);
    }else{
      return this.http.post(this.apiUrl, objetoSave);
    }
    
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