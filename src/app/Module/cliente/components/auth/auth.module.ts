import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroClienteComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
  ],
})
export class AuthModule { 
}
