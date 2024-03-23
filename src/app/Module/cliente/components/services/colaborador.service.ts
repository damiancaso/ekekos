import { Injectable } from '@angular/core';
import { ColaboradorRequest } from '../models/colaborador-request.module';
import { ColaboradorResponse } from '../models/colaborador-response.module';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from '../../constans/url.constants';
import { CrudService } from '../shared/service/crud.service';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService extends CrudService<ColaboradorRequest,ColaboradorResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.colaborador)
  }
}