import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ToastrService } from 'ngx-toastr';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent {

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;


  constructor(
    private formBuilder: FormBuilder,
    public iconSet: IconSetService,
    private router: Router, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private produtoService: ProdutosService
  ) {
    iconSet.icons = {  ...flagSet, ...freeSet };
    this.createForm();
    this.route.params.subscribe(routeParams => {
      if (routeParams['id'] && routeParams['id'] != 0) {
          this.produtoService.getId(routeParams['id']).subscribe(data => {
            this.simpleForm.patchValue(data);
          });
      }
  });

  }

  createForm() {
    this.simpleForm = this.formBuilder.group({
      id: [],
      nome: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      valor: ["", [Validators.required]],
      status: [true]
    });
  }
  get getForms(){
    return this.simpleForm.controls;
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
      this.produtoService.save(this.simpleForm.value).subscribe(data => {
        this.toastr.success('Salvo com sucesso!', 'Sucesso');
         this.router.navigate(['/produtos/lista']);
      });
     
    }else{
      this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
    }
  }
}

