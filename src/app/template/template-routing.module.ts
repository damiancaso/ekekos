import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ClienteModule } from '../Module/cliente/cliente.module';


const routes: Routes = [
  // {
  //   path : '', component: TemplateComponent,
  //   children:[
  //     {
  //       path: 'cliente', loadChildren:()=>import("./../Module/cliente/cliente.module").then(x=>x.ClienteModule)
  //     },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { 

}
