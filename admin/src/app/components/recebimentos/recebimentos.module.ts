import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RecebimentosComponent } from './recebimentos.component';
import { RecebimentosFormComponent } from './recebimentos-form/recebimentos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupModule, ButtonModule, FormModule, GridModule, CardModule, ModalModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    RecebimentosComponent,
    RecebimentosFormComponent
  ],
  imports: [
    CommonModule,
    ButtonGroupModule, 
    ButtonModule,
    FormModule, 
    ReactiveFormsModule,
    GridModule,
    CardModule,
    IconModule,
    ModalModule,
    NgSelectModule,
    
  ],
  providers: [DatePipe],
  exports: [RecebimentosComponent,
    RecebimentosFormComponent]
})
export class RecebimentosModule { }
