import { Component, OnInit, ViewChild } from '@angular/core';
import { Agencia } from 'src/app/agencia/agencia';
import { AgenciaService } from 'src/app/agencia/agencia.service';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css'],
  providers: [AgenciaService]
})


export class AgenciaComponent implements OnInit {
  constructor(private agenciaService: AgenciaService) { }
  public agencias: Agencia[];
  ngOnInit() {
      this.listAgencias();
  }

  listAgencias(): void {
    this.agenciaService.getAgencias()
    .subscribe((
      agencias: Agencia[]
    ) => {
      this.agencias = agencias;
      });
  }

}
