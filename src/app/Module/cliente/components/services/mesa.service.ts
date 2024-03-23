import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MesaRequest } from '../models/mesa-request.module';
import { MesaResponse } from '../models/mesa-response.module';
import { urlConstants } from '../../constans/url.constants';
import { CrudService } from '../shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class MesaService extends CrudService<MesaRequest,MesaResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.mesa)
  }
}
