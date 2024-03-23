import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { ApipasarelaListComponent } from './components/apipasarela-list/apipasarela-list.component';
import { DetallesListComponent } from './components/detalles-list/detalles-list.component';
import { SeleccionListComponent } from './components/seleccion-list/seleccion-list.component';
import { SeleccionMesaComponent } from './components/reserva/seleccion-mesa/seleccion-mesa.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
