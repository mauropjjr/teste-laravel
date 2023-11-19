import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, NavModule,  PaginationModule,  SharedModule, TableModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';


import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FloatingButtonModule } from '../../components/floating-button/floating-button.module';
const maskConfig: Partial<IConfig> = {
  validation: true,
};



@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosListComponent,
    ProdutosFormComponent
  ],
  imports: [
    NgxMaskDirective, NgxMaskPipe,
    ProdutosRoutingModule,
    CommonModule,
    CardModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    NavModule,
    TabsModule, 
    NgSelectModule,
    TableModule,
    UtilitiesModule,
    NgxPaginationModule,
    FloatingButtonModule
  ],
  providers: [provideNgxMask(maskConfig)]
})
export class ProdutosModule { }
