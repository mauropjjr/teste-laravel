import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoFormComponent } from './acesso-form.component';
import { ButtonGroupModule, ButtonModule, CardModule,  FormModule, GridModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    AcessoFormComponent
  ],
  imports: [
    CommonModule,
    ButtonGroupModule, 
    ButtonModule,
    FormModule, 
    ReactiveFormsModule,
    GridModule,
    CardModule

  ],
  exports: [ AcessoFormComponent]
})
export class AcessoFormModule { }
