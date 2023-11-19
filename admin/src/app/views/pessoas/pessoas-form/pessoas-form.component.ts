import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ToastrService } from 'ngx-toastr';

//https://www.concretepage.com/angular-2/angular-2-formgroup-example
@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.scss']
})
export class PessoasFormComponent {
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  selectedCar: number | undefined;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
 // formControls!: string[];

  constructor(
    private formBuilder: FormBuilder,
    public iconSet: IconSetService,
    private toastr: ToastrService
  ) {
    iconSet.icons = {  ...flagSet, ...freeSet };
    this.createForm();
  }

  createForm() {
    this.simpleForm = this.formBuilder.group({
      tipo: ["", [Validators.required]],
      grupo: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      razao_social: ["", [Validators.required]],
      cpf_cnpj: ["", [Validators.required]],
      cep: ["", [Validators.required]],
      logradouro: ["", [Validators.required]],
      complemento: [""],
      bairro: ["", [Validators.required]],
      uf: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      observacoes: [""],
      usuario_id: [""],
      responsavel_id: [""],
      email: ["", [Validators.required, Validators.email]],
      accept: [null, [Validators.required,Validators.requiredTrue]],
      credor: this.createCredorFormGroup()
    });
  }
  get getForms(){
    return this.simpleForm.controls;
  }

  
  createCredorFormGroup() {
    return this.formBuilder.group({
      pessoa_id: [null],
      banco_id: [null],
      numero_agencia: ['',[Validators.required]],
      numero_conta: ['',[Validators.required]],
      tipo_pix: ['',[Validators.required]],
      pct_rec_honorarios: [null, [Validators.required]],
      pct_ind_honorarios: [null, [Validators.required]],
      indicacao_id: [null],
      usuario_id: [null]
    });
  }

  

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.simpleForm.status === "VALID";
  }

  onSubmit() {
    if (this.onValidate()) {
      this.toastr.warning('Pessoa salva com sucesso!', 'Sucesso');
    }else{
      this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
    }
  }
}

