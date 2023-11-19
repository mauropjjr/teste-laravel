import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
export class PasswordValidators {
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get("senha");
    const confirm = control.get("confirme_senha");
    if (password?.valid && password?.value === confirm?.value) {
      confirm?.setErrors(null);
      return null;
    }
    confirm?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}

@Component({
  selector: 'app-acesso-form',
  templateUrl: './acesso-form.component.html',
  styleUrls: ['./acesso-form.component.scss']
})
export class AcessoFormComponent {
  @Input() pessoaId: any;
  form!: FormGroup;
  submitted = false;
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) {

    if(this.pessoaId != null){
      this.id = this.pessoaId;
    } else if(this.route.snapshot.params['id'] != null){
      this.id = this.route.snapshot.params['id'];
    } else {
      this.toastr.warning('Nenhum usuário para esse acesso', 'Atenção');
    }
    

    this.createForm();
  }
  get getForms(){
    return this.form.controls;
  }
  createForm(){
    this.form = this.formBuilder.group({
      id: [this.id],
      nome: [''],
      email: ['',[Validators.required, Validators.email]],
      telefone: [''],
      perfil: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      confirme_senha: ['',[Validators.required]]
    }, { validators: [PasswordValidators.confirmPassword] });
  }
  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.form.status === "VALID";
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
  }
  onSubmit() {
    if (this.onValidate()) {
      this.toastr.success('Pessoa salva com sucesso!', 'Sucesso');
    }else{
      this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
    }
  }
}
