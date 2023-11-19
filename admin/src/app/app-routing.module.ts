import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
   
      {
        path: 'pessoas',
        data: {
          title: 'Pessoas'
        },
        loadChildren: () =>
          import('./views/pessoas/pessoas.module').then((m) => m.PessoasModule)
      },
   
      {
        path: 'produtos',
        data: {
          title: 'Produtos'
        },
        loadChildren: () =>
          import('./views/produtos/produtos.module').then((m) => m.ProdutosModule)
      },
    ]
  },
  // {
  //   path: '404',
  //   component: Page404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: Page500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
