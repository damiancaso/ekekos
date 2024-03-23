import { Injectable } from '@angular/core';
import { PersonaTipoRequest } from '../models/personatipo-request.module';
import { PersonaTipoResponse } from '../models/personatipo-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonatipoService extends CrudService<PersonaTipoRequest,PersonaTipoResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.personatipo)
  }
}
