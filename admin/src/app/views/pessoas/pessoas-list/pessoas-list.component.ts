import { Component } from '@angular/core';
import { UsuariosService} from '../../../services/usuarios.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent {
  usuarios: any;
  p1 = 1;
  total: any;

  constructor(private usuarioService: UsuariosService) {
    this.buscar(1);
   }

  buscar(page: any){
    this.usuarioService.get({page: page}).subscribe(data => {
      this.usuarios = data;
    });
  }



}
