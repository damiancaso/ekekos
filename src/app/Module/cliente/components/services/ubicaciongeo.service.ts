import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UbicacionGeoRequest } from '../models/ubicaciongeo-request.module';
import { UbicacionGeoResponse } from '../models/ubicaciongeo-response.module';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class UbicaciongeoService extends CrudService<UbicacionGeoRequest,UbicacionGeoResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.ubicacion)
  }
}
