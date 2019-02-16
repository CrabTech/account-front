import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AgenciaService } from '../agencia.service';
import { Agencia } from '../agencia';

@Component({
  selector: 'app-edit-agencia',
  templateUrl: './edit-agencia.component.html',
  styleUrls: ['./edit-agencia.component.css']
})
export class EditAgenciaComponent implements OnInit {

  agenciaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private agenciaService: AgenciaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.agenciaForm = this.formBuilder.group({
       cd_agencia: ['', Validators.required],
       ds_logradouro: ['', Validators.required],
       nr_cep: [8, Validators.maxLength(8)],
       ds_municipio: ['', Validators.required],
       ds_nr_logradouro: ['', Validators.required],
       ds_uf_sigla:  [2, Validators.maxLength(2)]
    });
  }

  onSubmit() {
    this.agenciaService.saveAgencia(this.agenciaForm.value)
    .subscribe( data => {

    });
  }
}
