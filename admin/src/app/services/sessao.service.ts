import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  delayMs = 500;
  loaderId:string = '';
  
  
  constructor(private configService: ConfigService) {

   }

  public set(nome: string, valor: any, in_session?: boolean) {
    (in_session) ? sessionStorage.setItem(nome, JSON.stringify(valor)) : localStorage.setItem(nome, JSON.stringify(valor));

  }

  public get(nome: string, in_session: boolean = false) {
   // return (in_session) ? JSON.parse(sessionStorage.getItem(nome)) : JSON.parse(localStorage.getItem(nome));
   const item = sessionStorage.getItem(nome);
    return item ? JSON.parse(item): null ;
  }

  public delete(nome: string, in_session?: boolean) {
    (in_session) ? sessionStorage.removeItem(nome) : localStorage.removeItem(nome);
  }

  public deleteNomeEspecifico(nome: string, in_session?: boolean) {
    (in_session) ? sessionStorage.removeItem(nome) : localStorage.removeItem(nome);
  }

  public limparSessao() {
    var listLocalStorage = localStorage;
    for (var key in listLocalStorage) {
        this.deleteNomeEspecifico(key);   
    }
  }

  public getUsuarioId() {
    if (this.get('Login') && this.get('Login').id) {
      return this.get('Login').id;
    } else {
      return null;
    }
  }

  public getUsuarioNome() {
    return this.get('Login') && this.get('Login').nome;
  }

  public setLoaderId(loaderId:string) {
    this.loaderId = loaderId;
  }

  public getLoaderId() {
    return this.loaderId;
  }

}
