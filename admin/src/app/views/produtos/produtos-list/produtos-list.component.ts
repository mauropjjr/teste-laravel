import { Component } from '@angular/core';
import { ProdutosService} from '../../../services/produtos.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent {
  produtos: any;
  p1 = 1;
  total: any;

  constructor(private produtoService: ProdutosService, private toastr: ToastrService) {
    this.buscar(1);
   }

  buscar(page: any){
    this.produtoService.get({page: page}).subscribe(data => {
      this.produtos = data;
    });
  }
  remover(id: number){
      if(confirm("Deseja realmente remover?")){
        this.produtoService.remove(id).subscribe(data => {
          this.toastr.success('Removido com  sucesso!', 'Sucesso');
          this.buscar(1);
        });
      }
  }
}
