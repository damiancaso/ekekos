import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { TemplateFooterComponent } from './template-footer/template-footer.component';
import { TemplateComponent } from './template/template.component';
import { ProductoListComponent } from '../Module/cliente/components/producto-list/producto-list.component';
import { ClienteModule } from '../Module/cliente/cliente.module';
import { CategoriaListComponent } from '../Module/cliente/components/categoria-list/categoria-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    
  ],
  exports: [
  ]
})
export class TemplateModule { }
