import { Routes }  from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EditAgenciaComponent } from './agencia/edit-agencia/edit-agencia.component';



export const routes: Routes = [
    { path:'agencia',  component: AgenciaComponent },
    { path:'endereco',  component: EnderecoComponent },
    { path:'agencia/edit/:id', component: EditAgenciaComponent}
]
