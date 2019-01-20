import { Injectable } from '@angular/core';
import { Promise } from 'q';
import { Agencia } from 'src/app/agencia/agencia';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AgenciaServiceService {

 private url_api = '/rest';

  constructor(private http: HttpClient) { }

  public getAgencias(): Promise<Agencia[]>{
    return this.http.get(`${this.url_api}/agencia/all`)
    .toPromise()
  }
}
