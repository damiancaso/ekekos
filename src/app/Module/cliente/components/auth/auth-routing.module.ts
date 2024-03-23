import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: 'ic', component: InicioSesionComponent,
      },
      {
        path:'rg', component: RegistroClienteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
