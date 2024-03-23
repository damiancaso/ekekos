import { Injectable } from '@angular/core';
import { RolRequest } from '../models/rol-request.model';
import { RolResponse } from '../models/rol-response.model';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class RolService extends CrudService<RolRequest,RolResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.rol)
  }
}
