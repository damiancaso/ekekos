import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule, NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ngx-bs-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule, // ==> sin este no podemos consumir ningun servio web
    PaginationModule.forRoot(),
  ], 
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbPaginationModule

  ]
})
export class SharedModule { }
