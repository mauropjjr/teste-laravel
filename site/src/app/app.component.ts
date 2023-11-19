import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from './services/produtos.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';
  userForm: any;
  errorsMessage: any;
  produtos: any;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutosService,
    private usuarioService: UsuariosService,
    private toastr: ToastrService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.produtoService.get({status:1}).subscribe(data => {
        this.produtos = data;
    });
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      cpf: ['', [Validators.required, validateCpf]],
      produto_id: [null, Validators.required],
      quantidade: [0, [Validators.required, Validators.min(1)]]
    });
  }
  getErrorKeys(): string[] {
    return Object.keys(this.errorsMessage);
  }

  onSubmit() {
    if (this.userForm?.valid) {
      this.usuarioService.add(this.userForm.value).subscribe(
        (response) => {
          this.toastr.success('Pedido realizado com sucesso!');
          this.resetForm();
        },
        (error) => {
          if(error.status == 400){
            this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
            this.errorsMessage = error.error;
          }
        
        }
      );
     } else {
         Object.keys(this.userForm.value).forEach(campo => this.userForm.get(campo).markAsTouched());
         this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
     }
  }

  resetForm() {
    this.userForm?.reset({
      nome: '',
      telefone: '',
      celular: '',
      cpf: '',
      produto_id: null,
      quantidade: 0
    });
  }
}

import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

function validateCpf(control: AbstractControl): { [key: string]: any } | null {
  const cpf = control.value.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cpf === '' || cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
    return { invalidCpf: true };
  }

  // Validação do CPF
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(9, 10), 10)) {
    return { invalidCpf: true };
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(10, 11), 10)) {
    return { invalidCpf: true };
  }

  return null; // CPF válido
}

export { validateCpf };
