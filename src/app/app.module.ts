import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgenciaComponent } from './agencia/agencia.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { EditAgenciaComponent } from './agencia/edit-agencia/edit-agencia.component';


@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent,
    EnderecoComponent,
    EditAgenciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
