import { Injectable } from '@angular/core';
import { DetallePedidoRequest } from '../models/detallepedido-request.module';
import { DetallePedidoResponse } from '../models/detallepedido-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class DetallepedidoService extends CrudService<DetallePedidoRequest,DetallePedidoResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.detallepedido)
  }
}