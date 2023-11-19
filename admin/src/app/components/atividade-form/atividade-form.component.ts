import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.scss']
})
export class AtividadeFormComponent  implements OnInit {
  form!: FormGroup;
  @Input() negocioId: any;
  @Output() salvar: EventEmitter<any> = new EventEmitter<any>();
  id: any;
  submitted = false;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];



  constructor(
    private formBuilder: FormBuilder,
    public iconSet: IconSetService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    iconSet.icons = { ...flagSet, ...freeSet };
    this.createForm();
    // if (this.negocioId == null) {
    //   this.id = this.negocioId;
    // } else if (this.route.snapshot.params['id'] != null) {
    //   this.id = this.route.snapshot.params['id'];
    // } else {
    //   this.toastr.warning('Informe um contrato', 'Atenção');
    // }
  }

  ngOnInit() {
    this.createForm();

  }
  createForm() {
    this.form = this.formBuilder.group({
      id: [null],
      tipo_atividade_id: ["", [Validators.required]],
      negocio_id: [this.negocioId, [Validators.required]],
      assunto: ["", [Validators.required]],
      data_hora_ini: [this.criarObjetoDataHora().data_hora_ini, [Validators.required]],
      data_hora_fim: [this.criarObjetoDataHora().data_hora_fim, [Validators.required]],
      duracao: [30, [Validators.required]],
      descricao: ["", [Validators.required]],
      concluido: [""]

    });
  }
  get getForms() {
    return this.form.controls;
  }


  onReset() {
    this.submitted = false;
    this.form.reset();
    this.createForm();
  }

  onValidate() {
    this.submitted = true;
    return this.form.status === "VALID";
  }

  onSubmit() {
    if (this.onValidate()) {
      this.salvar.emit({salvou: true, message: 'Atividade salva com sucesso!'});
      this.toastr.success('Atividade salva com sucesso!', 'Sucesso');
    } else {
      this.salvar.emit({salvou: false, message: 'Por favor verifique os campos obrigatórios!'});
      this.toastr.warning('Por favor verifique os campos obrigatórios!', 'Atenção');
    }
  }
  criarObjetoDataHora(dataParametro?: string, minutosParametro: number = 30): any {
    // Verifica se a dataParametro foi fornecida, se não, usa a data e hora atual
    const dataAtual = dataParametro ? new Date(dataParametro) : new Date();

    // Cria uma nova data com os minutos adicionados
    const dataHoraFim = new Date(dataAtual.getTime() + minutosParametro * 60000);

    // Formata as datas para o formato desejado
    const dataHoraIniFormatada = this.datePipe.transform(dataAtual, 'yyyy-MM-ddTHH:mm:ss');
    const dataHoraFimFormatada = this.datePipe.transform(dataHoraFim, 'yyyy-MM-ddTHH:mm:ss');
    if (this.form) {
      this.form.controls['data_hora_fim'].patchValue(dataHoraFimFormatada);
    }
    // Retorna o objeto com as informações
    return {
      data_hora_ini: dataHoraIniFormatada,
      duracao: minutosParametro,
      data_hora_fim: dataHoraFimFormatada
    };
  }
}
