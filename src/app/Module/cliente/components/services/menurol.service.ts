import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MenuRolRequest } from '../models/menurol-request.module';
import { MenuRolResponse } from '../models/menurol-response.module';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class MenurolService extends CrudService<MenuRolRequest,MenuRolResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.menurol)
  }
}