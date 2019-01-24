import { Injectable } from '@angular/core';
import { Agencia } from 'src/app/agencia/agencia';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenciaServiceService {

 private url_api = '/rest';

  constructor(private http: HttpClient) { }

  public getAgencias(): Observable<Agencia[]> {
    this.url_api =`${this.url_api}/agencia/all`;
    return this.http.get<Agencia[]>(this.url_api);
  }
}
