import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetodoPagoRequest } from '../models/metodopago-request.module';
import { MetodoPagoResponse } from '../models/metodopago-response.module';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class MetodopagoService extends CrudService<MetodoPagoRequest,MetodoPagoResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.metodopago)
  }
}
