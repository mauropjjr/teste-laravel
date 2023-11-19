import { NgModule } from '@angular/core';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './pessoas.component';


const routes: Routes = [
  {
    path: '', component: PessoasComponent,
    data: {
      title: 'Pessoas'
    },

    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      {
        path: 'lista', component: PessoasListComponent,
        data: {
          title: 'Lista de Pessoas'
        }
      },
      {
        path: 'save', component: PessoasFormComponent,
        data: {
          title: 'Produto'
        }
      },
      {
        path: 'save/:id', component: PessoasFormComponent,
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

export class PessoasRoutingModule { }
