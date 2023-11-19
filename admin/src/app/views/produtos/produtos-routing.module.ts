import { NgModule } from '@angular/core';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';


const routes: Routes = [
  {
    path: '', component: ProdutosComponent,
    data: {
      title: 'Produtos'
    },

    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      {
        path: 'lista', component: ProdutosListComponent,
        data: {
          title: 'Lista de Produtos'
        }
      },
      {
        path: 'save', component: ProdutosFormComponent,
        data: {
          title: 'Produto'
        }
      },
      {
        path: 'save/:id', component: ProdutosFormComponent,
        data: {
          title: 'Produto'
        }
      },
    
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProdutosRoutingModule { }
