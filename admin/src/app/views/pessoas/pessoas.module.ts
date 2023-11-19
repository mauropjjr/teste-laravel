import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasRoutingModule } from './pessoas-routing.module';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, NavModule,  PaginationModule,  SharedModule, TableModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasComponent } from './pessoas.component';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FloatingButtonModule } from '../../components/floating-button/floating-button.module';
const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    PessoasFormComponent,
    PessoasListComponent,
    PessoasComponent

  ],
  imports: [
    NgxMaskDirective, NgxMaskPipe,
    CommonModule,
    PessoasRoutingModule,
    DocsComponentsModule,
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
export class PessoasModule { }
