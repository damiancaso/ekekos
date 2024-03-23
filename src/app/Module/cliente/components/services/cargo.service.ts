import { Injectable } from '@angular/core';
import { CargoRequest } from '../models/cargo-request.module';
import { CargoResponse } from '../models/cargo-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class CargoService extends CrudService<CargoRequest,CargoResponse> {

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.cargo)
  }
}