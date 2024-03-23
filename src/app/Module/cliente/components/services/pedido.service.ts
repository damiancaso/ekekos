import { Injectable } from '@angular/core';
import { PedidoRequest } from '../models/pedido-request.module';
import { PedidoResponse } from '../models/pedido-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends CrudService<PedidoRequest,PedidoResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.pedido)
  }
}
