import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/agencia/agencia';
import { AgenciaServiceService } from 'src/app/agencia/agencia-service.service';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css'],
  providers: [AgenciaServiceService]
})
export class AgenciaComponent implements OnInit {

  public agencias: Agencia[];

  constructor(private agenciaService: AgenciaServiceService) { }

  ngOnInit() {
      this.agenciaService.getAgencias()
      .subscribe((
        agencias: Agencia[]
      ) => {
        this.agencias = agencias
      })
  }

  
}
