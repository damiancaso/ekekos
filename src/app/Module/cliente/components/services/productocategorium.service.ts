import { Injectable } from '@angular/core';
import { ProductoCategoriumRequest } from '../models/productocategorium-request.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductocategoriumService extends CrudService<ProductoCategoriumRequest,ProductoCategoriumRequest>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.categoria)
  }
}
