import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { TemplateComponent } from './template/template/template.component';
import path from 'path';
import { DetallesListComponent } from './Module/cliente/components/detalles-list/detalles-list.component';
import { ProductoListComponent } from './Module/cliente/components/producto-list/producto-list.component';
import { CategoriaListComponent } from './Module/cliente/components/categoria-list/categoria-list.component';
import { SeleccionListComponent } from './Module/cliente/components/seleccion-list/seleccion-list.component';
import { ApipasarelaListComponent } from './Module/cliente/components/apipasarela-list/apipasarela-list.component';
import { SeleccionMesaComponent } from './Module/cliente/components/reserva/seleccion-mesa/seleccion-mesa.component';
import { LoginComponent } from './Module/cliente/components/auth/components/login/login.component';
import { InicioComponent } from './Module/cliente/components/inicio/inicio.component';
import { authGuard } from './Module/cliente/guards/auth.guard';
import { ProductoDetallesComponent } from './Module/cliente/components/producto-detalles/producto-detalles.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent,
  },

  {
    path: '', component: TemplateComponent, children:[
      {
        path:'cliente', loadChildren: () => import("./Module/cliente/cliente.module").then(x => x.ClienteModule)
      }
    ]
  },

  {
    path:'dashboard',
    canActivate:[authGuard],
    loadChildren:()=>import("./template/template.module").then(x=>x.TemplateModule),
  },
  
  {
    path: 'auth', loadChildren: () => import("./Module/cliente/components/auth/auth.module").then(x => x.AuthModule)
  },

  {
    path: 'producto', component: ProductoListComponent,
  },
  {
    path: 'detalles', component: DetallesListComponent,
  },
  {
    path: 'seleccion', component: SeleccionListComponent,
  },
  {
    path: 'categoria', component: CategoriaListComponent,
  },
  {
    path: 'pasarela', component: ApipasarelaListComponent,
  },
  {
    path: 'mesa', component: SeleccionMesaComponent,
  },
  {
    path: 'dpro', component: ProductoDetallesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
