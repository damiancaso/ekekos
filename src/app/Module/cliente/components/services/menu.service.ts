import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MenuRequest } from '../models/menu-request.module';
import { MenuResponse } from '../models/menu-response.module';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends CrudService<MenuRequest,MenuResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.menu)
  }
}