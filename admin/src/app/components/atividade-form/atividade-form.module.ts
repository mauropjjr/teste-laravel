import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AtividadeFormComponent } from './atividade-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupModule, ButtonModule, FormModule, GridModule, CardModule, ModalModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AtividadeFormComponent
  ],
  providers: [DatePipe],
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
  exports: [AtividadeFormComponent]
})
export class AtividadeFormModule { }
