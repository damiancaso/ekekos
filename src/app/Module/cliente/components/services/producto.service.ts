import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoRequest } from '../models/producto-request.model';
import { ProductoResponse } from '../models/producto-response.model';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CrudService<ProductoRequest,ProductoResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.producto)
  }
}
