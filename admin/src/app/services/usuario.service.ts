import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { SessaoService } from './sessao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private  apiUrl = 'usuarios';

  constructor(private http: HttpClient, private sessaoService: SessaoService) { }

  login(login: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl+'.json', login);
  }


  get(): Observable<any[]> {
      const storedData = this.sessaoService.get(this.apiUrl);  
      if (storedData) {
        return of(storedData); // Retorna um Observable com os dados do sessionStorage
      } else {
        return this.http.get<any[]>(this.apiUrl + '.json').pipe(
          map((res: any) => {
            this.sessaoService.set(this.apiUrl, res); // Armazena no sessionStorage
            return res; // Retorna os dados recebidos da API
          }),
          catchError((err) => {
            // Tratamento de erro, pode ser um logger ou notificação de erro
            console.error('Erro na requisição:', err);
            return of([]); // Retorna um array vazio em caso de erro
          })
        );
      }
  
  }

  getId(id: number): Observable<any> {
    const url = `/${id}.json`;
    return this.http.get<any>(url);
  }

  add(objetoAdd: any): Observable<any> {
    return this.http.post(this.apiUrl+'.json', objetoAdd);
  }
  update(objetoUpdate: any): Observable<any> {
    const url = `${this.apiUrl}/${objetoUpdate.id}`;
    return this.http.put(url, objetoUpdate);
  }

  remove(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}.json`;
    return this.http.delete(url);
  }
}


