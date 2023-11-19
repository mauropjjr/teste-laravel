import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recebimentos-form',
  templateUrl: './recebimentos-form.component.html',
  styleUrls: ['./recebimentos-form.component.scss']
})
export class RecebimentosFormComponent {}
