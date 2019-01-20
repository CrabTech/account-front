import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciaComponent } from 'src/app/agencia/agencia.component';
import { EnderecoComponent } from 'src/app/endereco/endereco.component';

const routes: Routes = [
  {path:'agencia',  component: AgenciaComponent},
  {path:'endereco',  component: EnderecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
