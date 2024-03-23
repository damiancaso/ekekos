import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { DetallesListComponent } from './components/detalles-list/detalles-list.component';
import { SeleccionListComponent } from './components/seleccion-list/seleccion-list.component';
import { ApipasarelaListComponent } from './components/apipasarela-list/apipasarela-list.component';
import { SeleccionMesaComponent } from './components/reserva/seleccion-mesa/seleccion-mesa.component';
import { TemplateModule } from '../../template/template.module';
import { TemplateRoutingModule } from '../../template/template-routing.module';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './components/auth/components/login/login.component';
import { TemplateComponent } from '../../template/template/template.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TemplateFooterComponent } from '../../template/template-footer/template-footer.component';
import { TemplateHeaderComponent } from '../../template/template-header/template-header.component';
import { InicioSesionComponent } from './components/auth/components/inicio-sesion/inicio-sesion.component';
import { ProductoDetallesComponent } from './components/producto-detalles/producto-detalles.component';
import { RegistroClienteComponent } from './components/auth/components/registro-cliente/registro-cliente.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
    declarations: [
        CategoriaListComponent,
        ProductoListComponent,
        DetallesListComponent,
        SeleccionListComponent,
        ApipasarelaListComponent,
        SeleccionMesaComponent,
        InicioComponent,
        TemplateComponent,
        TemplateFooterComponent,
        TemplateHeaderComponent,
        ProductoDetallesComponent,
        


    ],
    exports: [
        CategoriaListComponent, ProductoListComponent, DetallesListComponent, SeleccionListComponent, ApipasarelaListComponent,
        SeleccionMesaComponent,InicioComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        TemplateRoutingModule,
        
    ]
})
export class ClienteModule { }
